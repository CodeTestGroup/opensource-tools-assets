(()=>{let e=!1,t=()=>{pl(!1);let t=ut("map");sl(t),L(t),e?Al("start"):(e=!0,s()),Zl()};window.addEventListener("load",async()=>{await ge([["packed","packed.png",16,16,2,2,["map","t","a","misc"]]]),p(),t()});let l=(e,t,l)=>{if(0===l)return[[e,t]];{let l=[];for(let r=-1;r<=1;r++)for(let n=-1;n<=1;n++)l.push([e+n,t+r]);return l}},r=(e,t)=>Math.floor(Math.random()*(t-e)+e),n=e=>e[r(0,e.length)],i=(e,t,l,r,n,i)=>e>=l&&e<=n&&t>=r&&t<=i,o=(e,t,l,n,i)=>{if(t===e)return 0;let[o,a]=l,s=r(o,a);ae(G(t),-s);let[f,c]=j(t),u=Lt(15,f,c,""+s),h=Vt(i);return Ct(h,u),le(e,!0),n&&Al(n),s},a=[(e,t)=>{},(e,t)=>{let l=(e,t)=>{let[l,r]=j(e),[n,i]=j(t);return[n-l,i-r]};if(((e,t)=>{let[r,n]=l(e,t);return Math.abs(r)<6&&Math.abs(n)<6})(e,xt(t.player))){let r=((e,t)=>{let[r,n]=l(e,t);return 0===n?r>0?[T]:[E]:0===r?n>0?[x]:[M]:r>0&&n>0?[I,x,T]:r>0&&n<0?[D,M,T]:r<0&&n>0?[$,x,E]:[S,M,E]})(e,xt(t.player));for(let l in r)if(z(e,r[l],t))break}}],s=async()=>{let e="Heh, yer trapped here, friend.\n  Welcome to Realm 404.\n  Why's it called that?\n  Yer might say, the only way to escape...\n  ...is to tribute 404 coins to the fountain.\n  Put 'em in the fountain...\n  ...and ye might fight the Lord to leave.\n  But be wary.\n  This place be dangerous.\n  Death can come at any time.\n  But... I can aid you.\n  I'll buy any items you find.\n  For a fair price...\n  Heh heh heh...".split("\n"),t="a_12_f",l={d:"a_12",2:t,3:t,4:"t_13",5:"t_13",6:"t_13_f",10:t,11:t};El(!0);let r=fl();for(let t in e)Tl(e[t]),Sl(l[t]||l.d),Zl(),zl(),Al("talk"),await m();Tl(""),Sl(""),El(!1),Zl(),L(r),Al("start")},f=!1,c=!1,u=e=>{let t=al();f?c||(c=!0,setTimeout(()=>{f=!1,c&&(c=!1,u(e))},16)):(f=!0,zl(),Bl(e,t))},h=!1,d=null,m=async()=>new Promise(e=>{h=!0,d=()=>{d=null,h=!1,e()}}),p=()=>{let e={40:x,34:I,35:$,37:E,12:_,39:T,36:S,38:M,33:D,32:_,98:x,99:I,97:$,100:E,101:_,102:T,103:S,104:M,105:D,81:S,87:M,69:D,65:E,83:_,68:T,90:$,88:x,67:I};window.addEventListener("keydown",t=>{let l=fl();if(ml())return;if(h&&d)return void d();Tl("");let{which:r}=t,n=e[r]||r,i=xt(l.player),o=Vt(l);switch(!0){case(s=+n)>=1&&s<=9:a=n,g(),A(l.player,a,l);break;case 27===n:g(),Zl(),u(l);break;case 192===n:let e=Ut(o,i),[r,f,c]=e[0]||[];r&&k(r,i,f,c,o);break;default:if(!t.shiftKey&&n>48&&n<=57){let e=n-49,t=O(i)[e];if(t){let l=mt(t);wt(t)?(bl(e),v(l,i)):kt(t)&&b(e,i)}}if(t.shiftKey&&n>48&&n<=57||192===t.which){let e=Ut(o,i),t=n-49,[l,r,a]=e[t]||[];l&&k(l,i,r,a,o)}}var a,s});let t=we();t.onmousemove=e=>{let t=fl(),r=al();if(vl()){let{offsetX:n,offsetY:i}=e,o=Ml(),a=xt(t.player),[s,f]=j(a),c=hl()*r,h=s*c+c/2,d=f*c+c/2,m=Math.floor(n/c),p=Math.floor(i/c);Kl(h,d,n,i),Ot(l(m,p,o),Vt(t)),u(t)}else jl()},t.onmousedown=e=>{let t=yl();if(t){let l=fl(),{offsetX:r,offsetY:n}=e,i=2*hl();t(Math.floor(r/i),Math.floor(n/i)),u(l)}}},g=()=>{jl(),kl(),Xt(Vt(fl()));let e=yl();e&&e(-1,-1)},y=(e,t,l,r,i)=>{let o;if(1===e)o=i?Le:Fe;else if(2===e)o=i?Ce:Pe;else{if(3!==e)return;o=i?Re:qe}let a=n(o);Bt(r,a,t,l)},w=(e,t)=>{let[l,r]=j(e);y(t.lvl,l,r,t)},v=async(e,t)=>{Al("use"),Zl(),await vt(e)(t)&&(K(t,e),bl(-1)),Zl()},b=async(e,t)=>{Al("eqp"),Z(t,e),Zl()},k=(e,t,l,r,n)=>{let i=mt(e),o=ht(i);Nt(n,o,l,r),bt(e)&&(W(t,e),Al("acquire")),Zl(),L(fl())},M="8",x="2",E="4",_="5",T="6",S="7",D="9",$="1",I="3",A=(e,t,l)=>{let r=xt(e);z(r,t,l),(e=>{let t=xt(e),[l,r]=j(t),[n,i]=e,o=n,a=i,s=cl();return l<0&&(n--,l=s-1),r<0&&(i--,r=s-1),l>=s&&(n++,l=0),r>=s&&(i++,r=0),St(e,n,i),Q(t,l,r),o!==n||a!==i})(e)?L(l):F()},z=(e,t,l)=>{let n=Vt(l),[i,o,a,s,f]=((e,t,l)=>{let[r,n]=j(e),i=r,o=n;switch(t){case M:n--;break;case x:n++;break;case E:r--;break;case T:r++;break;case S:r--,n--;break;case D:r++,n--;break;case $:r--,n++;break;case I:r++,n++}let a=r,s=n,f=[i,o,a,s,!1],c=Vt(l);if(c){let e=qt(c,r,n);if(e&&!Kt(e))return f;if(Pt(c,r,n))return f}return[r,n,a,s,!0]})(e,t,l);((e,t,l)=>{let[r,n]=j(e),i=r-t;J(e,i>0?U:0===i?n-l>0?Y:U:Y)})(e,a,s),Q(e,i,o);let c=Pt(n,a,s),u=oe(e);return c&&u!==oe(c)?(((e,t,l)=>{if(t===e)return 0;let[n,i]=fe(e),o=r(n,i+1);ae(G(t),-o);let[a,s]=j(t),f=Lt(0,a,s,""+o),c=Vt(l);Ct(c,f),le(e,!0),Al("strike")})(e,c,l),!0):f},F=()=>{pl(!0);let e=fl(),t=Vt(e);for(let e=0;e<t.a.length;e++)ee(t.a[e],!0);P()},L=e=>{let t=Vt(e),l=xt(e.player),[r,n]=j(l);R(r,n,t),zl(),Bl(e,2)},P=()=>{let e=fl(),l=Vt(e);if(l.p.length){for(let e=0;e<l.p.length;e++){let t=l.p[e],[,r,n]=t;+new Date-r>=n&&(l.p.splice(e,1),e--)}return setTimeout(P,16),void L(e)}let r=xt(e.player);if(re(r),ne(r))return Al("lose"),void setTimeout(()=>{t()},2e3);for(let t=0;t<l.a.length;t++){let r=l.a[t];if(ne(r))l.a.splice(t,1),t--,w(r,l),Al("dead"),r[13]&&r[13]();else{if(te(r)){ee(r,!1);let t=ie(r);return(0,a[t])(r,e),void setTimeout(P,1)}re(r)}}L(e),Zl(),setTimeout(()=>{pl(!1)},16)},C=()=>{El(!0),Dl(!0),Al("win"),setTimeout(()=>{zl()})};window.finalRoom=()=>{Al("sell");let e=fl(),t=e.player,l=xt(t);Tt(e.player,-404);let[r,n]=e.end;St(t,r,n),Q(l,6,11);let i=Vt(e),o=["Lord","a",14,11,6,Be(150),[De],0,1,!0,!1,2,0,C];i.a.push(o),Tl("Who dares challenge me!"),L(e),Zl()};let q=e=>{let t=[];for(var l=0;l<e[0];++l)t.push(1===e.length?0:q(e.slice(1)));return t},R=(e,t,l)=>{let r=cl(),n=q([r,r]),i=(e,t,r,i)=>{let o=1,a=Math.abs(r-e),s=e<r?1:-1,f=Math.abs(i-t),c=t<i?1:-1,u=(a>f?a:-f)/2,h=0;for(;h++,!(h>10);){let h=e,d=t;if(void 0===n[d]||void 0===n[d][h])continue;if(0!==n[d][h]&&1!==o||(n[d][h]=o),jt(qt(l,h,d))&&(o=0),e===r&&t===i)break;let m=u;m>-a&&(u-=f,e+=s),m<f&&(u+=a,t+=c)}};for(let l=-7;l<=7;l++)i(e,t,e+l,t+7),i(e,t,e+l,t-7),i(e,t,e+7,t+l),i(e,t,e-7,t+l);n[t][e]=1,((e,t)=>{for(let l=0;l<t.length;l++)for(let r=0;r<t[0].length;r++)e[l][r]=e[l][r]||t[l][r]})(l.explMap,n),l.visMap=n};var B,H=.3;H=.3,B=(e=1,t=.05,l=220,r=0,n=0,i=.1,o=0,a=1,s=0,f=0,c=0,u=0,h=0,d=0,m=0,p=0,g=0,y=1,w=0,v=44100,b=99+r*v,k=n*v,M=i*v,x=w*v,E=g*v,_=2*Math.PI,T=(e=>0<e?1:-1),S=b+x+k+M+E,D=(s*=500*_/v**2),$=(l*=(1+2*t*Math.random()-t)*_/v),I=T(m)*_/4,A=0,z=0,F=0,L=0,P=0,C=0,q=1,R=[],B=zzfxX.createBufferSource(),N=zzfxX.createBuffer(1,S,v))=>{for(B.connect(zzfxX.destination);F<S;R[F++]=C)++P>100*p&&(P=0,C=A*l*Math.sin(z*m*_/v-I),C=T(C=o?1<o?2<o?3<o?Math.sin((C%_)**3):Math.max(Math.min(Math.tan(C),1),-1):1-(2*C/_%2+2)%2:1-4*Math.abs(Math.round(C/_)-C/_):Math.sin(C))*Math.abs(C)**a*e*H*(F<b?F/b:F<b+x?1-(F-b)/x*(1-y):F<b+x+k?y:F<S-E?(S-F-E)/M*y:0),C=E?C/2+(E>F?0:(F<S-E?1:(F-S)/E)*R[F-E|0]/2):C),A+=1-d+1e9*(Math.sin(F)+1)%2*d,z+=1-d+1e9*(Math.sin(F)**2+1)%2*d,l+=s+=500*f*_/v**3,q&&++q>u*v&&(l+=c*_/v,$+=c*_/v,q=0),h&&++L>h*v&&(l=$,s=D,L=1,q=q||1);return N.getChannelData(0).set(R),B.buffer=N,B.start(),B},zzfxX=new AudioContext;let N,U=0,Y=1,G=e=>e[5],O=e=>e[6],X=(e,t,l)=>{let r=O(e),n=mt(t),i=ht(n);for(let n=0;n<r.length;n++){let o=r[n],a=mt(o);if(i===ht(a)){if(l){let e=pt(t),l=gt(o,e);r[n]=l}else{let t=gt(o,-1);if(t)r[n]=t;else{let t=V(e),l=e[12];if(t){let r=mt(t);ht(r)===i?Z(e,-1):l>n&&Z(e,l-1)}r.splice(n,1)}}return}}l&&r.push(t)},W=(e,t)=>{X(e,t,!0)},K=(e,t)=>{X(e,t,!1)},j=e=>e.slice(3,5),Q=(e,t,l)=>{e[3]=t,e[4]=l},V=e=>O(e)[e[12]]||null,Z=(e,t)=>{e[12]=t},J=(e,t)=>{e[7]=t},ee=(e,t)=>{e[9]=t},te=e=>e[9],le=(e,t)=>{e[10]=t},re=e=>{le(e,!1)},ne=e=>se(G(e))<=0,ie=e=>e[8],oe=e=>0===ie(e)?0:1,ae=(e,t)=>{e[0]+=t,e[0]<0?e[0]=0:e[0]>e[1]&&(e[0]=e[1])},se=e=>e[0],fe=e=>{let t=V(e),[l,r]=[1,3];if(t){let[n,i]=Mt(mt(t),e);l+=n,r+=i}return[l,r]},ce=null,ue=null,he=null,de=e=>{let[t,l,r,n]=ye(e.width,e.height),i=r/2,o=n/2;return l.translate(i,o),l.rotate(Math.PI/2),l.drawImage(e,-i,-o),t},me=e=>{let[t,l,r]=ye(e.width,e.height);return l.translate(r,0),l.scale(-1,1),l.drawImage(e,0,0),t},pe=e=>{let[,,,t,l]=e,[r,n]=ye(t,l);return Ll(e,0,0,1,n),r},ge=async e=>{let t={},l={};await Promise.all(e.map(([e,r,n,i,o,a,s])=>new Promise(f=>{let c=new Image;c.onload=()=>{t[e]=c,((e,t,l,r,n,i,o)=>{let a=(t,l,r,n,i,o)=>e[t]=[l,r,n,i,o],s=(e,t,l)=>{let i=e;for(let e=0;e<l;e++)i=de(i);a(`${t}_r${l}`,i,0,0,r,n)},f=t.width/r/i,c=t.height/n/o;for(let e=0;e<o;e++)for(let o=0;o<i;o++){let u=l[e*i+o],h=0;for(let l=0;l<c;l++)for(let i=0;i<f;i++){let d=`${u}_${h}`,m=a(`${u}_${h}`,t,o*r*f+i*r,e*n*c+l*n,r,n);s(pe(m),d,1),s(pe(m),d,2),s(pe(m),d,3);let p=me(pe(m));a(d+"_f",p,0,0,r,n),h++}}})(l,c,s,n,i,o,a),f()},c.src=r}))),ue=t,he=l},ye=(e,t)=>{let l=document.createElement("canvas");l.width=e,l.height=t;let r=l.getContext("2d");return r.imageSmoothingEnabled=!1,[l,r,e,t]},we=()=>{if(ce)return ce;{let[e,t]=ye(576,576);return e.id="canv",t.lineWidth=2,window.canvasDiv.appendChild(e),ce=e,e}},ve=()=>we().getContext("2d"),be=async(e,t,r,n,i,a)=>{if(a=a||await(async e=>new Promise(t=>{wl(!0),xl(e),gl((e,l)=>{e>-1&&l>-1?(jl(),kl(),t([e,l])):t(null),gl(null),g()})}))(r)){let s=fl(),[f,c]=a,u=l(f,c,r),h=!1;for(let l=0;l<u.length;l++){let[r,a]=u[l],f=Pt(Vt(s),r,a);f&&0===e&&(o(t,f,n,h?"":i,s),h=!0)}return h?(F(),!0):(Al("cancel"),!1)}return!1},ke=(e,t)=>()=>(Al("gold"),Tt(fl().player,r(e,t)),!1),Me=[13,"Gold S",{onAcq:ke(1,5)},0],xe=[13,"Gold M",{onAcq:ke(5,10)},1],Ee=[13,"Gold L",{onAcq:ke(10,15)},1],_e=[14,"Key",{async onUse(e){let t=fl(),r=Vt(t),[n,i]=j(e),o=l(n,i,1);for(let e=0;e<o.length;e++){let[l,n]=o[e],i=qt(r,l,n);if(i){let e=Wt(i);if(e===zt||e===At)return Al("unlock"),Rt(r,l,n,Ft),e===At&&y(r.lvl,l,n,r,!0),setTimeout(()=>{L(t)}),!0}}return Tl("You are nearby nothing to unlock!"),Al("cancel"),!1}},10],Te=[2,"Knife",{getDmg:()=>[4,8]},1],Se=[3,"Sword",{getDmg:()=>[8,16]},5],De=[3,"Fine Sword",{getDmg:()=>[16,24]},15],$e=[6,"Scroll: Flame",{onUse:e=>be(0,e,0,[13,20],"flame")},50],Ie=[6,"Scroll: Combust",{onUse:e=>(Al("flame"),be(0,e,1,[18,28],"",j(e)))},25],Ae=[6,"Scroll: Fireball",{onUse:e=>be(0,e,1,[15,25],"flame")},75],ze=[9,"Potion",{onUse:async e=>(ae(G(e),r(5,15)),!0)},50],Fe=[Te,Se,Me,$e,Ie,ze,_e],Le=[[ze,3],[$e,3],[Ie,2],[Ae,2]],Pe=[Se,Me,xe,$e,Ie,De,ze],Ce=[[Ae,2],[$e,5],[ze,5]],qe=[xe,Ee,De,$e,ze,[ze,2],_e],Re=[[4,"Magic Sword",{getDmg:()=>[30,55]},404],[[6,"Scroll: Eviscerate",{onUse:async e=>be(0,e,0,[32,40],"flame")},200],3]],Be=e=>[e,e],He=[2,1,"mG",Be(6),1],Ne=[4,1,"g",Be(14),1],Ue=[6,1,"C",Be(17),1],Ye=[10,1,"G",Be(32),1],Ge=[[He,4,6,12,Te],[Ne,4,6,10,Te]],Oe=[[He,0,2,12,Se],[Ne,2,6,10,Te],[Ue,1,4,4,De],[Ye,1,2,10,Se]],Xe=[[Ne,0,2,12,Se],[Ue,2,5,10,De],[Ye,8,10,10,Se]],We=[1,3,4],Ke=[2,5,6,7],je=[8],Qe=[9,10,11],Ve=[14],Ze=[12,13],Je=(e,t)=>[e%t,Math.floor(e/t)],et=(e,t,l)=>t*l+e,tt=()=>n(["","_r1","_r2","_r3","_f"]),lt=(e,t)=>{let l=cl(),r=e*l;return t.tiles.slice(r,r+l)},rt=(e,t)=>{let l=[],r=cl();for(let n=0;n<cl();n++)l.push(t.tiles[e+n*r]);return l},nt=(e,t)=>t.rooms.filter(t=>t.lvl===e),it=(e,t,l)=>{let r=[],n=[e],i=[],o=t=>{t&&(t.lvl!==l||r.includes(t)?t.lvl!==e.lvl||i.includes(t)||n.push(t):r.push(t))};do{let e=n.shift();i.push(e),ot(e,t).forEach(o)}while(n.length);return r},ot=(e,t)=>{let l=ul(),[r,n]=Je(t.rooms.indexOf(e),l);return[dl(r,n-1,t),dl(r,n+1,t),dl(r-1,n,t),dl(r+1,n,t)]},at=(e,t,l)=>{let r=cl();ot(e,l).forEach((l,n)=>{let i=t=>{((e,t)=>{t[0]="t_"+e,t[1]=e})(e.tiles[r+1][1],t)};if(l===t)switch(n){case 0:lt(0,e).slice(4,-4).forEach(i);break;case 1:lt(r-1,e).slice(4,-4).forEach(i);break;case 2:rt(0,e).slice(4,-4).forEach(i);break;case 3:rt(r-1,e).slice(4,-4).forEach(i)}})},st=(e,t,l)=>{let r=()=>n(1===e?We:2===e?je:Ve);e>1&&(t.lvl=e,t.mod=tt(),t.id=r());for(let i=0;i<4;i++){let i=it(t,l,0);if(i.length){let t=n(i);t.lvl=e,t.mod=tt(),t.id=r()}}},ft=(e,t)=>{let l=(e,t,l,n)=>[r(e,e+l),r(t,t+n)],n=(e,t,l)=>{let r=qt(l,e,t),n=Pt(l,e,t);return!(!Kt(r)||null!==n)},i=cl();t.forEach(t=>{let o,a,[s,f,c,u,h]=t,d=i/2-u/2,m=0,p=r(f,c+1);for(let t=0;t<p;t++){let t=!1;do{let[e,r]=l(d,d,u,u);if(o=e,a=r,m++,m>10){t=!0;break}}while(!n(o,a,e));if(t)continue;let[r,i,f,c,p]=s,g=[f,"a",r,o,a,[...c],[h],0,p,!0,!1,i,0,0];e.a.push(g)}})},ct={5011569:0,634050:1,255255255:2,25523198:3,256163:4,357193:5,"000":6,79103129:7,606060:8,803030:9,18411180:10,4132209:11,2295968:12,44232244:13,25114643:14,175191210:15},ut=e=>{let t=[0,0,["player","a",0,9,12,Be(100),[Te,[ze,3]],0,0,!0,!1,0,0,0],0],l={rooms:[],p:[],player:t,end:[]},r=ul(),i=cl(),o=r*r;for(let e=0;e<o;e++){let e={lvl:0,id:15,tiles:[],p:[],visMap:q([i,i]),explMap:q([i,i]),items:[],a:[],mod:""};l.rooms.push(e)}let a=n(l.rooms);a.lvl=1,a.id=0;let s,f=l.rooms.indexOf(a),[c,u]=Je(f,r);St(t,c,u);do{s=n(l.rooms)}while(s===a);s.lvl=4,s.id=15,s.mod="";let h=l.rooms.indexOf(s);l.end=Je(h,4),st(1,a,l);let d=n(it(a,l,0));st(2,d,l);let m=it(d,l,0),p=n(m.length?m:it(a,l,0));if(st(3,p,l),nt(3,l).length<=2||nt(2,l).length<=2)return ut(e);nt(0,l).forEach(e=>{e.lvl=1,e.mod=tt(),e.id=n(We)}),n(nt(1,l).filter(e=>e!==a)).id=n(Ke),n(nt(2,l)).id=n(Qe),n(nt(3,l)).id=n(Ze);let g=(e,t)=>["t_14",14,e,t,!1];for(let t=0;t<o;t++){let{tiles:r,id:n,mod:o}=l.rooms[t],[,a]=ye(16,16);Ll(e+"_"+n+o,0,0,1,a);let{data:s}=a.getImageData(0,0,16,16);for(let e=0;e<i*i;e++){let[t,l]=Je(e,i);r.push(g(t,l))}let f=0;for(let e=0;e<s.length;e+=4){let t=ct[`${s[e+0]}${s[e+1]}${s[e+2]}`]||0,l=1+f%16,n=1+Math.floor(f/16);r[et(l,n,i)]=["t_"+t,t,l,n,!1],f++}}for(let e=0;e<o;e++){let t=l.rooms[e];ot(t,l).forEach(e=>{e&&e.lvl===t.lvl&&at(t,e,l)})}let w=n(it(a,l,2));ot(w,l).forEach(e=>{e&&1===e.lvl&&(at(w,e,l),at(e,w,l))});let v=it(w,l,3),b=n(v.length?v:it(a,l,3));ot(b,l).forEach(e=>{e&&2===e.lvl&&(at(b,e,l),at(e,b,l))}),ot(s,l).forEach(e=>{e&&(at(s,e,l),at(e,s,l))}),nt(1,l).forEach(e=>{e!==a&&ft(e,Ge)}),nt(2,l).forEach(e=>{ft(e,Oe)}),nt(3,l).forEach(e=>{e!==s&&ft(e,Xe)});let k=[name,"a",12,4,12,Be(100),[],0,0,!0,!1,2,0,0];return a.a.push(k),y(1,4,6,a),y(1,13,3,a),l},ht=e=>e[1],dt=e=>"misc_"+e[0],mt=e=>2===e.length?e[0]:e,pt=e=>2===e.length?e[1]:1,gt=(e,t)=>{if(2===e.length){let l=e[1]+t;return l<0&&(l=0),e[1]=l,l?e:null}return t>0?[e,1+t]:null},yt=e=>mt(e)[3],wt=e=>!!vt(e),vt=e=>mt(e)[2].onUse,bt=e=>{let t=mt(e)[2].onAcq;return!t||t()},kt=e=>!!mt(e)[2].getDmg,Mt=(e,t)=>{let l=e[2];return l.getDmg?l.getDmg(t):[0,0]},xt=e=>e[2],Et=e=>[e[0],e[1]],_t=e=>e[3],Tt=(e,t)=>{e[3]+=t},St=(e,t,l)=>{e[0]=t,e[1]=l},Dt=(e,t)=>{let l=Vt(t),r=xt(e),[n,o]=j(r);return 0===l.id&&i(n,o,3,11,5,13)},$t=[3,4,5,6,9,10,11,12,13,14],It=[3,4,5,6,14],At=10,zt=9,Ft=0,Lt=(e,t,l,r)=>["misc_"+e,+new Date,500,t,l,r],Pt=(e,t,l)=>{for(let r=0;r<e.a.length;r++){let n=e.a[r],[i,o]=j(n);if(i===t&&o===l)return n}let r=fl();if(r){let e=xt(r.player),[n,i]=j(e);if(n===t&&i===l)return e}return null},Ct=(e,t)=>{e.p.push(t)},qt=(e,t,l)=>{let r=cl();return t<0||t>=r||l<0||l>=r?null:e.tiles[l*cl()+t]},Rt=(e,t,l,r)=>{let n=qt(e,t,l);n&&(n[0]="t_"+r,n[1]=r)},Bt=(e,t,l,r)=>{e.items.push([t,l,r])},Ht=(e,t,l)=>{let r=[];for(let n=0;n<e.items.length;n++){let[,i,o]=e.items[n];t===i&&l===o&&r.push(e.items[n])}return r},Nt=(e,t,l,r)=>{let{items:n}=e;for(let e=0;e<n.length;e++){let[i,o,a]=n[e];if(l===o&&r===a&&t===ht(mt(i)))return n.splice(e,1),!0}return!1},Ut=(e,t)=>{let l=[],[r,n]=j(t);for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)l=l.concat(Ht(e,r+i,n+t));return l},Yt=(e,t,l)=>!!e.visMap[l][t],Gt=(e,t,l)=>!!e.explMap[l][t],Ot=(e,t)=>{Xt(t);for(let l=0;l<e.length;l++){let[r,n]=e[l];Qt(qt(t,r,n),!0)}},Xt=e=>{for(let t=0;t<e.tiles.length;t++)Qt(e.tiles[t],!1)},Wt=e=>(null==e?void 0:e[1])||0,Kt=e=>!$t.includes(Wt(e)),jt=e=>It.includes(Wt(e)),Qt=(e,t)=>{e&&(e[4]=t)},Vt=e=>{let t=e.player,[l,r]=Et(t),n=ul();return e.rooms[r*n+l]},Zt=null,Jt=!1,el=!1,tl=-1,ll=null,rl=null,nl="",il="",ol=!1,al=()=>2,sl=e=>Zt=e,fl=()=>Zt,cl=()=>18,ul=()=>4,hl=()=>16,dl=(e,t,l)=>{let r=ul();return e<0||t<0||e>=r||t>=r?null:l.rooms[t*r+e]||null},ml=()=>Jt,pl=e=>Jt=e,gl=e=>ll=e,yl=()=>ll,wl=e=>el=e,vl=()=>el,bl=e=>tl=e,kl=()=>bl(-1),Ml=()=>rl,xl=e=>{rl=e},El=e=>N=e,_l=()=>N,Tl=e=>nl=e,Sl=e=>il=e,Dl=e=>ol=e,$l=()=>ol,Il={start:[,,17,.05,.21,.09,,2.92,,23,,,,,,.1,.37,,1],strike:[,0,822,.1,.08,.13,4,2.12,-12,-9.3,,,,,.2],dead:[2,,449,.01,,.08,3,2.15,-10,,,,,,,.2,.12,.36,.01],lose:[.3,,306,.08,.2,.83,2,.92,,-1.7,-5,.06,.18,,,.1,,.87,.09],eqp:[.5,,1966,,.13,0,4,1.15,-18,,,,,.1,-.6,,,.1,.06],use:[,,19,.01,,.05,4,.55,-.2,.8,,.04,,.4,-5,,,,.02],flame:[,,569,.01,,.42,3,.3,,.6,,,,1.1,3,,.16,.92],sell:[,0,853,.04,,,1,2.63,,.3,,,,,-.4,,.14,.13,.01],gold:[,0,457,,.23,,1,1.58,,,,,.07,,,,,.69],acquire:[.3,,14,.03,,.07,3,.3,,48,,,,,,,,,.04],cancel:[,0,177,.02,,.07,,.21,,-.4,764,.11,,,,,.06,.28,.03],talk:[,.3,527,.02,.03,0,2,.18,,-70,13,,,.1,,.6,.11],unlock:[,,823,.01,.03,0,3,.01,22,,,,.04,,6.3,,.18,,.06],win:[,,1257,.17,.17,.16,,.56,,,669,,.53,.8,-4.6,,.23,.8,.15]},Al=e=>{H=.3,B(...Il[e])},zl=()=>{let e=we();Pl(0,0,e.width,e.height,"#333")},Fl=(e,t)=>{(t=t||ve()).globalAlpha=e},Ll=(e,t,l,r,n)=>{r=r||1,n=n||ve();let[i,o,a,s,f]="string"==typeof e?he[e]:e;n.drawImage(i,o,a,s,f,t,l,s*r,f*r)},Pl=(e,t,l,r,n,i,o)=>{(o=o||ve())[i?"strokeStyle":"fillStyle"]=n,o[i?"strokeRect":"fillRect"](e,t,l,r)},Cl=(e,t,l,r)=>{let[n,i]=j(e),o=(e=>e[1]+"_"+(e[2]+(e[10]?1:0))+(e[7]===U?"_f":""))(e),a=hl()*t;Ll(o,l+n*a,r+i*a,t)},ql=(e,t,l,r)=>{t=t||1;let[n,,,i,o,a]=e,s=hl(),f=s*t/2,c=s*t,u=l+i*c,h=r+o*c;if(n&&Ll(n,u,h,t),a){let e=ve();e.font="16px monospace",e.fillStyle="#FFF",e.fillText(a,u+f-(2===a.length?9:5),h+f+5)}},Rl=(e,t,l,r,n,i)=>{let o=dt(e),a=hl()*r;Ll(o,n+t*a+8,i+l*a+8,r-1)},Bl=(e,t)=>{let l=ul(),r=hl(),n=e.player,[i,o]=Et(n),a=r*t,s=e.rooms[o*l+i];for(let e in s.tiles){let[l,,r,n]=s.tiles[e],i=r*a,o=n*a;Gt(s,r,n)?Ll(l,i,o,t):Pl(i,o,a,a,"#333",!0)}for(let e in s.items){let[l,r,n]=s.items[e],i=mt(l);Yt(s,r,n)&&Rl(i,r,n,t,0,0)}for(let e in s.tiles){let[,,l,r,n]=s.tiles[e],i=Pt(s,l,r),o=l*a,f=r*a;Yt(s,l,r)?i&&Cl(i,t,0,0):Gt(s,l,r)&&(Fl(.15),Pl(o,f,a,a,"black",!1),Fl(1)),n&&Pl(o,f,a,a,"#ddd",!0)}let f=xt(n);Cl(f,t,0,0);for(let e=0;e<s.p.length;e++)ql(s.p[e],t,0,0)},Hl=0,Nl=0,Ul="div",Yl=(e,t)=>{e.appendChild(t)},Gl=(e,t)=>{e.className=t},Ol=e=>document.getElementById(e),Xl=(e,t,l)=>{let r=document.createElement(e);return t&&(r.innerHTML=t),l&&Wl(r,l),r},Wl=(e,t)=>{for(let l in t)e.style[l]=t[l]},Kl=(e,t,l,r)=>{let n=Ol("tgt");Wl(n,{display:"block"});let i=n.children[0];i.setAttribute("x1",""+e),i.setAttribute("x2",""+l),i.setAttribute("y1",""+t),i.setAttribute("y2",""+r)},jl=()=>{wl(!1),Wl(Ol("tgt"),{display:"none"})},Ql=(e,t,l,r)=>{let n=Xl(Ul);if(Gl(n,"item hrz"),e){let r=mt(e),i=pt(e),o=ht(r),a=dt(r),s=V(l)===e;Wl(n,{"justify-content":"flex-start"}),t===tl&&Wl(n,{background:"#444"});let f=Xl(Ul);Gl(f,"vrt menu-item-ctr");let c=e=>()=>{let r=l[12],n=((e,t,l)=>{let r=e+l;if(r<0||r>=t.length)return e;let n=t[e];return t[e]=t[e+l],t[e+l]=n,e+l})(t,O(l),e),i=r;n===r&&(i=r-e),s&&(i=t+e),Z(l,i),Zl()},u="cyc-item",h=Xl(Ul,"up");Gl(h,u),h.onclick=c(-1),Yl(f,h);let d=Xl(Ul,"dn");Gl(d,u),d.onclick=c(1),Yl(f,d),Yl(n,f);let m=Xl(Ul,t+1+". ");Wl(m,{margin:"5px",width:"20px"}),Yl(n,m);let p=Xl(Ul);Gl(p,"vrt menu-item-ctr"),Yl(n,p);let g=fl();if(Dt(g.player,g)){let t=Xl(Ul,"SELL");t.onclick=()=>{((e,t)=>{Al("sell");let l=yt(e);Tt(t,l);let r=xt(t);K(r,e),Zl()})(e,fl().player)},Gl(t,"menu-item"),Wl(t,{background:"#994"}),Yl(p,t);let l=Xl(Ul,yt(e)+" gold ");Wl(l,{"text-align":"center",color:"#FFE762",margin:"5px",width:"32px"}),Yl(n,l)}else{if(wt(e)){let e=Xl(Ul,"USE");Gl(e,"menu-item"),e.onclick=async()=>{bl(t),v(r,l)},Yl(p,e)}if(kt(e)&&!s){let e=Xl(Ul,"EQP");e.onclick=()=>{b(t,l)},Gl(e,"menu-item"),Yl(p,e)}}let[y,w]=ye(32,32);Wl(y,{margin:"2px"}),Ll(a,0,0,2,w),Yl(n,y);let k=Xl(Ul,`${o} ${i>1?"("+i+")":""}`,{width:"90px"});s&&Wl(k,{color:"#9ef"}),Yl(n,k)}Yl(r,n)},Vl=(e,t,l,r,n,i,o)=>{let a=Xl(Ul);if(Gl(a,"item hrz"),Wl(a,{width:"155px",background:"#555"}),e){let o=mt(e),s=pt(e),f=ht(o),c=dt(o),[u,h]=ye(32,32);Wl(u,{margin:"2px"}),Ll(c,0,0,2,h),Wl(a,{"justify-content":"flex-start"});let d=Xl("span","!@#$%^&*()_+"[t]+"."),m=Xl("span",`${f} ${s>1?"("+s+")":""}`);Yl(a,d),Yl(a,u),Yl(a,m),a.onclick=()=>{k(e,i,r,n,l)}}Yl(o,a)},Zl=()=>{let e=fl(),l=Ol("invDiv");l.innerHTML="";let r=Ol("infoDiv");r.innerHTML="";let n=Ol("cutDiv");n.innerHTML="",$l()||_l()?Wl(r,{width:"0"}):(Wl(r,{width:""}),((e,t)=>{let l=Xl(Ul);l.onscroll=()=>{Hl=l.scrollTop},Gl(l,"inventory");let r=Xl(Ul,"INVENTORY");Gl(r,"title"),Yl(l,r);let n=xt(e),i=O(n);for(let e=0;e<10;e++)Ql(i[e],e,n,l);Yl(t,l),l.scrollTop=Hl})(e.player,l),((e,l)=>{let r=Xl(Ul);Gl(r,"ctrl info-item hrz");let n=Xl(Ul,"Reset",{width:"80px"});Gl(n,"menu-item"),Yl(r,n),n.onclick=()=>{t()};let i=Xl(Ul);Gl(i,"pickup info-item"),i.onscroll=()=>{Nl=i.scrollTop},((e,t,l)=>{let r=Xl(Ul,"NEARBY ITEMS");Gl(r,"title"),Yl(l,r);let n=xt(e),i=Ut(t,n);for(let e=0;e<i.length;e++){let[r,o,a]=i[e];Vl(r,e,t,o,a,n,l)}})(e.player,Vt(e),i),Yl(l,r),((e,t)=>{let l=xt(e),r=Xl(Ul);Gl(r,"stats info-item");let n=Xl(Ul);Wl(n,{padding:"8px","font-size":"22px"});let i=Xl(Ul,`Gold: ${_t(e)}/404`,{color:"#FFE762"});Yl(n,i);let o=G(l),a=se(o),s=(e=>e[1])(o),f=Xl(Ul,`HP: ${a}/${s}`,{color:a<s?"#FB922B":""});Yl(n,f);let[c,u]=fe(l),h=Xl(Ul,`DMG: ${c}-${u}`);Yl(n,h),Yl(r,n),Yl(t,r)})(e.player,l),Yl(l,i),i.scrollTop=Nl})(e,r)),((e,l)=>{let r=nl,n=Xl(Ul);if(Wl(n,{margin:"25px 0","font-size":"1.25rem"}),Yl(l,n),_l()){let e;$l()?(r="You are victorious.",e=Xl(Ul,"Again!",{padding:"5px"}),Gl(e,"menu-item dona"),e.onclick=()=>{Dl(!1),El(!1),t()}):(e=Xl(Ul,"Press any key"),Wl(e,{margin:"100px",position:"absolute",top:"0",color:"#bbb"})),Yl(l,e)}else{let t=Xl(Ul,"NumPad/Arrows/QWEASDZXC: move, Num5/Space/S: wait | MOVE INTO ENEMIES TO STRIKE",{position:"absolute",top:"-18px"});Yl(l,t);let n=e.player;if(((e,t)=>{let l=Vt(t),r=xt(e),[n,o]=j(r);return 0===l.id&&i(n,o,8,7,10,9)})(n,e)&&(r=_t(n)>=404?'You may enter...<div class="menu-item dona" onclick="window.finalRoom()">Donate Coins</div>':"More gold is required... "),Dt(n,e)&&(r="What're ya sellin'?"),!r)return void Wl(l,{"min-height":"0px",height:"0px",border:"0"})}Wl(l,{display:"flex","min-height":"90px",border:"2px outset #777"}),n.innerHTML=r;let[o,a]=ye(32,32);Wl(o,{margin:"250px",position:"absolute",top:"0"}),il&&Ll(il,0,0,2,a),Yl(l,o)})(e,n),Wl(document.body.children[0],{display:"flex"})}})();