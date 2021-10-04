(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{124:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?a.a.createElement(f,o(o({ref:r},l),{},{components:t})):a.a.createElement(f,o({ref:r},l))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),i=(t(0),t(124)),c={id:"installation",title:"Installation",sidebar_label:"Installation"},o={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"MindAR project can be run directly in plain static HTML file. It's super easy!",source:"@site/docs/installation.md",slug:"/installation",permalink:"/mind-ar-js-doc/installation",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"MindAR",permalink:"/mind-ar-js-doc/"},next:{title:"Overview",permalink:"/mind-ar-js-doc/quick-start/overview"}},s=[{value:"1. HTML script",id:"1-html-script",children:[{value:"Image Tracking",id:"image-tracking",children:[]},{value:"Face Tracking",id:"face-tracking",children:[]}]},{value:"2. npm",id:"2-npm",children:[{value:"Image Tracking",id:"image-tracking-1",children:[]},{value:"Face Tracking",id:"face-tracking-1",children:[]}]}],l={toc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.a)("p",null,"MindAR project can be run directly in plain static HTML file. It's super easy! "),Object(i.a)("p",null,"MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independetly built. Furthermore, for each type of tracking, there are two javascript files: ",Object(i.a)("inlineCode",{parentName:"p"},"mindar-[TYPE].prod.js")," and ",Object(i.a)("inlineCode",{parentName:"p"},"mindar-[TYPE]-aframe.prod.js")),Object(i.a)("p",null,"The first one is the core tracking library while the second one is a aframe extension. Normally, you will import the first script, followed by aframe library, then followed by the second script. We decided to not embed AFRAME inside MindAR to make it more flexible. Also, for highly customizable applications, you can write your own aframe extension (second script)."),Object(i.a)("p",null,"There are two generally two ways to install the library."),Object(i.a)("h2",{id:"1-html-script"},"1. HTML script"),Object(i.a)("h3",{id:"image-tracking"},"Image Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image-aframe.prod.js"><\/script>\n')),Object(i.a)("h3",{id:"face-tracking"},"Face Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-face.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-face-aframe.prod.js"><\/script>\n')),Object(i.a)("h2",{id:"2-npm"},"2. npm"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"> npm i mind-ar --save\n> npm i aframe --save\n")),Object(i.a)("h3",{id:"image-tracking-1"},"Image Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-image.prod.js';\nimport 'aframe';\nimport 'mind-ar/dist/mindar-image-aframe.prod.js';\n")),Object(i.a)("h3",{id:"face-tracking-1"},"Face Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-face.prod.js';\nimport 'aframe';\nimport 'mind-ar/dist/mindar-face-aframe.prod.js';\n")))}p.isMDXComponent=!0}}]);