!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.createReactClass=e(require("react")):t.createReactClass=e(t.React)}(this,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=g.hasOwnProperty(e)?g[e]:null;_.hasOwnProperty(e)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function u(t,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&N.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==c){var u=n[a],p=o.hasOwnProperty(a);if(r(p,a),N.hasOwnProperty(a))N[a](t,u);else{var f=g.hasOwnProperty(a),m="function"==typeof u,h=m&&!f&&!p&&!1!==n.autobind;if(h)i.push(a,u),o[a]=u;else if(p){var y=g[a];s(f&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a),"DEFINE_MANY_MERGED"===y?o[a]=l(o[a],u):"DEFINE_MANY"===y&&(o[a]=d(o[a],u))}else o[a]=u}}}else;}function p(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in N;s(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in t;s(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=o}}}function f(t,e){s(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(s(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function l(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return f(r,n),f(r,o),r}}function d(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){var n=e.bind(t);return n}function h(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=m(t,r)}}function y(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&h(this),this.props=t,this.context=o,this.refs=a,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;s("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=i});e.prototype=new D,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],E.forEach(u.bind(null,e)),u(e,b),u(e,t),u(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),s(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in g)e.prototype[r]||(e.prototype[r]=null);return e}var E=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)u(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=l(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){p(t,e)},autobind:function(){}},b={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},D=function(){};return i(D.prototype,t.prototype,_),y}var i=n(5),a=n(3),s=n(4),c="mixins";t.exports=r},function(e,n){e.exports=t},function(t,e,n){"use strict";var o=n(1),r=n(0);if(void 0===o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new o.Component).updater;t.exports=r(o.Component,o.isValidElement,i)},function(t,e,n){"use strict";var o={};t.exports=o},function(t,e,n){"use strict";function o(t,e,n,o,i,a,s,c){if(r(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,o,i,a,s,c],f=0;u=new Error(e.replace(/%s/g,function(){return p[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var r=function(t){};t.exports=o},function(t,e,n){"use strict";function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,c=o(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var p in n)i.call(n,p)&&(c[p]=n[p]);if(r){s=r(n);for(var f=0;f<s.length;f++)a.call(n,s[f])&&(c[s[f]]=n[s[f]])}}return c}}])});