import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stocks extends BaseSchema {
  protected tableName = 'stocks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('ticker', 5).notNullable()
      table.string('name', 255).nullable()
      table.text('description').nullable()
      table.integer('stock_type_id')
      table.foreign('stock_type_id').references('id').inTable('stock_types')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
