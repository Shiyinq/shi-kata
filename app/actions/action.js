const highlight = require('cli-highlight').highlight
const ncp = require('copy-paste')
const copySucces = '\nThe action was successfully copied\n\n\nsee https://docs.kata.ai/kata-ml/action-type/'
const text = `
type: 'text'
options:
  text: string
`
const textData = `
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
const quickReplay = `
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
        ncp.copy(text, () => console.log(copySucces))
        return highlight(text, { language: 'yaml', ignoreIllegals: true })
      case 'text_data':
        ncp.copy(textData, () => console.log(copySucces))
        return highlight(textData, { language: 'yaml', ignoreIllegals: true })
      case 'image':
        ncp.copy(image, () => console.log(copySucces))
        return highlight(image, { language: 'yaml', ignoreIllegals: true })
      case 'button':
        ncp.copy(button, () => console.log(copySucces))
        return highlight(button, { language: 'yaml', ignoreIllegals: true })
      case 'carousel':
        ncp.copy(carousel, () => console.log(copySucces))
        return highlight(carousel, { language: 'yaml', ignoreIllegals: true })
      case 'imagemap':
        ncp.copy(imagemap, () => console.log(copySucces))
        return highlight(imagemap, { language: 'yaml', ignoreIllegals: true })
      case 'sticker':
        ncp.copy(sticker, () => console.log(copySucces))
        return highlight(sticker, { language: 'yaml', ignoreIllegals: true })
      case 'video':
        ncp.copy(video, () => console.log(copySucces))
        return highlight(video, { language: 'yaml', ignoreIllegals: true })
      case 'audio':
        ncp.copy(audio, () => console.log(copySucces))
        return highlight(audio, { language: 'yaml', ignoreIllegals: true })
      case 'location':
        ncp.copy(location, () => console.log(copySucces))
        return highlight(location, { language: 'yaml', ignoreIllegals: true })
      case 'quick_replay':
        ncp.copy(quickReplay, () => console.log(copySucces))
        return highlight(quickReplay, { language: 'yaml', ignoreIllegals: true })
      case 'schedule':
        ncp.copy(schedule, () => console.log(copySucces))
        return highlight(schedule, { language: 'yaml', ignoreIllegals: true })
      case 'api':
        ncp.copy(api, () => console.log(copySucces))
        return highlight(api, { language: 'yaml', ignoreIllegals: true })
      default:
        return `\nThere is no action type named ${nameAction}. \nPlease use the command shi-kata actl`
    }
  }
}
