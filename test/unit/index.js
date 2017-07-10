import Vue from 'vue'

/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')
Vue.config.productionTip = false

const helpersContext = require.context('./helpers', true, /\.js$/)
helpersContext.keys().forEach(helpersContext)

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
const srcContext = require.context('../../src', true, /^\.\/(?!main\.js$).+\.(js|vue)$/i)
srcContext.keys().forEach(srcContext)
