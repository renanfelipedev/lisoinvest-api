/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => ({ status: 'Running' }))

Route.post('/login', 'LoginController.store').as('login')
Route.post('/logout', 'LoginController.destroy').as('logout')

Route.group(() => {
  Route.resource('/users', 'UsersController').apiOnly()
  Route.resource('/wallets', 'WalletsController').apiOnly()
  Route.resource('/stocks', 'StocksController').apiOnly()
  Route.resource('/stocks/:stock/prices', 'StockPricesController').apiOnly()
  Route.resource('/stock-types', 'StockTypesController').apiOnly()
}).middleware('auth')
