import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Stock from 'App/Models/Stock'

export default class StockPricesController {
  public async index({ params }: HttpContextContract) {
    const stock = await Stock.findOrFail(params.stock)

    await stock.preload('prices')

    return stock
  }
}
