let makeFlow = `
intents:
  intent_test:
    initial: true
    type: text
    condition: content == 'test'

states:
  state_initial:
    initial: true
    transitions:
      state_test:
        condition: intent == 'intent_test'

  state_test:
    end: true
    action:
      - name: act_test

actions:
 act_test:
    type: text
    options:
     text:
      - Hello
      - Test
`
module.exports = {
  makeFlow
}
