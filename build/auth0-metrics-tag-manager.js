!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.auth0MetricsTagManager=e():t.auth0MetricsTagManager=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){var n=t.src,r=t.globalName,o=t.globalNames,u=t.stubType,s=t.stubMethods,l=t.stub,f=void 0===l?null:l,d=t.window,p=t.document,h=p.createElement("script"),v=p.getElementsByTagName("script")[0],w=f||i(u,s);w&&(r&&(d[r]=w),(o||[]).forEach(function(t){d[t]=w})),h.async=!0,h.src=n,h.type="text/javascript";var g=new c(function(t,i){h.onerror=function(){var t="Error loading "+n;a.default.debug(t),w&&w._onError&&w._onError(t),e&&e(t),i(t)},h.onload=function(){a.default.debug(n+" loaded successfully"),w&&w._onLoad&&w._onLoad(d[r||o[0]]),e&&e(null,d[r||o[0]]),t(d[r||o[0]])}});return v.parentNode.insertBefore(h,v),g}function i(t,e){return"function"===t?u(e):null}function u(t){var e=function(t,e,n){return t._queue=t._queue||[],t._queue.push({method:e,args:n}),t},n=function t(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return e(t,null,r)};return(t||[]).forEach(function(t){n[t]=function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e(n,t,o)}}),n._onLoad=function(t){for(;(n._queue||[]).length;){var e=n._queue.shift();e.method?t[e.method].apply(t,r(e.args)):t.apply(void 0,r(e.args))}},n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=n(1),a=function(t){return t&&t.__esModule?t:{default:t}}(s),c="undefined"==typeof Promise?n(2).Promise:Promise},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={log:function(){},debug:function(){},error:function(){}}},function(t,e,n){(function(e,r){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function i(t){K=t}function u(t){W=t}function s(){return void 0!==V?function(){V(c)}:a()}function a(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<Q;t+=2){(0,Z[t])(Z[t+1]),Z[t]=void 0,Z[t+1]=void 0}Q=0}function l(t,e){var n=arguments,r=this,o=new this.constructor(d);void 0===o[tt]&&q(o);var i=r._state;return i?function(){var t=n[i-1];W(function(){return P(i,o,t,r._result)})}():M(r,o,t,e),o}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(d);return m(n,t),n}function d(){}function p(){return new TypeError("You cannot resolve a promise with itself")}function h(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(t){return ot.error=t,ot}}function w(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function g(t,e,n){W(function(t){var r=!1,o=w(n,e,function(n){r||(r=!0,e!==n?m(t,n):A(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function _(t,e){e._state===nt?A(t,e._result):e._state===rt?j(t,e._result):M(e,void 0,function(e){return m(t,e)},function(e){return j(t,e)})}function y(t,e,n){e.constructor===t.constructor&&n===l&&e.constructor.resolve===f?_(t,e):n===ot?(j(t,ot.error),ot.error=null):void 0===n?A(t,e):o(n)?g(t,e,n):A(t,e)}function m(e,n){e===n?j(e,p()):t(n)?y(e,n,v(n)):A(e,n)}function b(t){t._onerror&&t._onerror(t._result),T(t)}function A(t,e){t._state===et&&(t._result=e,t._state=nt,0!==t._subscribers.length&&W(T,t))}function j(t,e){t._state===et&&(t._state=rt,t._result=e,W(b,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+nt]=n,o[i+rt]=r,0===i&&t._state&&W(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function E(){this.error=null}function x(t,e){try{return t(e)}catch(t){return it.error=t,it}}function P(t,e,n,r){var i=o(n),u=void 0,s=void 0,a=void 0,c=void 0;if(i){if(u=x(n,r),u===it?(c=!0,s=u.error,u.error=null):a=!0,e===u)return void j(e,h())}else u=r,a=!0;e._state!==et||(i&&a?m(e,u):c?j(e,s):t===nt?A(e,u):t===rt&&j(e,u))}function k(t,e){try{e(function(e){m(t,e)},function(e){j(t,e)})}catch(e){j(t,e)}}function O(){return ut++}function q(t){t[tt]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function S(t,e){this._instanceConstructor=t,this.promise=new t(d),this.promise[tt]||q(this.promise),G(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&A(this.promise,this._result))):j(this.promise,C())}function C(){return new Error("Array Methods must be provided an Array")}function N(t){return new S(this,t).promise}function L(t){var e=this;return new e(G(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(d);return j(n,t),n}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Y(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(t){this[tt]=O(),this._result=this._state=void 0,this._subscribers=[],d!==t&&("function"!=typeof t&&U(),this instanceof z?k(this,t):Y())}function B(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=z}var D=void 0;D=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var G=D,Q=0,V=void 0,K=void 0,W=function(t,e){Z[Q]=t,Z[Q+1]=e,2===(Q+=2)&&(K?K(c):$())},H="undefined"!=typeof window?window:void 0,I=H||{},J=I.MutationObserver||I.WebKitMutationObserver,R="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Z=new Array(1e3),$=void 0;$=R?function(){return function(){return e.nextTick(c)}}():J?function(){var t=0,e=new J(c),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():X?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===H?function(){try{var t=n(12);return V=t.runOnLoop||t.runOnContext,s()}catch(t){return a()}}():a();var tt=Math.random().toString(36).substring(16),et=void 0,nt=1,rt=2,ot=new E,it=new E,ut=0;return S.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===et&&n<t;n++)this._eachEntry(e[n],n)},S.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===f){var o=v(t);if(o===l&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===z){var i=new n(d);y(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},S.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===et&&(this._remaining--,t===rt?j(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},S.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,function(t){return n._settledAt(nt,e,t)},function(t){return n._settledAt(rt,e,t)})},z.all=N,z.race=L,z.resolve=f,z.reject=F,z._setScheduler=i,z._setAsap=u,z._asap=W,z.prototype={constructor:z,then:l,catch:function(t){return this.then(null,t)}},z.polyfill=B,z.Promise=z,z})}).call(e,n(10),n(11))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n.n(r);e.default=o.a},function(t,e,n){"use strict";function r(t){var e=t.id,n=t.handlers,r=t.window,i=t.document,s=function t(){t.callMethod?t.callMethod.apply(t,arguments):t.queue.push(arguments)};s.push=s,s.loaded=!0,s.version="2.0",s.queue=[];var a=(0,u.default)({src:"https://connect.facebook.net/en_US/fbevents.js",globalNames:["fbq","_fbq"],stub:s,window:r,document:i});return n.push(o),r.fbq("init",e),a}function o(t){var e=t.type,n=t.id,r=t.properties;return"page"===e?window.fbq("track","PageView"):"track"===e?window.fbq("trackCustom",n,r):null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(i)},function(t,e,n){"use strict";function r(t){var e=t.id,n=t.mappings,r=t.handlers,i=t.window,s=t.document,a=(0,u.default)({src:"https://www.googleadservices.com/pagead/conversion_async.js",globalName:"google_trackConversion",stubType:"function",window:i,document:s});return r.push(o.bind(null,e,n)),a}function o(t,e,n){var r=n.type,o=n.id;return"track"===r?(e||[]).filter(function(t){return t.evt===o}).forEach(function(e){window.google_trackConversion({google_conversion_id:t,google_conversion_label:e.label,google_remarketing_only:!1})}):null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(i)},function(t,e,n){"use strict";function r(t){var e=t.id,n=t.handlers,r=t.window,i=t.document,s=function t(){t.q.push(arguments)};s.q=[],s.l=1*new Date,r.GoogleAnalyticsObject="ga";var a=(0,u.default)({src:"https://www.google-analytics.com/analytics.js",globalName:"ga",stub:s,window:r,document:i});return n.push(o),r.ga("create",e,"auto"),a}function o(t){var e=t.type,n=t.id,r=t.properties,o=t.label;if("page"===e)return window.ga("send","pageview");if("track"===e){var i={hitType:"event",eventCategory:r.category||"All",eventAction:n,eventLabel:r.label||o};return window.ga("send",i)}return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(i)},function(t,e,n){"use strict";function r(t){var e=t.id,n=t.mappings,r=t.handlers,i=t.window,s=t.document,a=function t(){t.exe?t.exe.apply(t,arguments):t.queue.push(arguments)};a.version="1.1",a.queue=[];var c=(0,u.default)({src:"https://static.ads-twitter.com/uwt.js",globalName:"twq",stub:a,window:i,document:s});return r.push(o.bind(null,n)),i.twq("init",e),c}function o(t,e){var n=e.type,r=e.id,o=e.properties;return"page"===n?window.twq("track","PageView"):"track"===n?(t||[]).filter(function(t){return t.evt===r}).forEach(function(t){return window.twttr.conversion.trackPid(t.pid,o)}):null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(i)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"website",e=arguments[1],n=[],r=[],o={page:function(){r.forEach(function(e){try{e({type:"page",label:t})}catch(t){a.default.error("Error on page() handler"),a.default.error(t)}})},track:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.forEach(function(r){try{r({type:"track",id:e,properties:n,label:t})}catch(t){a.default.error("Error on page() handler"),a.default.error(t)}})}};return n.push((0,l.default)({id:u.default["facebook-pixel"].id,handlers:r,window:window,document:document})),n.push((0,d.default)({id:u.default["google-analytics"].id,handlers:r,window:window,document:document})),n.push((0,h.default)({id:u.default["twitter-ads-pixel"].id,mappings:u.default["twitter-ads-pixel"].mappings,handlers:r,window:window,document:document})),n.push((0,w.default)({id:u.default["google-adwords"].id,mappings:u.default["google-adwords"].mappings,handlers:r,window:window,document:document})),g.all(n).then(function(){return e&&e(null,o),o}).catch(function(t){return e&&e(t),g.reject(t)}),o}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o;var i=n(3),u=r(i),s=n(1),a=r(s),c=n(4),l=r(c),f=n(6),d=r(f),p=n(7),h=r(p),v=n(5),w=r(v),g="undefined"==typeof Promise?n(2).Promise:Promise;e.default=o},function(t,e){t.exports={"google-analytics":{id:"UA-37952868-1"},"google-adwords":{id:"956542766",mappings:[{evt:"success:onboarding",label:"AkwwCNLEnGUQrt6OyAM"},{evt:"success:signup",label:"77nYCOS34F4Qrt6OyAM"}]},"facebook-pixel":{id:"417778941754366"},"twitter-ads-pixel":{id:"nus5f",mappings:[{evt:"success:pricing-checkout",pid:"l6ljz"},{evt:"success:signup",pid:"l6liv"}]}}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function u(){v&&p&&(v=!1,p.length?h=p.concat(h):w=-1,h.length&&s())}function s(){if(!v){var t=o(u);v=!0;for(var e=h.length;e;){for(p=h,h=[];++w<e;)p&&p[w].run();w=-1,e=h.length}p=null,v=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,h=[],v=!1,w=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new a(t,e)),1!==h.length||v||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){}])});
//# sourceMappingURL=auth0-metrics-tag-manager.js.map