import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StockPrices extends BaseSchema {
  protected tableName = 'stock_prices'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('stock_id').unsigned()
      table.foreign('stock_id').references('id').inTable('stocks')
      table.double('price', 10, 2).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
