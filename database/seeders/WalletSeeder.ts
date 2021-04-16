import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Wallet from 'App/Models/Wallet'

export default class WalletSeederSeeder extends BaseSeeder {
  public async run() {
    const [wallet] = await Wallet.createMany([
      {
        name: 'Fusion',
      },
      {
        name: 'Dividendos',
      },
    ])

    await wallet.related('stocks').createMany([
      { ticker: 'NGRD3', stockTypeId: 1 },
      { ticker: 'NTCO3', stockTypeId: 1 },
      { ticker: 'BBDC4', stockTypeId: 1 },
      { ticker: 'CYRE3', stockTypeId: 1 },
    ])
  }
}
