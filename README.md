# crasher

> Simple middleware for throwing sync and async errors for testing your crash reporting setup (like Sentry)

[![NPM][crasher-icon] ][crasher-url]

[![Build status][crasher-ci-image] ][crasher-ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![renovate-app badge][renovate-badge]][renovate-app]

Read [How to crash](https://glebbahmutov.com/blog/how-to-crash/) blog post

## Install and use

    npm install --save crasher

Use as middleware in Express

```js
// setup crash reporting, for example Sentry
var app = express()
app.get('/api/crash', require('crasher'))
```

Test that both sync and async thrown errors are captured by the crash reporting setup

    curl http://localhost/api/crash

Use as middleware in Koa

```js
const koa = require('koa')
const route = require('koa-route')
const app = koa()
app.use(route.get('/crash', require('crasher')))
```

## Exceptions

The code throws 3 types of errors: sync error, async error (via `setTimeout`) and an unhandled
rejected promise.

## Demo

You can spin a small demo server and cause the crashes

    npm run demo
    # starts the service
    # from another terminal
    curl localhost:3000/crash

There is also an Express server demo that catches all types of crashes, showing how to
handle them

    npm run demo-with-handling
    # starts the service
    # from another terminal
    curl localhost:3000/crash
    # the server shows 3 messages
    This is a test error from middleware (crasher)
    global exception: This is a test async error (crasher)
    unhandled promise rejection: This is a rejected promise test (crasher)

### Demos

- [Express without error handling](demo/server.js)
- [Express with error handling](demo/server-with-error-handling.js)
- [Koa without error handling](demo/server-koa.js)
- [Koa with error handling](demo/server-koa-with-error-handling.js)

## Why

I use [Sentry](https://glebbahmutov.com/blog/tags/sentry/) a lot to capture both server and client-side crashes.
In order to test the error reporting, it is nice to reliably generate crashes, both synchronous
and asynchronous.

## Related projects

- [crash-reporter-middleware](https://github.com/bahmutov/crash-reporter-middleware)
  sends crashes to the crash reporting service
- [raven-express](https://github.com/bahmutov/raven-express) is a Sentry client for Node Express server

### Small print

Author: Gleb Bahmutov &copy; 2016

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/crasher/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[crasher-icon]: https://nodei.co/npm/crasher.svg?downloads=true
[crasher-url]: https://npmjs.org/package/crasher
[crasher-ci-image]: https://travis-ci.org/bahmutov/crasher.svg?branch=master
[crasher-ci-url]: https://travis-ci.org/bahmutov/crasher
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
