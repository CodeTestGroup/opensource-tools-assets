"use strict";let t=[],e=[];const o=["saint","baal","marx","dissident","devotee"],a=5,s=6;function n(t){let o=e.find(t=>"lobby"===t.state&&t.players.length<5);o||(console.log("New game created"),o=new h,e.push(o)),o.join(t)}function i(t){e.splice(e.indexOf(t),1)}function c(e){t.splice(t.indexOf(e),1)}const r=5;function l(t){return Math.round(Math.random()*t)}class h{constructor(){this.characters=[...o],this.players=[],this.bots=[],this.state="lobby"}join(t){this.players.push(t),t.game=this,t.assignChar()}joinBot(){const t=new g(null,"Bot"+(this.bots.length+1));this.players.push(t),this.bots.push(t),t.name=t.id,t.isBot=!0,t.game=this,t.assignChar(),console.log(`${t.name} joined as ${t.char}.`)}setBotsLocation(){this.bots.forEach(t=>{t.location=t.nextChoice.location||t.location})}resetBotChoice(){this.bots.forEach(t=>{t.nextChoice={}})}playBotsAction(){this.bots.forEach(t=>{t.nextChoice={action:l(2)+1,option:l(1)+1,target:this.getRandomPlayer(t)},console.log(`Bot performs action ${t.nextChoice.action}/${t.nextChoice.option}/${t.nextChoice.target}`)})}playBotsLocation(){this.bots.forEach(t=>{t.nextChoice={location:l(4)+1},console.log("Bot goes to "+t.nextChoice.location)})}getRandomPlayer(t){let e=l(this.players.length-1)+1;return this.players[e]===t?this.getRandomPlayer(t):e}}class g{constructor(t,e){this.game=null,this.isBot=!1,this.nextChoice={},this.location=6,this.socket=t,this.id=e||t.id}updatePlayers(){this.socket&&this.socket.emit("updateUsers",this.game.players.map(({name:t,char:e,location:o,nextChoice:a={},id:s})=>({name:t,char:e,location:o,nextChoice:a,id:s})))}startGame(){this.socket&&this.socket.emit("start")}assignChar(){const t=Math.round(Math.random()*(this.game.characters.length-1));this.char=this.game.characters[t],this.game.characters.splice(t,1)}}function p(t){const{location:e,action:o,option:a,target:s}=t;return{location:Number.isInteger(e)?e:null,action:Number.isInteger(o)?o:null,option:Number.isInteger(a)?a:null,target:Number.isInteger(s)?s:null}}module.exports={io:e=>{const o=new g(e);t.push(o),e.on("join",t=>{o.name=t.substr(0,7),n(o),console.log(`Player ${e.id} is called ${o.name} and is ${o.char}`),o.game.players.forEach(t=>t.updatePlayers()),o.game.players.length>=5&&(o.game.players.forEach(t=>t.startGame()),o.game.state="start")}),e.on("disconnect",()=>{console.log("Disconnected: "+e.id);const t=o.game;c(o),t&&(t.players.splice(t.players.indexOf(o),1),t.characters.push(o.char),t.players.every(t=>t.isBot)?i(t):t.players.forEach(t=>t.updatePlayers()))}),e.on("choice",t=>{const{location:e,action:a,option:s,target:n}=p(t),i=o.game;Number.isInteger(e)?(console.log(`Player ${o.name} goes to ${e}`),i.playBotsLocation()):(console.log(`Player ${o.name} performs action ${a}/${s}/${n}`),i.playBotsAction()),o.nextChoice=t,(i.players.every(t=>Number.isInteger(t.nextChoice.location))||i.players.every(t=>Number.isInteger(t.nextChoice.action)))&&i.players.forEach(t=>t.updatePlayers())}),e.on("move",()=>{const t=o.game;o.nextChoice.location&&(o.location=o.nextChoice.location,o.nextChoice.location=null),t.setBotsLocation()}),e.on("resetChoice",()=>{o.nextChoice={},o.game.resetBotChoice()}),e.on("forceStart",()=>{const t=o.game;for(let e=5-t.players.length;e>0;e--)t.joinBot();console.log(`${t.players.length} players, ${t.bots.length} of which are bots, start the game.`),t.players.forEach(t=>t.updatePlayers()),t.players.forEach(t=>t.startGame()),t.state="start"}),console.log("Connected: "+e.id)},stats:(t,o)=>{o.json(e.map(t=>({players:t.players.map(({isBot:t,id:e,nextChoice:o,name:a,char:s,location:n})=>({name:a,char:s,id:e,nextChoice:o,location:n})),bots:t.bots.map(({name:t})=>t),characters:t.characters})))}};