module.exports = function crasher() {
  setTimeout(function asyncCrash() {
    throw new Error('This is a test async error (crasher)');
  }, 500);
  throw new Error('This is a test error from middleware (crasher)');
};
