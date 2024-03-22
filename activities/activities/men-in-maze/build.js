!function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e){!function(){"strict mode";function t(e){m.update(d,e);for(var t in d.otherPlayers)d.otherPlayers[t].update(d,e);for(var n in d.bulbsDict)d.bulbsDict[n].update(d,e);m.setCamera(),l.update(),h.translate(v,y),h.scale(l.scale,l.scale),h.translate(-l.X,-l.Y),d.maze.draw(h,d.cellSize),m.draw(h);for(var t in d.otherPlayers)d.otherPlayers[t].draw(h)}function n(e){m.update(d,e),h.scale(4,4),h.fillStyle="#ff0";for(var t in d.otherPlayers){{d.otherPlayers[t]}d.otherPlayers[t].update(d,e),d.otherPlayers[t].draw(h)}h.translate(0,10),m.draw(h)}function o(e,t,n,o){dialog.style.display="block",dialogTitle.innerHTML=e,dialogContent.innerHTML=t,dialogBtFunc.innerHTML=n,dialogBtFunc.onclick=o}function i(e){return{x:e%a.gameState.mazeX*d.cellSize,y:(e/a.gameState.mazeX|0)*d.cellSize,ofs:e}}var r=e(9),a=(e(10),e(7)),s=e(4),l=e(6),c=e(5),u=e(2),h=canvas.getContext("2d"),f=e(8);navigator.vibrate||(navigator.vibrate=function(){}),blue.onclick=red.onclick=function(){a.gameState.state||(blue.checked?(m.deserialize({x:20,y:0,anim:"fall",dir:0}),m.setColor(1)):(m.setColor(2),m.deserialize({x:(d.width-140)/4,y:0,anim:"fall",dir:1})))},howto.onclick=function(){o("How to Play",'<ul style="text-align:left; padding-left:25px"><li>Use Arrow keys to move (<span class="key">&#8593;</span> = Jump) or use the onscreen controls on touch device</li><li>Run into walls as you fall to slide slowly</li><li>Jump while sliding down a wall to jump off the wall. <br><em>This is how you climb!</em></li><li><em>Shoot</em> (<span class="key">S</span> button) at enemies to delay them</li><li><em>Long press</em> shoot to make a big shot that will blow up a wall!<br><em>Very useful for making shortcuts</em>, but remember your enemies can use the shortcuts as well!<br>Note big shots are limited, so don\'t waste them.</li><li>To go back quickly use <em>REVERSE</em> (<span class="key">A</span> button) <br><em>Very useful when you reach a dead end!</em></li><li>Don\'t move for 3 seconds to zoom out.<br><em>It may save you much more than 3 sec!</em></li><li>Touch a Bulb to light it your team\'s color<br><strong>The first team to keep 3 Bulbs lit wins the game!</strong></li>',"OK",function(){dialog.style.display="none"})};var d={cellSize:32,maze:{get:function(e,t){return t>1?0:1}},player:new c,otherPlayers:{},bulbsDict:{}},m=d.player;m.self=1;var v,y;window.onresize=function(){d.width=canvas.width=innerWidth,d.height=canvas.height=innerHeight,v=d.width>>1,y=d.height>>1,h.font="italic 5pt Calibri",h.textAlign="center",h.lineWidth=15,h.lineJoin="bevel",blue.onclick()},onresize();var p=n;start.onclick=function(){var e=document.body;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(),a.startGame()},pname.value=m.name,pname.onkeyup=function(){m.setName(pname.value)};var g=function(){utils.each(a.gameState.players,function(e){if(e.id!=a.gameState.playerId){var t=-1;if(d.otherPlayers[e.id]?(t=d.otherPlayers[e.id].color,d.otherPlayers[e.id].setColor(e.color),d.otherPlayers[e.id].name=e.name):(d.otherPlayers[e.id]=new c,d.otherPlayers[e.id].setColor(e.color),d.otherPlayers[e.id].name=e.name),t!=e.color&&p==n){var o=0,i=0;for(var r in d.otherPlayers)1==d.otherPlayers[r].color?o++:i++;e.player=1==e.color?{x:12+10*o,y:0,anim:"stand",dir:0}:{x:(d.width-108)/4-10*i,y:0,anim:"stand",dir:1}}e.player&&d.otherPlayers[e.id].deserialize(e.player)}});for(var e in d.otherPlayers){for(var t=!1,o=0;o<a.gameState.players.length;o++)if(a.gameState.players[o].id==e){t=!0;break}t||delete d.otherPlayers[e]}for(var r in a.gameState.bulbs)d.bulbsDict[r]?d.bulbsDict[r].color=a.gameState.bulbs[r]:d.bulbsDict[r]=new u(i(r),d.cellSize)};a.connect({onId:function(e){1==e.color?blue.click():red.click()},onStart:function(){utils.each(document.querySelectorAll(".inmenu"),function(e){e.classList.remove("inmenu"),setTimeout(function(){e.style.display="none"},1e3)}),l.scale=2,f.bind(d);var e=a.gameState;d.otherPlayers={},d.bulbsDict={};for(var n in e.bulbs)d.bulbsDict[n]=new u(i(n),d.cellSize);if(e.maze){d.maze=s(e.mazeX,e.mazeY,e.maze,d.bulbsDict),d.intersections={};for(var o=0,r=d.maze,c=0;c<e.mazeY;c++)for(var h=0;h<e.mazeX;h++){if(e.maze[o]){var v=!!r[o+1]+!!r[o-1]+!!r[o+e.mazeX]+!!r[o-e.mazeX];v>2&&(d.intersections[o]=1)}o++}d.intersections[e.blue]=d.intersections[e.red]=1,g();var y=i(e.blue),b=i(e.red);m.deserialize(1==m.color?y:b);for(var w in d.otherPlayers)d.otherPlayers[w].deserialize(1==m.color?y:b);p=t}},onDisconnect:function(e){o("Disconnected",e+"<br>Do you want to reconnect?","Reconnect",function(){document.location.reload(),dialog.style.display="none"})},updateGame:g,onEnd:function(){o("Game Ended",(a.gameState.endMsg||"")+"<br>Do you want to play again?","Play Again",function(){document.location.reload(),dialog.style.display="none"})}},d),r.start(function(e){h.fillStyle="#222",h.fillRect(0,0,d.width,d.height),h.save(),p(e),h.restore()}),window.localStorage&&!localStorage["instructions-shown"]&&(howto.click(),localStorage["instructions-shown"]=!0)}()},{10:10,2:2,4:4,5:5,6:6,7:7,8:8,9:9}],2:[function(e,t){var n,o=e(3),i=["#fff","#99f","#f99"],r=["#eee","#77f","#f77"];t.exports=function(e,t){this.color=0;var a=t/3,s=e.x,l=e.y,c=e.ofs;n=a,this.update=function(e){var t=e.player;t.isCollide(s,l,a,a)?this.color!=t.color&&(this.color=t.color,o.updateBulb({ofs:c,color:this.color})):a=n},this.draw=function(e,t){e.save(),e.shadowBlur=a,e.shadowColor=r[this.color],e.fillStyle=i[this.color];var n=(t-a)/2;e.fillRect(s+n,l+n,a,a),e.restore()}}},{3:3}],3:[function(e,t){function n(e,t){l=e,u=t.player,h.connected||(h=io()),h.on("news",o),h.on("state",r),h.on("disconnect",s),h.on("yourId",function(t){d.playerId=t.id,e.onId(t)}),h.on("onWallDestroyed",function(e){t.maze[e.wallDestroyed]=1}),u.emitPlayerInfo=function(){h.emit("playerInfo",{name:u.name,color:u.color})},u.emitShotInfo=i,u.emitPlayerInfo()}function o(e){2==d.state&&(messageBox.innerHTML=null);var t=document.createElement("div");t.className="show",t.innerHTML=e.message,messageBox.appendChild(t);var n=1,o=setInterval(function(){n*=.995,t.style.opacity=n},20);setTimeout(function(){try{messageBox.removeChild(t)}catch(e){}clearInterval(o)},5e3)}function i(e){h.emit("update",{id:d.playerId,player:u.serialize(),intant:e})}function r(e){var t=3==d.state;for(var n in e)d[n]=e[n];switch(t&&(d.state=3),l.updateGame(),d.state){case 0:1==f&&(l.onEnd(),f=0),d.players.length<2?(start.textContent="Wait for more players...",start.disabled=!0):(start.textContent="Start",start.disabled=!1);break;case 1:start.textContent="Starting",start.disabled=!0,1==f&&(l.onEnd(),f=0);break;case 2:0==f&&(l.onStart(),f=1,c=setInterval(function(){return 2!=d.state?(clearInterval(c),c=0,void 0):(i(),void 0)},33));break;case 3:start.textContent="Join",start.disabled=!1}}function a(){return 3==d.state?(d.state=1,r({state:2}),void 0):(h.emit("startGame"),void 0)}function s(){d.state=0,l.onDisconnect(m)}utils=e(18);var l,c,u,h={},f=0,d={playerId:0},m="The server connection dropped.";t.exports={startGame:a,connect:n,gameState:d,wallDestroyed:function(e){h.emit("wallDestroyed",{ofs:e})},updateBulb:function(e){h.emit("bulbUpdate",{ofs:e.ofs,color:e.color})}}},{18:18}],4:[function(e,t){function n(e,t,n,o){function i(i,r){i.fillStyle="#eee";for(var a=-3;t+2>a;a++){for(var s=-3,l=a*e,c=0;e>c;c++)n[l]?(-1!=s&&(i.fillRect(s*r,a*r,(c-s)*r,r),s=-1),o[l]&&o[l].draw(i,r)):-1==s&&(s=c),l++;i.fillRect(s*r,a*r,(2+c-s)*r,r)}}return n.BFS=function(o,i){for(var r=0;t>r;r++)for(var a=0;e>a;a++){var s=e*r+a;n[s]&&(n[s]=1)}for(var l=0;l<o.length;l++)n[o[l]]=10;for(var s,c,u=o.slice(),h=function(e){if(1==n[e]){if(n[e]=c,e==i)return;u.push(e)}};u.length;)s=u.shift(),c=n[s]+1,h(s+1),h(s-1),h(s+e),h(s-e)},n.draw=i,n.xyToOfs=function(t,n){return n*e+t},n.get=function(t,o){return n[o*e+t]},n.MAZE_X=e,n}t.exports=n},{}],5:[function(e,t){var n=e(6),o=e(10),i=e(12),r=e(11),a=.5,s=4,l=8,c=7.5,u=.1,h=.3,f=.7,d=15,m=25,v=1;t.exports=function(){function e(e){e!=A&&(A=e,I=0)}var t=5,y=0,p=0,g=0,b=1,w=0,S=0,z=[],x=[],k=new i(70,70,170),M=k.animations.run,P=k.animations.stand,C=0,E=0,D=0,_=0,I=0,A=0,B=0;return this.name="Player "+o.int(100),this.bigShots=5,this.up=this.left=this.right=this.btnA=this.btnB=0,this._protected=0,this.getX=function(){return t},this.getDirection=function(){return B},this.serialize=function(){return{x:t,y:y,vx:p,vy:g,anim:A.name,dir:B,reversed:S,btnA:this.btnA,btnB:this.btnB,bigShots:this.bigShots,shot:D?D.serialize():0,disabled:_,"protected":this._protected,up:this.up,left:this.left,right:this.right}},this.setCamera=function(){n.setTarget(t,y)},this.deserialize=function(n){void 0!==n.x&&(t=n.x),void 0!==n.y&&(y=n.y),void 0!==n.vx&&(p=n.vx),void 0!==n.vy&&(g=n.vy),void 0===n.btnA||this.self||(this.btnA=n.btnA),void 0===n.btnB||this.self||(this.btnB=n.btnB),void 0!==n.anim&&e(k.animations[n.anim]),void 0!==n.dir&&(B=n.dir),void 0!==n.reversed&&(S=n.reversed),void 0!==n.disabled&&(_=n.disabled),void 0!==n.protected&&(this._protected=n.protected),void 0!==n.shot&&(0==n.shot?D=0:(D||(D=new r(n.shot.x,n.shot.y,n.shot.direction,this)),D.totalElapsed=n.shot.totalElapsed,D.x1=n.shot.x1)),void 0!==n.up&&(up=n.up),void 0!==n.left&&(left=n.left),void 0!==n.right&&(right=n.right)},this.isCollide=function(e,n,o,i){return!(e>t+d||t>e+o||n>y+m||y>n+i)},this.setColor=function(e){this.color=e,k=new i(1==e?70:170,70,1!=e?70:170),this.emitPlayerInfo&&this.emitPlayerInfo()},this.setColor(v),this.setName=function(e){e!=this.name&&(this.name=e,this.emitPlayerInfo&&this.emitPlayerInfo())},this.shotDown=function(e){_=2*e,this._protected=_+2,this.self&&navigator.vibrate(20*e)},this.draw=function(e){if(e.save(),e.translate(t+d/2,y+m),_>0&&(e.translate((6*Math.random()|0)-3,(6*Math.random()|0)-3),e.shadowColor="#ffd",e.shadowBlur=20),e.fillStyle=this.self?"#ff0":k.col3,e.fillText(this.name,0,-m-5),S)for(var n=1;3>n;n++)e.save(),e.globalAlpha=.7-.2*n,e.translate(-p*n/2,-g*n/2),e.scale(.15,.15),B&&e.scale(-1,1),A.render(e,k,I,S),e.restore();e.scale(.15,.15),B&&e.scale(-1,1),A.render(e,k,I,S),e.restore(),D&&D.draw(e)},this.reverseMovement=function(n,o){var i=n.maze,r=(t+d/2)/n.cellSize|0,a=(y+m/2)/n.cellSize|0,l=i.xyToOfs(r,a);if(S||(x=[],S=1,this.self&&(document.getElementById(65).style.transform="scale(-1,1)")),I-=o,l==z[z.length-1]&&(z.pop(),x=[],0==z.length))return p=g=0,z.push(l),void 0;if(!x.length){i.BFS([z[z.length-1]],l);for(var c=l;l!=z[z.length-1];){var u=i[l]-1;i[l+1]==u?(l+=1,x.push([1,0,l])):i[l-1]==u?(l-=1,x.push([-1,0,l])):i[l-i.MAZE_X]==u?(l-=i.MAZE_X,x.push([0,-1,l])):i[l+i.MAZE_X]==u&&(l+=i.MAZE_X,x.push([0,1,l]))}l=c}var h=x[0];h[2]==l&&(x.shift(),h=x[0]),B=h[0]>0,p=1.2*h[0]*s,g=1.2*h[1]*s,h[0]&&(e(M),y=n.cellSize*(l/i.MAZE_X|0)),h[1]&&(e(k.animations.fall),t=n.cellSize*(l%i.MAZE_X+.5)),t+=p,y+=g},this.normalMove=function(o,i){I+=i;var v=o.cellSize/60;S&&(this.self&&(document.getElementById(65).style.transform="scale(1,1)"),S=0),this.up&&(g-=b?c:u,g=Math.max(g,-l)),g+=a,g=Math.min(g,l);var x=M;this.right?(p+=v,p=Math.min(p,s),B=0):this.left?(p-=v,p=Math.max(p,-s),B=1):(p*=.2,Math.abs(p)<.01&&(p=0,x=P)),b&&!w?(C&&this.btnA?(C=.1,x=k.animations.fire,E||(E=1,D||(D=new r(t,y,B,this),this.emitShotInfo&&this.emitShotInfo()))):D=E=0,e(x)):D=E=0;var _=Math.floor((t+p+2)/o.cellSize),A=(d-3+t+p)/o.cellSize|0,X=Math.floor((y+g)/o.cellSize),T=(m+y+g)/o.cellSize|0;w=b=0,g>0?o.maze.get(_,T)&&o.maze.get(A,T)||(y=T*o.cellSize-m,g=0,b=1):0>g&&(o.maze.get(_,X)&&o.maze.get(A,X)||(y=(X+1)*o.cellSize,g=0));var _=Math.floor((t+p)/o.cellSize),A=(d+t+p)/o.cellSize|0,X=Math.floor((y+g+2)/o.cellSize),T=(m-1+y+g-2)/o.cellSize|0,q=0;if(p>0?o.maze.get(A,X)&&o.maze.get(A,T)||(t=A*o.cellSize-d-1,p=0,q=this.right&&g>0):0>p&&(o.maze.get(_,X)&&o.maze.get(_,T)||(t=(_+1)*o.cellSize+1,p=0,q=this.left&&g>0)),q&&(g*=f,b=Math.random()<h,w=1),Math.abs(p)>1||Math.abs(g)>1?C=0:C+=i,this.self&&(C>3&&(n.scale=Math.max(n.scale-.004,.5)),(!C||this.btnA)&&(n.scale=Math.min(n.scale+.1,1.7))),b||(g>0?e(k.animations.fall):e(k.animations.jump)),t+=p,y+=g,o.intersections&&this.self){var R=t/o.cellSize|0,F=y/o.cellSize|0,L=o.maze.xyToOfs(R,F);o.intersections[L]&&z[z.length-1]!=L&&(z.push(L),z.length>500&&z.shift())}},this.update=function(e,t){if(this._protected>0&&(this._protected-=t),_>0)return _-=t,void 0;if(this.btnB&&z.length?this.reverseMovement(e,t):this.normalMove(e,t),D){var n=D.update(e,t);n&&(D=0)}},this}},{10:10,11:11,12:12,6:6}],6:[function(e,t){!function(){var e=0,n=0,o=0,i=0;t.exports={X:0,Y:0,scale:2,update:function(){o=.9*o+.1*e,i=.9*i+.1*n,this.X=Math.round(o),this.Y=Math.round(i)},setTarget:function(t,o){e=t,n=o}}}()},{}],7:[function(e,t){t.exports=e(3)},{18:18,3:3}],8:[function(e,t){var n,o=e(18),i={},r=function(e,t){var o=e.keyCode,r=i[o];i[o]="keydown"==e.type;var a=document.getElementById(o);if(a){i[o]?(a.classList.add("clicked"),r||navigator.vibrate(10)):a.classList.remove("clicked");var s=n.player;s.up=i[38],s.right=i[39],s.left=i[37],s.btnA=i[83],s.btnB=i[65],t&&t.preventDefault?t.preventDefault():e.preventDefault()}};showcontrols.onclick=function(){o.each(document.querySelectorAll(".game"),function(e){e.classList.toggle("hide")})},i.bind=function(e){n=e,document.addEventListener("keydown",r),document.addEventListener("keyup",r),o.each(["mousedown","mouseup","touchstart","touchmove","touchend"],function(e){arrows.addEventListener(e,function(e){e.preventDefault();var t=e.type,o=e.clientX,i=e.clientY;if("touchend"==t)return r({type:0,keyCode:39},e),r({type:0,keyCode:38},e),r({type:0,keyCode:37},e),void 0;e.touches&&(o=e.touches[0].clientX,i=e.touches[0].clientY);var a=n.width,s=n.height,l={type:"mouseup"==t?0:"keydown"};a*(.02+.1)>o?(l.keyCode=37,r(l,e),r({type:0,keyCode:39},e)):.2*a>o&&o>a*(.1+.02)&&(l.keyCode=39,r(l,e),r({type:0,keyCode:37},e));var i=innerHeight-i;.22*s>i&&i>.12*s&&(l.keyCode=38,r(l,e),r({type:0,keyCode:40},e))},!1)}),o.each(document.querySelectorAll(".button"),function(e){o.each(["mousedown","mouseup","touchstart","touchmove","touchend"],function(t){e.addEventListener(t,function(e){var t=e.type,n={type:"mouseup"==t||"touchend"==t?0:"keydown",keyCode:e.target.id};r(n,e)})})})},t.exports=i},{18:18}],9:[function(e,t){function n(e){return window.requestAnimationFrame(function(){var t=Date.now(),n=t-o;n>999?n=1/60:n/=1e3,o=t,e(n)})}var o=0;t.exports={start:function(e){return n(function t(o){e(o),n(t)})},stop:function(e){window.cancelAnimationFrame(e)}}},{}],10:[function(e,t){var n=Math.random;t.exports={"int":function(e){return n()*(e||268435455)|0},"float":function(e){return n()*(e||1)},bool:function(){return n()>.5},range:function(e,t){return rng.int(t-e)+e},pick:function(e){return e[rng.int(e.length)]}}},{}],11:[function(e,t){var n=.14,o=.1,i=1.5,r=.3,a=e(7);t.exports=function(e,t,s,l){var c,u,h,f=e-4,d=t+4.5;s||(f+=22),this.totalElapsed=0;var m,v,y,p=1,g=1,b=-1;this.serialize=function(){return{x:e,y:t,x1:c,direction:s,totalElapsed:this.totalElapsed}},this.collidePlayers=function(e){var t,n=l.color,o=null,i=1/0;s&&(i*=-1);for(var r in e.otherPlayers)t=e.otherPlayers[r],t.color==n||t._protected>0||t.isCollide(Math.min(f,c),d-u/2,Math.abs(c-f),u)&&(s&&i<t.getX()||!s&&i>t.getX())&&(o=t,i=t.getX());t=e.player,t.color!=n&&t._protected<=0&&t.isCollide(Math.min(f,c),d-u/2,Math.abs(c-f),u)&&(s&&i<t.getX()||!s&&i>t.getX())&&(o=t,i=t.getX()),o&&(b=-1,c=s?i+11:i+5,s==o.getDirection()&&(s?c-=4:c+=4),o.shotDown(u))},this.update=function(f,d){if(!c){var w=1;for(s&&(w=-w),m=f.cellSize,v=e/m|0,y=t/m|0;;)if(v+=w,!f.maze.get(v,y)){v>0&&v<f.maze.MAZE_X-1&&(b=f.maze.xyToOfs(v,y));break}c=(s?v+1:v)*m}this.totalElapsed+=d;var S=this.totalElapsed;if(n>S)u=0;else if(n+o>S)u=2,g&&(g=0,this.collidePlayers(f));else if(n+o+i>S)u=0,h=4*(1-(i-(S-n-o))/i);else{if(!(n+o+i+r>S))return 1;if(l.bigShots){if(h=4,u=5,p){if(l.bigShots--,p=0,l.self){var z=document.getElementById(83);z.innerHTML="Fire: "+l.bigShots}this.collidePlayers(f),b&&(f.maze[b]=1,a.wallDestroyed(b),l.self&&navigator.vibrate(200))}}else h=4*((r-(S-n-o-i))/r)}},this.draw=function(e){(u||h)&&(e.save(),e.shadowColor="#ff9",e.shadowBlur=20,h&&(e.fillStyle="rgba(255,255,255,0.6)",e.beginPath(),e.arc(f,d,h,0,2*Math.PI),e.fill()),u&&(e.fillStyle="#fff",e.fillRect(f,d-u/2,c-f,u)),b&&!p&&e.fillRect(v*m,y*m,m,m),e.restore())}}},{7:7}],12:[function(e,t){!function(){function n(e,t,n,o,i){if(this.name=e,this.duration=t,this.repeat=i,o){this.frames=n.slice();for(var r=0;r<n.length;r++){for(var a=n[r],s=a.slice(),l=6;10>l;l++)s[l]=a[l+4],s[l+4]=a[l],s[l+10]=a[l+16],s[l+16]=a[l+10];s[20]=a[26],s[21]=a[27],s[26]=a[20],s[27]=a[21],this.frames.push(s)}}else this.frames=n}function o(e,t,n){for(var o=[],i=1-n,r=0;r<e.length;r++)o.push(e[r]*i+t[r]*n);return o}function i(e,t,n){var o=.8;this.col1="rgb("+(e*o|0)+","+(t*o|0)+","+(n*o|0)+")",o=1,this.col2="rgb("+(e*o|0)+","+(t*o|0)+","+(n*o|0)+")",o=1.3,this.col3="rgb("+(e*o|0)+","+(t*o|0)+","+(n*o|0)+")"}n.prototype.render=function(e,t,n){var i=this.duration;e.save();var r,a=this.frames;if(this.repeat||i>n){var s=i/a.length,l=(n/s|0)%a.length,c=(l+1)%a.length;this.repeat||0!=c||(c=l),0>l&&(l+=a.length),0>c&&(c+=a.length);var u=n%s;0>u&&(u+=s),r=o(a[l],a[c],u/s)}else r=a[a.length-1];var h=function(t){e.moveTo(r[2*t],r[2*t+1])},f=function(t){e.lineTo(r[2*t],r[2*t+1])};e.strokeStyle=t.col1,e.beginPath(),h(0),f(5),f(6),h(7),f(11),f(12),f(13),e.stroke(),e.strokeStyle=t.col2,e.beginPath(),h(0),f(1);var d=[(r[2]+r[4])/2,(r[3]+r[5])/2],m=a[0],v=Math.hypot(m[2]-m[4],m[3]-m[5])/2;e.arc(d[0],d[1],v,.5*Math.PI,2.5*Math.PI,!1),h(0),f(7),f(8),f(9),f(10),e.stroke(),e.strokeStyle=t.col3,e.beginPath(),h(0),f(3),f(4),e.stroke(),e.restore()},i.prototype.animations={};var r=function(e,t,o,r,a){i.prototype.animations[e]=new n(e,t,o,r,a)},a=e(15),s=e(13);s.unshift(a[a.length-1]),r("run",.6,e(16),!0,!0),r("stand",3.2,e(17),!0,!0),r("jump",.4,a,!1,!1),r("fall",.4,s,!1,!1),r("fire",.15,e(14),!1,!1),t.exports=i}()},{13:13,14:14,15:15,16:16,17:17}],13:[function(e,t){t.exports=[[-6,-138,-11,-153,-19,-180,-29,-165,-35,-207,0,-172,-14,-209,7,-100,20,-80,26,-45,36,-70,31,-121,34,-86,46,-101],[5,-113,9,-130,14,-157,-21,-130,-7,-170,35,-124,40,-159,-4,-67,13,-38,20,0,33,-19,34,-55,30,-22,46,-39]]},{}],14:[function(e,t){t.exports=[[12,-132,17,-144,24,-167,-11,-100,-14,-62,2,-99,25,-69,-11,-76,2,-43,-13,-8,8,-8,9,-44,-7,-7,10,-8],[10,-148,13,-170,10,-148,13,-100,48,-104,-3,-95,7,-67,-10,-72,-3,-39,-15,-1,1,-3,-6,-38,-13,-2,5,-2],[5,-137,8,-149,10,-172,43,-132,81,-137,9,-96,21,-69,-4,-72,1,-37,-11,0,8,-1,-4,-38,-12,-4,5,-5]]},{}],15:[function(e,t){t.exports=[[9,-121,13,-137,6,-159,41,-119,42,-155,36,-138,24,-172,-9,-75,-10,-42,-27,-18,-15,0,33,-90,7,-65,-1,-44],[4,-186,9,-205,17,-227,34,-207,18,-236,39,-200,27,-239,-3,-143,-6,-111,-28,-86,-27,-65,30,-160,14,-121,31,-100],[4,-186,9,-205,17,-227,34,-207,18,-236,39,-200,27,-239,-3,-143,15,-115,2,-84,21,-72,32,-160,22,-121,41,-116]]},{}],16:[function(e,t){t.exports=[[13,-136,19,-149,23,-172,-19,-142,-47,-115,19,-100,41,-109,-13,-89,15,-48,43,-3,58,-18,-33,-48,-60,-80,-76,-64],[12,-123,15,-135,21,-158,-25,-107,-45,-72,21,-81,46,-88,-11,-66,29,-40,10,-4,32,-3,-13,-26,-45,-44,-64,-37],[12,-127,17,-139,23,-162,-12,-98,-21,-56,3,-97,25,-71,-11,-74,1,-39,-14,-2,5,-3,10,-45,-20,-35,-31,-18],[15,-137,20,-151,24,-173,1,-103,28,-84,-11,-112,-3,-77,-14,-84,-21,-44,-50,-15,-31,-1,24,-68,1,-37,12,-18],[13,-144,20,-159,24,-181,5,-105,38,-96,-19,-123,-14,-86,-12,-98,-42,-57,-79,-22,-71,0,25,-79,24,-34,44,-30],[15,-145,21,-155,29,-179,17,-100,50,-103,-23,-131,-33,-92,-14,-93,-40,-50,-91,-48,-98,-24,29,-77,39,-31,61,-40]]},{}],17:[function(e,t){t.exports=[[12,-126,17,-138,24,-161,-11,-94,-14,-56,2,-93,25,-63,-11,-70,2,-37,-13,-2,8,-2,9,-38,-7,-1,10,-2],[10,-127,14,-140,20,-161,-9,-92,-10,-57,5,-93,21,-60,-9,-72,2,-35,-14,-1,2,-2,8,-36,-7,-2,11,-1],[12,-126,15,-141,24,-161,-10,-90,-6,-55,3,-89,15,-59,-11,-68,3,-35,-15,0,1,-1,7,-37,-5,-2,11,-2]]},{}],18:[function(e,t){var n={setSeed:function(e){return e=1>e?1/e:e,this._seed=e,this._s0=(e>>>0)*this._frac,e=69069*e+1>>>0,this._s1=e*this._frac,e=69069*e+1>>>0,this._s2=e*this._frac,this._c=1,this},_s0:0,_s1:0,_s2:0,_c:0,_frac:2.3283064365386963e-10};n.setSeed(5),t.exports={range:function(e,t){for(var n=0;e>n;n++)t(n)},brrange:function(e,t){for(var n=0;e>n;n++){var o=t(n);if(o)return o}},each:function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(t(o,n))return}},minmax:function(e,t,n){return min(t,max(e,n))},duRange:function(e,t,n){for(var o=0;t>o;o++)for(var i=0;e>i;i++)n(i,o)}}},{}]},{},[1]);