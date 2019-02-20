'use strict'

const withStylus = require('@zeit/next-stylus')

module.exports = withStylus({
  cssModules: true,
  webpack (cfg) {
    cfg.plugins = cfg.plugins.filter(
      plugin => plugin.constructor.name !== 'UglifyJsPlugin'
    )

    return cfg
  }
})
