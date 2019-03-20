const highlight = require('cli-highlight').highlight
const ncp = require('copy-paste')
const toYml = require('json2yaml')
const jsonToyml = (data) => { return toYml.stringify(data) }
const copySucces = '\nThe action was successfully copied\n\nsee https://docs.kata.ai/kata-ml/action-type/'
const {
  text,
  textData,
  image,
  imagemap,
  button,
  carousel,
  api,
  sticker,
  location,
  video,
  audio,
  quickReplay,
  schedule } = require('./actions.json')

module.exports = {
  actionTypes (nameAction) {
    switch (nameAction) {
      case 'text':
        ncp.copy(jsonToyml(text), () => console.log(copySucces))
        return highlight(jsonToyml(text), { language: 'yaml', ignoreIllegals: true })
      case 'text_data':
        ncp.copy(jsonToyml(textData), () => console.log(copySucces))
        return highlight(jsonToyml(textData), { language: 'yaml', ignoreIllegals: true })
      case 'image':
        ncp.copy(jsonToyml(image), () => console.log(copySucces))
        return highlight(jsonToyml(image), { language: 'yaml', ignoreIllegals: true })
      case 'button':
        ncp.copy(jsonToyml(button), () => console.log(copySucces))
        return highlight(jsonToyml(button), { language: 'yaml', ignoreIllegals: true })
      case 'carousel':
        ncp.copy(jsonToyml(carousel), () => console.log(copySucces))
        return highlight(jsonToyml(carousel), { language: 'yaml', ignoreIllegals: true })
      case 'imagemap':
        ncp.copy(jsonToyml(imagemap), () => console.log(copySucces))
        return highlight(jsonToyml(imagemap), { language: 'yaml', ignoreIllegals: true })
      case 'sticker':
        ncp.copy(jsonToyml(sticker), () => console.log(copySucces))
        return highlight(jsonToyml(sticker), { language: 'yaml', ignoreIllegals: true })
      case 'video':
        ncp.copy(jsonToyml(video), () => console.log(copySucces))
        return highlight(jsonToyml(video), { language: 'yaml', ignoreIllegals: true })
      case 'audio':
        ncp.copy(jsonToyml(audio), () => console.log(copySucces))
        return highlight(jsonToyml(audio), { language: 'yaml', ignoreIllegals: true })
      case 'location':
        ncp.copy(jsonToyml(location), () => console.log(copySucces))
        return highlight(jsonToyml(location), { language: 'yaml', ignoreIllegals: true })
      case 'quick_reply':
        ncp.copy(jsonToyml(quickReplay), () => console.log(copySucces))
        return highlight(jsonToyml(quickReplay), { language: 'yaml', ignoreIllegals: true })
      case 'schedule':
        ncp.copy(jsonToyml(schedule), () => console.log(copySucces))
        return highlight(jsonToyml(schedule), { language: 'yaml', ignoreIllegals: true })
      case 'api':
        ncp.copy(jsonToyml(api), () => console.log(copySucces))
        return highlight(jsonToyml(api), { language: 'yaml', ignoreIllegals: true })
      default:
        return `\nThere is no action type named ${nameAction}. \nPlease use the command shi-kata actl`
    }
  }
}
