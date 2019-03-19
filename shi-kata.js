#!/usr/bin/env node

const program = require('commander')
// const { prompt } = require('inquirer');
const { 
	makeFlow,
	mfOpening,
	mfSmalltalk,
	mfFallback,
	generateAction
} = require('./generate')

program
  .version('0.0.1')
  .description('App untuk generate flow')

program
  .command('make-flow <file-name>')
  .alias('mf')
  .description('Membuat flow baru')
  .action((name) => makeFlow(name))

program
	.command('mf-opening')
	.alias('mfo')
	.description('Membuat flow opening')
	.action(() => mfOpening())

program
	.command('mf-smalltalk')
	.alias('mfs')
	.description('Membuat flow smalltalk')
	.action(() => mfSmalltalk())

program
	.command('mf-fallback')
	.alias('mff')
	.description('Membuat flow fallback')
	.action(() => mfFallback())

program
	.command('action <nameAction>')
	.alias('act')
	.description(`Membuat Action Type [text, text_data, image, button, carousel, imagemap, sticker, video, audio, location, quick_reply, schedule, api]`)
	.action((nameAction) => console.log(generateAction(nameAction)))

program.parse(process.argv)