function syncCrash () {
  // plain synchronous error
  throw new Error('This is a test error from middleware (crasher)')
}

module.exports = syncCrash
