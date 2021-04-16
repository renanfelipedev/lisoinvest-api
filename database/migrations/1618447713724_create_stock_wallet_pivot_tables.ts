import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StockWallet extends BaseSchema {
  protected tableName = 'stock_wallet'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('stock_id').unsigned()
      table.foreign('stock_id').references('id').inTable('stocks')

      table.bigInteger('wallet_id').unsigned()
      table.foreign('wallet_id').references('id').inTable('wallets')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
