!function(){let n,e=/(jpeg|jpg|gif|png)$/,t=/(wav|mp3|ogg|aac)$/,a=/^no$/,o=/^\//,i=/\/$/,r=new Audio,c={wav:"",mp3:r.canPlayType("audio/mpeg;").replace(a,""),ogg:r.canPlayType('audio/ogg; codecs="vorbis"').replace(a,""),aac:r.canPlayType("audio/aac;").replace(a,"")};function u(n,e){return[n.replace(i,""),n?e.replace(o,""):e].filter(n=>n).join("/")}function l(n){return n.split(".").pop()}function f(n){let e=n.replace("."+l(n),"");return 2==e.split("/").length?e.replace(o,""):e}function s(e,t){return new Promise(function(a,o){let i=new Image;t=u(n.imagePath,e),i.onload=function(){n.images[f(e)]=n.images[t]=this,a(this)},i.onerror=function(){o(t)},i.src=t})}function d(e,t,a){return new Promise(function(o,i){if(e=[].concat(e).reduce(function(n,e){return c[l(e)]?e:n},a)){let a=new Audio;t=u(n.audioPath,e),a.addEventListener("canplay",function(){n.audio[f(e)]=n.audio[t]=this,o(this)}),a.onerror=function(){i(t)},a.src=t,a.load()}else i(e)})}function p(e,t){return t=u(n.dataPath,e),fetch(t).then(function(n){if(!n.ok)throw n;return n.clone().json().catch(function(){return n.text()})}).then(function(a){return n.data[f(e)]=n.data[t]=a,a})}n=kontra.assets={images:{},audio:{},data:{},imagePath:"",audioPath:"",dataPath:"",load(){let n,a,o,i,r,c=[];for(i=0;o=arguments[i];i++)r=(a=l(n=[].concat(o)[0])).match(e)?s(o):a.match(t)?d(o):p(o),c.push(r);return Promise.all(c)}}}();