!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=NetlifyCmsApp},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){n(4),n(5),e.exports=n(7)},function(e,t,n){"use strict";var r=n(2),i=r(n(1)),o=r(n(8));window.___emitter=o.default,window.___loader={enqueue:function(){},hovering:function(){}},i.default.init(),i.default.registerPreviewStyle("cms.css")},function(e,t,n){"use strict";var r=n(2)(n(6));window.netlifyIdentity=r.default;var i=function(){return r.default.on("login",(function(){document.location.href="/gyim1345.github.io/admin/"}))};r.default.on("init",(function(e){e?r.default.on("logout",(function(){i()})):i()})),r.default.init()},function(e,t){e.exports=netlifyIdentity},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),u=n.n(o),a=function(e){var t=e.entry,n=(0,e.widgetFor)("body"),r=t.getIn(["data","title"]);return u.a.createElement("div",{className:"page"},u.a.createElement("h1",{className:"page__title"},r),u.a.createElement("div",{className:"page__body"},n))},c=function(e){var t=e.entry,n=(0,e.widgetFor)("body"),r=t.getIn(["data","title"]);return u.a.createElement("div",{className:"post"},u.a.createElement("h1",{className:"post__title"},r),u.a.createElement("div",{className:"post__body"},n))};i.a.registerPreviewTemplate("pages",a),i.a.registerPreviewTemplate("posts",c)},function(e,t,n){"use strict";n.r(t);const r=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}}();t.default=r}]);
//# sourceMappingURL=cms.js.map