#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
const open = require('open')
const decompress = require('decompress')
const { version, description } = require('./package.json')
const {
  makeFlow,
  mfOpening,
  mfSmalltalk,
  mfFallback,
  generateAction,
  actionList,
  sampleBotList
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
  .command('sample-bot')
  .alias('sbot')
  .description(`Generate Example bot`)
  .action(() => {
    prompt(sampleBotList).then(({ sampleBotList }) => {
      let dirname = __dirname
      decompress(`${dirname}/sample/${sampleBotList}.zip`, process.cwd())
        .then(() => console.log(`Sample ${sampleBotList} has been downloaded\n\ncd ${sampleBotList}`))
        .catch(err => console.log(err))
    })
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
  .command('action <actionName>')
  .alias('act')
  .description(`Generate Action Types`)
  .action((actionName) => console.log(generateAction(actionName)))

if (process.argv.length === 2) { program.help() }
program.parse(process.argv)
