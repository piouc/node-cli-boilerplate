import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .command('$0 [path]', '', yargs => {
    return yargs
      .positional('path', {
        type: 'number',
        default: process.cwd()
      })
  })
  .help()
  .parseSync()
  
console.log(argv.path)