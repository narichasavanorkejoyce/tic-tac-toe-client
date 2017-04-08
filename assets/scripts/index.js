'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
