const packageJson = require('./package.json')

module.exports = {
  ...packageJson.build,
  appId: 'io.wandsh.dev',
  productName: 'WanDSH Dev',
  protocols: [
    {
      name: 'WanDSH Dev Enterprise Login',
      schemes: ['bisheng-dev']
    }
  ],
  directories: {
    ...packageJson.build.directories,
    output: 'dist-dev'
  },
  extraMetadata: {
    name: 'dsh-desktop-dev',
    productName: 'WanDSH Dev',
    dshDesktopChannel: 'development'
  },
  artifactName: 'wandsh-dev-${os}-${arch}.${ext}',
  nsis: {
    ...packageJson.build.nsis,
    artifactName: 'wandsh-dev-windows-${arch}-setup.${ext}'
  },
  publish: null
}
