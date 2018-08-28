function syncCrash () {
  // plain synchronous error
  console.log('before throwing sync error')
  throw new Error('This is a test error from middleware (crasher)')
}

module.exports = syncCrash
