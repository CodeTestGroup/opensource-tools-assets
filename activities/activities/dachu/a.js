var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}},"es6","es3");
var Dachu=function(){var a=this;this.cam={x:0,y:0};this.vp={w:640,h:480};this.ply={pos:{x:96,y:128},vel:{x:0,y:0},rot:-1,frame:0,framewait:0,jumpreset:!0,hasgun:!1,hp:5,keysdown:{}};this.creatures=[];this.bullets=[];this.scraps=[];this.scrapsleft=3;this.stage=0;this.canvas=document.createElement("canvas");this.canvas.width=640;this.canvas.height=480;this.canvas.id="game";document.body.appendChild(this.canvas);this.ctx=this.canvas.getContext("2d");this.ctx.font="28px Courier New";this.ctx.webkitImageSmoothingEnabled=
!1;this.ctx.mozImageSmoothingEnabled=!1;this.ctx.imageSmoothingEnabled=!1;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,17)}}();this.start=function(){this.pollInput();this.generateStars();this.populateEnemies();this.populateScraps();!window.ActiveXObject&&"ActiveXObject"in window||this.readMusic(title);this.update()};
this.update=function(){0==this.stage&&(bc("#000011",this.ctx),this.drawStars(),this.drawUFO(),this.drawText("DACHU",215,400,50,50,40),this.drawText("SPACE TO BEGIN",210,350,20,20,15),this.ply.keysdown[32]&&(this.stage=1,this.waittimer=150));1==this.stage&&(bc("#000011",this.ctx),this.stopmusic=1,this.drawStars(),this.drawUFO(),0<this.waittimer?this.waittimer--:(390>this.asteroidframe&&this.drawFires(),this.drawAsteriod(),-500>this.asteroidframe&&(this.fadeOut(),0==this.fadeframe&&(this.stage=2,this.loadMap(0),
this.fadeIn(),!window.ActiveXObject&&"ActiveXObject"in window||this.readMusic(world)))));2==this.stage&&(bc("#000011",this.ctx),this.drawMoon(),this.drawText("MOVE = WASD",0-this.cam.x+400,250,20,20,15),this.drawText("JUMP = SPACE",0-this.cam.x+700,250,20,20,15),this.drawText("BIG JUMP = HOLD SPACE",0-this.cam.x+1E3,150,20,20,15),this.drawPortal(43,3),1056<this.ply.pos.x&&(this.drawText("LOOKS LIKE SOMEONE",0-this.cam.x+1500,150,20,20,15),this.drawText("STOLE MY SHIP ...",0-this.cam.x+1500,200,20,
20,15),this.drawText("AND LEFT THIS PORTAL",0-this.cam.x+1500,250,20,20,15)),1376<this.ply.pos.x&&(this.flashIn(),this.loadMap(1),this.stage=3,this.ply.pos.x=96,this.ply.pos.y=192,this.ply.vel.y=0));if(3==this.stage){var b=this.ctx.createLinearGradient(0,0,0,480);b.addColorStop(0,"#ffffd8");b.addColorStop(1,"#ffd04f");var c=this.ctx.fillStyle;this.ctx.fillStyle=b;this.ctx.fillRect(0,0,640,480);this.ctx.fillStyle=c;this.drawText("COLLECT THREE SCRAPS",0-this.cam.x+400,0-this.cam.y+350,20,20,15);this.drawText("OF MY UFO TO FIX IT",
0-this.cam.x+400,0-this.cam.y+400,20,20,15)}if(2==this.stage||3==this.stage)this.drawTerrain(),0<this.ply.hp&&(this.drawPlayer(),this.drawGun(),this.drawBullets()),3==this.stage&&this.drawBlobos(),3==this.stage&&this.drawScraps(),this.updateCamera(),0<this.ply.hp&&this.movePlayer(),3==this.stage&&this.moveBlobos(),this.drawStats(),0!=this.fadeframe&&this.fadeIn(),0!=this.flashframe&&this.flashIn(),1792<this.ply.pos.y&&(this.ply.hp=0),0>=this.scrapsleft&&(this.drawText("IT IS FIXED. LETS GET OUT OF HERE.",
50,350,20,20,15),this.drawPortal(37,50),1184<this.ply.pos.x&&1568<this.ply.pos.y&&(this.stage=4,this.fadeOut())),this.drawCursor();4==this.stage&&(this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,640,480),this.drawText("DACHU",200,250,20,20,15),this.drawText("CREATED IN NINE DAYS?",50,300,20,20,15),this.drawText("THANKS FOR PLAYING.",50,350,20,20,15));window.requestAnimFrame(function(){a.update()})};this.ufoframe=0;this.asteroidframe=700;this.flashframe=this.portalframe=this.fadeframe=0;this.shipfire=
!1;this.stars=[];this.decompressString=function(a){for(var b=[],d=0;d<a.length;d++){var e=a.charCodeAt(d)-35;0==e?b.push(NaN):b.push(e)}return b};this.tileSize=32;this.maxWidth=this.vp.w/this.tileSize+2;this.maxHeight=this.vp.h/this.tileSize+2;this.halfWidth=this.vp.w/2;this.halfHeight=this.vp.h/2;this.mapWidth=50;this.mapHeight=9;this.tileSetWidth=6;this.riptime=600;this.map=[];this.setupInput()};Dachu.prototype.drawStars=function(){for(var a,b=0;b<this.stars.length;b++)a=this.stars[b],a.x-=a.vx,640<a.x&&(a.x=-10,a.y=Math.floor(640*Math.random()),a.vx=-Math.floor(6*Math.random()+3),a.st=Math.floor(3*Math.random())),this.ctx.drawImage(stars,3*a.st,0,3,5,a.x,a.y,6,10)};Dachu.prototype.generateStars=function(){for(i=0;25>i;i++)this.stars.push({x:Math.floor(640*Math.random()),y:Math.floor(480*Math.random()),vx:-Math.floor(6*Math.random()+3),st:Math.floor(3*Math.random())})};
Dachu.prototype.drawUFO=function(){24<this.ufoframe&&(this.ufoframe=0);this.ctx.drawImage(ufo,32*Math.round(this.ufoframe/10),0,32,32,256,176,128,128);this.ufoframe++};Dachu.prototype.drawFires=function(){this.ctx.drawImage(flame,16*Math.floor(this.ufoframe/15%2),0,16,16,260,180,64,64);this.ctx.drawImage(flame,16*Math.floor(this.ufoframe/15%2),0,16,16,308,192,64,64)};
Dachu.prototype.drawAsteriod=function(){this.ctx.drawImage(asteroid,this.asteroidframe-150,700-this.asteroidframe-100,128,128);this.asteroidframe-=9};Dachu.prototype.drawMoon=function(){this.ctx.drawImage(moon,50,50,128,128)};Dachu.prototype.drawPortal=function(a,b){this.drawSPortal(a,b);this.drawSPortal(a,b+1)};
Dachu.prototype.drawSPortal=function(a,b){this.ctx.drawImage(portal,32*Math.floor(this.portalframe/20%2),0,32,32,0-this.cam.x+this.halfWidth+32*a,0-this.cam.y+this.halfHeight+32*b-16,32,32);this.portalframe++};Dachu.prototype.fade=function(a){this.ctx.fillStyle="#000";this.ctx.beginPath();this.ctx.arc(320,240,a,0,2*Math.PI);this.ctx.rect(640,0,-640,480);this.ctx.fill()};Dachu.prototype.fadeOut=function(){0==this.fadeframe&&(this.fadeframe=640);this.fade(this.fadeframe);this.fadeframe-=5};
Dachu.prototype.fadeIn=function(){0==this.fadeframe&&(this.fadeframe=640);this.fade(640-this.fadeframe);this.fadeframe-=5};Dachu.prototype.flashIn=function(){0==this.flashframe&&(this.flashframe=100);this.ctx.fillStyle="rgba(255,255,255,"+this.flashframe/100+")";this.ctx.rect(0,0,640,480);this.ctx.fill();this.flashframe--};
Dachu.prototype.drawCursor=function(){this.canvas.style="cursor: none;";this.ctx.globalCompositeOperation="difference";this.ctx.fillStyle="white";var a=this.canvas.getBoundingClientRect();this.drawText(".",gmx-a.left-8,gmy-a.top-17,20,20,10);this.ctx.globalCompositeOperation="source-over"};
Dachu.prototype.drawStats=function(){var a=this.ctx.fillStyle,b=this.ctx.strokeStyle;this.ctx.fillStyle="#0f0";this.ctx.fillRect(400,0,50*this.ply.hp,5);this.ctx.fillStyle=a;this.ctx.strokeStyle=b;0>=this.ply.hp&&(this.drawText("R.I.P. DACHU",300,200,20,20,10),0>=this.riptime?location.reload():this.riptime--)};Dachu.prototype.drawText=function(a,b,c,d,e,f){for(var h=0;h<a.length;h++)this.ctx.drawImage(font,5*"ABCDEFGHIJKLMNOPQRSTUVWXYZ.,?=+ ".indexOf(a[h]),0,5,5,b+h*f,c,d,e)};function bc(a,b){var c=b.fillStyle;b.fillStyle=a;b.fillRect(0,0,640,480);b.fillStyle=c}function tc(a,b,c,d,e){var f=e.fillStyle;e.fillStyle=d;e.fillText(a,b,c);e.fillStyle=f}function di(a,b,c,d,e,f,h){h.drawImage(a,b,c,f,f,d,e,f,f)}function clear(a){a.clearRect(0,0,640,480)}var gmx,gmy;function mouseMove(a){gmx=a.clientX;gmy=a.clientY}document.addEventListener("mousemove",mouseMove,!1);var dachu_w1="5009$$##############################################$$**###########################$$################$****###########################**$###############*****#################$########$***###############*****##############$##*########****###############*****$$$$$$$$$$$$$$*$$*$$$$$$$$****$$$$$$$$$$$%&$$**********************************************+,************************************************+,*****00000000000000000000000000000000000000000001200000",dachu_w2="4054/#############-/#######################-/#############-/#######################-/#############-/#######################-/#############-/#######################-/#############-/#######################-/#############-/#######################-/#############-/#######################-.&$%(((((()###-/#######################-........../###-/#######################-........../###-.(((((((((((()##########-/#############-............./##########-/#############-/#######################-/#############-/##################'((((./####'((((((((./##################-...../####-........./#######################-/####-........./#######################-/#############-/#############'(((((((((./#############-/#############-...........((((((()#####-/#######################-......../#####-/#######################-......../#####-.((((((((()#############-/#############-........../#############-/#############-/#######################-/######'((((((./################'((((((./######-......./################-......./######-......./#######'((()###########-/######################-.../###########-/######################-.../###########-.((((((((((((((((((((((.....()#########-............................./#########-/#################-./##-......(()######-/#################-./##-......../######-/#################-./###############'((./#################-./###############-.../#################-./##################-/##########'((((((../##################-/##########-......../########'(((((((((./#################-./########-........../#################-./##################-.((((((()#########-./##################-......../#########-..((()##############-/############'((((....../##############-/############-........../##############-/######################################-.(((((((()#####################'(((((((........../#####################-......../######################################-/######################################-.((((((((((((((((((((((()##############-......................../##############-#######################################-#######################################-############################'(((((((&$%.############################-...........",
title="1801701V$+4+T&,*,+T&,*,+4)4'4&4+4)4'4&4V%X4O(J(K(F(H(E(F(C0X<O(J(K(F(H(E(F(C0X<>,<,:,9,7,5,7,B,C,A,?,>,<,:(9(6(7(9,V&XdXt7&9&:&9&7&9&:&9&3&5&7&2&>&<&:&9&7&9&:&9&7&9&:&9&2&2&2&2&>&<&:&9&7&9&:&9&7&9&:&9&3&5&7&2&>&<&:&9&7&9&:&9&7&9&:&9&2&2&2&2&>&<&:&9&",world="0703200V$,4.4,4+4,4.4,4)4,4.4,4+4,4.4,4)4,4.4,4+4,4.4,4)4,4.4,4+4,4.4,4)4V%8(X(8(<(8(X(8(<(8(7(5(3(3,7,8(X(8(<(8(X(8(<(?(<(8(5(7,3,8(X(8(<(8(X(8(<(8(7(5(3(3,7,8(X(8(<(8(X(8(<(?(<(8(5(7,3,8(X(8(<(8(X(8(<(8(7(5(3(3,7,8(X(8(<(8(X(8(<(=(<(:(8(:,3,8(X(8(<(8(X(8(<(8(7(5(3(3,7,8(X(8(<(8(X(8(<(?(X(8(7(8,X,V&<(X(<(?(<(X(<(?(<(:(8(5(7,:,<(X(<(?(<(X(<(?(A(?(<(8(:,3,<(X(<(?(<(X(<(?(<(:(8(5(7,:,<(X(<(?(<(X(<(?(A(?(<(8(:,3,H(X(H(K(H(X(H(K(H(F(D(A(C,?,F(X(F(H(I(X(I(J(K4X4H(X(H(K(H(X(H(K(H(F(D(A(C,?,F(X(F(H(I(X(K(M(P(X(P(O(P,X,",
p2p1=new Image;p2p1.src="p2p1.png";var dachu_a=new Image;dachu_a.src="dachu_a.png";var blobo_a=new Image;blobo_a.src="blobo_a.png";var font=new Image;font.src="font.png";var ufo=new Image;ufo.src="ufo.png";var stars=new Image;stars.src="stars.png";var asteroid=new Image;asteroid.src="asteroid.png";var flame=new Image;flame.src="flame.png";var moon=new Image;moon.src="moon.png";var items=new Image;items.src="items.png";var scrap=new Image;scrap.src="scrap.png";var portal=new Image;portal.src="portal.png";
var maps=[dachu_w1,dachu_w2];Dachu.prototype.drawBlobos=function(){for(var a=0;a<this.creatures.length;a++)this.ctx.drawImage(blobo_a,32*this.creatures[a].jumping,32*this.creatures[a].direction,32,32,0-this.cam.x+this.halfWidth+this.creatures[a].x-15,0-this.cam.y+this.halfHeight+this.creatures[a].y-15,32,32)};
Dachu.prototype.populateEnemies=function(){this.blobo(13,12,1);this.blobo(2,17,0);this.blobo(11,22,1);this.blobo(16,27,1);this.blobo(26,24,1);this.blobo(19,19,1);this.blobo(38,11,1);this.blobo(38,31,1);this.blobo(37,43,1);this.blobo(16,40,1);this.blobo(13,40,1)};Dachu.prototype.blobo=function(a,b,c){this.creatures.push({jumping:!1,direction:c,x:32*a,y:32*b,vx:0,vy:0,queuedeletion:!1})};
Dachu.prototype.moveBlobos=function(){for(var a=0,b=0;b<this.creatures.length-a;b++){var c=this.creatures[b];if(this.bloboInRadius(c)&&!c.jumping){c.jumping=!0;var d=c.x-this.ply.pos.x,e=c.y-this.ply.pos.y;c.vx=4*(0>d?1:-1);c.vy=Math.min(-Math.abs(2*e)/32,-1);c.direction=0>d?0:1}c.x+=c.vx;c.y+=c.vy;c.vx*=.95;c.vy+=.2;this.collideblobo(c);c.queuedeletion&&(this.creatures.splice(b,1),b--,a++)}};
Dachu.prototype.bloboInRadius=function(a){if(160>Math.abs(a.x-this.ply.pos.x)&&16<Math.abs(a.x-this.ply.pos.x)&&140>Math.abs(a.y-this.ply.pos.y))return!0;32>Math.abs(a.x-this.ply.pos.x)&&32>Math.abs(a.y-this.ply.pos.y)&&this.inflictDamage();for(var b=0;b<this.bullets.length;b++){var c=this.bullets[b];16>Math.abs(a.x+16-c.x)&&16>Math.abs(a.y+16-c.y)&&(a.queuedeletion=!0)}return!1};Dachu.prototype.setupInput=function(){var a=this;window.addEventListener("keydown",function(a){32==a.keyCode&&a.preventDefault()},!1);document.addEventListener("contextmenu",function(a){a.preventDefault()},!1);document.addEventListener("click",function(){a.ply.hasgun&&a.shootGun()},!1)};Dachu.prototype.pollInput=function(){var a=this;window.addEventListener("keydown",function(b){b=b||window.event;a.ply.keysdown[b.keyCode]=!0});window.addEventListener("keyup",function(b){b=b||window.event;delete a.ply.keysdown[b.keyCode]})};Dachu.prototype.gain=function(a){this.gains[a]=this.actx.createGain();this.gains[a].connect(this.actx.destination);this.gains[a].gain.value=.2};Dachu.prototype.fd=function(a){var b=this.oscs[a];this.gains[a].gain.setTargetAtTime(0,this.actx.currentTime,.015);setTimeout(function(){b.stop()},100)};
Dachu.prototype.playSound=function(a,b,c){this.oscs[c]&&(0==this.osct[c]?this.fd(c):this.osct[c]--);if("undefined"!==typeof a){this.oscs[c]&&this.fd(c);this.gain(c);var d=this.actx.createOscillator();d.connect(this.gains[c]);d.type=2==c?"triangle":"sine";d.frequency.value=440*Math.pow(Math.pow(2,1/12),a-33);this.oscs[c]=d;this.osct[c]=b;d.start()}};
Dachu.prototype.readMusic=function(a){this.gains=[];this.oscs=[];this.osct=[];this.actx=new (window.AudioContext||window.webkitAudioContext);this.instd=Array(3);for(var b=0;3>b;b++)this.instd[b]=[];this.stopmusic=!1;var c=parseInt(a.slice(0,3)),d=parseInt(a.slice(3,5)),e=parseInt(a.slice(5,7));a=this.decompressString(a.substring(7));var f=0,h=0,k=0;for(b=0;b<a.length;b++)--a[b];for(b=0;b<a.length;b+=2)50==a[b]?(f=a[b+1],k=0):51==a[b]?h=a[b+1]:52==a[b]?k+=3*a[b+1]:(this.instd[f][k]=a[b],this.instd[f][k+
1]=a[b+1],this.instd[f][k+2]=h,k+=3*a[b+1]);var g=this,l=0,m=setInterval(function(){for(var a=0;3>a;a++)g.playSound(g.instd[a][l],g.instd[a][l+1],a);l+=3;l>48*d&&(l=48*e);if(g.stopmusic){for(a=0;3>a;a++)g.oscs[a]&&g.oscs[a].stop();g.oscs=[];g.osct=[];g.gains=[];g.instd=Array(3);for(a=0;3>a;a++)g.instd[a]=[];l=0;g.stopmusic=!1;clearInterval(m)}},c)};Dachu.prototype.movePlayer=function(){this.animateplayer();this.ply.keysdown[65]&&(this.ply.vel.x=-3,this.ply.rot=1);this.ply.keysdown[68]&&(this.ply.vel.x=3,this.ply.rot=-1);this.ply.keysdown[32]&&(this.jumpreset?(this.ply.vel.y=-3.5,3==this.stage&&(this.ply.vel.y-=2),this.jumpreset=!1):this.ply.vel.y-=.1);this.ply.pos.x+=this.ply.vel.x;this.ply.pos.y+=this.ply.vel.y;this.ply.vel.x*=.85;this.ply.vel.y+=.2;this.collideplayer()};
Dachu.prototype.animateplayer=function(){(this.ply.keysdown[65]||this.ply.keysdown[68])&&0>=this.ply.framewait?(1!=this.ply.frame&&2!=this.ply.frame?this.ply.frame=2:2==this.ply.frame?this.ply.frame=1:1==this.ply.frame&&(this.ply.frame=2),this.ply.framewait=6):-200>=this.ply.framewait&&-300<this.ply.framewait?this.ply.frame=3:0>=this.ply.framewait&&(this.ply.frame=0);this.ply.framewait--};
Dachu.prototype.calculateAABB=function(a,b,c,d){c=a+c;d=b+d;var e=Math.floor(d/this.tileSize),f=Math.ceil(d/this.tileSize);d=Math.round((b-15)/this.tileSize);b=Math.round((b+15)/this.tileSize);var h=Math.floor(c/this.tileSize);c=Math.ceil(c/this.tileSize);var k=Math.round((a-15)/this.tileSize),g=Math.round((a+15)/this.tileSize);a=this.isSolid(k,e);e=this.isSolid(g,e);k=this.isSolid(k,f);f=this.isSolid(g,f);g=this.isSolid(h,d);h=this.isSolid(h,b);d=this.isSolid(c,d);b=this.isSolid(c,b);return{bottom:k||
f,top:a||e,left:g||h,right:d||b}};Dachu.prototype.collideplayer=function(){var a=this.calculateAABB(this.ply.pos.x,this.ply.pos.y,this.ply.vel.x,this.ply.vel.y);a.bottom&&(this.ply.vel.y=0,this.jumpreset=!0);a.top&&(this.ply.vel.y=.1);a.left&&(this.ply.pos.x=Math.floor(this.ply.pos.x)-this.ply.vel.x+.5,this.ply.vel.x=0);a.right&&(this.ply.pos.x=Math.ceil(this.ply.pos.x)-this.ply.vel.x-.5,this.ply.vel.x=0)};
Dachu.prototype.collideblobo=function(a){var b=this.calculateAABB(a.x,a.y,a.vx,a.vy);b.bottom&&(a.vy=0,a.jumping=!1);b.top&&(a.vy=0);b.left&&(a.x=Math.floor(a.x)-a.vx+1.5,a.vx=0);b.right&&(a.x=Math.ceil(a.x)-a.vx-1.5,a.vx=0)};Dachu.prototype.isSolid=function(a,b){return!isNaN(this.getBlock(a,b))};Dachu.prototype.drawPlayer=function(){var a=this.ply.frame,b=a%2*this.tileSize;a=Math.floor(a/2)*this.tileSize;var c=this.ply.pos.y-this.tileSize/2-this.cam.y+this.vp.h/2,d=this.ply.rot*(this.ply.pos.x-this.tileSize/2-this.cam.x+this.vp.w/2)-(-1==this.ply.rot?this.tileSize:0);this.ctx.scale(this.ply.rot,1);this.ctx.drawImage(dachu_a,b,a,this.tileSize,this.tileSize,d,c,this.tileSize,this.tileSize);this.ctx.setTransform(1,0,0,1,0,0);0<this.damagetimer&&this.damagetimer--};
Dachu.prototype.updateCamera=function(){var a=Math.round(this.ply.pos.y);this.cam.x=Math.round(this.ply.pos.x);this.cam.y=a;this.cam.x=Math.max(this.vp.w/2,this.cam.x);this.cam.x=Math.min(this.mapWidth*this.tileSize-this.tileSize/2-this.vp.w/2,this.cam.x);this.cam.y=Math.max(this.vp.h/2,this.cam.y);this.cam.y=Math.min(this.mapHeight*this.tileSize-this.tileSize/2-this.vp.h/2,this.cam.y)};
Dachu.prototype.inflictDamage=function(){0<this.damagetimer||(this.damagetimer=200,this.ply.hp--,this.ply.vel.y-=5)};Dachu.prototype.shootGun=function(){var a=this.canvas.getBoundingClientRect();this.bullets.push({x:this.ply.pos.x+16,y:this.ply.pos.y+22,d:180*Math.atan2(this.ply.pos.y-this.tileSize/2-this.cam.y+this.vp.h/2-(gmy-a.top+this.cam.y/this.tileSize),gmx-a.left+this.cam.x/this.tileSize-(this.ply.pos.x-this.tileSize/2-this.cam.x+this.vp.w/2))/Math.PI})};
Dachu.prototype.drawBullets=function(){var a=this.ctx.fillStyle,b=this.ctx.strokeStyle;this.ctx.fillStyle="#f00";for(var c=0,d=0;d<this.bullets.length-c;d++){var e=this.bullets[d],f=this.localTranslation(e.x,e.y,e.d,8);e.x=f.x;e.y=f.y;this.ctx.fillRect(e.x-1-this.tileSize/2-this.cam.x+this.vp.w/2,e.y-1-this.tileSize/2-this.cam.y+this.vp.h/2,2,2);this.isSolid(Math.floor(e.x/32),Math.floor(e.y/32))&&(this.bullets.splice(d,1),d--,c++)}this.ctx.fillStyle=a;this.ctx.strokeStyle=b};
Dachu.prototype.localTranslation=function(a,b,c,d){return{x:a+d*Math.cos(-c*Math.PI/180),y:b+d*Math.sin(-c*Math.PI/180)}};Dachu.prototype.loadMap=function(a){var b=this.decompressString(maps[a]);this.mapWidth=parseInt(maps[a].substring(0,2));this.mapHeight=parseInt(maps[a].substring(2,4));b.splice(0,4);this.map=b};Dachu.prototype.drawTerrain=function(){for(i=0;i<this.mapWidth;i++)for(j=0;j<this.mapHeight;j++)this.drawTerrainAtPos(i,j,32*i+this.halfWidth-this.cam.x-this.tileSize/2,32*j+this.halfHeight-this.cam.y-this.tileSize/2)};
Dachu.prototype.drawGun=function(){this.ply.hasgun?this.ctx.drawImage(items,1==this.ply.rot?16:32,0,16,16,this.ply.pos.x-this.tileSize/2-this.cam.x+this.vp.w/2+-3*this.ply.rot+7,this.ply.pos.y-this.tileSize/2-this.cam.y+this.vp.h/2+14,16,16):(this.ctx.drawImage(items,0,0,16,16,0-this.cam.x+this.halfWidth+1088,0-this.cam.y+this.halfHeight+128,16,16),1088<this.ply.pos.x&&(this.ply.hasgun=!0))};
Dachu.prototype.drawScraps=function(){for(var a=0;a<this.scraps.length;a++)this.scraps[a].pickedup||(this.ctx.drawImage(scrap,0,0,32,32,0-this.cam.x+this.halfWidth+this.scraps[a].x-15,0-this.cam.y+this.halfHeight+this.scraps[a].y-15,32,32),this.playerInRadius(this.scraps[a]))};Dachu.prototype.populateScraps=function(){this.scrap(16,8);this.scrap(17,34);this.scrap(21,39)};Dachu.prototype.scrap=function(a,b,c){this.scraps.push({x:32*a,y:32*b,pickedup:!1})};
Dachu.prototype.playerInRadius=function(a){16>Math.abs(a.x-this.ply.pos.x)&&16>Math.abs(a.y-this.ply.pos.y)&&(a.pickedup=!0,this.scrapsleft--);return!1};Dachu.prototype.drawTerrainAtPos=function(a,b,c,d){a=this.getBlock(a,b);this.ctx.drawImage(p2p1,a%this.tileSetWidth*this.tileSize,Math.floor(a/this.tileSetWidth)*this.tileSize,this.tileSize,this.tileSize,c,d,this.tileSize,this.tileSize)};Dachu.prototype.getBlock=function(a,b){return this.map[this.mapWidth*b+a]-1};