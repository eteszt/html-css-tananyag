(()=>{"use strict";var e,t,a,r,o,n={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,f),a.loaded=!0,a.exports}f.m=n,f.c=i,e=[],f.O=(t,a,r,o)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](a[c])))?a.splice(c--,1):(i=!1,o<n&&(n=o));if(i){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=a(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(o,n),o},f.d=(e,t)=>{for(var a in t)f.o(t,a)&&!f.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,a)=>(f.f[a](e,t),t)),[])),f.u=e=>"assets/js/"+({48:"a94703ab",98:"a7bd4aaa",278:"d89db163",279:"df203c0f",318:"eb6f804d",355:"3194b889",401:"17896441",470:"eb57ac31",473:"4fd9a7bc",604:"e441874f",647:"5e95c892",742:"aba21aa0",787:"3720c009",920:"baa2ac4e"}[e]||e)+"."+{48:"11dbf064",98:"262d4c3e",237:"821e4ed3",278:"02df1f30",279:"a0ef743d",318:"72d06e9d",355:"91aa9e27",401:"bf35a9af",470:"7a07491b",473:"f69785ed",604:"af7d71ff",647:"4607d1a8",742:"026e0f5d",787:"aa33a29a",920:"cfdebf35"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="html-css-tananyag:",f.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var i,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",o+a),i.src=e),r[e]=[t];var s=(t,a)=>{i.onerror=i.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),t)return t(a)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/html-css-tananyag/",f.gca=function(e){return e={17896441:"401",a94703ab:"48",a7bd4aaa:"98",d89db163:"278",df203c0f:"279",eb6f804d:"318","3194b889":"355",eb57ac31:"470","4fd9a7bc":"473",e441874f:"604","5e95c892":"647",aba21aa0:"742","3720c009":"787",baa2ac4e:"920"}[e]||e,f.p+f.u(e)},(()=>{var e={354:0,869:0};f.f.j=(t,a)=>{var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=f.p+f.u(t),i=new Error;f.l(n,(a=>{if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,r[1](i)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,n=a[0],i=a[1],c=a[2],d=0;if(n.some((t=>0!==e[t]))){for(r in i)f.o(i,r)&&(f.m[r]=i[r]);if(c)var l=c(f)}for(t&&t(a);d<n.length;d++)o=n[d],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(l)},a=self.webpackChunkhtml_css_tananyag=self.webpackChunkhtml_css_tananyag||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();