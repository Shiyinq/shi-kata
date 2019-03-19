const highlight = require('cli-highlight').highlight
const ncp = require("copy-paste")

const text = `
type: 'text'
options:
  text: string
`
const text_data = `
type: 'text'
options:
  data: $(config.messages) # dictionary location
  path: $(data.lang) # relative path
  template:
    $[upgrade4G.confirmUpgrade] # =config.messages[data.lang]
    #        .upgrade4G.confirmUpgrade
`
const image = `
type: 'template'
options:
  type: 'image'
  items:
    originalContentUrl: string
    previewImageUrl: string
`
const button = `
type: 'template'
options:
  type: 'button'
  items:
    text: string
    title: string
    actions:
      - type: 'postback'
        label: string
        payload:
          [key: string]: string
      - type: 'url'
        url: string
        label: string
`
const carousel = `
type: 'template'
options:
  type: 'carousel'
  items:
    - text: string
      title: string
      actions:
        - type: 'postback'
          label: string
          payload:
            [key: string]: string
        - type: 'url'
          url: string
          label: string
    - text: string
      title: string
      actions:
        - type: 'postback'
          label: string
          payload:
            [key: string]: string
        - type: 'url'
          url: string
          label: string
`
const imagemap = `
type: 'template'
options:
  type: 'imagemap'
  items:
    altText: string # example: "this is an imagemap"
    baseUrl: url # example: "https://example.com/bot/images/rm001"
    baseSize:
      height: number # example: 1040
      width: number # example: 1040
    actions:
      - text: string
        type: 'message'
        area:
          x: number # example: 0
          y: number # example: 0
          width: number # example: 1040
          height: number # example: 350
      - text: string
        type: 'message'
        area:
          x: 0
          y: 350
          width: 1040
          height: 350
      - text: string
        type: 'message'
        area:
          x: 0
          y: 700
          width: 1040
          height: 350
`
const sticker = `
type: template
options:
  type: sticker
  items:
    stickerId: string
    packageId: string
`
const video = `
type: template
options:
  type: video
  items:
    originalContentUrl: string
    previewImageUrl: string
`
const audio = `
type: template
options:
  type: audio
  items:
    originalContentUrl: string
    duration: string
`
const location = `
type: template
options:
  type: location
  items:
    title: string
    address: string
    latitude: string
    longitude: string
    locationImageUrl: string # optional for fbmessenger
`
const quick_replay = `
# an template action (mandatory) followed by quick reply (optional)
type: "template"
options:
    type: "button" | "text" | "carousel" | "image"
    items:
        quickreply:
            - type: "location"
            - type: "text"
              thumbnailImageUrl?: string
              label: string
              payload: JsonObject
`
const schedule = `
type: schedule
options:
  id: string
  command: add | remove
  message: Message
  start: datetime
  end: datetime
  freqType: string, // second, minute, hour, day, week, month, year
  freqInterval: number
`
const api = `
type: api
options:
    uri: <uri>
    method: "GET" | "POST"
    body: <JsonObject>
    headers: <JsonObject>
    query: <JsonObject>
    resultPath: string # use for saving api response in $(result)
`
module.exports = {
  actionTypes (nameAction) {
    switch (nameAction) {
      case 'text':
        ncp.copy(text, () => console.log('Action berhasil dicopy'))
        return highlight(text, {language: 'yaml', ignoreIllegals: true})
        break
      case 'text_data':
        ncp.copy(text_data, () => console.log('Action berhasil dicopy'))
        return highlight(text_data, {language: 'yaml', ignoreIllegals: true})
        break
      case 'image':
        ncp.copy(image, () => console.log('Action berhasil dicopy'))
        return highlight(image, {language: 'yaml', ignoreIllegals: true})
        break
      case 'button':
        ncp.copy(button, () => console.log('Action berhasil dicopy'))
        return highlight(button, {language: 'yaml', ignoreIllegals: true})
        break
      case 'carousel':
        ncp.copy(carousel, () => console.log('Action berhasil dicopy'))
        return highlight(carousel, {language: 'yaml', ignoreIllegals: true})
        break
      case 'imagemap':
        ncp.copy(imagemap, () => console.log('Action berhasil dicopy'))
        return highlight(imagemap, {language: 'yaml', ignoreIllegals: true})
        break
      case 'sticker':
        ncp.copy(sticker, () => console.log('Action berhasil dicopy'))
        return highlight(sticker, {language: 'yaml', ignoreIllegals: true})
        break
      case 'video':
        ncp.copy(video, () => console.log('Action berhasil dicopy'))
        return highlight(video, {language: 'yaml', ignoreIllegals: true})
        break
      case 'audio':
        ncp.copy(audio, () => console.log('Action berhasil dicopy'))
        return highlight(audio, {language: 'yaml', ignoreIllegals: true})
        break
      case 'location':
        ncp.copy(location, () => console.log('Action berhasil dicopy'))
        return highlight(location, {language: 'yaml', ignoreIllegals: true})
        break
      case 'quick_replay':
        ncp.copy(quick_replay, () => console.log('Action berhasil dicopy'))
        return highlight(quick_replay, {language: 'yaml', ignoreIllegals: true})
        break
      case 'schedule':
        ncp.copy(schedule, () => console.log('Action berhasil dicopy'))
        return highlight(schedule, {language: 'yaml', ignoreIllegals: true})
        break
      case 'api':
        ncp.copy(api, () => console.log('Action berhasil dicopy'))
        return highlight(api, {language: 'yaml', ignoreIllegals: true})
        break
      default:
        return `\nTidak ada action types yang bernama ${nameAction}.\nSilahkan gunakan perintah shi-kata action -h`
        break
    }
  }
}