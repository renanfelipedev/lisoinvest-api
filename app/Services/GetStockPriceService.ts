import axios from 'axios'
import cheerio from 'cheerio'

import Stock from 'App/Models/Stock'

const api = axios.create({
  baseURL: 'https://statusinvest.com.br',
})

export default class GetStockPriceService {
  public async exec() {
    const stocks = await Stock.query().preload('type')
    stocks.forEach(async (stock) => {
      const { ticker } = stock
      const { slug } = stock.type

      try {
        const response = await api.get(`/${slug}/${ticker}`)
        const $ = cheerio.load(response.data)

        const price = Number($('div[title="Valor atual do ativo"] .value').text().replace(',', '.'))

        const [, name] = $("h1[class='lh-4']").text().split(' - ')

        stock.merge({ name })

        await stock.save()
        await stock.related('prices').create({ price })
      } catch (err) {
        throw new Error(err.message)
      }
    })
  }
}
