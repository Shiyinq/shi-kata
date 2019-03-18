let mfSmalltalk = `
intents:
  intent_kamu_siapa:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "kamusiapa"
  intent_terimakasih:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "terimakasih"
  intent_maaf:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "maaf"
  intent_greet_pagi:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "pagi"
  intent_greet_siang:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "siang"
  intent_greet_sore:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "sore"
  intent_greet_malam:
    initial: true
    type: text
    classifier:
      nlu: your_nl
      expression: your_nlu == "malam"
states:
  state_initial:
    initial: true
    transitions:
      state_kamu_siapa:
        condition: intent == 'intent_kamu_siapa'
      state_terimakasih:
        condition: intent == 'intent_terimakasih'
      state_maaf:
        condition: intent == 'intent_maaf'
      state_greet_pagi:
        condition: intent == 'intent_greet_pagi'
      state_greet_siang:
        condition: intent == 'intent_greet_siang'
      state_greet_sore:
        condition: intent == 'intent_greet_sore'
      state_greet_malam:
        condition: intent == 'intent_greet_malam'
  state_kamu_siapa:
    action:
      - name: act_kamu_siapa
    end: true
  state_terimakasih:
    action:
      - name: act_terimakasih
    end: true
  state_maaf:
    action:
      - name: act_maaf
    end: true
  state_greet_pagi:
    action:
      - name: act_greet_pagi
    end: true
  state_greet_siang:
    action:
      - name: act_greet_siang
    end: true
  state_greet_sore:
    action:
      - name: act_greet_sore
    end: true
  state_greet_malam:
    action:
      - name: act_greet_malam
    end: true
actions:
  act_kamu_siapa:
    type: text
    options:
      text:
        - Saya adalah bot
        - Saya teman mu
        - Hmm siapa ya
  act_terimakasih:
    type: text
    options:
      text:
        - Terimakasih kembali..
        - Sama sama
        - Senang bisa membantu
  act_maaf:
    type: text
    options:
      text: 
        - Iya aku maafin
        - Iya santai ja
        - Don't mind :)
  act_greet_pagi:
    type: text
    options:
      text:
        - Selamat pagi ka
        - Pagi juga ka
        - Pagiii..
  act_greet_siang:
    type: text
    options:
      text:
        - Selamat siang kaa
        - Siang juga ka
        - Siang..
  act_greet_sore:
    type: text
    options:
      text:
        - Selamat sore ka
        - Sore juga ka
        - Sore..
  act_greet_malam:
    type: text
    options:
      text:
        - Selamat malam ka
        - Malam juga ka
        - Malam..
`
module.exports = {
  mfSmalltalk
}