# crasher

> Simple middleware for throwing sync and async errors for testing your crash reporting setup (like Sentry)

[![NPM info][nodei.co]](https://npmjs.org/package/crasher)

    npm install --save crasher

Use as middleware

```js
// setup crash reporting, for example Sentry
var app = express();
app.get('/api/crash', require('crasher'));
```

Test that both sync and async thrown errors are captured by the crash reporting setup

    curl http://localhost/api/crash

I use [Sentry]() a lot to capture both server and client-side crashes.

Author: Gleb Bahmutov &copy; 2015
[@bahmutov](https://twitter.com/bahmutov) [glebbahmutov.com](http://glebbahmutov.com)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet / open issue on Github

[nodei.co]: https://nodei.co/npm/crasher.png?downloads=true


