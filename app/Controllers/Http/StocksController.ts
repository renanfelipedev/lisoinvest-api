import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Stock from 'App/Models/Stock'
import GetStockPriceService from 'App/Services/GetStockPriceService'

export default class StocksController {
  public async index() {
    const stocks = await Stock.all()

    return stocks
  }

  public async show({ params }: HttpContextContract) {
    const stock = await Stock.findOrFail(params.id)

    return stock
  }

  public async store({ request, response }: HttpContextContract) {
    const getStockPrice = new GetStockPriceService()

    try {
      const stock = await Stock.create(request.all())

      getStockPrice.exec()

      return stock
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const stock = await Stock.findOrFail(params.id)

    await stock.delete()

    return response.status(204)
  }
}
