let mfOpening = `
# opening
intents:
  # intent opening telegram
  intent_opening_line:
    type: data
    initial: true
    condition: payload.type == "follow"
  intent_opening_telegram:
    type: text 
    initial: true
    condition: content == "/start"
  intent_opening_qiscus:
    type: text 
    initial: true
    condition: content == "Get Started"
# states
states:
  state_initial:
    initial: true
    transitions:
      state_opening_bot:
        condition: intent == 'intent_opening_telegram' || intent == 'intent_opening_line' || intent == 'intent_opening_qiscus'
        mapping:
          data:
              userId: metadata.lineSenderId || metadata.fbmessengerSenderId || metadata.telegramSenderId || metadata.qiscusSenderId
          context:
              lineToken: metadata.lineAccessToken
  state_opening_bot:
    action: 
      - name: opening_line
        condition: metadata.channelType == 'line'
      - name: opening_text
        condition: metadata.channelType == 'telegram' || metadata.channelType == 'line'
      - name: opening_text1
        condition: metadata.channelType == 'line'
    end: true
# actions
actions:
  opening_line:
    type: api
    options:
      method: GET
      headers:
          Authorization: Bearer $(context.lineToken)
      uri: 'https://api.line.me/v2/bot/profile/$(data.userId)'
  opening_text:
    type: text
    options:
      text: 
        -  Hai $(metadata.qiscusSenderName)$(result.displayName)$(result.name)$(metadata.telegramSenderName), saya adalah Shi, bot yang dapat menampilkan berita
        -  Hallo  $(metadata.qiscusSenderName)$(result.displayName)$(result.name)$(metadata.telegramSenderName), saya adalah Shi, bot yang dapat menampilkan berita
  opening_text1:
    type: text
    options:
      text:
        - Halo saya Bot
`
module.exports = {
  mfOpening
}