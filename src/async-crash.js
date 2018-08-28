function crash () {
  throw new Error('This is a test async error (crasher)')
}

function asyncCrash () {
  setTimeout(crash, 500)
}
module.exports = asyncCrash
