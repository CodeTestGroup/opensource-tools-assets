parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Nyri":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timestamp=r,exports.raf=n,exports.start=void 0;var e=r();function r(){return window.performance&&window.performance.now?window.performance.now():Date.now()}function n(n){return window.requestAnimationFrame(function(){var t=r(),o=t-e;o>999?o=1/60:o/=1e3,e=t,n(o)})}var t=function(e){return n(function r(t){e(t),n(r)})};exports.start=t;
},{}],"1Wxh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t,i){t=t||1,i=i||-1;var d=document.createElement("canvas"),n=d.getContext("2d");return n.height=e.height,n.width=e.width,n.drawImage(e,0,0),n.clearRect(0,0,e.width,e.height),n.scale(i,t),n.drawImage(e,0,0,e.width*i,e.height*t),d},t=function(t,i){var d;return(t=t||{idle:[{height:10,width:10}]}).idleRight=t.idleRight||t.idle,t.idleLeft=t.idleLeft||t.idle.map(function(t){return Object({s:e(t.s),d:t.d})}),t.moveRight=t.moveRight||t.move||t.idleRight,t.moveLeft=t.moveLeft||t.moveRight.map(function(t){return Object({s:e(t.s),d:t.d})}),t.idleRightUpsDown=t.idleRightUpsDown||t.idleRight.map(function(t){return Object({s:e(t.s,-1,1),d:t.d})}),t.moveRightUpsDown=t.moveRightUpsDown||t.moveRight.map(function(t){return Object({s:e(t.s,-1,1),d:t.d})}),t.idleLeftUpsDown=t.idleLeftUpsDown||t.idleRight.map(function(t){return Object({s:e(t.s,-1),d:t.d})}),t.moveLeftUpsDown=t.moveLeftUpsDown||t.moveRight.map(function(t){return Object({s:e(t.s,-1),d:t.d})}),Object.keys(t).map(function(e){t[e].ctl=Object.create({timeline:0,duration:.5,i:0})}),(d=i||{h:t.idleRight[0].s.height,w:t.idleRight[0].s.width,speed:100,sprites:t,toSide:null,_toRecycle:!1,xhit:0,yhit:0,type:"",followers:[],life:0,x:0,y:0,_prevx:0,_prevy:0,spriteSet:"",movex:null,color:null,falling:!0,upsidedown:!1}).whit=d.w,d.hhit=d.h,d},i=t;exports.default=i;
},{}],"Lt4M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={PSIZE:1},t=function(t,l){var r=document.createElement("canvas");r.width=t[0].length*e.PSIZE,r.height=t.length*e.PSIZE;for(var a=r.getContext("2d",{alpha:!0}),n=0;n<t.length;n++)for(var o=t[n].split(""),h=0;h<o.length;h++)a.beginPath(),a.rect(h*e.PSIZE,n*e.PSIZE,e.PSIZE,e.PSIZE),a.fillStyle=l[o[h]],a.fill(),a.closePath();return r},l=t;exports.default=l;
},{}],"dLGF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var b=G(require("../../engine/factories.js"));function G(b){if(b&&b.__esModule)return b;var G={};if(null!=b)for(var H in b)if(Object.prototype.hasOwnProperty.call(b,H)){var e=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(b,H):{};e.get||e.set?Object.defineProperty(G,H,e):G[H]=b[H]}return G.default=b,G}var H={" ":"rgba(255,255,255,0)",x:"#EA9CAE",G:"#C36278",H:"#9C344C",g:"#75142A",b:"#34000B",w:"#D4C175FF",y:"#EA9CAE",m:"#F07E98",p:"#DDDDDDFF"},e="    ppypypp     ",r="   pympppypy    ",g="  pympyppmpyy   ",t="HhxxxxxxxxxHHHH ",w="HGGGGGbbbGGGbbbb",p="HGGGGbwwwbGbwwwb",s="HGGGGbwbwbGbwwbb",o="HgGGGbwwwbGbwwwb",y="HgxGGGbbbGGGbbb ",i="HgxGGGGGwwwwGH  ",a="HHgxGGGwGGGGGH  ",c="HGGGGGGGGGGGHH  ",d="bHGHHHHHHHdggb  ",x=" bHHHHHHHgggb   ",n=" bHHbbbbbgggb   ",F=" bHb     bgb    ",f=" bHb     bgb    ",u={idle:[{s:b.spriteFactory([e,r,g,t,w,p,s,o,y,i,a,c,d,x,n,F,f],H),d:2},{s:b.spriteFactory([e,r,g,t,w,p,"HGGGGbwbwbGbwwwb","HgGGGbwwwbGbwbwb",y,i,a,c,d,x,n,F,f],H),d:.1},{s:b.spriteFactory([e,r,g,t,w,p,"HGGGGbwbwbGbbwwb",o,y,i,a,c,d,x,n,F,f],H),d:.1},{s:b.spriteFactory([e,r,g,t,"HGGGGGGGGGGGGGGb","HGGGGbbbbbGbbbbb","HGGGGbbbbbGbbbbb","HgGGGGGGGGGGGGb ","HgxGGGGGGGGGGHb ",i,a,c,d,x,n,F,f],H),d:.2}],move:[{s:b.spriteFactory([e,r,g,t,w,p,s,o,y,i,a,c,d,"bHHHHHHHHgggb   ","bgggbbbbbgggb   ","bgbb     bbb    ","bb              "],H),d:.2},{s:b.spriteFactory([e,r,g,t,w,p,s,o,y,i,a,c,d,"bHHHbbbbbgggb   ","bbbb     bbbb   ","                ","                "],H),d:.2},{s:b.spriteFactory([e,r,g,t,w,p,s,o,y,i,a,c,d,"bHHHHHHHHgggb   ","bbbbbbbbbggb    ","        bgb     ","        bb      "],H),d:.2},{s:b.spriteFactory([e,r,g,t,w,p,s,o,y,i,a,c,d,"bbHHHHHHHgggb   ","  bbbbbbbggb    ","        bgb     ","        bb      "],H),d:.2},{s:b.spriteFactory([e,r,g,t,w,p,s,o,y,i,a,c,d,"bHHHbbbbbgggb   ","bbbb     bbbb   ","                ","                "],H),d:.2}]},l=u;exports.default=l;
},{"../../engine/factories.js":"mD5A"}],"R/MI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.byId=exports.randomPick=exports.recycle=exports.groupBy=exports.mapKeys=exports.randomMinMax=void 0;var r=Math.random,e=function(e,t){return Math.floor(r()*(t-e+1))+e};exports.randomMinMax=e;var t=function(r){return Object.keys(r).map(function(e){return r[e]})};exports.mapKeys=t;var n=function(r,e){for(var t,n={},o=r.map(function(r){return r[e]}),u=0;u<o.length;u++)n[t=o[u]]||(n[t]=r.filter(function(r){return r[e]===t}));return n};exports.groupBy=n;var o=function(r){for(var e=r.length-1;e>=0;e--)if(r[e]._toRecycle)return r[e]._toRecycle=!1,r[e];return null};exports.recycle=o;var u=function(r){return r[e(0,r.length-1)]};exports.randomPick=u;var c=function(r){return document.getElementById(r)};exports.byId=c;
},{}],"s6CL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../engine/factories.js")),r=t(require("../../engine/utils.js"));function t(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(r,t,n):r[t]=e[t]}return r.default=e,r}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){o(e,r,t[r])})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=function(t,o,i,c){o=o||"";var f=n({},i,c),u=Array(t).fill(),a=u.map(function(e,t){return u.reduce(function(e){return e+r.randomPick(Object.keys(i))},"")}),l=function(e){return u.reduce(function(t){return t+r.randomPick(Object.keys(e))},"")};if(-1!==o.indexOf("t")&&(a[0]=l(c),a[1]=l(c),a[2]=l(f)),-1!==o.indexOf("b")&&(a[t-1]=l(c),a[t-2]=l(c),a[t-3]=l(f)),-1!==o.indexOf("l"))for(var s=0;s<t;s++){a[s]=a[s].split("");for(var O=0;O<3;O++)a[s][O]=r.randomPick(Object.keys(O<=1?c:f));a[s]=a[s].join("")}if(-1!==o.indexOf("r"))for(s=0;s<t;s++){a[s]=a[s].split("");for(O=0;O<3;O++)a[s][t-O-1]=r.randomPick(Object.keys(O<=1?c:f));a[s]=a[s].join("")}return{idle:[{s:e.spriteFactory(a,f)}]}},c=i;exports.default=c;
},{"../../engine/factories.js":"mD5A","../../engine/utils.js":"R/MI"}],"UZeV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=e(require("../../engine/factories.js")),r=e(require("../../engine/utils.js"));function e(a){if(a&&a.__esModule)return a;var r={};if(null!=a)for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var x=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,e):{};x.get||x.set?Object.defineProperty(r,e,x):r[e]=a[e]}return r.default=a,r}var x=function(e,x){var t={a:"#1C1C1C",x:"#1E1E1E"},i={};i.t1=Array(20).fill().map(function(a,r){return Array(3+~~(r/4)).fill("a").concat(Array(5).fill("x")).concat(Array(13+~~(r/4)).fill("a")).join("").slice(0,20)}),i.t2=["aaaaaaaaaaaaaaaaaaaa","aaaaxaaaaaaaaaaaaaaa","aaaaxaaaaaaaaaaaaaaa","aaxxxxxaaaaaaaaaaaaa","aaaaxaaaaaaaaaaaaaaa","aaaaxaaaaaaaaaaaaaaa","aaaaaaaxaaaaaaaaaaax","xxaaaaaxaaaaaaaaaxxx","aaaaaxxxxxaaaaaaaaax","aaaaaaaxaaaaaaaaaaax","aaaaaaaxaaaaaaaaaaaa","aaaaaaaaaaaxaaaaaaaa","aaaaaaaaaaaxaaaaaaaa","aaaaaaaaaxxxxxaaaaaa","aaaxaaaaaaaxaaaaaaaa","aaaxaaaaaaaxaaaaaaaa","axxxxxaaaaaaaaaaaaaa","aaaxaaaaaaaaaaaaaaaa","aaaxaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"];var n=Array(e).fill();n.map(function(a,e){return n.reduce(function(a){return a+r.randomPick(Object.keys(t))},"")});return{idle:[{s:a.spriteFactory(i[x],t)}]}},t=x;exports.default=t;
},{"../../engine/factories.js":"mD5A","../../engine/utils.js":"R/MI"}],"cKP8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../engine/factories.js"));function r(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var x=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};x.get||x.set?Object.defineProperty(r,t,x):r[t]=e[t]}return r.default=e,r}var t={" ":"rgba(255,255,255,0)",x:"#DDDDDDFF"},x={idle:[{s:e.spriteFactory(["  xx  "," xxxx ","xxxxxx"," xxxx ","  xx  "],t),d:.2}],move:[]},o=x;exports.default=o;
},{"../../engine/factories.js":"mD5A"}],"uQ4g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../engine/factories.js"));function r(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};t.get||t.set?Object.defineProperty(r,a,t):r[a]=e[a]}return r.default=e,r}var a={" ":"rgba(255,255,255,0)",a:"#000",x:"#980000",y:"#FF0000"},t={idle:[{s:e.spriteFactory(["a aa a"," aaaa ","aaaaaa"," ayya ","a aa a"],a),d:.2}]},o=t;exports.default=o;
},{"../../engine/factories.js":"mD5A"}],"v+Ju":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../engine/factories.js"));function r(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}function t(r){var t={" ":"rgba(255,255,255,0)",x:"#fff"};r<1&&(r=1,t.x=t[" "]);var o=Array(4).fill("x".repeat(r)),i={idle:[{s:e.spriteFactory(o,t),d:.2}],move:[]};return i}var o=t;exports.default=o;
},{"../../engine/factories.js":"mD5A"}],"ndVZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"player",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"wallFactory",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"bgTileFactory",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"star",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"enemy",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"lifeBar",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(exports,"scorePanel",{enumerable:!0,get:function(){return i.default}});var e=l(require("./sprites/player.js")),r=l(require("./sprites/wall.js")),t=l(require("./sprites/bgTile.js")),n=l(require("./sprites/star.js")),u=l(require("./sprites/enemy.js")),s=l(require("./sprites/lifeBar.js")),i=l(require("./sprites/scorePanel.js"));function l(e){return e&&e.__esModule?e:{default:e}}
},{"./sprites/player.js":"dLGF","./sprites/wall.js":"s6CL","./sprites/bgTile.js":"UZeV","./sprites/star.js":"cKP8","./sprites/enemy.js":"uQ4g","./sprites/lifeBar.js":"v+Ju","./sprites/scorePanel.js":"v+Ju"}],"mD5A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"entityFactory",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"spriteFactory",{enumerable:!0,get:function(){return n.default}}),exports.worldFactory=void 0;var e=s(require("../engine/main.js")),r=s(require("../custom/main.js")),t=s(require("../engine/loop.js")),o=u(require("./entityFactory.js")),n=u(require("./spriteFactory.js")),i=s(require("../custom/sprites.js"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}var a=function(){for(var n={count:0,lost:!1,things:{}},u=Object.keys(r.POOLS),s=0;s<u.length;s++){n.things[u[s]]=[];for(var a=r.POOLS[u[s]]||100;a>=1;a--){var c=(0,o.default)();c._toRecycle=!0,n.things[u[s]].push(c)}}return r.afterWorldCreate&&(r.afterWorldCreate(n,i),t.start(e.update)),n};exports.worldFactory=a;
},{"../engine/main.js":"4lqk","../custom/main.js":"yg/q","../engine/loop.js":"Nyri","./entityFactory.js":"1Wxh","./spriteFactory.js":"Lt4M","../custom/sprites.js":"ndVZ"}],"s5RT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){var n,r,t,e,i,f=function(n){return Math.sin(6.283184*n)},a=function(n){return.003959503758*Math.pow(2,(n-128)/12)},o=function(n,r,t){var e,i,f,o,c,p,v,s=u[n.i[0]],h=n.i[1],w=n.i[3],l=u[n.i[4]],d=n.i[5],M=n.i[8],g=n.i[9],L=n.i[10]*n.i[10]*4,y=n.i[11]*n.i[11]*4,m=n.i[12]*n.i[12]*4,A=1/m,D=n.i[13],b=t*Math.pow(2,2-n.i[14]),x=new Int32Array(L+y+m),I=0,P=0;for(e=0,i=0;e<L+y+m;e++,i++)i>=0&&(i-=b,p=a(r+(15&(D=D>>8|(255&D)<<4))+n.i[2]-128),v=a(r+(15&D)+n.i[6]-128)*(1+8e-4*n.i[7])),f=1,e<L?f=e/L:e>=L+y&&(f-=(e-L-y)*A),o=p,w&&(o*=f*f),c=s(I+=o)*h,o=v,M&&(o*=f*f),c+=l(P+=o)*d,g&&(c+=(2*Math.random()-1)*g),x[e]=80*c*f|0;return x},u=[f,function(n){return n%1<.5?1:-1},function(n){return n%1*2-1},function(n){var r=n%1*4;return r<2?r-1:3-r}];this.init=function(f){n=f,r=f.endPattern,t=0,e=f.rowLen*f.patternLen*(r+1)*2,i=new Int32Array(e)},this.generate=function(){var a,c,p,v,s,h,w,l,d,M,g,L,y,m,A=new Int32Array(e),D=n.songData[t],b=n.rowLen,x=n.patternLen,I=0,P=0,U=!1,j=[];for(p=0;p<=r;++p)for(w=D.p[p],v=0;v<x;++v){var C=w?D.c[w-1].f[v]:0;C&&(D.i[C-1]=D.c[w-1].f[v+x]||0,C<16&&(j=[]));var O=u[D.i[15]],R=D.i[16]/512,W=Math.pow(2,D.i[17]-9)/b,_=D.i[18],B=D.i[19],E=43.23529*D.i[20]*3.141592/44100,k=1-D.i[21]/255,q=1e-5*D.i[22],z=D.i[23]/32,F=D.i[24]/512,G=6.283184*Math.pow(2,D.i[25]-9)/b,H=D.i[26]/255,J=D.i[27]*b&-2;for(g=(p*x+v)*b,s=0;s<4;++s)if(h=w?D.c[w-1].n[v+s*x]:0){j[h]||(j[h]=o(D,h,b));var K=j[h];for(c=0,a=2*g;c<K.length;c++,a+=2)A[a]+=K[c]}for(c=0;c<b;c++)(M=A[l=2*(g+c)])||U?(L=E,_&&(L*=O(W*l)*R+.5),P+=(L=1.5*Math.sin(L))*(y=k*(M-P)-(I+=L*P)),M=3==B?P:1==B?y:I,q&&(M=(M*=q)<1?M>-1?f(.25*M):-1:1,M/=q),U=(M*=z)*M>1e-5,m=M*(1-(d=Math.sin(G*l)*F+.5)),M*=d):m=0,l>=J&&(m+=A[l-J+1]*H,M+=A[l-J]*H),A[l]=0|m,A[l+1]=0|M,i[l]+=0|m,i[l+1]+=0|M}return++t/n.numChannels},this.createWave=function(){var n=44+2*e-8,r=n-36,t=new Uint8Array(44+2*e);t.set([82,73,70,70,255&n,n>>8&255,n>>16&255,n>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&r,r>>8&255,r>>16&255,r>>24&255]);for(var f=0,a=44;f<e;++f){var o=i[f];o=o<-32767?-32767:o>32767?32767:o,t[a++]=255&o,t[a++]=o>>8&255}return t},this.getData=function(n,r){for(var t=2*Math.floor(44100*n),e=new Array(r),f=0;f<2*r;f+=1){var a=t+f;e[f]=n>0&&a<i.length?i[a]/32768:0}return e}},r={songData:[{i:[3,100,128,0,3,201,128,2,0,0,0,6,49,0,0,0,139,4,1,3,30,184,119,244,147,6,84,6],p:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],c:[{n:[135,,,,138,,,,,,140,,138,,,,135,,,,138,,,,140,,,,138],f:[]}]},{i:[0,255,116,1,0,255,120,0,1,127,4,6,35,0,0,0,0,0,0,2,14,0,10,32,0,0,0,0],p:[,,,,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],c:[{n:[],f:[]},{n:[144,,,,144,,,,144,,,,144,,,,144,,,,144,,,,144,,,,144],f:[]}]},{i:[0,0,140,0,0,0,140,0,0,60,4,10,34,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[,,,,,,,,3,3,3,3,3,3,3,3,3,3,3,3,3,3],c:[{n:[],f:[]},{n:[],f:[]},{n:[135,135,,,135,,,,135,,,,135,,,,135,,,,135,,,,135,,,,135],f:[]}]},{i:[3,255,128,0,0,255,140,0,0,127,2,2,23,0,0,0,96,3,1,3,94,79,0,32,84,2,12,4],p:[,,,,,,,,,,4,4,4,4,4,4,4,4,4,4,4,4],c:[{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[146,,,,144,,,,143,,,,142,,,,146,,,,144,,,,143,,,,140,142],f:[]}]},{i:[3,255,128,0,0,255,140,0,0,127,2,2,23,0,0,0,96,3,1,3,94,79,0,32,84,2,12,4],p:[,,,,,,,,,,,,5,5,6,7,5,5,6,7,5,5],c:[{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[,,145,,,,,,,,142,,,,,,,,145,,,,143,,,,,,,,139],f:[]},{n:[,,145,,,,,,,,142,,,,,,,,145,,,,149,,,,,,,,139],f:[]},{n:[,,145,,,,,,,,142,,,,,,,,145,,,,147,,149,,,,,,137],f:[]}]},{i:[0,255,106,1,0,255,106,0,1,0,5,7,164,0,0,0,0,0,0,2,255,0,2,32,83,5,25,1],p:[,,,,,,,,,,,,,,,,,,,8],c:[{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[,,,,,,,,,,,,,,,,,,,,135],f:[]}]},{i:[0,160,128,1,0,160,128,0,1,210,4,7,41,0,0,0,60,4,1,2,255,0,0,32,61,5,32,6],p:[,,,,,,,,,,,,,,,,9,9,9,9,9,9],c:[{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[,,,,135,,,,,,,,135,,,,,,,,135,,,,,,,,135],f:[]}]},{i:[0,255,116,1,0,255,120,0,1,127,4,6,35,0,0,0,0,0,0,2,14,0,10,32,0,0,0,0],p:[,,,,,,,,,,,,,,,,10,10,10,10,10,10],c:[{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[135,,,,,,,,135,,,,,,,,135,,,,,,,,135],f:[]}]}],rowLen:5513,patternLen:32,endPattern:21,numChannels:8},t=function(){var t=new n;t.init(r);var e=Date.now();return function n(){if(t.generate()>=1){var r=t.createWave(),i=document.createElement("audio");return i.loop=!0,i.src=URL.createObjectURL(new Blob([r],{type:"audio/wav"})),i}return Date.now()-e>1e4?void console.log("music err"):n()}()},e=t;exports.default=e;
},{}],"Vc30":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./main.js")),t=n(require("../custom/main.js")),o=r(require("../custom/music.js"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}var u={65:"moveLeft",68:"moveRight",87:"moveUp",83:"moveDown",37:"moveLeft",39:"moveRight",38:"moveUp",40:"moveDown"},i={anyKey:null};Object.keys(u).map(function(e){i[e]=!1});var a=(0,o.default)();document.onkeydown=function(o){t.iniMsg&&(t.iniMsg=!1,a.play()),i.anyKey=o.keyCode,27===o.keyCode&&t.RECORD_INPUT&&e.stopRecordFn();var r=u[o.keyCode];r&&(i[r]=!0)},document.onkeyup=function(e){var t=u[e.keyCode];t&&(i[t]=!1)};var c=i;exports.default=c;
},{"./main.js":"4lqk","../custom/main.js":"yg/q","../custom/music.js":"s5RT"}],"2OrF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handlePlayerColl=exports.checkCollision=void 0;var t=function(t){return{x0:t.x+(t.xhit||0),x1:t.x+(t.whit||t.w)+(t.xhit||0),y0:t.y+(t.yhit||0),y1:t.y+(t.hhit||t.h)+(t.yhit||0)}},r=function(t){return{x:t._prevx?t._prevx:t.x,y:t._prevy?t._prevy:t.y,w:t.w,h:t.h,xhit:t.xhit,yhit:t.yhit,whit:t.whit,hhit:t.hhit}},e=function(t,r,e){var a;return a=[t[e+"0"],t[e+"1"],r[e+"0"],r[e+"1"]].sort(function(t,r){return t-r}),{overlap:t[e+"1"]>r[e+"0"]&&t[e+"0"]<r[e+"1"],val:a[2]-a[1]}},a=function(r,a,h,o){h=h||4*r.w;for(var n,i,l=[],x=0;x<a.length;x++)a[x]._toRecycle||(n=(n=a[x].x-r.x)<0?-1*n:n,i=(i=a[x].y-r.y)<0?-1*i:i,(n<h||i<h)&&l.push(a[x]));var v,y,s,u,p,c=t(r),f=[];for(x=l.length-1;x>=0;x--)y=l[x],v=t(y),u=e(c,v,"x"),p=e(c,v,"y"),u.overlap&&p.overlap&&(s=u.val*p.val,f.push({source:r,target:y,area:s,overlapx:u,overlapy:p}));return f.sort(function(t,r){return t.area-r.area})};exports.checkCollision=a;var h=function(a){var h,o,n,i,l,x,v,y,s,u;2!==a.length||a[0].target.y!==a[1].target.y&&a[0].target.x!==a[1].target.x||(a=[Math.abs(a[0].area)>=Math.abs(a[1].area)?a[0]:a[1]]),s=["y","x"];for(var p=a.length-1;p>=0;p--){n=a[p].source,u=a[p].target,h=t(n),o=t(u);for(var c=s.length-1;c>=0;c--)v=t(r(n)),y=t(r(u)),!e(v,y,x=s[c]).overlap&&(i=Math.abs(n[x]-v[x+"0"])/(n[x]-v[x+"0"])||0,l=Math.min(Math.abs(h[x+"0"]-o[x+"1"]),Math.abs(h[x+"1"]-o[x+"0"])),n[x]-=l*i)}};exports.handlePlayerColl=h;
},{}],"KZL8":[function(require,module,exports) {
var define;
var t;!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof t&&t.amd?t("canvasTxt",[],n):"object"==typeof exports?exports.canvasTxt=n():e.canvasTxt=n()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={debug:!1,align:"center",textSize:14,font:"Arial",lineHeight:null,drawText:function(t,e,n,r,i,o){var s=[n,r,i,o],u=this.textSize+"px "+this.font;t.font=u;var a=parseInt(s[1])+parseInt(s[3])/2+parseInt(this.textSize)/2,l=parseInt(s[0])+parseInt(s[2])/2;t.textAlign="center",this.align&&("right"==this.align?(l=parseInt(s[0])+parseInt(s[2]),t.textAlign="right"):"left"==this.align&&(l=parseInt(s[0]),t.textAlign="left"));var f=[];e.split("\n").forEach(function(e){var n=t.measureText(e).width;if(n<=s[2])f.push(e);else{var r,i,o,u=e,a=s[2];for(n=t.measureText(u).width;n>a;){for(r=0,i=0,o="";i<a;)r++,o=u.substr(0,r),i=t.measureText(u.substr(0,r)).width;var l=r;if(" "!=u.substr(r,1)){for(;" "!=u.substr(r,1)&&0!=r;)r--;0==r&&(r=l),o=u.substr(0,r)}u=u.substr(r),n=t.measureText(u).width,f.push(o)}0<n&&f.push(u)}});var p=this.getTextHeight(e,this.font,this.textSize);this.lineHeight&&(p=this.lineHeight);var c=p*(f.length-1);a-=c/2,f.forEach(function(e){t.fillText(e,l,a),a+=p}),this.debug&&(t.lineWidth=5,t.strokeStyle="yellow",t.strokeRect(s[0],s[1],s[2],s[3]),t.lineWidth=3,t.strokeStyle="red",t.moveTo(l,s[1]),t.lineTo(l,parseInt(s[1])+parseInt(s[3])),t.stroke())},getTextHeight:function(t,e){var n,r=document.createElement("div");return r.style.cssText="position:fixed;padding:0;left:-9999px;top:-9999px;font:"+e+";font-size:"+this.textSize+"px",r.textContent=t,document.body.appendChild(r),n=parseInt(getComputedStyle(r).getPropertyValue("height"),10),document.body.removeChild(r),n}};e.default=r}])});
},{}],"7qfX":[function(require,module,exports) {
"use strict";function e(){this.setSettings=function(e){for(var r=0;r<24;r++)this[String.fromCharCode(97+r)]=e[r]||0;this.c<.01&&(this.c=.01);var t=this.b+this.c+this.e;if(t<.18){var a=.18/t;this.b*=a,this.c*=a,this.e*=a}}}function r(){var r,t,a,s,i,n,h,f,c,o,u,v;this._params=new e,this.reset=function(){var e=this._params;s=100/(e.f*e.f+.001),i=100/(e.g*e.g+.001),n=1-e.h*e.h*e.h*.01,h=-e.i*e.i*e.i*1e-6,e.a||(u=.5-e.n/2,v=5e-5*-e.o),f=1+e.l*e.l*(e.l>0?-.9:10),c=0,o=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.totalReset=function(){this.reset();var e=this._params;return r=e.b*e.b*1e5,t=e.c*e.c*1e5,a=e.e*e.e*1e5+12,3*((r+t+a)/3|0)},this.synthWave=function(e,b){var p=this._params,w=1!=p.s||p.v,d=p.v*p.v*.1,m=1+3e-4*p.w,l=p.s*p.s*p.s*.1,k=1+1e-4*p.t,g=1!=p.s,x=p.x*p.x,j=p.g,y=p.q||p.r,A=p.r*p.r*p.r*.2,_=p.q*p.q*(p.q<0?-1020:1020),M=p.p?32+((1-p.p)*(1-p.p)*2e4|0):0,q=p.d,S=p.j/2,U=p.k*p.k*.01,C=p.a,O=r,R=1/r,W=1/t,P=1/a,z=5/(1+p.u*p.u*20)*(.01+l);z>.8&&(z=.8),z=1-z;for(var B,D,E,F,G,H,I=!1,J=0,K=0,L=0,N=0,Q=0,T=0,V=0,X=0,Y=0,Z=0,$=new Array(1024),ee=new Array(32),re=$.length;re--;)$[re]=0;for(re=ee.length;re--;)ee[re]=2*Math.random()-1;for(re=0;re<b;re++){if(I)return re;if(M&&++Y>=M&&(Y=0,this.reset()),o&&++c>=o&&(o=0,s*=f),(s*=n+=h)>i&&(s=i,j>0&&(I=!0)),D=s,S>0&&(Z+=U,D*=1+Math.sin(Z)*S),(D|=0)<8&&(D=8),C||((u+=v)<0?u=0:u>.5&&(u=.5)),++K>O)switch(K=0,++J){case 1:O=t;break;case 2:O=a}switch(J){case 0:L=K*R;break;case 1:L=1+2*(1-K*W)*q;break;case 2:L=1-K*P;break;case 3:L=0,I=!0}y&&((E=0|(_+=A))<0?E=-E:E>1023&&(E=1023)),w&&m&&((d*=m)<1e-5?d=1e-5:d>.1&&(d=.1)),H=0;for(var te=8;te--;){if(++V>=D&&(V%=D,3==C))for(var ae=ee.length;ae--;)ee[ae]=2*Math.random()-1;switch(C){case 0:G=V/D<u?.5:-.5;break;case 1:G=1-V/D*2;break;case 2:G=.225*(((G=1.27323954*(F=6.28318531*((F=V/D)>.5?F-1:F))+.405284735*F*F*(F<0?1:-1))<0?-1:1)*G*G-G)+G;break;case 3:G=ee[Math.abs(32*V/D|0)]}w&&(B=T,(l*=k)<0?l=0:l>.1&&(l=.1),g?(Q+=(G-T)*l,Q*=z):(T=G,Q=0),N+=(T+=Q)-B,G=N*=1-d),y&&($[X%1024]=G,G+=$[(X-E+1024)%1024],X++),H+=G}H*=.125*L*x,e[re]=H>=1?32767:H<=-1?-32768:32767*H|0}return b}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=new r;window.jsfxr=function(e){t._params.setSettings(e);var r=t.totalReset(),a=new Uint8Array(4*((r+1)/2|0)+44),s=2*t.synthWave(new Uint16Array(a.buffer,44),r),i=new Uint32Array(a.buffer,0,44);i[0]=1179011410,i[1]=s+36,i[2]=1163280727,i[3]=544501094,i[4]=16,i[5]=65537,i[6]=44100,i[7]=88200,i[8]=1048578,i[9]=1635017060,i[10]=s,s+=44;for(var n=0,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f="data:audio/wav;base64,";n<s;n+=3){var c=a[n]<<16|a[n+1]<<8|a[n+2];f+=h[c>>18]+h[c>>12&63]+h[c>>6&63]+h[63&c]}return f};var a={jump:jsfxr([0,,.1812,,.1349,.4524,,.2365,,,,,,.0819,,,,,1,,,,,.5]),pick:jsfxr([0,,.0669,.5362,.3085,.6733,,,,,,.4497,.6243,,,,,,1,,,,,.5]),hurt:jsfxr([0,,.0367,,.2509,.533,,-.4983,,,,,,.0226,,,,,1,,,,,.5]),again:jsfxr([1,,.185,,.33,.4393,,.2694,,,,,,,,.5969,,,1,,,,,.5])},s={};Object.keys(a).map(function(e){var r=a[e],t=new Audio;t.src=r,s[e]=t});var i=s;exports.default=i;
},{}],"yg/q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iniMsg=exports.PAUSE=exports.CANVAS_H=exports.CANVAS_W=exports.thingsHandler=exports.beforeIterateThings=exports.afterWorldCreate=exports.PALETTE=exports.TILESCALE=exports.PSIZE=exports.MAP_SIZE=exports.THINGS_PAINT_ORDER=exports.POOLS=exports.RECORDED_INPUT=exports.RECORD_INPUT=void 0;var e=f(require("../engine/factories.js")),t=s(require("../engine/input.js")),r=f(require("../engine/collisions.js")),a=s(require("../engine/entityFactory.js")),n=s(require("../engine/spriteFactory.js")),i=f(require("../engine/utils.js")),o=s(require("canvas-txt")),l=s(require("./sounds.js"));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}var u=240;exports.CANVAS_W=u;var c=140;exports.CANVAS_H=c;var d=!1;exports.PAUSE=d;var p=30,v=0,y=!1;exports.RECORD_INPUT=y;var x=[];exports.RECORDED_INPUT=x;var g={};exports.POOLS=g;var m=["walls","bgTiles","players","star","enemy","lifeBar"];exports.THINGS_PAINT_ORDER=m;var h=20;exports.MAP_SIZE=h;var F=1;exports.PSIZE=F;var A=30;exports.TILESCALE=A;var w={};exports.PALETTE=w;var P,S=function(e,t,r){exports.PAUSE=d=!0;for(var n=[],o=[],l={up:void 0,down:void 0,right:void 0,left:void 0},s=[],f=0;f<c/e;f++){s.push([]);for(var p=0;p<u/e;p++){var v=Object.create(l);v.y=f*e,v.x=p*e,s[f].push(v)}}s.map(function(e,t){e.map(function(r,a){r.up=s[t-1]?s[t-1][a]:void 0,r.right=e[a+1]?e[a+1]:void 0,r.left=e[a-1]?e[a-1]:void 0,r.down=s[t+1]?s[t+1][a]:void 0})});for(var y=10;y>=0;y--){var x=s.reduce(function(e,t){return t.concat(e)},[]);if(r){r.map(function(e){x.filter(function(t){return t.x===e.x&&t.y===e.y}).map(function(e){e.trail=!0})});var g=i.randomPick(r);if(!g)continue;var m=g.y/e,h=g.x/e}else m=i.randomMinMax(0,s.length-1),h=i.randomMinMax(0,s[0].length-1);for(var F=s[m][h],A=100;A>=0;A--)F.trail=!0,F=F[i.randomPick(Object.keys(l).filter(function(e){return!!F[e]}))];var w=i.randomPick([[{a:"#FFAAAA"},{f:"#D46A6A"}],[{a:"#FFD1AA"},{f:"#D49A6A"}],[{a:"#669999"},{f:"#407F7F"}],[{a:"#88CC88"},{f:"#55AA55"}],[{a:"#801515"},{f:"#550000"}],[{a:"#804515"},{f:"#552600"}],[{a:"#0D4D4D"},{f:"#003333"}],[{a:"#116611"},{f:"#004400"}],[{a:"#CD88AF"},{f:"#AA5585"}],[{a:"#661141"},{f:"#440027"}]]);x.filter(function(e){return!e.trail}).map(function(r){var i="";i+=r.right&&r.right.trail?"r":"",i+=r.left&&r.left.trail?"l":"",i+=r.up&&r.up.trail?"t":"",i+=r.down&&r.down.trail?"b":"";var o=(0,a.default)(t.wallFactory(e,i,w[0],w[1]));o.y=r.y,o.x=r.x,n.push(o)});var P=x.filter(function(e){return e.trail}),S=i.randomPick(P);for(A=100;A>=0;A--){var E=(0,a.default)(t.bgTileFactory(e,"t2"));if(!S)return;(S=S[i.randomPick(Object.keys(l).filter(function(e){return!!S&&!!S[e]&&S[e].trail}))])&&(S.bg=!0,E.x=S.x,E.y=S.y,o.push(E))}if(S)break}P.filter(function(e){return!e.bg}).map(function(r){var n=(0,a.default)(t.bgTileFactory(e,"t1"));n.x=r.x,n.y=r.y,o.push(n)});for(var _=[],b=3;b>=0;b--){var O=i.randomPick(P),C=(0,a.default)(t.star),I=(C.h-e)/2;C.x=O.x-I,C.y=O.y-I,C.type="star",_.push(C)}for(var k=[],j=Math.min(3,Math.floor(.2*T));j>=0;j--){var D=i.randomPick(P),M=(0,a.default)(t.enemy);I=(M.h-e)/2;M.x=D.x-I,M.y=D.y-I,M.speed=10+.7*T,M.type="enemy",k.push(M)}return{walls:n,bgTiles:o,sceneMapFlat:x,trails:P,stars:_,enemies:k,pointers:{l:void 0,r:void 0,t:void 0,d:void 0}}},T=0,E=function(e,t){Object.keys(e.things).filter(function(e){return-1!==["player","star","enemy"].indexOf(e)}).map(function(t){e.things[t].map(function(e){return e._toRecycle=!0})}),e.things.walls=t.walls,e.things.bgTiles=t.bgTiles,T+=1,window.setTimeout(function(){e.things.star=t.stars,e.things.enemy=t.enemies,exports.PAUSE=d=!1;var r='Explore a strange anti-gravity cave where rooms you never go back.\n\nAvoid spiders and collect energy pills to *beat* your high score.\n\nControls: "wasd" or "←→↑↓" to walk and invert.\n\nPress any key to start.',a=document.getElementById("game-canvas").getContext("2d");o.default.font="Arial",o.default.textSize=10,o.default.align="center",a.fillStyle="#FF0000FF",o.default.drawText(a,r,45,65,150,0),a.fillStyle="#FFFFFFFF",o.default.drawText(a,r,44,64,150,0)},300)},_=function(e){if(P.lifeBar(p)){var t=(0,a.default)(P.lifeBar(p));t.x=u-35,t.y=5,t.type="lifeBar",e.things.lifeBar=[t]}},b=null,O=function(){b=v;var e="score: "+v,t=document.getElementById("game-canvas").getContext("2d");o.default.font="Arial",o.default.textSize=9,o.default.align="left",o.default.lineHeight=12,t.fillStyle="#FF0000FF",o.default.drawText(t,e,u-90,6,100,0),t.fillStyle="#FFFFFFFF",o.default.drawText(t,e,u-90-1,5,100,0)},C=20,I=function(e,t){var r=i.randomPick(t.sceneMapFlat.filter(function(e){return e.trail})),a=(e.h-C)/2;e.x=r.x-a,e.y=r.y-a,e.type="player",e.speed=100,e.scene=t,l.default.again.play()},k=function(e,t){P=t,_(e);var r=S(C,t);E(e,r);var n=(0,a.default)(t.player);I(n,r),e.things.players=[n],window.setTimeout(function(){n.movey=1},1e3)};exports.afterWorldCreate=k;var j=function(e){};exports.beforeIterateThings=j;var D={v:0,h:0},M=function(e){e.movex=0,t.default.moveLeft&&t.default.moveRight||(t.default.moveLeft&&(e.movex=-1,D.v=-1),t.default.moveRight&&(e.movex=1)),e.toSide=0!==e.movex?e.movex:e.toSide,t.default.moveUp&&t.default.moveDown||e.falling||(t.default.moveUp&&(e.movey=-1,e.upsidedown=!0,l.default.jump.play()),t.default.moveDown&&(e.movey=1,e.upsidedown=!1,l.default.jump.play()))},R=!0;exports.iniMsg=R;var N=function(e,t,a){var n=e.things.players[0];if("enemy"===a){var i=n.x+n.h/2-t.x,s=n.y+n.w/2-t.y,f=Math.atan2(s,i);t.movex=Math.cos(f),t.movey=Math.sin(f)}"star"===a&&((h=r.checkCollision(t,e.things.players)).length&&(t._toRecycle=!0,p<30&&(p+=2),_(e),v+=10,l.default.pick.play()));if("players"===a){if(O(),M(t),(h=r.checkCollision(t,e.things.enemy)).length)if(p-=.5,l.default.hurt.play(),p<=0){var y,x=parseInt(localStorage.getItem("hiscore"));isNaN(x)&&(x=0),v>x?(localStorage.setItem("hiscore",v),y="New High score! but you lose, again..."):y="You lose! try again...";var g=document.getElementById("game-canvas").getContext("2d");T=0,v=0,o.default.font="Arial",o.default.textSize=14,o.default.align="left",o.default.lineHeight=12,g.fillStyle="#FF0000FF",o.default.drawText(g,y,u/3,20,100,100),g.fillStyle="#FFFFFFFF",o.default.drawText(g,y,u/3-1,19,100,100),exports.PAUSE=d=!0,window.setTimeout(function(){p=30;var t=S(C,P);E(e,t),I(n,t),exports.PAUSE=d=!1},3e3)}else _(e);t.falling=!0;for(var m=10;m>=0;m--){var h;if(!(h=r.checkCollision(t,e.things.walls)).length)break;r.handlePlayerColl(h)}if(t.y===t._prevy&&(t.falling=!1),t.x<t.w/5*-4){_(e);var F=t.scene.trails.filter(function(e){return 0===e.x}).map(function(e){var t={};return t.x=u-C,t.y=e.y,t}),A=S(C,P,F);return E(e,A),t.scene=A,t.x=u-t.w/4,void(t._prevx=t.x)}if(t.x+t.w/5>u){_(e);F=t.scene.trails.filter(function(e){return e.x===u-C}).map(function(e){var t={x:0};return t.y=e.y,t}),A=S(C,P,F);return t.scene.pointers.r=A,E(e,A),t.scene=A,t.x=-t.w/4,void(t._prevx=t.x)}if(t.y<t.h/5*-4){_(e);F=t.scene.trails.filter(function(e){return 0===e.y}).map(function(e){var t={};return t.x=e.x,t.y=c-C,t}),A=S(C,P,F);return E(e,A),t.scene=A,t.y=c-t.h/4,void(t._prevy=t.y)}if(t.y+t.h/5>c){_(e);F=t.scene.trails.filter(function(e){return e.y===c-C}).map(function(e){var t={};return t.x=e.x,t.y=0,t}),A=S(C,P,F);return E(e,A),t.scene=A,t.y=-t.h/4,void(t._prevy=t.y)}}};exports.thingsHandler=N;
},{"../engine/factories.js":"mD5A","../engine/input.js":"Vc30","../engine/collisions.js":"2OrF","../engine/entityFactory.js":"1Wxh","../engine/spriteFactory.js":"Lt4M","../engine/utils.js":"R/MI","canvas-txt":"KZL8","./sounds.js":"7qfX"}],"4lqk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.update=v,exports.TIME_FACTOR=exports.TYPES=exports.CAMERA=exports.CANVAS=exports.WORLD=void 0;var e=r(require("../custom/main.js")),t=r(require("./factories.js")),i=o(require("../engine/input.js"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};o.get||o.set?Object.defineProperty(t,i,o):t[i]=e[i]}return t.default=e,t}var s=t.worldFactory();exports.WORLD=s;var l,n,f=document.createElement("canvas");exports.CANVAS=f,f.id="game-canvas",document.body.appendChild(f);var p=(l=window.innerWidth,n=window.innerHeight,f.width=e.CANVAS_W,void(f.height=e.CANVAS_H));window.onresize=p;var c={xoffset:0,yoffset:0};exports.CAMERA=c;var a,d=f.getContext("2d",{alpha:!1}),h=e.THINGS_PAINT_ORDER.reverse();function v(t){var o,r;if(!e.iniMsg&&(exports.TIME_FACTOR=a=t,Object.keys(s.things).map(function(e){}),!e.PAUSE)){if(s.lost||(d.clearRect(0,0,f.width,f.height),d.rect(0,0,f.width,f.height),d.fillStyle="#000000",d.fill(),d.closePath()),e.RECORDED_INPUT.length&&!e.RECORD_INPUT){if(e.RECORDED_INPUT[s.count]){var p=e.RECORDED_INPUT[s.count];Object.keys(p).map(function(e){i.default[e]=p[e]})}}else e.RECORD_INPUT&&e.RECORDED_INPUT.push(cloneInput());e.beforeIterateThings&&e.beforeIterateThings(s);for(var v=h.length-1;v>=0;v--)if(o=s.things[h[v]])for(var g=o.length-1;g>=0;g--)if(!(r=o[g])._toRecycle){if(r.x+r.w>c.xoffset&&r.x<c.xoffset+l&&r.y+r.h>c.yoffset&&r.y<c.yoffset+n){if(r.sprites){var u;r.movex&&!r.falling?(u=r.upsidedown?-1===r.toSide?"moveLeftUpsDown":"moveRightUpsDown":-1===r.toSide?"moveLeft":"moveRight",r.sprites.idleLeft.ctl.i=0,r.sprites.idleLeft.ctl.timeline=0,r.sprites.idleRight.ctl.i=0,r.sprites.idleRight.ctl.timeline=0):(u=r.upsidedown?-1===r.toSide?"idleLeftUpsDown":"idleRightUpsDown":-1===r.toSide?"idleLeft":"idleRight",r.sprites.moveLeft.ctl.i=0,r.sprites.moveLeft.ctl.timeline=0,r.sprites.moveRight.ctl.i=0,r.sprites.moveRight.ctl.timeline=0);var x=r.sprites[u],y=x.ctl.i,R=x[y].s;x.ctl.timeline>=x[y].d&&(x.ctl.timeline=0,x.ctl.i===x.length-1?x.ctl.i=0:x.ctl.i++),x.ctl.timeline+=a,d.drawImage(R,~~(r.x-c.xoffset),~~(r.y-c.yoffset))}}else d.beginPath(),d.rect(~~(r.x-c.xoffset),~~(r.y-c.yoffset),~~r.w,~~r.h),d.fillStyle=r.color||"#00ff00",d.fill(),d.closePath();if(!s.lost&&(r._prevx=r.x,r._prevy=r.y,r.movex&&(r.x+=r.movex*a*r.speed),r.movey&&(r.y+=r.movey*a*r.speed),e.thingsHandler&&e.thingsHandler(s,r,h[v]),r.ai&&r.ai(),r.followers))for(var m=r.followers.length-1;m>=0;m--)r.followers[m].x+=r.x-r._prevx,r.followers[m].y+=r.y-r._prevy}s.lost||(s.count+=1)}}exports.TYPES=h,exports.TIME_FACTOR=a;
},{"../custom/main.js":"yg/q","./factories.js":"mD5A","../engine/input.js":"Vc30"}]},{},["4lqk"], null)
//# sourceMappingURL=/main.298197d5.js.map