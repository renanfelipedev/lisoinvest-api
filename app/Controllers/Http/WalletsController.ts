import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Wallet from 'App/Models/Wallet'

export default class WalletsController {
  public async index({}: HttpContextContract) {
    const wallets = await Wallet.all()

    return wallets
  }

  public async store({ request }: HttpContextContract) {
    const wallet = await Wallet.create(request.all())

    return wallet
  }
}
