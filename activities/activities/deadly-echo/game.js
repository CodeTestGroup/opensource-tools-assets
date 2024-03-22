var deathByEmoji=function(n){"use strict";var t=[],e=[];function o(n,o){if(n&&"undefined"!=typeof document){var i,r=1==o.prepend?"prepend":"append",c=1==o.t,a="string"==typeof o.o?document.querySelector(o.o):document.getElementsByTagName("head")[0];if(c){var s=t.indexOf(a);-1===s&&(s=t.push(a)-1,e[s]={}),i=e[s]&&e[s][r]?e[s][r]:e[s][r]=l()}else i=l();65279===n.charCodeAt(0)&&(n=n.substring(1)),i.styleSheet?i.styleSheet.cssText+=n:i.appendChild(document.createTextNode(n))}function l(){var n=document.createElement("style");if(n.setAttribute("type","text/css"),o.attributes)for(var t=Object.keys(o.attributes),e=0;e<t.length;e++)n.setAttribute(t[e],o.attributes[t[e]]);var i="prepend"===r?"afterbegin":"beforeend";return a.insertAdjacentElement(i,n),n}}function i(n){return new Promise((t=>setTimeout(t,n)))}function r(n,t){return Promise.all([n,i(t)])}function c({tag:n,i:t,text:e,l:o}){const i=document.createElement(n||"div");if(t&&i.classList.add(...t.split(" ")),e){const n=document.createTextNode(e);i.appendChild(n)}return o&&i.addEventListener("click",o),i}function a(n,t){n.appendChild(c({tag:"span",text:t,i:"rbc"}))}function s({text:n,l:t,u:e,m:o}){const i=c({tag:"button",i:e?"icon-btn":"",l:t});return n&&(o?a(i,n):i.innerHTML=n),i}function l(n){return n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.cancelBubble=1,n.returnValue=0,0}function u(n,t,e=300){const o={passive:0},r={...o,once:1};n.addEventListener("touchstart",(function(o){const c=o.currentTarget;c.classList.add("touching"),t&&t(o);const a=i(e);return n.addEventListener("touchend",(n=>function(n,t,e){return t.then((()=>e.classList.remove("touching"))),l(n)}(n,a,c)),r),n.addEventListener("touchmove",l,r),n.addEventListener("touchcancel",l,r),l(o)}),o)}function f(n){let t="touchstart"===n.type?n.changedTouches[0]?.clientX:n.clientX,e="touchstart"===n.type?n.changedTouches[0]?.clientY:n.clientY;return t||(t=window.innerWidth/2),e||(e=window.innerHeight/2),{x:t,y:e}}o("body.rainbow .rbc {\n  background: linear-gradient(to bottom right, red 15%, orange 30%, yellow 50%, cyan 70%, blue 85%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 12px;\n}\n@media (min-width: 375px) {\n  html {\n    font-size: 16px;\n  }\n}\n@media (min-width: 600px) {\n  html {\n    font-size: 24px;\n  }\n}\n\nbody {\n  background: black;\n  color: white;\n  font-family: sans-serif;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n}\nbody.game-over {\n  background: #260911;\n}\n\n.field {\n  width: 100%;\n  height: 100%;\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  width: calc(100% - 1.5rem);\n  padding: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\nheader > :nth-child(2) {\n  margin-left: auto;\n  margin-right: 1rem;\n}\n\nbutton,\nlabel {\n  font-family: sans-serif;\n  cursor: pointer;\n  color: white;\n  border: 1px solid #ccc;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 1rem 2rem;\n  border-radius: 0.4rem;\n}\n@media (hover: hover) and (pointer: fine) {\n  button:hover,\nlabel:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n}\nbutton.touching,\nlabel.touching {\n  background-color: rgba(255, 255, 255, 0.2);\n}\nbutton.primary-btn,\nlabel.primary-btn {\n  border: 1px solid #5599ff;\n  background-color: rgba(85, 153, 255, 0.1);\n}\n@media (hover: hover) and (pointer: fine) {\n  button.primary-btn:hover,\nlabel.primary-btn:hover {\n    background-color: rgba(85, 153, 255, 0.2);\n  }\n}\nbutton.primary-btn.touching,\nlabel.primary-btn.touching {\n  background-color: rgba(85, 153, 255, 0.2);\n}\nbutton[disabled],\nlabel[disabled] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\nbutton.icon-btn {\n  background: none;\n  border: none;\n}\n@media (hover: hover) and (pointer: fine) {\n  button.icon-btn:hover {\n    background: none;\n  }\n}\nbutton.touching.icon-btn {\n  background: none;\n}\n\nbutton.icon-btn {\n  padding: 0.5rem;\n  font-size: 0.75rem;\n  color: #ccc;\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n@media (hover: hover) and (pointer: fine) {\n  button.icon-btn:hover {\n    transform: scale(1.2);\n  }\n}\nbutton.icon-btn.touching {\n  transform: scale(1.2);\n}",{});o(".tools {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.tools .info {\n  padding: 0.5rem;\n  font-family: monospace;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #777;\n}",{});o(".dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: black;\n  color: white;\n  display: grid;\n  grid-template-rows: 1fr min-content;\n  text-align: center;\n  transform: translateY(0);\n  opacity: 1;\n  transition: transform 0.5s, opacity 0.5s;\n}\n.dialog:not(.open) {\n  transform: translateY(100%);\n  opacity: 0;\n}\n.dialog.has-header {\n  grid-template-rows: min-content 1fr min-content;\n}\n.dialog .content {\n  display: grid;\n  margin-bottom: 1.5rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.dialog .content.is-overflowing {\n  align-content: start;\n}\n\n.btns {\n  background: black;\n  display: grid;\n  gap: 1rem;\n  margin: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n  justify-content: center;\n  max-width: 800px;\n  width: calc(100% - 2rem);\n  justify-self: center;\n}\n.btns button {\n  white-space: nowrap;\n}",{});let d=0;function m(n,t,e){const o=c({i:"dialog",l:n=>n.stopPropagation()});let i;e&&(i=c({tag:"h2",text:e}),o.appendChild(i),o.classList.add("has-header"));const r=c({i:"content"});function a(){d--,o.classList.remove("open")}let l,u,f;return r.appendChild(n),o.appendChild(r),void 0!==t&&(l=c({i:"btns"}),u=s({text:"Cancel",l:a}),l.appendChild(u),f=s({text:t,l:a}),f.classList.add("primary-btn"),l.appendChild(f),o.appendChild(l)),document.body.appendChild(o),{open:n=>(d++,o.style.zIndex=d.toString(),n?o.classList.add("open"):setTimeout((()=>o.classList.add("open")),0),r.classList.toggle("is-overflowing",r.scrollHeight>r.clientHeight),r.scrollTop=0,new Promise(((n,t)=>{u?.addEventListener("click",(()=>n(0))),f?.addEventListener("click",(()=>n(1)))}))),close:()=>a(),g:n=>{i&&(i.innerText=n)},p:n=>{f&&(f.disabled=n)}}}function g(n){return n.filter(((t,e)=>n.indexOf(t)===e))}function p(n){return n[Math.floor(Math.random()*n.length)]}function b(n){return n?.slice(0,2)}function h(n=0){return n?navigator.language:b(navigator.language)}function y(n,t=h()){return n.filter((n=>n!==t))}const x="practice",w="langs",v="level",k="emojis",C="emojiName",j="blind",M="highScore",z="highScoreCount",S="gameId",P="rainbow",F="hc";function B(n,t){0!=t?localStorage.setItem("☠️👻🔫."+n,t):function(n){localStorage.removeItem("☠️👻🔫."+n)}(n)}function T(n){return localStorage.getItem("☠️👻🔫."+n)}function N(){const n=function(n){const t=T(n);if(!t)return[];return t.split(",")}(w);return 0===n.length?[h()]:n}function $(n){return parseInt(T(F+"."+n)??0)}const I="🔴🍅🍎🍓🍒♥️♦️🌹🚨🚒🦀🐞🍷🏓",E="☮☂☠⚛☘⚜⚖☄⚔☢☣☯⚒⚰⚱♨",q="🐶🐈🐯🐭🐹🐰🐿️🐥🐧🐸🐢🐝",O=q+"🐵🐒🐕🐩🐺🐱🦁🐅🐆🐴🐎🦄🐮🐂🐃🐄🐷🐖🐗🐑🐐🐪🐫🐘🐁🐀🐇🐻🐨🐼🐾🦃🐔🐓🐣🐤🐦🕊️🦆🐊🐍🐲🐉🐳🐋🐬🦈🐟🐠🐡🦀🐙🐚🐌🐛🐜🐞🕷️🕸️🦂",A="🍔🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🍅🍆🌽🌶️🌰🍞🧀🍖🍗🍟🍕🌭🌮🌯🍳🍲🍿🍚🍛🍜🍝🍠🍣🍤🍦🍩🍪🎂🍰🍫🍬🍭🍮🍯🍼🍾🍷🍸🍹🍺",L="🏀⚽⚾🏐🏈🎾🎳🏓🏸⛳️⛸️🎣🎽🎿🎯🎱🔮🎮🕹️🎰🎲️🖼️🎨🎬🎼🎵🎶🎙️🎚️🎛️🎤🎧📻🎷🎸🎹🎺🎻",D=O+A+"💐🌸💮🏵️🌹🌺🌻🌼🌷🌱🌲🌳🌴🌵🌾🌿☘️🍀🍁🍂🍃"+L,G="🇸🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇱 🇦🇲 🇦🇴 🇦🇷 🇦🇹 🇦🇺 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇳 🇧🇴🇧🇷 🇧🇸 🇧🇹 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇷 🇨🇺 🇨🇻 🇨🇾 🇨🇿 🇩🇪 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇨 🇪🇪 🇪🇬 🇪🇷 🇪🇸 🇪🇹 🇫🇮 🇫🇯 🇫🇲 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇭 🇬🇲 🇬🇳 🇬🇶 🇬🇷 🇬🇹 🇬🇼 🇬🇾 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇩 🇮🇪 🇮🇱 🇮🇳 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇷 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇪 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇩 🇸🇪 🇸🇬 🇸🇮 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇾 🇸🇿 🇹🇩 🇹🇬 🇹🇭 🇹🇯 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇳 🇻🇺 🇼🇸 🇾🇪 🇿🇦 🇿🇲 🇿🇼 ";function R(n){const t=[];for(;n.length;){const[e]=n.match(/^[\u{1F1E6}-\u{1F1FF}]{2}|.[\ufe0e\ufe0f]?[\u{1F3FB}-\u{1F3FF}]?(\u200d(\p{Emoji}|[\u2600-\u26ff])[\ufe0e\ufe0f]?|[\u{E0020}-\u{E007F}])*[\ufe0e\ufe0f]?/u);Y(e)&&t.push(e),n=n.slice(e.length)}return t}function Y(n){return/\p{Emoji}|[\u2600-\u26ff]/u.test(n)}const _="Nostalgia",K=[{id:"1",icon:"🐣👁️",name:"Start here",h:{v:1,k:0,level:3}},{id:"2",icon:"🐣🗣️",name:"Trust your ears",h:{v:1,k:1,level:6}},{id:"4",icon:"☠️🗣️",name:"Meet death",h:{v:0,k:1,level:6}},{id:"5",icon:"🌐",name:"Go international",C:1,h:{v:0,k:0,level:6}},{id:"7",icon:"🐶🐰🐥",name:"Cuteness overload",j:q,h:{v:0,k:0,level:12}},{id:"9",icon:"🍎♥️🚒",name:"Seeing red",j:I,M:"All red",h:{v:0,k:1,level:12}},{id:"11",icon:"☠️",name:"Tru dead",S:1,rate:1.2,h:{v:0,k:1,level:3}},{id:"6",icon:"🇸🇨🇧🇧🇸🇿",name:"Fun with flags",j:G,M:"Flags",h:{v:1,k:0,level:12}},{id:"10",icon:"🌈☠️🌈",name:"Rainbow",h:{v:0,k:1,level:6,P:1}},{id:"8",icon:"🎁",name:"Surprise me",F:1},{id:"12",icon:E.substring(0,3),name:_,j:E,M:_,h:{v:0,k:1,level:8}}];const U=["Death","Animals","Food & Drink","Sport, Activity & Music","All red","Flags",_],H=["💀 🌋 🔫 💣 👻 ⛓ 🗡️ 🌪️ 🦈 ⚔️️ 🐗 🦂 🔥 ⚰️ 🐍  🔪 🏹",O,A,L,I,G,E].map(((n,t)=>({id:R(n)[0],name:U[t],B:n})));function J(n){let t,e,o;for(o=n.length-1;o>0;o--)t=Math.floor(Math.random()*(o+1)),e=n[o],n[o]=n[t],n[t]=e;return n}function Q(n,t){return Math.floor(Math.random()*(t-n+1)+n)}const V=16,W="Custom",X="CUSTOM",Z={v:0,S:3,T:[],N:0,$:0,I:0,q:0,O:0,A:0,L:0,D:0,G:1,R:1,Y:[],_:[],K:[],U:void 0,k:0,level:cn(),P:0},nn={};function tn(){Object.assign(nn,Z),nn.v=!!T(x),nn.k=!!T(j),nn.P=!!T(P),nn.level=cn(),nn.T=[],nn.U=h(),document.body.classList.toggle("rainbow",nn.P)}function en(){return nn.N&&!on()}function on(){return nn.v?nn.L>=nn.Y.length:nn.$}function rn(n){nn.level=n,B(v,n)}function cn(){const n=T(v);return n?Number(n):6}function an(n){nn.P=n,B(P,n),document.body.classList.toggle("rainbow",nn.P)}function sn(n){B(k,n)}function ln(){let n=T(k);return n||(n=H[0].B,B(C,H[0].name)),n}function un(n=5){const t=R(ln());return[t[0],...J(t.slice(1)).slice(0,n-1)]}tn();const fn=window.speechSynthesis,dn=R("💀 🌋 🔫 💣 👻 ⛓ 🗡️ 🌪️ 🦈 ⚔️️ 🐗 🦂 🔥 ⚰️ 🐍  🔪 🏹").slice(0,3);function mn(n,t,e){const o=new SpeechSynthesisUtterance;return o.lang=t===h()?h(1):t,o.text=n,o.rate=e??1,o.pitch=Math.sqrt(o.rate),new Promise((n=>{o.onend=()=>{n()},fn.speak(o)}))}function gn(n,t){const e=c({i:"list"}),o=N(),i=[];return n.sort().forEach((n=>{const r=c({tag:"input"}),a=c({text:n,tag:"label"});r.type="checkbox",r.id=n,r.name=n,r.checked=o.includes(n),r.addEventListener("change",(e=>{const o=e.currentTarget.checked;a.classList.toggle("selected",o),o&&(a.setAttribute("data-emoji","🗣️"),mn("Testing language...","en").then((async()=>{for(let t=0;t<dn.length;t++){const e=dn[t];a.setAttribute("data-emoji",e),await mn(e,n),a.removeAttribute("data-emoji")}}))),function(){const n=[];for(let t=0;t<i.length;t++){const e=i[t];e.checked&&n.push(e.getAttribute("id"))}t(n)}()})),a.setAttribute("for",n),a.appendChild(r),a.classList.toggle("selected",r.checked),a.classList.toggle("default",n===h()),e.appendChild(a),i.push(r)})),e}const pn=0,bn=1,hn=2;const yn=new class{constructor(){this.H={}}subscribe(n,t){this.H[n]||(this.H[n]=[]),this.H[n].push(t)}unsubscribe(n,t){this.H[n]&&(this.H[n]=this.H[n].filter((n=>n!==t)))}J(n,t){this.H[n]&&this.H[n].forEach((n=>n(t)))}},xn=1200;let wn=xn,vn=1;const kn="correct",Cn="wrong";function jn(n,t,e){document.body.classList.remove("game-over"),tn(),Mn();const o=T(S);document.body.setAttribute("data-id",o),(n||o===X)&&(nn.U=function(n,t=0){return t&&(n=y(n)),p(n)}(N(),n)),wn=xn,vn=e??1,t&&(nn.S=t),mn("",nn.U),yn.J(pn)}function Mn(){const n=ln();nn.Y=J(R(n)).slice(0,nn.level),nn.v&&(nn._=J([...nn.Y]),nn.K=nn.Y.map((()=>0)))}function zn(n){const t=(nn.v?nn._[nn.L]:nn.T.shift())===n,e=In();t?nn.O++:(nn.S--,nn.A++),nn.v&&(nn.K[nn.L]=t,nn.L++),nn.G=t?nn.G+1:1;const o=function(n){const t=Sn(nn.G);return Pn(n)*t}(t?kn:Cn),i=In(),r=i>e;return r&&yn.J(hn,i),{V:t,W:o,X:r}}function Sn(n){return Math.floor(Math.sqrt(Math.max(n,1)))}function Pn(n,t){let e=0,o=1;switch(t=t||nn.level,n){case kn:e=t,o=Fn(1);break;case Cn:e=-1*t,o=Fn()}return Math.round(e*o*10)}function Fn(n){let t=1;return nn.k&&(t*=3),nn.k||n||(t*=2),nn.P&&(t*=2),t}async function Bn(n,t){await mn(n,nn.U,t)}function Tn(){vn+=.1,vn=Math.min(vn,2),wn-=100,wn=Math.max(wn,600)}function Nn(){return nn.v&&nn.D<=1&&nn.O>=nn._.length?nn.O+1:nn.O}function $n(n,t,e,o){if(o=o??$(n),t){if(o>e)return 3;if(o===e)return 2;if(o>=e/2)return 1}else{if(o>=73)return 3;if(o>=42)return 2;if(o>=13)return 1}return 0}function In(){return $n(void 0,nn.v,nn.level,Nn())}o(".config {\n  font-size: 0.9rem;\n  display: grid;\n  justify-self: center;\n  grid-template-columns: min-content minmax(0, 1fr);\n  grid-auto-rows: min-content;\n  align-items: center;\n  align-content: center;\n  gap: 1rem 1.5rem;\n  padding: 0 1rem;\n}\n.config.practice .sudden-death-only {\n  opacity: 0;\n}\n.config .label {\n  text-align: right;\n  font-weight: bold;\n  min-width: 20vw;\n}\n.config .value {\n  max-width: 400px;\n  border-radius: 0.4rem;\n}\n.config .value > * {\n  width: 100%;\n}\n.config .value:not(.info) {\n  background: rgba(255, 255, 255, 0.1);\n}\n.config .value.info {\n  text-align: left;\n}\n.config .icon-btn:not(.pool-btn) {\n  font-size: 1.2rem;\n}\n.config input {\n  display: inline-block;\n  background: transparent;\n  color: white;\n  border: none;\n  font-size: 1.7rem;\n  padding: 0.5rem;\n  text-align: center;\n  width: 2ch;\n}",{});let En,qn,On,An,Ln;function Dn(n){return En=s({u:1,l:async()=>{await async function(){qn||function(){qn=c({i:"emoji-selection",l:n=>n.stopPropagation()});const n=c({i:"config-desc",text:"Choose a set of emojis or define your own"});qn.appendChild(n),qn.appendChild(function(n){const t=c({i:"btn-container"});return n.forEach((({id:n,name:e,B:o})=>{const i=s({text:n,l:()=>{Yn(o),Ln=e}});i.title=e,t.appendChild(i)})),t}(H)),An=c({tag:"textarea"}),An.addEventListener("input",_n),qn.appendChild(An)}();On||(On=m(qn,"OK"));Yn(ln());await On.open()&&function(){sn(Rn()),Ln&&B(C,Ln);Gn()}()}(),n&&n()}}),En.classList.add("pool-btn"),Gn(),En}function Gn(){En.innerText="";const n=c({i:"emoji-box rbc"});un().forEach((t=>n.appendChild(c({text:t})))),En.appendChild(n),En.appendChild(c({text:T(C)||W}))}function Rn(){return An.value}function Yn(n){An.value=g(R(n)).join("")}function _n(){Yn(Rn()),B(C,W)}o(".pool-btn {\n  font-size: 0.7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-style: italic;\n}\n.pool-btn .emoji-box {\n  display: flex;\n  font-size: 1.7rem;\n  font-style: normal;\n  letter-spacing: -0.4rem;\n  padding: 0 0.5rem;\n}\n.pool-btn .emoji-box:not(.rbc) :first-child {\n  z-index: 1;\n}\n\n.emoji-selection {\n  font-size: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.config-desc {\n  text-align: center;\n}\n\ntextarea {\n  background: black;\n  color: white;\n  width: max(40vw, 333px);\n  height: 30vh;\n  font-size: 37px;\n  letter-spacing: 10px;\n  padding: 13px;\n  margin: 13px;\n  word-break: break-all;\n}\n\n.btn-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 13px;\n}\n.btn-container button {\n  padding: 0.5rem;\n  margin: 0.2rem 0.3rem;\n  font-size: 1.3rem;\n}",{});o('@charset "UTF-8";\n.voice-config {\n  padding: 1.5rem;\n  max-width: 640px;\n  width: calc(100% - 3rem);\n  justify-self: center;\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n}\n.voice-config .info {\n  font-size: 0.75rem;\n  font-style: italic;\n}\n\n.list {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(4.25rem, 1fr));\n  grid-auto-rows: 3.25rem;\n}\n.list.no-default .default {\n  display: none;\n}\n.list label {\n  cursor: pointer;\n  padding: 0.75rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.25rem;\n  align-items: center;\n  font-size: 1.25rem;\n  font-family: monospace;\n}\n.list label.selected {\n  border-color: #5599ff;\n  background: rgba(85, 153, 255, 0.1);\n}\n@media (hover: hover) and (pointer: fine) {\n  .list label.selected:hover {\n    background: rgba(85, 153, 255, 0.2);\n  }\n}\n.list label.selected.touching {\n  background: rgba(85, 153, 255, 0.2);\n}\n.list label.selected:after {\n  content: "✓";\n}\n.list label.selected[data-emoji]:after {\n  content: attr(data-emoji);\n}\n.list label input {\n  display: none;\n}',{});let Kn,Un,Hn,Jn,Qn=[],Vn=[],Wn=0,Xn=N();function Zn(){new Promise((n=>{fn.onvoiceschanged=()=>{n(fn.getVoices())}})).then((n=>{!Kn&&Un&&(Qn=n,Vn=function(n){return g(n.map((n=>b(n.lang))).filter((n=>n)))}(Qn),Kn=gn(Vn,tt),Un.appendChild(Kn))}))}function nt(n=0){return Kn||mn(""),Wn=n,Kn?.classList.toggle("no-default",n),tt(N()),Hn.open().then((n=>(n&&(nn.R=Xn?.length||1,B(w,Xn)),n)))}function tt(n){Xn=n,Jn.innerHTML="Selection: "+((Wn?y(Xn):Xn).join(", ")||"?"),Hn.p(Wn&&y(Xn).length<=0)}function et(){return N().join(", ")}o(".mode-info {\n  font-size: 0.8rem;\n  font-style: italic;\n  color: #ccc;\n  max-width: 400px;\n}",{});function ot({value:n,min:t,max:e,Z:o,nn:i}){const r=c({i:"number-input"}),a=c({tag:"input",i:"rbc"});a.type="number",a.value=n,t&&(a.min=t),e&&(a.max=e),o&&a.addEventListener("change",o),i&&a.addEventListener("blur",i);const l=s({u:1,text:"▽️",m:1}),u=s({u:1,text:"△️",m:1});function f(){l.disabled=t&&a.value<=t,u.disabled=e&&a.value>=e}return f(),l.addEventListener("click",(()=>{(!t||a.value>t)&&(a.value--,o&&o()),f()})),u.addEventListener("click",(()=>{(!e||a.value<e)&&(a.value++,o&&o()),f()})),r.appendChild(l),r.appendChild(a),r.appendChild(u),{o:r,input:a,validate:()=>function(n,t){const e=Number(n.value),o=Number(n.min),i=Number(n.max);o&&e<o&&(n.value=o);i&&e>i&&(n.value=i);t()}(a,f)}}let it,rt,ct,at,st,lt,ut,ft;async function dt(){it||function(){it=c({i:"config",l:n=>n.stopPropagation()}),st=s({u:1,l:()=>{nn.k=!nn.k,B(j,!!nn.k),bt(),pt()}}),bt(),lt=s({u:1,l:()=>{nt().then((function(n){n&&yt()}))}}),yt(),ct=ot({value:nn.level,min:3,max:16,nn:gt,Z:pt}),at=s({u:1,l:()=>{an(!nn.P),ht()}}),ht();const{tn:n,en:t,on:e}=function(n){const t=s({u:1,l:()=>{nn.v=!nn.v,B(x,nn.v),o(),n&&n()}}),e=c({i:"mode-info"});function o(){t.innerHTML="",a(t,nn.v?"🐣 Practice":"☠️ Sudden death"),e.innerHTML=nn.v?"In the Practice mode you have to echo a limited non-repeating sequence. You can listen to it as many times as you want.":`In Sudden Death mode you have to keep up with an infinite sequence. If you fall ${nn.S} slots behind you'll die. Each mistake costs you a slot.`}return o(),{tn:t,en:e,on:o}}(mt);ft=e,ut=c({i:"score-modifiers"}),pt(),wt("Play mode:",n),wt("",t,"info"),wt("Presentation mode:",st),wt("Language:",lt),wt("Number of emojis:",ct.o),wt("Emoji set:",Dn((()=>gt()))),wt("Rainbow mode:",at),wt("Resulting score:",ut,"sudden-death-only info")}(),rt||(rt=m(it,"Load game","Configuration")),ct.input.value=nn.level,mt();const n=await rt.open();return n&&(rn(xt()),B(S,X),jn()),n}function mt(){pt(),bt(),yt(),Gn(),ht(),ft?.(),it.classList.toggle("practice",nn.v)}function gt(){ct&&(ct.input.max=Math.min(16,R(ln()).length),ct.validate(),pt())}function pt(){nn.v?ut.innerHTML="❌":ut.innerHTML=`&nbsp;✅: +${Pn(kn,xt())}&nbsp; ❌: ${Pn(Cn,xt())}`}function bt(){st.innerHTML="",a(st,nn.k?"🗣️":"🗣️ + 👁️")}function ht(){at.innerHTML="",a(at,nn.P?"on":"off")}function yt(){const n=et()??"";lt.innerHTML="",a(lt,n.length>0?`${n}`:"🌐")}function xt(){return ct?.input.value?Number(ct.input.value):nn.level}function wt(n,t,e){it.appendChild(c({text:n,i:"label"+(e?" "+e:"")}));const o=c({i:"value"+(e?" "+e:"")});o.appendChild(t),it.appendChild(o)}o(".number-input button {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.number-input input::-webkit-outer-spin-button,\n.number-input input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.number-input input[type=number] {\n  -moz-appearance: textfield; /* Firefox */\n}",{});o(".selector {\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  min-width: 0;\n  max-width: 1280px;\n  display: grid;\n  gap: 0.75rem;\n  justify-self: center;\n  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));\n  grid-template-rows: min-content repeat(auto-fit, minmax(0, 1fr));\n}\n.selector.has-game-over-section {\n  grid-template-rows: min-content min-content repeat(auto-fit, minmax(0, 1fr));\n}\n.selector.has-game-over-section .replay-btn {\n  margin-bottom: 1.5rem;\n}\n.selector.no-big-play-btn:not(.has-game-over-section) {\n  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));\n}\n.selector .game-over-section {\n  padding: 1rem;\n  border-radius: 0.4rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 2px dashed rgba(255, 215, 0, 0.5);\n  grid-column: 1/-1;\n}\n.selector .game-over-section.negative {\n  border-color: rgba(153, 34, 68, 0.5);\n}\n.selector .game-over-section.negative .stars {\n  color: #992244;\n  opacity: 1;\n}\n.selector .game-over-section.good {\n  border-color: rgba(34, 119, 68, 0.5);\n}\n.selector .game-over-section.good .stars {\n  color: #227744;\n}\n.selector .game-over-section.hidden {\n  display: none;\n}\n.selector .game-over-section .stars {\n  font-size: 1.5rem;\n  gap: 0.25rem;\n  margin-bottom: 0.25rem;\n  color: gold;\n}\n.selector .replay-btn {\n  grid-column: 1/-1;\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  font-size: 2rem;\n}\n@media (max-width: 600px) {\n  .selector .replay-btn {\n    padding: 3rem 2rem;\n  }\n}\n.selector .replay-btn.hidden {\n  display: none;\n}\n.selector .replay-btn .config-info {\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  font-size: 1.5rem;\n  gap: 0.5rem;\n}\n.selector .replay-btn .config-info .emoji-set {\n  letter-spacing: -0.5rem;\n  white-space: nowrap;\n}\n.selector .replay-btn .config-info .emoji-count {\n  color: #ccc;\n  font-size: 0.8em;\n}\n.selector .game-preconfigs {\n  display: contents;\n}\n.selector button {\n  font-size: 1.2rem;\n  padding: 1rem;\n}\n.selector button .icon {\n  font-size: 3rem;\n}",{});let vt,kt=0;function Ct(){kt=0,Mt()}function jt(){const n=T(M),t=T(z);(!n||n<kt)&&B(M,kt),(!t||t<nn.O)&&B(z,nn.O),function(n,t){const e=$(n);(!e||e<t)&&B(F+"."+n,t)}(T(S),Nn())}function Mt(){let n=St();nn.v||(n+="&nbsp;&nbsp;&nbsp;"+zt()),vt.innerHTML=n}function zt(){return"🏆 "+kt}function St(){let n="✅ "+nn.O;return nn.v&&(n+="/"+nn._.length),n}function Pt(){const n=T(M);return`Your score: ${zt()}  🥇 High score: ${n}`}function Ft(){let n=`Your result: ${St()}`;if(!nn.v){n+=`  🥇 Record: ${T(z)}`}return n}yn.subscribe(pn,(()=>{Ct()}));o(".preconfig-btn {\n  position: relative;\n}\n.preconfig-btn .stars {\n  position: absolute;\n  font-size: 0.75rem;\n  top: 0.25rem;\n  right: 0.5rem;\n}",{});o(".stars {\n  display: flex;\n  justify-content: center;\n  transition: transform 0.3s, color 0.3s;\n}\n.stars.zero {\n  opacity: 0.2;\n}\n.stars.new-star {\n  transform: scale(3);\n  color: gold;\n}",{});function Bt(n){const t=c({i:"stars"});for(let n=0;n<3;n++)t.appendChild(c({}));return Tt(t,n),t}function Tt(n,t){n.classList.toggle("zero",0===t);for(let e=0;e<3;e++)n.children[e].textContent=t>e?"★":"☆"}function Nt(n){const t=c({i:"game-preconfigs"});return K.forEach((e=>{t.appendChild(function(n,t){const e=c({tag:"button",i:"preconfig-btn",l:()=>{!async function(n,t){n.F&&(n={j:J(R(D)).slice(0,V),h:{v:p([1,0]),k:p([1,0]),P:Math.random()<.125,level:Q(3,V)}});if(n.C){if(!y(N()).length){if(!await nt(1))return}}(function(n){if(!n)return;n.level>0&&rn(n.level),void 0!==n.k&&(nn.k=n.k,B(j,n.k)),void 0!==n.v&&(nn.v=n.v,B(x,n.v));const t=void 0!==n.P?n.P:0;nn.P!==t&&an(t)})(n.h),sn(n.j??H[0].B);const e=n.M??(n.j?W:H[0].name);B(C,e),B(S,n.id),jn(n.C,n.S,n.rate),t?.()}(n,t)}}),o=c({text:n.icon,i:"icon"}),i=c({text:n.name,i:"text"});e.appendChild(o),e.appendChild(i);const r=[n.id,n.h?.v,n.h?.level],a=Bt($n(...r));return e.appendChild(a),yn.subscribe(bn,(()=>{T(S)===n.id&&Tt(a,$n(...r))})),e}(e,n))})),t}let $t,It,Et,qt,Ot;function At(n=0,t=0){$t||function(){$t=c({i:"selector"}),qt=c({i:"game-over-section hidden"}),Et=s({l:()=>{Lt();const n=T(S),t=K.find((t=>t.id===n));jn(t?.C,t?.S,t?.rate)}}),Et.classList.add("replay-btn"),Ot=s({l:async()=>{await dt()&&(B(S,X),Lt())}}),Ot.classList.add("config-btn");const n=c({i:"icon"}),t=c({i:"text"});n.appendChild(c({text:"⚙️"})),t.appendChild(c({text:"Custom game"})),Ot.appendChild(n),Ot.appendChild(t),$t.appendChild(qt),$t.appendChild(Et),$t.appendChild(Nt(Lt)),$t.appendChild(Ot)}(),It||(It=m($t,void 0,"Select game"));const e=T(S)===X,o=t||e;let i;if(t){const n=nn.v?"🐥 Practice game complete 🐥":"☠️☠️️☠️ Game over ️☠️️☠️️☠️";It.g(n),i="Play again"}else It.g("Select game"),i="Previous config";if(Et.classList.toggle("hidden",!o),$t.classList.toggle("no-big-play-btn",!o),$t.classList.toggle("prefer-custom",e),o){Et.innerHTML="";const n=(nn.v?"🐣":"☠️")+(nn.k?"🗣️":"👁️"),e=un().join(""),o=`(${nn.level})`;a(Et,t?"↩":"▶"),a(Et,i);const r=c({i:"config-info"});r.appendChild(c({text:n,i:"play-mode"})),r.appendChild(c({text:e,i:"emoji-set"})),r.appendChild(c({text:o,i:"emoji-count"})),Et.appendChild(r)}!function(n){qt.classList.toggle("hidden",!n);const t=In();qt.classList.toggle("negative",0===t),qt.classList.toggle("good",3===t),$t.classList.toggle("has-game-over-section",n),qt.innerHTML="",n&&(qt.appendChild(Bt(t)),qt.appendChild(c({text:Ft()})),nn.v||qt.appendChild(c({text:Pt()})))}(t),It.open(n)}function Lt(){mn(""),It.close()}yn.subscribe(bn,(()=>setTimeout((()=>At(0,1)),500)));let Dt;function Gt(){Dt.innerHTML="";const n=nn.v?function(){const n=[];for(let t=0;t<nn._.length;t++){const e=0===nn.D||1===nn.D&&t>nn.I,o=nn.K[t]||en()&&nn.q&&!nn.k&&t===nn.I;n.push(e?"_":o?nn._[t]:t<nn.L?"❌":t===nn.I&&nn.q?"❓":"❔")}return n.map(Rt)}():function(){const n=[];for(let t=0;t<nn.A;t++)n.push("☠️");for(let t=0;t<nn.T.length;t++)nn.$?n.push("☠️"):t===nn.T.length-1?n.push(nn.k?"❓":nn.T[t]):n.push("❔");for(let t=nn.T.length;t<nn.S;t++)n.push("_");return n.push("☠️"),n.map(Rt)}();for(let t of n)Dt.appendChild(t)}function Rt(n){return c({i:"rbc",text:n})}o(".sequence {\n  margin: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  font-family: monospace;\n}\n.sequence > div {\n  height: 2rem;\n  width: 1.5rem;\n}",{}),yn.subscribe(pn,(()=>{Gt()}));let Yt;async function _t(){if(on())return void jn();Yt.disabled=1,Yt.classList.add("activated");const n=()=>{Gt()};nn.N=1,nn.q=1,Kt(),nn.v?await async function(n){nn.D++;for(let t=nn.L;t<nn._.length;t++){const e=nn._[t];nn.I=t,n&&n(),await r(Bn(e,vn),wn)}Tn()}(n):(await async function(n){for(;nn.T.length<nn.S;){const t=p(nn.Y);nn.T.push(t),nn.I++,nn.I%10==0&&Tn(),n&&n(),await r(Bn(t,vn),wn)}nn.$=1,document.body.classList.add("game-over")}(n),jt(),yn.J(bn)),nn.q=0,Gt(),Kt(),Yt.classList.remove("activated"),Kt()}function Kt(){nn.q?Yt.innerHTML="🗣️ speaking...":on()?(Yt.innerHTML="Game over",Yt.disabled=1):(Yt.innerHTML="",a(Yt,nn.N?"🗣️ Replay":"🗣️ Start"),Yt.disabled=0)}o(".play-btn {\n  font-size: 1.5rem;\n  margin: 1rem;\n  transition: transform 0.5s;\n}\n.play-btn.activated {\n  border: 1px solid white;\n  background-color: rgba(255, 255, 255, 0.2);\n  opacity: 0.6;\n}\n@media (hover: hover) and (pointer: fine) {\n  .play-btn:hover {\n    transform: scale(1.2);\n    transition: transform 0.3s;\n  }\n}\n.play-btn.touching {\n  transform: scale(1.2);\n  transition: transform 0.3s;\n}",{}),yn.subscribe(pn,(()=>{Kt()}));o(".score-fly.combo-fly {\n  background: linear-gradient(to bottom right, red 15%, orange 30%, yellow 50%, cyan 70%, blue 85%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.emojis {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1.5rem 0 0.5rem;\n  max-width: 900px;\n}\n\nbutton.emoji-btn {\n  font-size: 2rem;\n  padding: 0.5rem;\n  margin: 0.75rem;\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  border: none;\n  transition: transform 0.5s;\n}\n@media (hover: hover) and (pointer: fine) {\n  button.emoji-btn:hover {\n    transform: scale(1.5) rotate(-360deg);\n    transition: transform 0.3s;\n  }\n}\nbutton.emoji-btn.touching {\n  transform: scale(1.5) rotate(-360deg);\n  transition: transform 0.3s;\n}\nbutton.emoji-btn.correct {\n  background-color: rgba(34, 119, 68, 0.4);\n}\nbutton.emoji-btn.wrong {\n  background-color: rgba(153, 34, 68, 0.4);\n}\n\n.practice .correct {\n  pointer-events: none;\n  cursor: default;\n}\n\n.score-fly {\n  pointer-events: none;\n  position: absolute;\n  top: var(--init-top, 50vh);\n  left: var(--init-left, 50vw);\n  font-size: 2rem;\n  transform: translate(-50%, -50%);\n  transition: opacity 1.3s ease-in, top 1.3s ease-in;\n}\n.score-fly.positive {\n  color: #227744;\n}\n.score-fly.negative {\n  color: #992244;\n}\n.score-fly.end {\n  opacity: 0;\n  top: 0;\n}\n.score-fly.combo-fly {\n  font-size: 1.5rem;\n  transition: opacity 2s ease-in-out, top 2s ease-in-out;\n}\n.score-fly.combo-fly:after {\n  content: attr(data-party);\n  -webkit-text-fill-color: initial;\n}",{});const Ut={},Ht=R("🚀🎉🎊😎💪🙌🙌🎈");function Jt(n,t,e){if(!en())return void mn(on()?"Game over!":n,nn.U);const{V:o,W:i}=zn(n);!function(n){kt+=n,Mt()}(i),t.classList.add(o?"correct":"wrong"),function(n,t){const e=t>0;nn.v?t=e?1:"❌":e&&Sn(nn.G)>1&&Sn(nn.G)>Sn(nn.G-1)&&setTimeout((()=>function(n){const t=c({text:`Combo ${Sn(nn.G)}x `,i:"score-fly combo-fly"});t.setAttribute("data-party",p(Ht));const{x:e,y:o}=f(n);Vt(t,e,o)}(n)),150);const o=c({text:e?"+"+t:t,i:"score-fly"});o.classList.add(e?"positive":"negative");const{x:i,y:r}=f(n);Vt(o,i,r)}(e,i),setTimeout((()=>{on()||t.classList.remove("wrong"),nn.v||t.classList.remove("correct","wrong")}),500),Kt(),Gt(),on()&&function(){if(nn.v)for(let n=0;n<nn._.length;n++)nn.K[n]||Ut[nn._[n]].classList.add("wrong");jt(),yn.J(bn)}()}function Qt(n){const t=s({text:n,m:1});return t.classList.add("emoji-btn"),t}function Vt(n,t,e){n.style.setProperty("--init-top",Math.round(e)+"px"),n.style.setProperty("--init-left",Math.round(t)+"px"),document.body.appendChild(n),setTimeout((()=>n.classList.add("end")),150),setTimeout((()=>document.body.removeChild(n)),5e3)}o('.field {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.info-text {\n  font-size: 0.7rem;\n  font-style: italic;\n  color: #ccc;\n  max-width: 16rem;\n  text-align: center;\n}\n\n@media (max-height: 800px) {\n  body:not([data-id="1"]):not([data-id="2"]):not([data-id="4"]) .info-text {\n    display: none;\n  }\n}',{}),yn.subscribe(pn,(()=>{Xt()}));const Wt=c({i:"field"});function Xt(){return Wt.innerHTML="",Wt.appendChild(function(){const n=c({i:"info-text",text:"Listen to the emoji sequence and echo it with the buttons below at the same time."});nn.v||(n.appendChild(c({tag:"br"})),n.appendChild(document.createTextNode("Keep up before your slots run out!")));return n}()),Wt.appendChild((Dt=c({i:"sequence"}),Gt(),Dt)),Wt.appendChild((Yt=s({l:_t}),Yt.classList.add("play-btn"),Kt(),Yt)),Wt.appendChild(function(n){const t=c({i:"emojis"});for(const e of n){const n=Qt(e);n.addEventListener("mousedown",(t=>{Jt(e,n,t)})),u(n,(t=>{Jt(e,n,t)})),t.appendChild(n),Ut[e]=n}return nn.v&&t.classList.add("practice"),t}(nn.Y)),Wt}return function(){document.title="Deadly echo",Mn();const n=c({tag:"header"});n.appendChild(function(){const n=c({i:"tools"}),t=s({u:1,text:"🏠",m:1,l:()=>At()}),e=s({u:1,text:"⚙️",m:1,l:()=>dt()}),o=c({i:"info"});return yn.subscribe(pn,(function(){o.innerText=nn.U===h()?"":`[${nn.U}]`})),n.appendChild(t),n.appendChild(e),n.appendChild(o),n}()),n.appendChild((vt=c({}),Ct(),vt)),n.appendChild(function(){const n=Bt(0);return yn.subscribe(hn,(t=>{Tt(n,t),n.classList.toggle("new-star",1),setTimeout((()=>n.classList.toggle("new-star",0)),300)})),yn.subscribe(pn,(()=>{Tt(n,0)})),n}()),document.body.appendChild(n),document.body.appendChild(Xt()),function(){Un=c({i:"voice-config",l:n=>n.stopPropagation()}),Jn=c({i:"selection",text:"Selection: "+et()}),Un.appendChild(Jn);const n=c({i:"info",text:"Info: activate random mode by selecting multiple values"});Un.appendChild(n),Hn=m(Un,"OK","Language selection"),Zn(),nn.R=N()?.length||1}(),At(1)}(),n.rn=W,n.cn=$n,n.an=In,Object.defineProperty(n,"sn",{value:1}),n}({});