!function(a,b,c,d){function e(a,b,c){function d(){this.constructor=a}g(a,b),d.prototype=b.prototype,a.prototype=new d,c&&f(a,c)}function f(a,b){g(a.prototype,b)}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function h(a){return b.getElementById(a)}function j(a){return Array.apply([],a)}function k(a,b){for(var c=[],d=b.length;d--;)a.indexOf(b[d])>=0&&c.push(b[d]);return c}function l(a,b,c){return b>a?b:a>c?c:a}function m(a,b){return 0|a+d.random()*(b-a+1)}function n(a){var b=a.length;return b>1?a[m(0,b-1)]:a[0]}function o(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}function p(){var a,b={};g(this,{g:function(a){return b[a]},s:function(a,c){b[a]=c},u:function(c){for(a in b)(b[a]-=c)<=0&&delete b[a]}})}function q(){var a,b,c=0;g(this,{r:function(d){c&&this.s(),a=+new Date,c=requestAnimationFrame(b=function(){d(-(a-(a=+new Date))/1e3),c=requestAnimationFrame(b)})},s:function(){c&&(cancelAnimationFrame(c),c=0)}})}function s(){var a={};g(this,{c:function(){a={}},a:function(b,c,d){a[b]||(a[b]=[]),a[b].push({f:c,c:d})},r:function(b,c){if(c)for(var d=a[b]||[],e=d.length;e--;)c==d[e].f&&d.splice(e,1);else delete a[b]},e:function(){for(var b=j(arguments),c=a[b.shift()]||[],d=c.length;d--;)c[d].f.apply(c[d].c,b)}})}function t(a){return a.map(function(a){return a.name})}function u(a){function b(b){function d(c,d){(h=p[b][d])&&(a.e(zb,c,d,h),delete p[b][d],delete q[d][b])}this.i=b,g(this,{a:function(c){p[b][m=c.constructor.name]=c,q[m]||(q[m]=[]),q[m][b]=1,a.e(yb,this,m,c)},r:function(a){d(this,a.name)},g:function(a){return p[b][a.name]},m:function(){return l=t(j(arguments)),k(c.keys(p[b]),l).length==l.length},c:function(){for(m in p[b])d(this,m)}})}var d,e,f,h,l,m,n=0,o=[],p=[],q={};g(this,{e:function(){return f=j(arguments),o[n]=e=new b(n),p[n++]=[],f&&f.map(e.a,e),e},k:function(b){b.c(),delete o[b.i],delete p[b.i],a.e(xb,b)},f:function(){for(l=t(j(arguments)),d=c.keys(p),i=l.length;i--;)d=k(d,c.keys(q[l[i]]||[]));for(results=[],i=d.length;i--;)results[i]=o[d[i]];return results},c:function(){o=[],p=[],q={},n=0}})}function v(a){var b,c,d={};a.a(xb,function(a){for(b in d)~(c=d[b].indexOf(a))&&d[b].splice(c,1)}),g(this,{a:function(a,b){d[a]||(d[a]=[]),d[a].push(b)},g:function(a){return(d[a]||[]).slice()},i:function(a,b){return!!~(d[a]||[]).indexOf(b)},c:function(){d={}}})}function w(a){var b,c,d=[],e=0;a.a(yb,function(a){for(var c=e;c--;)(b=d[c])&&!b.h(a)&&a.m.apply(null,b.t)&&(b.e[a.i]=a,b.a(a))}),a.a(zb,function(a,c,f){for(var g=e;g--;)(b=d[g])&&b.h(a)&&~b.t.indexOf(f.constructor)&&(delete b.e[a.i],b.r(a))}),g(this,{a:function(a){d[a.i=e++]=a},u:function(a){for(c=0;e>c;c++)d[c].u(a)},c:function(){d.length=e=0}})}function x(){this.t=j(arguments),this.e=[]}function z(){x.apply(this,j(arguments))}function A(a){var b,c={},d=[];a.a(xb,function(a){(b=d[a.i])&&(delete d[a.i],delete c[b])}),g(this,{r:function(a,b){c[a]=b,d[b.i]=a},g:function(a){return c[a]},c:function(){c={},d=[]}})}function B(){var a,b,c=new Image,d={},e={};g(this,{l:function(a,b){c.src=a,c.onload=function(){b()}},s:function(e,f,g,h,i,j,k){j=j||1,k=k||1;var l=d[e]=[];for(b=0;k>b;b++)for(a=0;j>a;a++)l.push({s:c,f:{x:f+a*h,y:g+b*i,w:h,h:i}})},d:function(a,b,c){e[a]={f:b,d:c?0|1e3*(1/c):65535}},g:function(a){return d[a]},a:function(a){return e[a]}})}function C(){return b.createElement("canvas")}function D(a,b){var c=this,d=c.c=C(),e=d.getContext("2d");c.w=d.width=a,c.h=d.height=b,g(c,{r:function(a){e.setTransform(1,0,0,1,0,0),a._t(),c.o(a)},o:function(d){if(d.v)if(d instanceof I)for(var f=d._c,g=0,h=f.length;h>g;g++)c.o(f[g]);else{if(e.save(),e.globalAlpha=d.o,d instanceof G)if(d.tx instanceof K)e.setTransform(1,0,0,1,0,0),e.drawImage(d.tx.s,-d._x,-d._y,a,b,0,0,a,b);else{var i=d.tx.f;e.setTransform(d.sx,0,0,d.sy,d._x,d._y),e.drawImage(d.tx.s,i.x,i.y,i.w,i.h,0|-d.c.x*i.w,0|-d.c.y*i.h,i.w,i.h)}else d instanceof F&&(e.setTransform(d.sx,0,0,d.sy,d._x,d._y),d._batch(e,d._color));e.restore()}}})}function E(){var a=this;a.x=a.y=0,a.o=1,a.v=1,a.sx=a.sy=1,a._x=a._y=0,a._o=1,a._p=null}function F(a,b){var c=this;E.call(c),c._batch=a,c._color=b}function G(a,b,c){var d=this;E.call(d),d.tx=a[c||0],d.c=b||{x:0,y:0}}function H(a,b,c,d){var e=this;G.call(e,a,d,0),e.t=a,e.a=b,e.p(c)}function I(){E.call(this),this._c=[]}function J(){I.call(this)}function K(a,b){var c=this,d=new D(a,b);c.s=d.c,c.frame={x:0,y:0,w:a,h:b},g(c,{r:function(a,b){b&&(a._x=b.x,a._y=b.y),d.o(a)}})}function L(a,b,c,d){var e,f,g,h=a.getContext("2d"),i=new D(b,c),j=a.width=d*b,k=a.height=d*c;h.webkitImageSmoothingEnabled=h.mozImageSmoothingEnabled=!1,e=C(),e.width=e.height=d,f=e.getContext("2d"),f.fillStyle="rgba(255,255,255,.02)",f.fillRect(1,0,d-2,1),f.fillRect(0,1,1,d-2),f.fillStyle="rgba(0,0,0,.05)",f.fillRect(1,d-1,d-2,1),f.fillRect(d-1,1,1,d-2),g=h.createPattern(e,"repeat"),this.r=function(a){i.r(a),h.drawImage(i.c,0,0,i.w,i.h,0,0,j,k),h.fillStyle=g,h.fillRect(0,0,j,k)}}function M(a){function b(b){for(var c,e,f=d[b];b&&(e=(b+1>>1)-1,c=d[e],a(f)<a(c));)d[b]=c,d[b=e]=f}function c(b){for(var c=d[b],f=a(c);;){var g,h=b+1<<1,i=h-1,j=-1;if(e>i){var k=d[i];(g=a(k))<f&&(j=i)}if(e>h){var l=d[h];a(l)<(0>j?f:g)&&(j=h)}if(0>j)break;d[b]=d[j],d[b=j]=c}}var d=[],e=0;g(this,{a:function(a){d[e++]=a,b(e-1)},r:function(){if(!e)throw e;var a=d[0],b=d[--e];return e&&(d[0]=b,c(0)),a},n:function(){return e}})}function N(a,b,c,d,e,f,g,h){this.w=a,this.h=b,this.m=c,this.d=d,this.c=e,this.e=f,this.p=g,this.n=h}function O(a,b,c){return 0>b||0>c||b>=a.w||c>=a.h||P(a.m[c][b])}function P(a){return a!=Eb}function Q(){wb.c([32,37,38,39,40]),Nb.l("t.png",function(){Lb.r(R)})}function R(){wb.j(32)&&(T(13),Lb.s(),Lb.r(S),h("p").className="g")}function S(a){Jb.u(a),Mb.r(Bb)}function T(a){var b,c;if(Ab=a,Bb){var d=Kb.g(Ob);d&&(b=d.g(ab),c=d.g(db)),Gb.r(Ub),Hb.c(),Ib.c(),Jb.c(),Kb.c()}Bb=new J;var e=Bb.a(new I),f=Bb.a(new I),g=e.a(new I),h=e.a(new I);Jb.a(new rb),Jb.a(new ib),Jb.a(new tb),Jb.a(new sb),Jb.a(new lb),Jb.a(new jb),Jb.a(new mb),Jb.a(new nb),Jb.a(new kb(e)),Jb.a(new vb),Jb.a(new ub(g)),!0&&Jb.a(new pb(e,h)),Jb.a(new qb(f)),Jb.a(new ob);var j=bc.world(),k=j.g(N);for(Cb.init(k.m,P),bc.hero(k.p,b,c),bc.exit(k.n),i=k.d.length;i--;)bc.door(k.d[i]);for(i=k.e.length;i--;)bc.bodyguard(k.e[i])}function U(){Lb.s(),setTimeout(function(){--Ab?(T(Ab),Lb.r(S)):(h("p").className="w",Lb.r(R))},1500)}function V(){Lb.s(),setTimeout(function(){Lb.r(R),h("p").className="f"},1500)}function W(a,b,c){this.x=a||0,this.y=b||0,this.r=c||0,this.g=function(){return{x:0|this.x/16,y:0|this.y/16}}}function X(a,b){o.call(this,0,0,a,b)}function Y(a,b,c){this.dx=a||0,this.dy=b||0,this.f=c||1}function Z(a,b){this.gfx=a,this.f=b}function $(a){this.m=this.t=a}function _(a){this.s=a}function ab(a,b,c){this.h=a,this.b=b,this.c=c}function bb(){this.p=[],this.a=0}function cb(){}function db(a,b,c,d,e,f,h){this.t=a,this.d=c,this.fr=b,this.rt=e,this.fa=f,this.sp=h||1,this.bs=d,this.b=d,g(this,{r:function(){this.b=this.bs},c:function(){return this.b>0},s:function(){this.b--}})}function eb(a){this.k=a}function fb(a,b){var c=n([0,.5]);return new F(function(d){d.beginPath(),d.fillStyle=b,d.fillRect(c,c,a,a),d.closePath()})}function gb(a){I.call(this),a&&this.t(a)}function hb(a){function b(a,b,c){return O(a,b,c)&&!O(a,b,c+1)}function c(a,b,c){return O(a,b,c)&&O(a,b,c+1)}function e(a,b,c,d){p.push(function(e,f){e.beginPath(),e.strokeStyle=f,e.moveTo(a+.5,b-.5),e.lineTo(c+.5,d-.5),e.stroke(),e.closePath()})}function f(c,d){i=16*c.x,j=16*c.y,s.r(new G(Nb.g("e")),{x:i,y:j}),i+=b(a,c.x-1,c.y)?-8:b(a,c.x+1,c.y)?18:O(a,c.x-1,c.y)?-8:18,h=new G(Nb.g("a"),{x:0,y:.5}),h.sy=d?1:-1,s.r(h,{x:i,y:j+9})}var g,h,i,j,k,l,o,p,q=this,r=["#930","#820","#710"],s=new K(16*a.w,16*a.h);for(q.b=function(a){for(o=m(50,80);o--;)h=fb(m(0,3)?1:2,n(r)),h.o=m(6,8)/10,k=d.PI*m(-180,180)/180,l=m(0,8),s.r(h,{x:a.x+d.cos(k)*l,y:a.y+d.sin(k)*l})},j=a.h;j--;)for(i=a.w;i--;){var t={x:16*i,y:16*j};for(p=[],b(a,i,j)?(g="w",O(a,i,j+1)||e(0,17,16,17),O(a,i-1,j)||e(0,0,0,16),O(a,i+1,j)||(e(15,0,15,16),e(16,0,16,17))):c(a,i,j)?(g="r",c(a,i,j-1)||e(0,1,16,1),c(a,i,j+1)||e(0,18,16,18),O(a,i-1,j)?c(a,i-1,j)||e(0,2,0,16):e(0,0,0,16),O(a,i+1,j)?c(a,i+1,j)||(e(15,2,15,16),e(16,2,16,16)):(e(15,0,15,16),e(16,0,16,16))):g="f",s.r(new G(Nb.g(g)),t),o=p.length;o--;)s.r(new F(p[o],"rgba(0,0,0,.2)"),t)}f(a.p),f(a.n,1),G.call(q,[s])}function ib(){z.call(this,W,bb,db,p),Gb.a(Ub,function(a){if(this.h(a)){var b=Kb.g(Ob);if(!b)return;if(this.h(a)){var c=a.g(bb);c.a||(c.a=!0,a.g(p).s("react",.8))}}},this)}function jb(){z.call(this,X,ab)}function kb(a){x.call(this),this.l=a}function lb(){x.call(this)}function mb(){x.call(this,ab),Gb.a(Ub,function(a,b){if(this.h(a)){var c=Kb.g(Ob);if(!c)return;var d,e=b.g(W),f=a.g(ab),g=b.g(db),h=g.d;for(d=2*h+m(4,9);d--;)bc.gib(e,n(f.c),1);if((f.h-=h)<=0){for(d=m(20,30);d--;)bc.gib(e,n(f.c),1.5);f.b&&Kb.g(Pb).g(Z).gfx.b(e),Hb.k(a),a==c&&V()}}},this)}function nb(){x.call(this,W,eb)}function ob(){x.call(this)}function pb(a,b){x.call(this),this.c=a,this.l=b,this.f=[];var c=new K(16,16);c.r(new F(function(a){a.beginPath(),a.fillStyle="#000",a.fillRect(0,0,16,16),a.closePath()}));for(var d={s:c.s,f:{x:0,y:0,w:16,h:16}},e=15;e--;){this.f[e]=[];for(var f=20;f--;){var g=b.a(new G([d]));this.f[e][f]={s:g,b:new o(g.x=16*f,g.y=16*e,16,16)}}}}function qb(a){function b(a){var b,c,d,e=new I;return b=e.a(new G(Nb.g("bl"))),c=e.a(new G(Nb.g("bb"))),c.x=b.tx.f.w,c.sx=a,d=e.a(new G(Nb.g("br"))),d.x=c.x+a,e}function c(a){var b,c,d=new I;return b=d.a(new G(Nb.g("tb"))),b.sx=a,c=d.a(new G(Nb.g("tr"))),c.x=a,d}x.call(this);var d=a.a(new I);d.x=131,d.y=160;var e=d.a(b(14)),f=d.a(b(6)),h=d.a(b(6));e.x=0,h.x=25,f.x=79,e.y=f.y=h.y=0;var i=f.a(c(9)),j=h.a(c(32));i.x=j.x=14,i.y=j.y=3;var k=f.a(new G(Nb.g("hh"))),l=h.a(new G(Nb.g("hb")));k.x=l.x=2,k.y=5,l.y=4;var m=f.a(new gb),n=h.a(new gb);m.x=n.x=15,m.y=6,n.y=6;var o=e.a(new G(Nb.g("w0")));o.x=11,o.y=9,o.c.x=o.c.y=.5,g(this,x.prototype),g(this,{u:function(){var a=Kb.g(Ob);if(!a)return m.t(0),void 0;var b=a.g(ab),c=a.g(db);o.tx=Nb.g("w"+c.t)[0],n.t(c.b+" / "+c.bs),m.t(b.h)}})}function rb(){x.call(this)}function sb(){z.call(this,W,Y)}function tb(){z.call(this,W,Y,_,p,bb)}function ub(a){z.call(this,W,Z),this.l=a}function vb(){z.call(this,W,_,Z)}f(o,{c:function(a,b){var c=this;return a>=c.x&&a<c.x+c.w&&b>=c.y&&b<c.y+c.y},o:function(a){var b=this;return b.x<a.x+a.w&&a.x<b.x+b.w&&b.y<a.y+a.h&&a.y<b.y+b.h}});var wb=function(){function a(a,e){for(c=a.split(" "),d=c.length;d--;)b.body.addEventListener(c[d],e)}var c,d,e,f=[],g=[],h=1;return a("keydown",function(a){~f.indexOf(e=a.keyCode)&&a.preventDefault(),!g[e]&&(g[e]=h)}),a("keyup",function(a){~f.indexOf(e=a.keyCode)&&a.preventDefault(),g[e]=0}),{c:function(a){f=a},p:function(a){return!!g[a]},j:function(a){return g[a]==h},u:function(){h++}}}(),xb="$k",yb="$a",zb="$r";f(x,{h:function(a){return!!this.e[a.i]},a:function(){},r:function(){},u:function(){}}),e(z,x,{ue:function(){},u:function(a){var b,c=this.e;for(b in c)this.ue(c[b],a)}}),f(E,{_t:function(){var a=this,b=a._p;a._x=b._x+a.x,a._y=b._y+a.y,a._o=b._o*a.o}}),e(F,E),e(G,E),e(H,G,{p:function(a){var b=this;b.an!=a&&(b.tx=b.t[b.a[b.an=a].f[b.f=b.d=0]])},pt:function(a){var b=this;if(b.an){var c=b.a[b.an].f,d=b.a[b.an].d;for(b.d+=a;b.d>=d;)b.d-=d,b.f=(b.f+1)%c.length,b.tx=b.t[c[b.f]]}}}),e(I,E,{a:function(a){return a._p&&a._p.r(a),this._c.push(a),a._p=this,a},r:function(a){var b=this._c,c=b.indexOf(a);return c>=0&&(b.splice(c,1),a._p=null),a},_t:function(){E.prototype._t.call(this);for(var a=this._c,b=a.length;b--;)a[b]._t()}}),e(J,I,{_t:function(){for(var a=this._c,b=a.length;b--;)a[b]._t()}});var Ab,Bb,Cb=function(){function a(a,b,d){c[d]&&c[d][b]&&a.push(c[d][b])}function b(a,b){return d.abs(a.x-b.x)+d.abs(a.y-b.y)}var c,e,f;return{init:function(a,b){for(c=[],f=a.length;f--;)for(c[f]=[],e=a[0].length;e--;)c[f][e]={w:b(a[f][e]),x:e,y:f,v:0,c:0,h:0}},w:function(a,b,d){c[b][a].w=d},r:function(a,b){for(var e=b.x-a.x,f=b.y-a.y,g=d.ceil(d.sqrt(e*e+f*f)),h=e/g,i=f/g,j=a.x-h,k=a.y-i;g--;)if(c[0|(k+=i)][0|(j+=h)].w)return!1;return!0},s:function(d,g){var h,i=new M(function(a){if(!a)throw"";return a.h});for(f=c.length;f--;)for(e=c[0].length;e--;)h=c[f][e],h.v=h.c=h.h=h.p=0;for(d=c[d.y][d.x],g=c[g.y][g.x],i.a(d);i.n();){if(h=i.r(),h==g){for(var j=h,k=[];j.p;)k.push(j),j=j.p;return k.reverse()}h.c=1,e=h.x,f=h.y;var l=[];a(l,e-1,f),a(l,e+1,f),a(l,e,f-1),a(l,e,f+1);for(var m=l.length;m--;){var n=l[m];n.c||n.w||n.v||(n.v=1,n.p=h,n.h=n.h||b(n,g),i.a(n))}}return[]}}}(),Db=0,Eb=1,Fb=function(){function a(a){var b=a.x,c=a.y,d=a.w-1,e=a.h-1,f=m(0,3);return f>1?{d:f,x:b+m(1,d-1),y:c+(f>2?0:e)}:{d:f,x:b+(f?d:0),y:c+m(1,e-1)}}function b(b,d,e,f){var g,h,i,j,k,l,p,q=[],r=[],s=[],t=[],u=[];for(h=d;h--;)for(u[h]=[],g=b;g--;)u[h][g]=Db;for(i=m(e,f),j=m(e,f),q.push(p=new o(0|(b-i)/2,0|(d-j)/2,i,j)),c(u,p.x+1,p.y+1,p.x+i-2,p.y+j-2),l=2*b*d;l-->=0;){p=new o(0,0,m(e,f),m(e,f));var v=a(n(q)),w=v.x,x=v.y;v.d>2?(g=-p.w/2,h=-p.h,x--):v.d>1?(g=-p.w/2,h=1,x++):v.d?(g=1,h=-p.h/2,w++):(g=-p.w,h=-p.h/2,w--),p.x=0|v.x+g,p.y=0|v.y+h;var y=p.x>=0&&p.y>=0&&p.x+p.w<b&&p.y+p.h<d;for(k=q.length;k--&&y;)p.o(q[k])&&(y=!1);y?(c(u,p.x+1,p.y+1,p.x+p.w-2,p.y+p.h-2),c(u,v.x,v.y,w,x),r.push(v),q.push(p)):l--}var z,A=n(q);do z=n(q);while(A===z);var B=[0,1,1,1,1,2,2,2,3,3,4];for(k=q.length;k--;)if(p=q[k],p!==A)for(l=n(B);l--;)t.push({x:p.x+m(1,p.w-2),y:p.y+m(1,p.h-2)});do g=A.x+m(1,A.w-2);while(!P(u[A.y][g]));A={x:g,y:A.y};do g=z.x+m(1,z.w-2);while(!P(u[z.y][g]));return z={x:g,y:z.y},new N(b,d,u,r,s,t,A,z)}function c(a,b,c,d,e){var f;b>d&&(f=b,b=d,d=f),c>e&&(f=c,c=e,e=f);for(var g=c;e>=g;g++)for(var h=b;d>=h;h++)a[g][h]=Eb}return b}(),Gb=new s,Hb=new u(Gb),Ib=new v(Gb),Jb=new w(Gb),Kb=new A(Gb),Lb=new q,Mb=new L(h("g"),240,180,3),Nb=new B,Ob=1,Pb=2,Qb=3,Rb=1,Sb=2,Tb=3,Ub="h",Vb="_",Wb="w",Xb="a",Yb=0,Zb=3,$b=5,_b=7,ac=9;Nb.s("r",0,0,16,16),Nb.s("w",0,16,16,16),Nb.s("f",0,32,16,16),Nb.s("dh",16,30,16,18),Nb.s("dv",112,0,5,25),Nb.s("e",32,31,16,16),Nb.s("a",48,30,7,10),Nb.s("h",16,0,8,15,12),Nb.s("b",16,15,8,15,12),Nb.s("w"+Zb,0,48,15,12),Nb.s("w"+_b,15,48,18,10),Nb.s("w"+Yb,33,48,13,11),Nb.s("w"+ac,46,48,18,10),Nb.s("w"+$b,64,49,18,8),Nb.s("bh",44,47,4,1),Nb.s("bv",48,44,1,4),Nb.s("l",91,43,5,5,1,2),Nb.s("m",91,37,5,6),Nb.s("9",55,30,6,7),Nb.s("8",61,30,6,7),Nb.s("7",67,30,6,7),Nb.s("6",73,30,6,7),Nb.s("5",79,30,6,7),Nb.s("4",85,30,6,7),Nb.s("3",91,30,6,7),Nb.s("2",97,30,6,7),Nb.s("1",103,30,4,7),Nb.s("0",107,30,6,7),Nb.s("/",113,30,5,7),Nb.s("hh",55,37,10,9),Nb.s("hb",65,37,10,10),Nb.s("tb",76,37,1,12),Nb.s("tr",76,37,5,12),Nb.s("bl",82,37,4,18),Nb.s("bb",86,37,1,18),Nb.s("br",87,37,4,18),Nb.d("_s",[0]),Nb.d("_n",[1]),Nb.d("_h",[2]),Nb.d("ws",[3,4],6),Nb.d("wn",[5,6],6),Nb.d("wh",[7,2,8,2],9),Nb.d("as",[9]),Nb.d("an",[10]),Nb.d("ah",[11]),Nb.d("l",[0,1],8),e(X,o,{t:function(a){this.x=(0|a.x)-(0|this.w/2),this.y=(0|a.y)-(0|this.h/2)}});var bc=function(){function a(a){return new H(Nb.g(a),{_n:Nb.a("_n"),_s:Nb.a("_s"),_h:Nb.a("_h"),wn:Nb.a("wn"),ws:Nb.a("ws"),wh:Nb.a("wh"),an:Nb.a("an"),as:Nb.a("as"),ah:Nb.a("ah")},"_s",c)}var b,c={x:.5,y:.5},e=["#c30","#920","#b20","#820"],f=["#eeb","#ffe","#fd6"];return{exit:function(a){return Kb.r(Qb,b=Hb.e(new W(16*a.x+6,16*a.y+10),new X(11,16))),b},door:function(a){var d=16*a.x,e=16*a.y;return b=a.d>1?Hb.e(new W(d+8,e+(a.d>2?0:16)),new X(16,14),new Z(new G(Nb.g("dh"),c))):Hb.e(new W(d+(a.d?16:0),e+3),new X(3,25),new Z(new G(Nb.g("dv"),c))),b.a(new eb),b.a(new ab(2,!1,f)),Ib.a(Sb,b),b},hero:function(c,d,f){return Kb.r(Ob,b=Hb.e(d||new ab(99,!0,e),f||cc.g(Yb,2),new W(16*c.x+7,16*c.y+26),new X(6,13),new Y,new Z(a("h")),new p,new _(Vb))),b},bodyguard:function(b){return Hb.e(cc.g(-1),new W(16*b.x+7,16*b.y+10),new X(8,13),new Y,new Z(a("b")),new ab(5,!0,e),new bb,new p,new _(Vb))},bullet:function(a,b){var c=b.sp,e=180==a.r||!a.r;for(a.r/180*d.PI;c--;){var f,g=(a.r+m(-3,3)+8*c-4*(b.sp-1))/180*d.PI;Ib.a(Rb,Hb.e(b,new W(a.x+(e?0:a.r>0?5:-5),a.y+(e?a.r?-10:10:0),a.r),new X(3,3),new Y(0|120*d.sin(g),0|120*d.cos(g)),new Z(f=new G(Nb.g(e?"bv":"bh"),e?{x:0,y:1}:{x:1,y:0})))),f.sx=a.r<0?-1:1,f.sy=180==a.r?-1:1}},gib:function(a,b,c){var d=m(0,3)?1:2;return Hb.e(new $(.5*c),new W(a.x,a.y),new Y(c*m(-70,70),c*m(-70,70),.95),new Z(fb(d,b),!0))},weapon:function(a,d){return Ib.a(Tb,b=Hb.e(d,a,new Z(new H(Nb.g("l"),{l:Nb.a("l")},"l",c)),new X(3,3))),b},medic:function(a){return Ib.a(Tb,b=Hb.e(a,new cb,new Z(new G(Nb.g("m"),c)),new X(3,4))),b},world:function(){var a=Fb(20,15,4,7);return Kb.r(Pb,b=Hb.e(new W,new Z(new hb(a)),a)),b}}}(),cc=function(){return{g:function(a,b){var c,d,e=1,f=m(8,12)/10,g=!1,h=1;a=0>a?m(0,9):a,3>a?(a=Yb,c=m(1,4)/10,e=n([1,1,2,3]),d=n([6,7,8,13]),g=!m(0,20)):5>a?(a=Zb,c=m(8,30)/100,d=n([25,25,30]),g=!0):7>a?(a=$b,c=m(3,5)/10,e=n([1,1,1,2,3]),h=m(4,8),f+=h/10,d=n([3,5,7,8]),g=!m(0,9)):9>a?(a=_b,c=m(12,35)/100,d=n([25,30,30,35]),g=!0):(a=ac,c=m(7,14)/10,e=m(3,7),d=m(2,5)),b=1+(b||0)/10,c/=b,f/=b,e=0|e*b,h=h>1?0|h*b:h;var i=new db(a,c,e,d,f,g,h);return i}}}();e(gb,I,{t:function(a){this._c=[];for(var b,c,d=(""+a).split(""),e=0,f=d.length,g=0;f>e;e++)b=d[e]," "==b?g+=3:(c=this.a(new G(Nb.g(d[e]))),c.x=g,g+=c.tx.f.w-1)}}),e(hb,G),e(ib,z,{r:function(a){m(0,99)<15?bc.weapon(a.g(W),a.g(db)):m(0,99)<20&&bc.medic(a.g(W))},ue:function(a){var b=Kb.g(Ob);if(b){var c,e=b.g(W),f=a.g(bb),g=a.g(p),h=a.g(W),i=a.g(db),j=h.g(),k=e.g(),l=Cb.r(j,k);f.a?!l||g.g("atk")||j.x!=k.x&&j.y!=k.y?g.g("react")||(f.p=Cb.s(j,k),g.s("react",1)):(f.p=[],r=180*d.atan2(e.x-h.x,e.y-h.y)/d.PI,c=d.abs(r),h.r=c>135?180:45>c?0:0>r?-90:90,i.c()?(i.s(),bc.bullet(h,i),g.s("atk",i.fr)):(i.r(),g.s("atk",i.rt))):l&&(f.a=!0,g.s("react",.8))}}}),e(jb,z,{u:function(){var a,b=Kb.g(Pb).g(N),c=Ib.g(Rb);for(i=c.length;i--;)a=c[i],position=a.g(W),O(b,0|position.x/16,0|(position.y+2)/16)&&Hb.k(a);z.prototype.u.call(this)},ue:function(a){var b,c,d=a.g(X),e=Ib.g(Rb);for(b=e.length;b--;)c=e[b],c.g(X).o(d)&&(Gb.e(Ub,a,c),Hb.k(c))}}),e(kb,x,{u:function(){var a=Kb.g(Ob);if(a){var b=a.g(W),c=this.l;c.x=-l(0|b.x-120,0,80),c.y=-l(0|b.y-90,0,60)}}}),e(lb,x,{u:function(a){var b=Kb.g(Ob);if(b){var c,d,e=b.g(W),f=b.g(X),g=b.g(Y);if(f){var h=Kb.g(Pb),i=h.g(N),j=Hb.f(W,X);for(d=j.length;d--;)j[d].g(X).t(j[d].g(W));var k=0|f.x/16,l=0|(f.y+8)/16,m=0|(f.x+f.w-1)/16,n=0|(f.y+f.h-1)/16;(O(i,k,l)||O(i,m,l)||O(i,k,n)||O(i,m,n))&&(c=1);var o=Ib.g(Sb);for(d=o.length;d--&&!c;)o[d].g(X).o(f)&&(c=1);c&&(f.x=e.x-=g.dx*a,f.y=e.y-=g.dy*a,g.dx=g.dy=0)}}}}),e(mb,x),e(nb,x,{a:function(a){var b=a.g(W);Cb.w(0|b.x/16,0|b.y/16,!0)},r:function(a){var b=a.g(W);Cb.w(0|b.x/16,0|b.y/16,!1)}}),e(ob,x,{u:function(a){for(var b=Hb.f($),c=b.length;c--;)(b[c].g($).t-=a)<=0&&Hb.k(b[c]);for(b=Hb.f(p),c=b.length;c--;)b[c].g(p).u(a)}}),e(pb,x,{u:function(){function a(b,e,f,g,h,j,k,l,m,n){var o=j*j,p=0;if(!(h>g))for(var q=f;j+1>q;q++){for(var r=-q-1,s=-q,t=0;0>=r;){r+=1;var u=b+r*k+s*l,v=e+r*m+s*n;if(20>u&&u>=0&&15>v&&v>=0){var w=(r-.5)/(s+.5),x=(r+.5)/(s-.5);if(h>w)break;g>x&&(o>r*r+s*s&&(i[v][u].s.o=((u-d.x)*(u-d.x)+(v-d.y)*(v-d.y))/o),t?O(c,u,v)?p=x:(t=!1,g=p):O(c,u,v)&&j>q&&(t=!0,a(b,e,q+1,g,w,j,k,l,m,n),p=x))}}if(t)break}}var b=Kb.g(Ob);if(b){for(var c=Kb.g(Pb).g(N),d=b.g(W).g(),e=new o(-this.c.x,-this.c.y,240,180),f=15;f--;)for(var g=20;g--;){var h=this.f[f][g];h.s.v=h.b.o(e),h.s.o=1}var i=this.f,j=[[1,0,0,-1,-1,0,0,1],[0,1,-1,0,0,-1,1,0],[0,1,1,0,0,-1,-1,0],[1,0,0,1,-1,0,0,-1]];i[d.y][d.x].s.o=0;for(var k=8;k--;)a(d.x,d.y,1,1,0,5,j[0][k],j[1][k],j[2][k],j[3][k])}}}),e(rb,x,{u:function(){var a=Kb.g(Ob);if(a){var b=y=0,c=a.g(W),e=a.g(X),f=a.g(Y),g=a.g(_),h=a.g(p),i=a.g(db);if(e){if(f.dx=f.dy=0,g.s=Vb,h.g("atk"))g.s=Xb;else{if(h.g("reload")||(i.fa&&wb.p(88)||wb.j(88)?i.c()&&(i.s(),h.s("atk",i.fr),bc.bullet(c,i)):wb.j(67)&&(i.r(),h.s("reload",i.rt))),wb.j(86)){for(var j,k,l,m=Ib.g(Tb),n=m.length;n--;)j=m[n],j.g(X).o(e)&&((k=j.g(db))?(a.r(db),a.a(j.g(db)),j.r(db),j.a(i)):(Hb.k(j),l=a.g(ab),l.h=d.min(l.h+20,99)));var o=Kb.g(Qb);if(o.g(X).o(e))return a.r(X),U(),void 0}wb.p(37)?b=-1:wb.p(39)&&(b=1),wb.p(38)?y=-1:wb.p(40)&&(y=1);var q=d.sqrt(b*b+y*y);q&&(f.dx=60*(b/q),f.dy=60*(y/q),g.s=Wb)}wb.u()}}}}),e(sb,z,{ue:function(a,b){var c,e,f=a.g(W),g=a.g(Y);f.x+=g.dx*b,f.y+=g.dy*b,(g.dx||g.dy)&&(c=180*d.atan2(g.dx,g.dy)/d.PI,e=d.abs(c),135==e?c=180:45==e&&(c=0),f.r=c,g.dx=d.abs(g.dx*=g.f)<1e-4?0:g.dx,g.dy=d.abs(g.dy*=g.f)<1e-4?0:g.dy)}}),e(tb,z,{ue:function(a){for(var b=a.g(W),c=b.g(),e=a.g(Y),f=a.g(_),g=a.g(p),h=a.g(bb).p;h.length&&c.x==h[0].x&&c.y==h[0].y;)h.shift();if(h.length){var i=m(30,50),j=h[0],k=d.atan2(16*(j.y+.5)-b.y,16*(j.x+.5)-b.x);e.dx=d.cos(k)*i,e.dy=d.sin(k)*i,f.s=Wb}else f.s=g.g("atk")?Xb:Vb,e.dx=e.dy=0}}),e(ub,z,{a:function(a){this.l.a(a.g(Z).gfx)},r:function(a){this.l.r(a.g(Z).gfx)},u:function(a){this.l._c.sort(function(a,b){return a.y-b.y}),z.prototype.u.call(this,a)},ue:function(a,b){var c=a.g(W),d=a.g(Z),e=d.gfx;if(e.x=0|c.x,e.y=0|c.y,e instanceof H&&e.pt(0|1e3*b),d.f){var f=a.g($);e.o=f.t/f.m}}}),e(vb,z,{ue:function(a){var b=a.g(W),c=a.g(_),d=a.g(Z).gfx;d.sx=b.r<0?-1:1;var e;e=180==b.r?"n":b.r?"h":"s",d.p(c.s+e)}}),Q()}(window,document,Object,Math);