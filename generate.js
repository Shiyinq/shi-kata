const fs = require('fs')
const {
  makeFlow,
  mfOpening,
  mfSmalltalk,
  mfFallback,
  actionTypes: { actionTypes }
} = require('./app/index')

module.exports = {
  makeFlow (name) {
    fs.writeFile(process.cwd() + `\\${name}.yml`, makeFlow, function (err) {
      if (err) throw err
      console.log(`Flow ${name}.yml has been created`)
    })
  },
  mfOpening () {
    fs.writeFile(process.cwd() + `\\opening.yml`, mfOpening, function (err) {
      if (err) throw err
      console.log(`Flow opening.yml has been created`)
    })
  },
  mfSmalltalk () {
    fs.writeFile(process.cwd() + `\\smalltalk.yml`, mfSmalltalk, function (err) {
      if (err) throw err
      console.log(`Flow smalltalk.yml has been created`)
    })
  },
  mfFallback () {
    fs.writeFile(process.cwd() + `\\fallback.yml`, mfFallback, function (err) {
      if (err) throw err
      console.log(`Flow fallback.yml has been created`)
    })
  },
  generateAction (nameAction) {
    return actionTypes(nameAction)
  },
  actionList: {
    type: 'list',
    name: 'actionTypes',
    message: 'Choose Action Types',
    choices: ['text', 'text_data', 'image', 'button', 'carousel', 'imagemap', 'sticker', 'video', 'audio', 'location', 'quick_reply', 'schedule', 'api'],
    filter: val => val.toLowerCase()
  },
  sampleBotList: {
    type: 'list',
    name: 'sampleBotList',
    message: 'Choose Sample Bot',
    choices: ['buttonbot', 'cardbot', 'pizzabot', 'stickerbot', 'weatherbot'],
    filter: val => val.toLowerCase()
  }
}
