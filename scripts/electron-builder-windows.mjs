import { createRequire } from 'node:module'
import { installWindowsDirectoryInstaller } from './windows-directory-installer.mjs'

installWindowsDirectoryInstaller()
if (process.env.JSIGN_JAR || process.env.JSIGN_PIN_FILE) {
  if (!process.env.JSIGN_JAR || !process.env.JSIGN_PIN_FILE) {
    throw new Error('Incomplete Jsign environment for Windows installer packaging')
  }
  process.argv.push('--config.win.signtoolOptions.sign=./scripts/jsign-windows-hook.mjs')
}
const require = createRequire(import.meta.url)
// electron-builder's CLI parser expects argv[1] to be its own entry point.
// When this wrapper is invoked through `node`, remove the wrapper path first
// so it is not interpreted as an unknown builder argument.
process.argv.splice(1, 1)
require('electron-builder/cli.js')
