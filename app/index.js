const makeFlow = require('./flows/makeFlow')
const mfOpening = require('./flows/mfOpening')
const mfSmalltalk = require('./flows/mfSmalltalk')
const mffallback = require('./flows/mffallback')
const actionTypes = require('./actions/action')

module.exports = {
  makeFlow,
  mfOpening,
  mfSmalltalk,
  mffallback,
  actionTypes
}
