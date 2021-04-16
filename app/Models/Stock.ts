import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Wallet from './Wallet'
import StockType from './StockType'
import StockPrice from './StockPrice'

export default class Stock extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ticker: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public stockTypeId: number

  @belongsTo(() => StockType)
  public type: BelongsTo<typeof StockType>

  @hasMany(() => StockPrice)
  public prices: HasMany<typeof StockPrice>

  @manyToMany(() => Wallet)
  public wallets: ManyToMany<typeof Wallet>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
