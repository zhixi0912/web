!function(o){function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=o,t.c=n,t.i=function(o){return o},t.d=function(o,n,e){t.o(o,n)||Object.defineProperty(o,n,{configurable:!1,enumerable:!0,get:e})},t.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(n,"a",n),n},t.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},t.p="/",t(t.s=42)}({0:function(o,t){o.exports=window.$},1:function(o,t){},13:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(1),r=(n.n(e),n(29)),i=(n.n(r),n(0)),u=n.n(i),c=n(2);u()(function(){u()(window).scroll(n.i(c.a)(500))})},2:function(o,t,n){"use strict";function e(o){var t=u()(window).scrollTop(),n=void 0,e=void 0,r=700;return"number"==typeof o&&(r=o,o=!1),function(){o&&c();var i=u()("header"),l=void 0,f=u()(window).scrollTop();if(f<r)i.velocity("stop"),u.a.Velocity.hook(i,"top","0");else if(f<=r+145)l=r-f,u.a.Velocity.hook(i,"top",l+"px");else{var a=f-t;e=0===a?n:a<0,e?e!==n&&i.velocity({top:-55},{queue:!1}):e!==n&&i.velocity({top:-145},{queue:!1})}t=f,n=e}}function r(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=u()(window).scrollTop(),e=n+u()(window).height(),r=u()(o).offset().top+t,i=r+u()(o).height()-t;return i>=n&&i<=e||r>=n&&r<=e}t.a=e,t.b=r;var i=n(0),u=n.n(i);u()(document).on("dragstart",function(o){o.preventDefault()});var c=function(){var o=u()("#banner"),t=void 0,n=u()(window).scrollTop();n<250?u.a.Velocity.hook(o,"top","145px"):n<=845&&(t=145-.8*(n-250),u.a.Velocity.hook(o,"top",t+"px"))}},29:function(o,t){},42:function(o,t,n){o.exports=n(13)}});
//# sourceMappingURL=more.cbff78a9.js.map