!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);o(1);let n,r,a=Math.floor(8*Math.random()+1);function c(){$.ajax({url:"https://api.forismatic.com/api/1.0/",jsonp:"jsonp",dataType:"jsonp",data:{method:"getQuote",lang:"en",format:"jsonp"}}).done((function(t){n=t.quoteText,$("#text").text(n),r=""===t.quoteAuthor?"Unknown":t.quoteAuthor,$("#author").text(r)})).fail((function(t){console.log("Error: "+t.status)}))}$(document).ready((function(){c()})),$(document).ready((function(){console.log(),$("#quote-box").addClass("background-color-"+a)})),$("#new-quote").click((function(){c(),$("#quote-box").removeClass("background-color-"+a),a=Math.floor(8*Math.random()+1),$("#quote-box").addClass("background-color-"+a)})),$("#tweet-quote").click((function(t){$(this).attr("href",'https://twitter.com/intent/tweet?text= "'+n+'" - '+r)}))},function(t,e,o){var n=o(2),r=o(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1},c=(n(t.i,r,a),r.locals?r.locals:{});t.exports=c},function(t,e,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),c={};function i(t,e,o){for(var n=0;n<e.length;n++){var r={css:e[n][1],media:e[n][2],sourceMap:e[n][3]};c[t][n]?c[t][n](r):c[t].push(g(r,o))}}function u(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var c=a(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,s=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=s(e,r);else{var a=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(a,c[e]):t.appendChild(a)}}function f(t,e,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,b=0;function g(t,e){var o,n,r;if(e.singleton){var a=b++;o=p||(p=u(e)),n=d.bind(null,o,a,!1),r=d.bind(null,o,a,!0)}else o=u(e),n=f.bind(null,o,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e,o){return(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=r()),t=o.base?t+o.base:t,e=e||[],c[t]||(c[t]=[]),i(t,e,o),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){c[t]||(c[t]=[]),i(t,e,o);for(var n=e.length;n<c[t].length;n++)c[t][n]();c[t].length=e.length,0===c[t].length&&delete c[t]}}}},function(t,e,o){(e=o(4)(!1)).push([t.i,"#text{font-size:30px;margin-top:150px;padding-top:30px}#author{font-size:20px;margin-top:10px}.buttons{margin-top:20px;padding-bottom:30px}#tweet-quote{margin-top:15px;font-size:30px;display:block}.background-color-1{background-color:#f9d5e5}.background-color-2{background-color:#eeac99}.background-color-3{background-color:#e06377}.background-color-4{background-color:#c83349}.background-color-5{background-color:#5b9aa0}.background-color-6{background-color:#d6d4e0}.background-color-7{background-color:#b8a9c9}.background-color-8{background-color:#622569}\n",""]),t.exports=e},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=(c=n,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[o].concat(a).concat([r]).join("\n")}var c,i,u;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n=0;n<t.length;n++){var r=[].concat(t[n]);o&&(r[2]?r[2]="".concat(o," and ").concat(r[2]):r[2]=o),e.push(r)}},e}}]);