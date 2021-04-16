import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StockTypes extends BaseSchema {
  protected tableName = 'stock_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('slug').nullable().unique()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
