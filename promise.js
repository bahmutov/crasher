function failPromise () {
  if (typeof Promise === 'undefined') {
    throw new Error('Missing ES6 Promise')
  }

  console.log('before rejected promise')
  return Promise.reject(new Error('This is a rejected promise test (crasher)'))
}

module.exports = failPromise
