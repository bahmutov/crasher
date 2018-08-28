/* eslint-env Mocha */
const failPromise = require('../promise')

describe('fail-promise', () => {
  it('rejects with a promise', () => {
    return failPromise().then(
      () => {
        throw new Error('did not reject')
      },
      () => {} // good, caught it
    )
  })
})
