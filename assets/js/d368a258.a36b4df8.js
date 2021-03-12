(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(121)),o=n(125),c=n(130),l={id:"minimal",title:"Minimal",sidebar_label:"Minimal"},s={unversionedId:"examples/minimal",id:"examples/minimal",isDocsHomePage:!1,title:"Minimal",description:"This is a minimal example. It detects a target image and display a blue rectangle on top.",source:"@site/docs/examples/minimal.md",slug:"/examples/minimal",permalink:"/mind-ar-js-doc/examples/minimal",version:"current",sidebar_label:"Minimal",sidebar:"docs",previous:{title:"Summary",permalink:"/mind-ar-js-doc/examples/summary"},next:{title:"Basic",permalink:"/mind-ar-js-doc/examples/basic"}},u=[{value:"Try it out",id:"try-it-out",children:[]},{value:"Source",id:"source",children:[]}],m={toc:u};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This is a minimal example. It detects a target image and display a blue rectangle on top. "),Object(i.a)("p",null,"We have a step-by-step tutorial in ",Object(i.a)("inlineCode",{parentName:"p"},"Quick Start"),". If you are new to MindAR, please check that out to understand some basic principles."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:n(183).default})),Object(i.a)("h2",{id:"try-it-out"},"Try it out"),Object(i.a)("a",{href:Object(o.a)("/samples/minimal.html"),target:"_blank"},"Live Demo"),Object(i.a)("p",null,"You can use the following target image for testing:"),Object(i.a)("img",{src:c.a,width:"300"}),Object(i.a)("h2",{id:"source"},"Source"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/dist/mindar.prod.js"><\/script>\n  </head>\n\n  <body>\n    <a-scene mindar="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/examples/assets/card-example/card.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n      <a-entity mindar-image-target="targetIndex: 0">\n    <a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n')))}p.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(126);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},126:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},130:function(e,t,n){"use strict";t.a=n.p+"assets/images/card-06cb9111a8e32627db6bfafc7aa22a4d.png"},183:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/minimal-demo-0ede0234bdb0425d23f869a8693758a7.jpeg"}}]);