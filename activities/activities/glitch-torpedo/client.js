_='for(~(){~ b(b,c){e,d=b.keyCode;switch(d){case 32:e="SPACE" 37:e="LEFT" 38:e="UP" 39:e="RIGHT" 40:e="DOWN";break;default:e=String.fromCharCode(d)}a[e]=c}a={};document.addEventListener("keydown",~(a){b(a,!0)}),document.addEventListener("keyup",~(a){b(a,!1)}),window.addEventListener("blur",~(){a={}}),window.input={isDown:~(b){return a[b.toUpperCase()]}}}(),_=\'o.`Sfxr^32@*`#ba*(01]=+=switch(length;case set102=`){return ,e[a2*Math.random()-1;Array(=new a.ynth\\ffor(	arams\\b),=1=0,&&(~;break;this. ^P\\b(Settings=(a	b=0;24>b;b++)this[String.fromCharCode(97+b)a[b]||0;c<.c=.);c=b+c+e;if(.18>cd=.18/c;b*=d,c*=d,e*=d}}} ^S\\f(_p\\b^P\\b;a,b,c,d,e,f,g,h,i,j,k,l;re=(a=_p\\b;d00/(f*f+.0e00/(g*g+.0f-h*h*h*.,g=-i*i*i*1e-6,a||(k=.5-n/2,l=5e-5*-oh+l*ll>0?-.9:10ij==m?0:(1-m)1-m)*2e4+@},totalRe=(re();d=_p\\b;a=d.b*d.b*1e5,b=d.c*d.c*1e5,c=d.e*d.e*1e5+12,3(a+b+c)/3|0)},s\\fWave=(m,no=_p\\b,p!s||`v,qv#v*.1,r+3e-4#w,ss#s#s*.1,t+1e-4#t,u!s,vx#x,wg,xq||`r,yr#r#r*.2,zq#q`q<0?-0:0Ap?((1-`p)1-`p)*2e4|0)+@:0,Bd,Cj/2,Dk#k*.,Ea,F=a,G/a,H/b,I/c,J=5/(1+`u#u*20).+s);J>.8J=.8J-J;	Q,S,U,W,Y,Z,K=!1,LMNOPRTVX$_4aa@=_.--;)_[0;	=a--;)aa[b	=0;n>;++if(K);if(A&&++X>=AXre()j&&++i>=jjd*=hfg,d*=f,d>ed=e,w>0K=!0)S=d,C>0$D,S*+Math.sin($)*CS|8>SS=8E||(kl,0>k?k=0:k>.5k=.5)++M>F)M++L1:F=b2:F=c}L0:N=M*G1:N+21-M*H)*B2:N-M*I3:NK=!0}xzy,U=0|z,0>U?U=-U:U>3U023)p&&rq*=r,1e-5>q?qe-5:q>.1q=.1)Z=0;	ca=8;ca--;if(T++,T>=ST%=S,3==E))	da=ada--;)aa[dE0:Y=k>T/S?.5:-.51:Y-T/S*22:W=T/S,W=6.28318531W>.5?W-1:WY.27@3954*W+.405284735*W*W0>W?1:-1Y=.225(0>Y?-1:1)*Y*Y-Y)+Y3:Y=aa[Math.abs(@*T/S|0)]}pQ=R,s*=t,0>s?s=0:s>.1s=.1u?(P(Y-R)*s,P*=J):(R=Y,P=0RP,OR-Q,O*-q,Y=Ox_[V%4Y,Y_[(V-U+4)%4],V++ZY}Z*=.125*N*v,m[Z>?@767:-1>=Z?-@768:@767*Z|0}n}}s\\f^S\\f;window.jsfxr=(as\\f._p\\b.Settings(a);b=s\\f.totalRe(cUint84(b+1)/2|0)+44d=2*s\\f.s\\fWave(new Uint16c.buffer,44beUint@c.buffer,0,44);e[0]17914101d+362]16@80727354450944]65655376441007882008]0485789]635706010d,d44;	fg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789+/",h="data:audio/wav;se64,";d>f;f3i=c[f]<<16|c[f+1]<<8|c[f+2];hg[i>>18]+g[i>>12&63]+g[i>>6&63]+g[63&i]}h};\';G=/[-#@^`]/.exec(_);)with(_.split(G))_=join(shift());eval(_),~(){~ d(a){a instanceof Array?a.forEach(~(a){e(a)}):e(a)}~ e(b){if(a[b])return a[b];d=new Image;d.onload=~(){a[b]=d,g()&&c.forEach(~(a){a()})},a[b]=!1,d.src=b}~ f(b){return a[b]}~ g(){b=!0;for(c in a)a.hasOwnProperty(c)&&!a[c]&&(b=!1);return b}~ h(a){c.push(a)}a={},c=[];window.resources={load:d,get:f,onReady:h,isReady:g}}(),~(){~ a(a,b,c,d,e,f,g,h){this.pos=b,this.size=c,this.speed="number"==typeof d?d:0,this.frames=e,this._index=0,this.url=a,this.dir=g||"h",this.once=h||!1,this.flip=f||!1}a.prototype.update=~(a){this._index+=this.speed*a},a.prototype.reset=~(){this._index=0,this.done=!1},a.prototype.render=~(a){b;if(this.speed>0){c=this.frames.length,d=Math.floor(this._index);if(b=this.frames[d%c],this.once&&d>=c)return void(this.done=!0)}else b=0;e=this.pos[0],f=this.pos[1];"v"==this.dir?f+=b*this.size[1]:e+=b*this.size[0],a.drawImage(resources.get(this.url),e,f,this.size[0],this.size[1],0,0,this.size[0],this.size[1])},window.Sprite=a}(),~(){~ i(a){c.innerHTML=a}~ j(a){g.innerHTML=a}~ k(){a.on("welcome",~(a){j("Current players online: "+a)}),a.on("start",~(b){b.socket=a,oa(!1,b),setTimeout(~(){f.className="hidden",h.className="hidden"},1e3)}),a.on("controls",~(a,b){Ca(a,b)}),a.on("syncronizeSunk",~(a){Da(a)}),a.on("launchCharge",~(a){sa(a)}),a.on("launchSub",~(a){va(a)}),a.on("silent",~(){"ship"==$&&ka>0&&(ka--,la=720,o.play("f"))}),a.on("launchTorpedo",~(a,b){ta(a,b)}),a.on("end",~(){i("Opponent has left!<br/>Waiting for opponent..."),f.className="",oa(!0)}),a.on("connect",~(){i("Welcome. Please enter your name.")}),a.on("disconnect",~(){i("Connection lost!")}),a.on("error",~(){i("Connection error!")}),a.on("glitch",~(a){za(a)}),a.on("rot",~(a,b){Ba(a,b)}),b.addEventListener("click",~(b){a.emit("name",d.value),e.className="hidden",i("Waiting for opponent...")},!1)}~ l(){a=io({upgrade:!1,transports:["websocket"]}),d=document.getElementById("playerName"),f=document.getElementById("playerSelect"),b=document.getElementById("sendName"),c=document.getElementById("message"),e=document.getElementById("buttons"),g=document.getElementById("online"),h=document.getElementById("tutorial"),k()}~ n(){this.sounds={}}~ ma(){E={pos:[p.width/2-20,19],sprite:new Sprite("img/s.png",[0,0],[40,13],0,[0])},ba=da=ea=!1,ia=ja="",A||(D=!0),F=G=K=R=U=V=W=aa=ca=ha=la=0,H=!1,ka=1,ga=[0,0,0],I=[],J=[],L=[],M=[],N=[1,2,3,4,5,6,7,8],O=[],P=[],Q=[],S=[],T=[],X=99,Z=[],clearTimeout(_),clearInterval(Y)}~ na(){a=Date.now(),b=(a-F)/1e3;Ea(b),Na(),F=a,m(na)}~ oa(a,b){void 0!=a&&(A=a),F=Date.now(),ma(),b?($=b.role,"ship"==$?(B=b.p1,C=b.p2):(B=b.p2,C=b.p1)):($=null,B="PLAYER 1",C="PLAYER 2"),qa(),("sub"===$||A)&&setTimeout(va.bind(this),500),ra(),na()}~ pa(a){void 0!=a&&(A=a),resources.load(["img/s.png","img/sc.png","img/sce.png","img/scb.png","img/i.png","img/su.png","img/sup.png","img/sut.png","img/te.png"]),resources.onReady(oa)}~ qa(){for(a=0;8>a;a++)P.push(40+20*a);P=Ta(P)}~ ra(){Y=setInterval(Ia.bind(this),1e3)}~ sa(b){"ship"==$&&a.emit("launchCharge",b);c={pos:[E.pos[0]+b,E.pos[1]-2],sprite:new Sprite("img/scb.png",[0,0],[4,3],4,[0,1,2],null,"v")};I.push(c),K=Date.now(),o.play("d")}~ ta(b,c){"sub"!=$||A?c&&(L[c[0]].pos=c[1]):a.emit("launchTorpedo",b,c);d={pos:b,sprite:new Sprite("img/sut.png",[0,0],[3,3],4,[0,1,0,1,0,0])};d.score=100+2*(d.pos[1]-40),S.push(d),o.play("e"),U=Date.now()}~ ua(){ba=!0,ca=0,E.isSinking=!1,E.sprite.speed=0,E.sprite.frames=[0],E.sprite.once=!1,E.sprite.reset()}~ va(b){if(N.length){c=Qa(0,1);b&&(c=b.dir);d=c?288:0;b&&(P=b.levels);f={pos:[-32+d,P.shift()],sprite:new Sprite("img/su.png",[0,0],[32,16],0,[0],c)};f.dir=c,f.speed=x+Ra(f.pos[1],40,200,18,0),c&&(f.speed*=-1),f.score=Qa(0,5),b&&(f.score=b.score),L.push(f);g={pos:[-99,0],sprite:new Sprite("img/sup.png",[7*f.score,0],[7,5],0,[0])};if(M.push(g),"sub"==$||A){h={pos:f.pos[1]+8,value:N.shift()};Q.push(h)}i={dir:c,score:f.score,levels:[f.pos[1]].concat(P)};"sub"!=$||b||a.emit("launchSub",i)}(!H&&"sub"==$||A)&&(_=setTimeout(va.bind(this),Qa(3500,9e3)))}~ wa(a,b,c,d,e){f=9;e&&(f=e),q.font=f+"px Lucida Console, Monaco, monospace",q.fillStyle=d||"red",q.textBaseline="top",q.textAlign="center",q.fillText(c,a,b)}~ xa(){a=0,b=3,c=b+1,d=p.height/c;for(aa++,aa>c&&(aa=0),q.fillStyle="rgba(200, 200, 0, 0.12)",q.beginPath();++a<d;)q.rect(0,(a-1)*c+aa,p.width,b);q.fill()}~ ya(a){b=a[0],c=a[1],d=a[2];q.fillStyle="rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")",q.beginPath(),q.rect(b[0],b[1],c[0],c[1],d),q.fill()}~ za(a){if(a.length){b=a.pop();fa=b[0],setTimeout(~(){za.call(this,a)},b[1])}else fa=[]}~ Aa(){for(a=0;a<fa.length;a++)ya(fa[a])}~ Ba(a,b){ga=a,setTimeout(~(){ga=[0,0,0]}.bind(this),b)}~ Ca(a,b){switch(a){case"LU":da=!1"LD":da=!0"RU":ea=!1"RD":ea=!0;break;default:da=ea=!1}E.pos[0]=b}~ Da(a){E.isSinking||(Ma(),W+=a)}~ Ea(a){G+=a,H||(Ga(a),A&&!D&&Fa(),Ha(a))}~ Fa(){switch(ha){case 1:ia="Ship player may use LEFT/RIGHT arrows to move.",ja="" 60:da=!0 120:ea=!0,da=!1 180:ea=!1 240:ia="May use \'A\' and \'D\' keys too.",ea=!0 300:ea=!1,da=!0 360:da=!1 400:ia="\'Z\' and \'X\' keys launch depth charges." 490:sa(-8) 550:sa(44) 610:sa(44),ia="Or use \'M\' and \'N\' keys if you prefer." 800:ia="Ship has "+v+" charges, reloaded when exploded." 980:ia="Each submarine scores differently.",ja="" 1100:ia="",ja="Submarine player does\'t control movement, but..." 1280:ja="may fire torpedoes from all available subs..." 1460:ja="by pressing numbers from 1 to 8." 1500:for(a=0;3>a;a++)!~(a){setTimeout(~(){if(L[a]){b=L[a].pos;ta([b[0]+L[a].sprite.size[0]/2,b[1]])}}.bind(this),750*a)}(a) 1660:ja="Deeper launched torpedoes score more points." 1890:ia="There\'s a delay between each charge launch.",ja="There\'s a delay between each torpedo launch." 2120:ia="One more thing: Sub player may press \'SPACE\'",ja="to enter \'Silent running\' mode." 2320:ia="The subs remain invisible for a short time.",ja="There\'s only 1 silent running per game.",la=400 2720:ia="When time ends, the best score wins.",ja="" 2900:ia="Good luck, captain!" 3200:ia=""}}~ Ga(b){if((!E.isSinking&&"sub"==$||A)&&(da&&(E.pos[0]-=t*b),ea&&(E.pos[0]+=t*b)),!A){if(!E.isSinking&&"ship"==$){c=E.pos[0];input.isDown("LEFT")||input.isDown("a")?(E.pos[0]-=t*b,da||a.emit("controls","LD",c),ea&&a.emit("controls","RU",c),da=!0,ea=!1):input.isDown("RIGHT")||input.isDown("d")?(E.pos[0]+=t*b,ea||a.emit("controls","RD",c),da&&a.emit("controls","LU",c),ea=!0,da=!1):(da&&a.emit("controls","LU",c),ea&&a.emit("controls","RU",c),da=ea=!1),(input.isDown("z")||input.isDown("n"))&&v>I.length&&Date.now()-K>750&&sa(-8),(input.isDown("x")||input.isDown("m"))&&v>I.length&&Date.now()-K>750&&sa(44)}"sub"==$&&ka>0&&input.isDown("SPACE")&&(a.emit("silent"),la=720,ka--,o.play("f"));for(d=0;d<Q.length;d++)if("sub"==$&&z>S.length&&Date.now()-U>1350&&input.isDown(Q[d].value.toString())&&L[d]){e=L[d].pos,f=[d,L[d].pos];ta([e[0]+L[d].sprite.size[0]/2,e[1]],f)}}}~ Ha(b){for(E.sprite.update(b),Ka(),g=0;g<L.length;g++){c=L[g],d=c.sprite;d.update(b),c.pos[0]+=c.speed*b;e=M[g];e.pos[0]=c.pos[0]+d.size[0]/2-7*d.flip,e.pos[1]=c.pos[1]+d.size[1]/2,e.sprite.update(b),d.done&&(L.splice(g,1),M.splice(g,1));f=!1;d.flip&&c.pos[0]<-d.size[0]?f=!0:c.pos[0]>256&&(f=!0),f&&(L.splice(g,1),M.splice(g,1),("sub"==$||A)&&N.push(Q.splice(g,1)[0].value),P.push(c.pos[1]))}for(g=0;g<I.length;g++){h=I[g];h.pos[1]+=u*b,h.sprite.update(b),h.pos[1]>32&&!h.onWater&&(h.onWater=!0,h.sprite.url="img/sc.png");i=!1;if(i=Ja(h),h.pos[1]>=200&&(i=!0),i){I.splice(g,1);j={pos:[h.pos[0],h.pos[1]],sprite:new Sprite("img/sce.png",[0,0],[4,6],4,[0,1,2,3],null,"h",!0)};J.push(j),o.play("b")}}for(g=0;g<J.length;g++){k=J[g].sprite;k.done&&J.splice(g,1),k.update(b)}for(g=0;g<S.length;g++){l=S[g];if(l.pos[1]-=y*b,l.sprite.update(b),l.pos[1]<=32){S.splice(g,1),E.isSinking||ba||l.pos[0]+4<E.pos[0]||l.pos[0]>E.pos[0]+40||(W+=l.score,Ma(),a.emit("syncronizeSunk",l.score));j={pos:[l.pos[0],20],sprite:new Sprite("img/te.png",[0,0],[8,12],4,[0,1,2,0],null,"h",!0)};T.push(j),o.play("c")}}for(g=0;g<T.length;g++){m=T[g],k=m.sprite;k.done&&T.splice(g,1),k.update(b)}la>0&&la--}~ Ia(){X--<=0&&(X=0,clearInterval(Y),A||(H=!0))}~ Ja(a){for(b=!1,c=0;c<L.length;c++){d=L[c];if(!d.isSinking){e=d.pos,f=a.pos;if(!(e[0]>f[0]+4||e[0]+32<f[0]||e[1]>f[1]+3||e[1]+16<f[1])){b=!0,La(c);break}}}return b}~ Ka(){E.pos[0]<0?E.pos[0]=0:E.pos[0]>p.width-E.sprite.size[0]&&(E.pos[0]=p.width-E.sprite.size[0]),E.pos[1]<0?E.pos[1]=0:E.pos[1]>p.height-E.sprite.size[1]&&(E.pos[1]=p.height-E.sprite.size[1])}~ La(a){b=L[a];b.isSinking=!0;c=b.sprite;c.speed=2,c.frames=[0,1,2],c.once=!0,c.reset(),V+=w[b.score];a=Q.splice(a,1)[0];a&&N.push(a.value),P.push(b.pos[1]),Z.push(0)}~ Ma(){E.isSinking=!0,E.sprite.frames=[0,1,2,3],E.sprite.once=!0,E.sprite.speed=2,setTimeout(ua.bind(this),2500),o.play("a"),Z.push(1)}~ Na(){q.fillStyle="#4487c9",q.fillRect(0,0,p.width,p.height),q.fillStyle="black",q.fillRect(0,32,p.width,184);a=!1;ba?(ca++%3==0&&(a=!0),ca>150&&(ba=!1,ca=0)):a=!0,a&&Oa(E);for(b=0;b<Q.length;b++)for(c=0;28>c;c++)wa(-10+R+10*c,Q[b].pos,"-","rgba(255, 0, 0, 0.25)");R++>10&&(R=0),Pa(I),Pa(J),Pa(S),Pa(T);d=!1;"ship"==$&&0>=la&&!A&&(d=!0),"sub"!=$&&!A||la%6!=0||(d=!0),d&&Pa(L),Pa(M);for(b=0;b<v-I.length;b++)q.drawImage(resources.get("img/scb.png"),0,6,4,3,100+5*b,4,4,3);for(b=0;b<z-S.length;b++)q.drawImage(resources.get("img/sut.png"),0,0,3,3,100+6*b,204,4,3);for(b=0;b<Q.length;b++){e=Q[b];wa(5,e.pos,e.value)}if(wa(30,5,"TIME - "+X,"black"),wa(210,5,B+" - "+V,"black"),wa(210,204,C+" - "+W,"#4487c9"),H){f=V>W?B+" WINS!":V==W?"DRAW!":C+" WINS!";wa(p.width/2,p.height/2,f,"white"),wa(p.width/2,p.height/2+20,"Please reload (F5) to play again.","white")}for(A&&ha++%2==0&&(wa(128,40,ia,"yellow",8),wa(128,150,ja,"yellow",8)),b=0;b<Z.length;b++)q.drawImage(resources.get("img/i.png"),0+14*Z[b],0,14,6,14*b,216,14,6);fa.length&&Aa(),xa(),s.save(),s.translate(256,224),s.rotate(ga[0]),s.translate(-256,-224),s.drawImage(p,ga[1],ga[2],p.width,p.height,0,0,r.width,r.height),s.restore()}~ Oa(a){q.save(),q.translate(a.pos[0],a.pos[1]),a.sprite.flip&&(q.translate(a.sprite.size[0],0),q.scale(-1,1)),a.sprite.render(q),q.restore()}~ Pa(a){for(b=0;b<a.length;b++)Oa(a[b])}~ Qa(a,b){return Math.floor(Math.random()*(b-a+1))+a}~ Ra(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)}~ Ta(a){for(b=a.length-1;b>0;b--){c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a}a,b,c,d,e,f,g,h;window.addEventListener("load",l,!1);m=~(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||~(a){window.setTimeout(a,1e3/60)}}();n.prototype.add=~(a,b,c){this.sounds[a]=[],c.forEach(~(c,d){this.sounds[a].push({tick:0,count:b,pool:[]});for(e=0;b>e;e++){f=new Audio;f.src=jsfxr(c),this.sounds[a][d].pool.push(f)}},this)},n.prototype.play=~(a){b=this.sounds[a],c=b.length>1?b[Math.floor(Math.random()*b.length)]:b[0];c.pool[c.tick].play(),c.tick<c.count-1?c.tick++:c.tick=0};o=new n;o.add("a",5,[[3,,.3527,.2102,.4498,.149,,-.0138,.0177,.0536,,3e-4,,,,.2985,.0878,-.1867,.9976,-.0193,,,.036,.31]]),o.add("b",5,[[3,.0135,.3705,.1714,.4132,.0472,,.1456,-.0176,.16,.89,-.28,,,,,.3,.08,.9996,-.16,.0136,,.0019,.31],[3,.0135,.3705,.1714,.4132,.0472,,.1456,-.0176,.16,.89,-.28,,,,.89,.62,.08,.9996,-.16,.0136,,.0019,.31]]),o.add("c",5,[[3,,.1945,.3182,.4554,.3556,,-.0189,-.0208,,.0254,.0694,,,-.0212,.0022,.0051,.0078,1,.0057,,.0362,-.0353,.24]]),o.add("d",5,[[3,,.2018,,.4471,.4448,,.4382,,,,,,,,.52,,,1,,,,,.31]]),o.add("e",5,[[2,,.1926,,.1814,.209,,.3425,,,,,,,,.5793,,,1,,,,,.31]]),o.add("f",5,[[2,,.3895,,.4194,.2692,,.1371,,.6871,.3262,,,,,,,,1,,,,,.5]]);p=document.createElement("canvas"),q=p.getContext("2d");p.width=256,p.height=224;r=document.createElement("canvas"),s=r.getContext("2d");r.width=2*p.width,r.height=2*p.height,s.webkitImageSmoothingEnabled=!1,s.mozImageSmoothingEnabled=!1,s.imageSmoothingEnabled=!1,document.body.appendChild(r);E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,ga,ha,ia,ja,ka,la,t=28,u=14,v=5,w=[20,30,50,60,70,80],x=6,y=16,z=3,A=!1,B="PLAYER 1",C="PLAYER 2",D=!1,fa=[];pa(!0)}();~function;break;casevar ';for(i in G='~')with(_.split(G[i]))_=join(pop());eval(_)