function asyncCrash () {
  throw new Error('This is a test async error (crasher)')
}

function failPromise () {
  if (typeof Promise !== 'undefined') {
    const p = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error('This is a rejected promise test (crasher)'))
      }, 1000)
    })
    // p has no .catch handler!
    p.then(function (value) {
      console.log('promise resolved with value', value)
    })
  }
}

function crasher () {
  // see if async errors are handled globally
  setTimeout(asyncCrash, 500)

  // unhandled promise rejection
  failPromise()

  // plain synchronous error
  throw new Error('This is a test error from middleware (crasher)')
}

module.exports = crasher
