'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

//  on document ready
$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  gameEvents.addHandlers()
  // $('.sign-out-button').hide()
  // $('.change-password-button').hide()
  // $('.dropdown-games').hide()
  $('.0').off('click')
  $('.1').off('click')
  $('.2').off('click')
  $('.3').off('click')
  $('.4').off('click')
  $('.5').off('click')
  $('.6').off('click')
  $('.7').off('click')
  $('.8').off('click')
  let currentPlayer = 'x'
})

// use require with a reference to bundle the file and use it in this file
//  const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
