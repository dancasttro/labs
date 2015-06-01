"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

var Harmonic = (function () {
    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"name":"Daniel","title":"daniel castro","domain":"http://awesome.com","subtitle":"Powered by Harmonic","author":"Daniel Castro","description":"My site","bio":"Thats me","theme":"harmonic-theme-default","preprocessor":false,"posts_permalink":":language/:year/:month/:title","pages_permalink":"pages/:title","header_tokens":["<!--","-->"],"index_posts":10,"i18n":{"default":"en","languages":["en","pt-br"]},"mycustomdata":"wow","foo":"bar","baz":["a","b"]};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"en":[{"layout":"post","title":"test post","date":"2015-05-10T23:25:00.045Z","comments":"true","published":"true","keywords":"","description":"","categories":[""],"content":"<h1 id=\"test-post\">test post</h1>\n","file":"src/posts/test-post.md","filename":"test-post","link":"2015/05/test-post","lang":"en","default_lang":false},{"layout":"post","title":"hello world","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Hello World!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"2014/05/hello-world","lang":"en","default_lang":false}],"pt-br":[{"layout":"post","title":"test post","date":"2015-05-10T23:25:00.045Z","comments":"true","published":"true","keywords":"","description":"","categories":[""],"content":"<h1 id=\"test-post\">test post</h1>\n","file":"src/posts/test-post.md","filename":"test-post","link":"pt-br/2015/05/test-post","lang":"pt-br","default_lang":true},{"layout":"post","title":"ola mundo","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Olá mundo!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"pt-br/2014/05/hello-world","lang":"pt-br","default_lang":true}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return [];
        }
    }]);

    return Harmonic;
})();