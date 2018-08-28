/* eslint-env Mocha */
const syncCrash = require('./sync-crash')
const la = require('lazy-ass')
const is = require('check-more-types')

describe('sync-crash', () => {
  it('raises an error', () => {
    la(is.raises(syncCrash))
  })
})
