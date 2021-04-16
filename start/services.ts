/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import GetStockPriceService from 'App/Services/GetStockPriceService'

const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

const getStockPrice = new GetStockPriceService()

setInterval(getStockPrice.exec, day)
