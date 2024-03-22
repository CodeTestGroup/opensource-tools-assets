'use strict';(function(){function Y(a,...b){(da[a]||[]).map(c=>c(...b))}function N(a,b,c){return a*(1-c)+b*c}function B(){return new v(...arguments)}function I(){return new O(...arguments)}function w(){return new P(...arguments)}function C(){return new Q(...arguments)}function ea(a){let b=a.canvas;a.clearRect(0,0,b.width,b.height)}function Z(a=J,b){a.Ra&&b.preventDefault();a(b)}function fa(a){let b=u[a.code],c=ha[b];n[b]=!0;Z(c,a)}function ia(a){let b=u[a.code],c=ja[b];n[b]=!1;Z(c,a)}function ka(){n=
{}}function D(){return new R(...arguments)}function S(a,b,c,f){la.cloneNode().play();for(let g=0;g<f;g++)T.get({x:a,y:b,h:4-8*Math.random(),F:4-8*Math.random(),width:3,height:3,color:c,I:50,opacity:.5,oa:0,update:function(){this.rotation+=.1;this.opacity&&(this.opacity=N(.5,0,this.oa/this.I));this.oa++;this.advance()}})}function E(a,b){return[new ma({x:a,y:b})]}function k(a,b,c){let f=[];for(let g=0;g<c;g++)f.push(new na({x:a+50*g,y:b,Ha:100,frequency:2,Ia:50*g,speed:1.5,color:"orange"}));return f}
function l(a,b){return[new oa({x:a,y:b})]}function U(a,b){return a.x<b.x+b.width&&a.x+b.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y}let da={},K,x;class v{constructor(a=0,b=0,c={}){this.x=a;this.y=b;c.K&&(this.Ja(c.ja,c.ka,c.B,c.la),this.x=a,this.y=b)}add(a){return new v(this.x+a.x,this.y+a.y,this)}scale(a){return new v(this.x*a,this.y*a)}normalize(a=this.length()){return new v(this.x/a,this.y/a)}La(a){return this.x*a.x+this.y*a.y}length(){return Math.hypot(this.x,this.y)}angle(a){return Math.acos(this.La(a)/
(this.length()*a.length()))}Ja(a,b,c,f){this.K=!0;this.ja=a;this.ka=b;this.B=c;this.la=f}get x(){return this.Ea}get y(){return this.Fa}set x(a){this.Ea=this.K?Math.min(Math.max(this.ja,a),this.B):a}set y(a){this.Fa=this.K?Math.min(Math.max(this.ka,a),this.la):a}}B.prototype=v.prototype;B.o=v;class pa{constructor(a){return this.m(a)}m(a={}){this.position=B();this.J=B();this.acceleration=B();this.I=Infinity;Object.assign(this,a)}update(a){this.advance(a)}advance(a){var b=this.acceleration;a&&(b=b.scale(a));
b=this.J=this.J.add(b);a&&(b=b.scale(a));this.position=this.position.add(b);this.i();this.I--}get h(){return this.J.x}get F(){return this.J.y}set h(a){this.J.x=a}set F(a){this.J.y=a}j(){return 0<this.I}i(){}}let J=()=>{};class O extends pa{m({width:a=0,height:b=0,context:c=x,g:f=this.L,update:g=this.advance,children:y=[],anchor:q={x:0,y:0},ha:r=0,ia:z=0,opacity:F=1,rotation:A=0,N:p=1,O:L=1,...G}={}){this.children=[];super.m({width:a,height:b,context:c,anchor:q,ha:r,ia:z,opacity:F,rotation:A,N:p,O:L,
...G});this.pa=!0;this.ba();y.map(H=>this.Ga(H));this.ua=f;this.za=g}update(a){this.za(a);this.children.map(b=>b.update&&b.update(a))}g(a){let b=this.context;b.save();(this.x||this.y)&&b.translate(this.x,this.y);this.rotation&&b.rotate(this.rotation);(this.ha||this.ia)&&b.translate(-this.ha,-this.ia);1==this.N&&1==this.O||b.scale(this.N,this.O);var c=-this.width*this.anchor.x;let f=-this.height*this.anchor.y;(c||f)&&b.translate(c,f);this.context.globalAlpha=this.opacity;this.ua();(c||f)&&b.translate(-c,
-f);c=this.children;a&&(c=c.filter(a));c.map(g=>g.g&&g.g());b.restore()}L(){}i(){this.ba();this.children.map(a=>a.i())}get x(){return this.position.x}get y(){return this.position.y}set x(a){this.position.x=a;this.i()}set y(a){this.position.y=a;this.i()}get width(){return this.P}set width(a){this.P=a;this.i()}get height(){return this.ra}set height(a){this.ra=a;this.i()}ba(){if(this.pa){var {R:a=0,S:b=0,Aa:c=1,Ba:f=0,Ca:g=1,Da:y=1}=this.parent||{};this.R=this.x;this.S=this.y;this.Aa=c*this.opacity;
this.Ba=f+this.rotation;var q=this.x,r=this.y;let A=Math.sin(f),p=Math.cos(f);var {x:z,y:F}={x:q*p-r*A,y:q*A+r*p};this.R=z;this.S=F;this.Ca=g*this.N;this.Da=y*this.O;this.R=this.x*g;this.S=this.y*y;this.R+=a;this.S+=b}}Ga(a){this.children.push(a);a.parent=this;a.i=a.i||J;a.i()}removeChild(a){let b=this.children.indexOf(a);-1!==b&&(this.children.splice(b,1),a.parent=null,a.i())}get opacity(){return this.ta}set opacity(a){this.ta=a;this.i()}get rotation(){return this.va}set rotation(a){this.va=a;this.i()}get N(){return this.wa}set N(a){this.wa=
a;this.i()}get O(){return this.xa}set O(a){this.xa=a;this.i()}}I.prototype=O.prototype;I.o=O;class P extends I.o{m({image:a,width:b=a?a.width:void 0,height:c=a?a.height:void 0,...f}={}){super.m({image:a,width:b,height:c,...f})}advance(a){super.advance(a);this.da&&this.da.update(a)}L(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height);this.da&&this.da.g({x:0,y:0,width:this.width,height:this.height,context:this.context});this.color&&(this.context.fillStyle=this.color,
this.context.fillRect(0,0,this.width,this.height))}}w.prototype=P.prototype;w.o=P;let qa=/(\d+)(\w+)/;class Q extends I.o{m({text:a="",textAlign:b="",lineHeight:c=1,font:f=x.font,...g}={}){super.m({text:""+a,textAlign:b,lineHeight:c,font:f,...g});this.ma()}get width(){return this.P}set width(a){this.B=!0;this.X=this.P=a}get text(){return this.ya}set text(a){this.B=!0;this.ya=a}get font(){return this.qa}set font(a){this.B=!0;this.qa=a;this.aa=+a.match(qa)[1]}get lineHeight(){return this.sa}set lineHeight(a){this.B=
!0;this.sa=a}g(){this.B&&this.ma();super.g()}ma(){this.A=[];this.B=!1;let a=this.context;a.font=this.font;if(!this.A.length&&this.X){let b=this.text.split(" "),c=0,f=2;for(;f<=b.length;f++)a.measureText(b.slice(c,f).join(" ")).width>this.X&&(this.A.push(b.slice(c,f-1).join(" ")),c=f-1);this.A.push(b.slice(c,f).join(" "))}if(!this.A.length&&this.text.includes("\n")){let b=0;this.text.split("\n").map(c=>{this.A.push(c);b=Math.max(b,a.measureText(c).width)});this.P=this.X||b}this.A.length||(this.A.push(this.text),
this.P=this.X||a.measureText(this.text).width);this.height=this.aa+(this.A.length-1)*this.aa*this.lineHeight;this.ba()}L(){let a=0,b=this.textAlign,c=this.context;b=this.textAlign||("rtl"===c.canvas.dir?"right":"left");a="right"===b?this.width:"center"===b?this.width/2|0:0;this.A.map((f,g)=>{c.textBaseline="top";c.textAlign=b;c.fillStyle=this.color;c.font=this.font;c.fillText(f,a,this.aa*this.lineHeight*g)})}}C.prototype=Q.prototype;C.o=Q;let ha={},ja={},n={},u={Enter:"enter",Escape:"esc",Space:"space",
ArrowLeft:"left",ArrowUp:"up",ArrowRight:"right",ArrowDown:"down"};class R{constructor({create:a,M:b=1024}={}){let c;if(!(a&&(c=a())&&c.update&&c.m&&c.j&&c.g))throw Error("Must provide create() function which returns an object with init(), update(), render(), and isAlive() functions");this.K=a;this.s=[a()];this.size=0;this.M=b}get(a={}){if(this.size===this.s.length){if(this.size===this.M)return;for(var b=0;b<this.size&&this.s.length<this.M;b++)this.s.push(this.K())}b=this.s[this.size];this.size++;
b.m(a);return b}Ma(){return this.s.slice(0,this.size)}clear(){this.size=this.s.length=0;this.s.push(this.K())}update(a){let b,c=!1;for(let f=this.size;f--;)b=this.s[f],b.update(a),b.j()||(c=!0,this.size--);c&&this.s.sort((f,g)=>g.j()-f.j())}g(){for(let a=this.size;a--;)this.s[a].g()}}D.prototype=R.prototype;D.o=R;class ra extends w.o{m(a){super.m(a);a&&(this.l=a.l,this.target=a.target)}j(){let a=this.context.canvas;return 0<this.I&&0<=this.x&&this.x<a.width&&0<=this.y&&this.y<a.height}}let m=D({create:function(){return new ra},
M:1E3}),sa=new Audio("assets/laser.wav"),la=new Audio("assets/explosion.wav");class ta extends w.o{constructor(a){super(a);this.type="player";this.W=a.W;this.ga=a.ga;this.fa=a.fa;this.Y=a.Y;this.ca=a.ca;this.T=this.Z=this.Y;this.v=50;this.u=0;this.state=1}ea(){this.x=N(this.x,100,this.u/this.v);this.y=N(this.y,this.context.canvas.height/2,this.u/this.v);this.u++;this.u===this.v&&(this.state=2)}Oa(){this.C=100;this.x=-90;this.y=this.context.canvas.height/2+100;this.u=0;this.state=1}Na(){let a;n.shift?
(this.Z=this.Y,a=this.ga):(this.Z=this.ca,a=this.fa);n.up&&0<this.y?this.F=-a:n.down&&this.y<=this.context.canvas.height?this.F=a:this.F=0;n.left&&0<this.x?this.h=-a:n.right&&this.x<=this.context.canvas.width?this.h=a:this.h=0;this.T=0<this.T?this.T-1:0;n.space&&0>=this.T&&(sa.cloneNode().play(),m.get({x:this.x,y:this.y+this.height/2,width:5,height:5,h:14,l:10,target:"enemy",color:"#4c5c87"}),this.T=this.Z)}update(){switch(this.state){case 1:this.ea();break;case 2:this.Na()}this.advance()}L(){this.context.fillStyle=
"#8cefb6";this.context.beginPath();this.context.moveTo(0,0);this.context.lineTo(this.width,this.height/2);this.context.lineTo(0,this.height);this.context.lineTo(2,this.height/2);this.context.closePath();this.context.fill()}j(){return 3!=this.state}}class aa extends w.o{constructor(a){super(a);this.opacity=a?a.opacity:1}L(){this.context.globalAlpha=this.opacity;this.context.fillStyle=this.color;this.context.fillRect(0,0,this.width,this.height)}}let T=D({create:function(){return new aa},M:1E3}),M=D({create:function(){return new aa},
M:100});class V extends w.o{constructor(a){super(a);this.$=this.C=0}l(a){this.C-=a}j(){return 0<this.C}}class ma extends V{constructor(a){super(a);this.speed=.5;this.h=-this.speed;this.C=200;this.height=this.width=100;this.color="orange";this.D=this.U=100;this.H=this.V=10;this.G=5;this.$=50}update(){0==this.D?(0==this.H?(m.get({x:this.x+.5*this.width,y:this.y+.5*this.height,width:10,height:10,l:10,target:"player",color:"red",h:2}),m.get({x:this.x+.5*this.width,y:this.y+.5*this.height,width:10,height:10,
l:10,target:"player",color:"red",h:-2}),m.get({x:this.x+.5*this.width,y:this.y+.5*this.height,width:10,height:10,l:10,target:"player",color:"red",F:2,h:-.5}),m.get({x:this.x+.5*this.width,y:this.y+.5*this.height,width:10,height:10,l:10,target:"player",color:"red",F:-2,h:-.5}),this.H=this.V,this.G--):this.H--,0===this.G&&(this.G=5,this.D=this.U)):this.D--;this.advance()}}class na extends V{constructor(a){super(a);this.c=this.y;this.h=-this.speed;this.t=0;this.C=20;this.anchor={x:.5,y:.5};this.height=
this.width=15;this.$=10}update(a){this.rotation-=.1;this.t=this.t+a>2*Math.PI?0:this.t+a;this.y=this.Ha*Math.sin(this.frequency*this.t+this.Ia)+this.c;this.advance()}j(){return super.j()&&-100<this.x}}class oa extends V{constructor(a){super(a);this.speed=1;this.h=-this.speed;this.C=60;this.height=this.width=30;this.D=this.U=100;this.H=this.V=10;this.G=1;this.$=35}update(){0==this.D?(0==this.H?(m.get({x:this.x-this.width/2,y:this.y,width:10,height:10,l:10,target:"player",color:"red",h:-4}),m.get({x:this.x-
this.width/2,y:this.y+this.height,width:10,height:10,l:10,target:"player",color:"red",h:-4}),this.H=this.V,this.G--):this.H--,0===this.G&&(this.G=1,this.D=this.U)):this.D--;this.advance()}L(){this.context.fillStyle="orange";this.context.beginPath();this.context.moveTo(this.width,0);this.context.lineTo(-this.width,this.height/2);this.context.lineTo(this.width,this.height);this.context.closePath();this.context.fill()}}K=document.getElementById(void 0)||document.querySelector("canvas");if(!K)throw Error("You must provide a canvas element for the game");
x=K.getContext("2d");x.imageSmoothingEnabled=!1;Y("init");let {canvas:d,context:ba}={canvas:K,context:x};(function(){let a;for(a=0;26>a;a++)u[a+65]=u["Key"+String.fromCharCode(a+65)]=String.fromCharCode(a+97);for(a=0;10>a;a++)u[48+a]=u["Digit"+a]=""+a;window.addEventListener("keydown",fa);window.addEventListener("keyup",ia);window.addEventListener("blur",ka)})();u.ShiftLeft="shift";let t=0,ca=!1,h=new ta({x:-90,y:d.height/2+100,width:40,height:35,fa:5,ga:2,ca:11,Y:6,W:5}),e=[],ua={v:500,u:0,Ka:function(){0==
this.u?(this.ea(),this.u=this.v):this.u--},ea:function(){if(100>t)e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3)));else if(200>t).5<Math.random()?e=e.concat(l(d.width+50,Math.random()*d.height)):(e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))));else if(350>t)this.v=400,e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(k(d.width+50,
Math.random()*d.height,Math.floor(6*Math.random()+3)));else if(600>t){this.v=500;let a=Math.random();console.log(a);.2<a?e=e.concat(E(d.width+50,Math.random()*(d.height-100))):(e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))));e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3)))}else 1E3>t?(e=e.concat(E(d.width+50,Math.random()*d.height)),e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(k(d.width+
50,Math.random()*d.height,Math.floor(6*Math.random()+3))),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))),console.log("5")):1300>t?(this.v=370,e=e.concat(E(d.width+50,Math.random()*d.height)),e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))),console.log("6")):(this.v=
300,e=e.concat(E(d.width+50,Math.random()*d.height)),e=e.concat(E(d.width+50,Math.random()*d.height)),e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(l(d.width+50,Math.random()*d.height)),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))),e=e.concat(k(d.width+50,Math.random()*d.height,Math.floor(6*Math.random()+3))),console.log("7"))},reset:function(){this.u=0;this.v=500}};(function(a,b){for(let c=0;100>c;c++)M.get({x:Math.random()*a,y:Math.random()*b,h:-3,
width:3,height:3,color:.5<Math.random()?"#3f2c5f":"#443f7b",j(){return 0<this.x}})})(d.width,d.height);(function({Ta:a=60,Sa:b=!0,update:c=J,g:f,context:g=x,blur:y=!1}={}){function q(){L=requestAnimationFrame(q);if(W&&(G=performance.now(),H=G-p,p=G,!(1E3<H))){Y("tick");for(r+=H;r>=z;)X.update(F),r-=z;A(g);X.g()}}if(!f)throw Error("You must provide a render() function");let r=0,z=1E3/a,F=1/a,A=b?ea:J,p,L,G,H,X,W=!0;y||(window.addEventListener("focus",()=>{W=!0}),window.addEventListener("blur",()=>
{W=!1}));return X={update:c,g:f,na:!0,start(){p=performance.now();this.na=!1;requestAnimationFrame(q)},stop(){this.na=!0;cancelAnimationFrame(L)},Pa:q,set Qa(va){p=va}}})({update:function(a){ua.Ka();m.Ma().forEach(b=>{"player"==b.target&&U(b,h)&&2==h.state&&(b.I=0,h.state=3);"enemy"==b.target&&e.forEach(c=>{U(b,c)&&(b.I=0,c.l(b.l),c.j()||(S(c.x+c.width/2,c.y+c.height/2,"orange",100),t+=c.$))})});e=e.filter(b=>b.j());e.forEach(b=>{U(b,h)&&2==h.state&&(h.state=3,S(b.x+b.width/2,b.y+b.height/2,"orange",
100),b.C=0);b.update(a)});0<h.W?(h.update(a),h.j()||(S(h.x,h.y,"#8cefb6",200),h.W--,h.Oa())):ca=!0;m.update();T.update();M.update();M.get({x:d.width+1,y:Math.random()*d.height,h:-3,width:3,height:3,color:.5<Math.random()?"#3f2c5f":"#443f7b",j:function(){return 0<this.x}})},g:function(){ba.fillStyle="#2a173b";ba.fillRect(0,0,d.width,d.height);M.g();T.g();m.g();h.g();e.forEach(a=>a.g());C({text:`Score: ${t}`,font:"32px Trebuchet MS",color:"white",y:d.height-40,x:10,textAlign:"left"}).g();C({text:`Lives: ${h.W}`,
font:"32px Trebuchet MS",color:"white",y:d.height-40,x:d.width-130,textAlign:"right"}).g();ca&&C({text:"Game Over",font:"100px Trebuchet MS",color:"white",anchor:{x:.5,y:.5},y:d.height/2,x:d.width/2,textAlign:"center"}).g()}}).start()})()
