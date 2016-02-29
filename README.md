# crasher

> Simple middleware for throwing sync and async errors for testing your crash reporting setup (like Sentry)

[![NPM][crasher-icon] ][crasher-url]

[![Build status][crasher-ci-image] ][crasher-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Install and use

    npm install --save crasher

Use as middleware

```js
// setup crash reporting, for example Sentry
var app = express();
app.get('/api/crash', require('crasher'));
```

Test that both sync and async thrown errors are captured by the crash reporting setup

    curl http://localhost/api/crash

I use [Sentry](https://glebbahmutov.com/blog/tags/sentry/) a lot to capture both server and client-side crashes.

### Small print

Author: Gleb Bahmutov &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

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

[crasher-icon]: https://nodei.co/npm/crasher.png?downloads=true
[crasher-url]: https://npmjs.org/package/crasher
[crasher-ci-image]: https://travis-ci.org/bahmutov/crasher.png?branch=master
[crasher-ci-url]: https://travis-ci.org/bahmutov/crasher
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release



