!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var n={C_W:1200,C_H:540,G_T:"Gravity is a myth",BLACK:"#000",FOREGROUND:"#000",TEXT_COLOR:"#fff",B_R:30,T_W:120,T_H:30,F_W:120,F_H:30,E_P_W:10,E_P_H:10};const i=document.querySelector("canvas");i.width=n.C_W,i.height=n.C_H,kontra.init();let o={states:{},currentStateName:"",store:{levelsCompleted:0,get totalLevels(){return Object.keys(o.states).filter(t=>t.startsWith("level")).length}},clear(){const{width:t,height:e}=kontra.canvas;kontra.context.clearRect(0,0,t,e)},addScene(t,e){return this.states[t]=e,this},switchToScene(t){this.clear();const e=this.states,s=e[this.currentStateName];return s&&s.destroy().stop(),e[t].init(t).start(),this.currentStateName=t,this},resetStore(){this.store.levelsCompleted=0}};var r=o;var l={renderText(t,e){const s=kontra.context;kontra.canvas.style.background=n.FOREGROUND,s.font="30px Verdana",s.fillStyle=n.TEXT_COLOR;for(let n=0;n<t.length;n++)s.fillText(t[n],0,e+40*n)}};const h=kontra.gameLoop({render(){const t=["Up & Down","Inspired from the classic game VVVVVV","","Gameplay: The gravity of ball changes when you press space.","Get to the yellow star without touching the thorns","","Press Enter to start game","",`Total levels: ${r.store.totalLevels}`];l.renderText(t,n.C_H/4)},update(){}});h.init=function(){return r.resetStore(),kontra.keys.bind("enter",function(){const t=window.jumpToLevel;t?r.switchToScene(`intro-level-${t-1}`):r.switchToScene("intro-level-0")}),this},h.destroy=function(){return kontra.keys.unbind("enter"),this};var c=h;const a=kontra.gameLoop({render(){const t=kontra.context,e=kontra.canvas;e.style.background=n.FOREGROUND,t.font="30px Verdana",t.fillStyle=n.TEXT_COLOR;let s="";s=r.store.levelsCompleted===r.store.totalLevels?`Yay! Congrats you've completed all the ${r.store.totalLevels} levels`:`Whoops! You could finish ${r.store.levelsCompleted} levels. Better luck new time.`,t.fillText(s,0,e.height/2),t.fillText("Hit Enter to restart",0,e.height/2+40)},update(){}});a.init=function(){return kontra.keys.bind("enter",function(){r.switchToScene("game-menu")}),this},a.destroy=function(){return kontra.keys.unbind("enter"),this};var d=a;var u={getInstance(t,e){let s=t+n.B_R,i=n.C_H-e-n.B_R;return kontra.sprite({x:s,y:i,width:2*n.B_R,height:2*n.B_R,ttl:1/0,ddy:1,render(){let t=this.context;t.strokeStyle="blue",t.fillStyle="blue",t.beginPath(),t.arc(this.x,this.y,n.B_R,0,2*Math.PI),t.stroke(),t.fill(),t.closePath()},update(){this.isYCollided?this.dy=0:this.advance()}})}};var T={getInstance(t,e){let s=n.C_H-e-n.F_H;return kontra.sprite({x:t,y:s,width:n.F_W,height:n.F_H,color:"green",ttl:1/0})}};var y={getInstance(t,e){let s=n.C_H-e-n.T_H;return kontra.sprite({x:t,y:s,width:n.T_W,height:n.T_H,ttl:1/0,render(){this.context.beginPath(),this.context.strokeStyle="red",this.context.fillStyle="red",this.context.moveTo(this.x,this.y+n.T_H/2),this.context.lineTo(this.x+n.T_W/8,this.y),this.context.lineTo(this.x+2*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+3*n.T_W/8,this.y),this.context.lineTo(this.x+4*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+5*n.T_W/8,this.y),this.context.lineTo(this.x+6*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+7*n.T_W/8,this.y),this.context.lineTo(this.x+8*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+7*n.T_W/8,this.y+n.T_H),this.context.lineTo(this.x+6*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+5*n.T_W/8,this.y+n.T_H),this.context.lineTo(this.x+4*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+3*n.T_W/8,this.y+n.T_H),this.context.lineTo(this.x+2*n.T_W/8,this.y+n.T_H/2),this.context.lineTo(this.x+1*n.T_W/8,this.y+n.T_H),this.context.closePath(),this.context.stroke(),this.context.fill()}})}};var x={getInstance(t,e){let s=n.C_H-e-n.E_P_H;return kontra.sprite({x:t,y:s,width:n.E_P_W,height:n.E_P_H,ttl:1/0,render(){this.context.beginPath(),this.context.strokeStyle="gold",this.context.fillStyle="gold",this.context.moveTo(this.x,this.y+this.height/2),this.context.lineTo(this.x+this.width/2,this.y),this.context.lineTo(this.x+this.width,this.y+this.height/2),this.context.lineTo(this.x+this.width/2,this.y+this.height),this.context.closePath(),this.context.stroke(),this.context.fill()}})}};const f=[[[0,0],[120,0],[240,0],[360,0],[480,0],[600,0],[720,0],[840,0],[960,0],[1080,0]],[[0,120],[120,120],[240,120],[360,120],[480,120],[600,120],[720,120],[840,120],[960,120],[1080,120]],[[0,240],[120,240],[240,240],[360,240],[480,240],[600,240],[720,240],[840,240],[960,240],[1080,240]],[[0,360],[120,360],[240,360],[360,360],[480,360],[600,360],[720,360],[840,360],[960,360],[1080,360]],[[0,440],[120,400],[240,400],[360,400],[480,400],[600,400],[720,400],[840,400],[960,400],[1080,400]]];var p=[{ball:[0,30],endpoint:[1100,510],desc:["Level 1: Reach out for the star.","Hint: Press Space, Left and Right.","Press Enter to continue."]},{ball:[0,30],endpoint:[100,300],thorns:[...f[2].slice(0,5),...f[2].slice(7,10)],floors:f[0],desc:["Level 2: Watch out for the thorns!"]},{ball:[0,30],endpoint:[1100,510],thorns:[...f[2].slice(0,5),...f[2].slice(7,10)],floors:[...f[0],...f[3].slice(5)],desc:["Level 3: Nice! It only gets more fun."]},{ball:[0,30],endpoint:[1100,510],thorns:[...f[0].slice(7),...f[2].slice(4,7),...f[4].slice(2,4)],floors:[...f[0].slice(0,7),...f[2].slice(0,4),...f[2].slice(7,9),...f[4].slice(4,10)],desc:["Final Level: And here we are. The last one!"]}];let v=0;const _=kontra.gameLoop({update(){let t=this.ball;t.isYCollided=!1;kontra.context;const e=kontra.canvas,s=(t.x,n.B_R);e.style.background=n.FOREGROUND,v&&v--,kontra.keys.pressed("right")&&(t.x+=10),kontra.keys.pressed("left")&&(t.x-=10);const i={x:t.x-s,y:t.y-s-1,width:2*s,height:2*s+2};t.x+s>e.width&&(t.x=e.width-s),t.x-s<0&&(t.x=s),t.y+s>=e.height&&(t.y=e.height-s,t.isYCollided=!0),t.y-s<=0&&(t.y=s,t.isYCollided=!0),this.floorTiles.forEach(e=>{e.collidesWith(i)&&(t.isYCollided=!0,1===t.ddy?t.y=e.y-s:t.y=e.y+n.F_H+s)}),this.thornTiles.forEach(t=>{t.collidesWith(i)&&r.switchToScene("game-over")}),this.endpoint.collidesWith(i)&&(r.store.levelsCompleted++,this.levelNumber===r.store.totalLevels-1?r.switchToScene("game-over"):r.switchToScene(`intro-level-${this.levelNumber+1}`)),kontra.keys.pressed("space")&&0===v&&(v=20,t.ddy*=-1,t.isYCollided=!1),this.assets.forEach(t=>t.update())},render(){this.assets.forEach(t=>t.render())}});_.init=function(t){const e=parseInt(t.split("-")[1]),s=p[e],n=s.floors,i=s.thorns;return this.levelNumber=e,this.floorTiles=[],this.thornTiles=[],this.assets=[],n&&n.forEach(t=>{const e=T.getInstance(t[0],t[1]);this.floorTiles.push(e),this.assets.push(e)}),i&&i.forEach(t=>{const e=y.getInstance(t[0],t[1]);this.thornTiles.push(e),this.assets.push(e)}),this.ball=u.getInstance(s.ball[0],s.ball[1]),this.assets.push(this.ball),this.endpoint=x.getInstance(s.endpoint[0],s.endpoint[1]),this.assets.push(this.endpoint),this},_.destroy=function(){return this.assets.forEach(t=>{t.ttl=0}),this},_.ball=void 0,_.endpoint=void 0,_.floorTiles=[],_.thornTiles=[],_.assets=[],_.levelNumber=-1;var g=_;const k=kontra.gameLoop({render(){l.renderText(this.levelDescriptions,n.C_H/2)},update(){}});k.init=function(t){const e=parseInt(t.split("-")[2]);return this.levelDescriptions=p[e].desc,kontra.keys.bind("enter",function(){r.switchToScene(`level-${e}`)}),this},k.destroy=function(){return this.levelDescriptions=[],kontra.keys.unbind("enter"),this},k.levelDescriptions=[];var b=k;({init(){r.addScene("game-menu",c).addScene("game-over",d).addScene("level-0",g).addScene("intro-level-0",b).addScene("level-1",g).addScene("intro-level-1",b).addScene("level-2",g).addScene("intro-level-2",b).addScene("level-3",g).addScene("intro-level-3",b).switchToScene("game-menu")}}).init()}]);