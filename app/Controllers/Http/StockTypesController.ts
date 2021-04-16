import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StockType from 'App/Models/StockType'

export default class StockTypesController {
  public async index() {
    const stockTypes = await StockType.all()

    return stockTypes
  }

  public async store({ request }: HttpContextContract) {
    const stockType = await StockType.create(request.all())

    return stockType
  }

  public async update({ params, request }: HttpContextContract) {
    const stockType = await StockType.findOrFail(params.id)

    stockType.merge(request.all())
    await stockType.save()

    return stockType
  }

  public async destroy({ params, response }: HttpContextContract) {
    const stockType = await StockType.findOrFail(params.id)

    await stockType.delete()

    return response.status(204)
  }
}
