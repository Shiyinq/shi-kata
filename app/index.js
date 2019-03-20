const { makeFlow, mfOpening, mfSmalltalk, mfFallback } = require('./flows/flows.json')
const actionTypes = require('./actions/actionTypes')
const toYml = require('json2yaml')
const jsonToyml = (data) => { return toYml.stringify(data) }

module.exports = {
  makeFlow: jsonToyml(makeFlow),
  mfOpening: jsonToyml(mfOpening),
  mfSmalltalk: jsonToyml(mfSmalltalk),
  mfFallback: jsonToyml(mfFallback),
  actionTypes
}
