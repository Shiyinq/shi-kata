let mfFallback = `
fallback: true
intents:
	intent_fallback:
		type: text
states:
	state_fallback_init:
		initial: true
		transit:
			context:
				incomming_text: content
		transitions:
			state_fallback:
				condition: intent == 'intent_fallback'
				fallback: true
	state_fallback:
		end: true
		action:
			- name: act_fallback
			- name: act_send_sticker
actions:
	act_fallback:
		type: text
		options:
			text:
				- Maaf saya belum mengerti kalimat itu, akan saya catat dulu
	act_send_sticker:
		type: template
		options:
			type: sticker
			items:
				stickerId: '13'
				packageId: '1'
`
module.exports = {
  mfFallback
}