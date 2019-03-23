#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
const open = require('open')
const { version, description } = require('./package.json')
const {
  makeFlow,
  mfOpening,
  mfSmalltalk,
  mfFallback,
  generateAction,
  actionList
} = require('./generate')

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

program
  .version(`shi-kata@${version}`, '-v, --version')
  .description(`shi-kata@${version}\n\n${description}`)

program
  .command('tutorial')
  .alias('tutor')
  .description('Tutorial make a bot with Kata.Ai')
  .action(() => {
    console.log('Opening your browser..')
    open('https://docs.kata.ai/tutorial/bot-studio/')
  })

program
  .command('documentation')
  .alias('docs')
  .description('Documentation Kata.Ai')
  .action(() => {
    console.log('Opening your browser..')
    open('https://docs.kata.ai')
  })

program
  .command('make-flow <fileName>')
  .alias('mf')
  .description('Generate new flow')
  .action((name) => makeFlow(name))

program
  .command('mf-opening')
  .alias('mfo')
  .description('Generate flow opening')
  .action(() => mfOpening())

program
  .command('mf-smalltalk')
  .alias('mfs')
  .description('Generate flow smalltalk')
  .action(() => mfSmalltalk())

program
  .command('mf-fallback')
  .alias('mff')
  .description('Generate flow fallback')
  .action(() => mfFallback())

program
  .command('action-list')
  .alias('actl')
  .description('Generate Action Types from list')
  .action(() => {
    prompt(actionList).then(({ actionTypes }) => console.log(generateAction(actionTypes)))
  })

program
  .command('action <nameAction>')
  .alias('act')
  .description(`Generate Action Types`)
  .action((nameAction) => console.log(generateAction(nameAction)))

if (process.argv.length === 2) { program.help() }
program.parse(process.argv)
