!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ReactInputHandler=t()}(this,function(){"use strict";function e(e){switch(e.type){case"checkbox":return e.checked;case"select-multiple":return[].concat(r(e.querySelectorAll(":checked"))).map(function(e){return e.value});default:return e.value}}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},r=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};return function(r){if(!r)throw new Error("event must be defined");if("object"!==(void 0===r?"undefined":t(r)))throw new Error("event must be an object");if("function"!=typeof this.setState)throw new Error("react-input-handler must be bound to the component instance");var o=r.target,u=o.name;if(!u)throw new Error("all input must have a name prop");if("[]"===u.substr(-2)){var i=u.substr(0,u.length-2),f=e(o),c=this.state[i]||[],a=o.value;if(f)-1===c.indexOf(a)&&this.setState(function(e){return n({},i,c.concat(a))});else{var s=c.indexOf(a);s>-1&&c.splice(s,1),this.setState(n({},i,c))}}else this.setState(n({},u,e(o)))}});
//# sourceMappingURL=react-input-handler.umd.js.map
