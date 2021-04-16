import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockType from 'App/Models/StockType'

export default class StockTypeSeederSeeder extends BaseSeeder {
  public async run() {
    await StockType.createMany([
      {
        name: 'Ações',
        slug: 'acoes',
      },
      {
        name: 'Fundos Imobiliários',
        slug: 'fundos-imobiliarios',
      },
    ])
  }
}
