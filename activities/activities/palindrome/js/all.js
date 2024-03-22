class Enemy{constructor(i){this.direction="horizontal",this.currentDirection="left",this.image=new Image,this.image.src="assets/images/enemy.png",this.context=i,this.x=0,this.y=0,this.currentAnimation="idle",this.animate=0,this.destination=[0,0],this.isMoving=!1}animateIdle(){this.context.drawImage(this.image,0,0,32,32,this.x,this.y,64,64)}animateRight(){0===this.animate?(this.context.drawImage(this.image,0,32,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,32,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,32,32,32,this.x,this.y,64,64),this.animate=0)}animateLeft(){0===this.animate?(this.context.drawImage(this.image,0,96,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,96,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,96,32,32,this.x,this.y,64,64),this.animate=0)}animateUp(){0===this.animate?(this.context.drawImage(this.image,0,64,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,64,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,64,32,32,this.x,this.y,64,64),this.animate=0)}animateDown(){0===this.animate?(this.context.drawImage(this.image,0,0,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,0,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,0,32,32,this.x,this.y,64,64),this.animate=0)}render(){"walkRight"===this.currentAnimation?this.animateRight():"walkLeft"===this.currentAnimation?this.animateLeft():"walkUp"===this.currentAnimation?this.animateUp():"walkDown"===this.currentAnimation?this.animateDown():"idle"===this.currentAnimation&&this.animateIdle(),this.isMoving&&this.moveEnemy()}moveEnemy(){this.x!==this.destination[0]?this.x>this.destination[0]?this.x=this.x-4:this.x=this.x+4:this.y!==this.destination[1]?this.y>this.destination[1]?this.y=this.y-4:this.y=this.y+4:this.isMoving=!1}Move(i){"vertical"===this.direction?"up"===this.currentDirection?this.IsMovePossible("up",i)?(this.isMoving=!0,this.currentAnimation="walkUp",this.destination=[this.x,this.y-64]):(this.currentDirection="down",this.isMoving=!0,this.currentAnimation="walkDown",this.destination=[this.x,this.y+64]):this.IsMovePossible("down",i)?(this.isMoving=!0,this.currentAnimation="walkDown",this.destination=[this.x,this.y+64]):(this.currentDirection="up",this.isMoving=!0,this.currentAnimation="walkUp",this.destination=[this.x,this.y-64]):"left"===this.currentDirection?this.IsMovePossible("left",i)?(this.isMoving=!0,this.currentAnimation="walkLeft",this.destination=[this.x-64,this.y]):(this.currentDirection="right",this.isMoving=!0,this.currentAnimation="walkRight",this.destination=[this.x+64,this.y]):this.IsMovePossible("right",i)?(this.isMoving=!0,this.currentAnimation="walkRight",this.destination=[this.x+64,this.y]):(this.currentDirection="left",this.isMoving=!0,this.currentAnimation="walkLeft",this.destination=[this.x-64,this.y])}location(){let i,t;return i=this.x>0?this.x/64:0,[t=this.y>0?this.y/64:0,i]}IsMovePossible(i,t){return"down"===i?6!==this.location()[1]&&0!==t[this.location()[0]+1][this.location()[1]]:"up"===i?0!==this.location()[0]&&0!==t[this.location()[0]-1][this.location()[1]]:"left"===i?0!==this.location()[1]&&0!==t[this.location()[0]][this.location()[1]-1]:"right"===i?7!==this.location()[1]&&0!==t[this.location()[0]][this.location()[1]+1]:void 0}}
class Game{update(){if(1!==gameState.backing&&!1===gameState.dead&&(state.pressedKeys.left?player.move("left",level.getCurrentLevel().map)&&(music.playMove(),gameState.steps.push("left"),enemies.map(e=>e.Move(level.getCurrentLevel().map))):state.pressedKeys.right?player.move("right",level.getCurrentLevel().map)&&(music.playMove(),gameState.steps.push("right"),enemies.map(e=>e.Move(level.getCurrentLevel().map))):state.pressedKeys.up?player.move("up",level.getCurrentLevel().map)&&(music.playMove(),gameState.steps.push("up"),enemies.map(e=>e.Move(level.getCurrentLevel().map))):state.pressedKeys.down&&player.move("down",level.getCurrentLevel().map)&&(music.playMove(),gameState.steps.push("down"),enemies.map(e=>e.Move(level.getCurrentLevel().map)))),1===gameState.backing&&!1===player.isMoving&&!1===gameState.dead){let e=gameState.steps.pop();void 0===e&&(gameState.dead=!0,gameState.backing=0,gameState.state="dead"),enemies.map(e=>e.Move(level.getCurrentLevel().map)),"up"===e&&(player.move("down",level.getCurrentLevel().map),music.playMove()),"left"===e&&(player.move("right",level.getCurrentLevel().map),music.playMove()),"right"===e&&(player.move("left",level.getCurrentLevel().map),music.playMove()),"down"===e&&(player.move("up",level.getCurrentLevel().map),music.playMove())}gameState.checkDead(player,enemies),Background.render(),cx.drawImage(goalImage,0,0,32,32,64*level.getCurrentLevel().endLocation[0],64*level.getCurrentLevel().endLocation[1],64,64),cx.drawImage(startImage,0,32,32,32,64*level.getCurrentLevel().startLocation[0],64*level.getCurrentLevel().startLocation[1],64,64),player.render(),enemies.map(e=>e.render()),gameState.checkHalfway(player),gameState.checkStageClear(player,level.getCurrentLevel())&&(level.setNextLevel(),3===level.currentLevel?gameState.state="end":gameState.initiateLevel(player,start,end,level.getCurrentLevel()))}}
class GameState{constructor(){this.state="start_menu",this.halfway=0,this.steps=[],this.backing=0,this.dead=!0,this.stage=0}checkHalfway(e){e.x===end.x&&e.y===end.y&&(this.backing=1,this.halfway=1)}checkStageClear(e,t){return e.x===64*t.startLocation[0]&&e.y===64*t.startLocation[1]&&1===gameState.halfway}checkDead(e,t){t.map(t=>this.checkPlayerAndEnemyCollision(e,t))}checkPlayerAndEnemyCollision(e,t){return e.x===t.x&&e.y===t.y&&(this.dead=!0,this.state="dead",!0)}initiateLevel(e,t,a,i){enemies=[],this.halfway=0,this.backing=0,this.steps=[],this.dead=!1,e.x=64*i.playerLocation[0],e.y=64*i.playerLocation[1],e.destination=[e.x,e.y],t.x=64*i.startLocation[0],t.y=64*i.startLocation[1],a.x=64*i.endLocation[0],a.y=64*i.endLocation[1],Background.setMap(i.map),this.spawnEnemies()}spawnEnemies(){void 0!==level.getCurrentLevel().enemies&&level.getCurrentLevel().enemies.map(e=>{if("straight"===e.type){let t=new Enemy(cx);t.y=64*e.location[0],t.x=64*e.location[1],t.direction=e.direction,t.currentDirection=e.currentDirection,enemies.push(t)}})}}
class Levels{constructor(t){this.currentLevel=t,this.levels=[{name:"level1",playerLocation:[1,4],startLocation:[1,4],endLocation:[6,3],enemies:[{type:"straight",direction:"horizontal",currentDirection:"left",location:[4,5]}],map:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,2,2,2,2,2,2,3],[4,5,5,5,5,5,5,6],[4,5,5,5,5,5,5,6],[7,8,8,8,8,8,8,9],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]},{name:"level2",playerLocation:[2,2],startLocation:[2,2],endLocation:[6,5],enemies:[{type:"straight",direction:"vertical",currentDirection:"up",location:[4,4]},{type:"straight",direction:"horizontal",currentDirection:"left",location:[4,4]}],map:[[0,0,1,2,2,3,0,0],[0,1,5,5,5,6,0,0],[0,4,5,5,5,5,3,0],[0,4,5,5,5,5,5,3],[0,4,5,5,5,5,5,6],[0,7,8,8,5,5,5,6],[0,0,0,0,7,8,8,9],[0,0,0,0,0,0,0,0]]},{name:"level3",playerLocation:[6,1],startLocation:[1,1],endLocation:[6,6],enemies:[{type:"straight",direction:"horizontal",currentDirection:"left",location:[5,4]},{type:"straight",direction:"horizontal",currentDirection:"right",location:[6,3]},{type:"straight",direction:"horizontal",currentDirection:"left",location:[1,4]},{type:"straight",direction:"horizontal",currentDirection:"right",location:[2,3]}],map:[[1,2,3,0,0,1,2,3],[4,5,5,2,2,5,5,6],[4,5,5,8,8,5,5,6],[4,5,6,0,0,4,5,6],[4,5,6,0,0,4,5,6],[4,5,5,2,2,5,5,6],[4,5,5,8,8,5,5,6],[7,8,9,0,0,7,8,9]]}]}getCurrentLevel(){return this.levels[this.currentLevel]}setNextLevel(){this.currentLevel++}}
class Music{constructor(){}play(){}playMove(){}}
class Player{constructor(t){let i=new Image;i.src="assets/images/robot.png",this.context=t,this.image=i,this.x=0,this.y=0,this.animate=0,this.destination=[0,0],this.currentAnimation="idle",this.isMoving=!1}animateIdle(){this.context.drawImage(this.image,0,0,32,32,this.x,this.y,64,64)}animateRight(){0===this.animate?(this.context.drawImage(this.image,0,32,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,32,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,32,32,32,this.x,this.y,64,64),this.animate=0)}animateLeft(){0===this.animate?(this.context.drawImage(this.image,0,96,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,96,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,96,32,32,this.x,this.y,64,64),this.animate=0)}animateUp(){0===this.animate?(this.context.drawImage(this.image,0,64,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,64,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,64,32,32,this.x,this.y,64,64),this.animate=0)}animateDown(){0===this.animate?(this.context.drawImage(this.image,0,0,32,32,this.x,this.y,64,64),this.animate++):1===this.animate?(this.context.drawImage(this.image,32,0,32,32,this.x,this.y,64,64),this.animate++):(this.context.drawImage(this.image,64,0,32,32,this.x,this.y,64,64),this.animate=0)}render(){"walkRight"===this.currentAnimation?this.animateRight():"walkLeft"===this.currentAnimation?this.animateLeft():"walkUp"===this.currentAnimation?this.animateUp():"walkDown"===this.currentAnimation?this.animateDown():"idle"===this.currentAnimation&&this.animateIdle(),this.isMoving&&this.movePlayer()}movePlayer(){this.x!==this.destination[0]?this.x>this.destination[0]?this.x=this.x-4:this.x=this.x+4:this.y!==this.destination[1]?this.y>this.destination[1]?this.y=this.y-4:this.y=this.y+4:this.isMoving=!1}move(t,i){return!this.isMoving&&("down"===t?!!this.IsMovePossible("down",i)&&(this.isMoving=!0,this.currentAnimation="walkDown",this.destination=[this.x,this.y+64],!0):"up"===t?!!this.IsMovePossible("up",i)&&(this.isMoving=!0,this.currentAnimation="walkUp",this.destination=[this.x,this.y-64],!0):"left"===t?!!this.IsMovePossible("left",i)&&(this.isMoving=!0,this.currentAnimation="walkLeft",this.destination=[this.x-64,this.y],!0):"right"===t?!!this.IsMovePossible("right",i)&&(this.isMoving=!0,this.currentAnimation="walkRight",this.destination=[this.x+64,this.y],!0):void 0)}location(){let t,i;return t=this.x>0?this.x/64:0,[i=this.y>0?this.y/64:0,t]}IsMovePossible(t,i){return"down"===t?7!==this.location()[0]&&0!==i[this.location()[0]+1][this.location()[1]]:"up"===t?0!==this.location()[0]&&0!==i[this.location()[0]-1][this.location()[1]]:"left"===t?0!==this.location()[1]&&0!==i[this.location()[0]][this.location()[1]-1]:"right"===t?7!==this.location()[1]&&0!==i[this.location()[0]][this.location()[1]+1]:void 0}}
class TextInterface{constructor(){}renderStart(){cx.font="50px Arial Black",cx.fillStyle="#FFF",cx.fillText("PALINDROME",60,170),cx.font="20px Arial Black",cx.fillText("We go forward then back",100,220),cx.fillText("Press Space to play game",100,350),cx.font="8px Arial",cx.fillText("Created by: Daivan Trinh & Hakan Einarsson for js13kGames.com",10,500)}renderEnd(){cx.font="50px Arial Black",cx.fillStyle="#FFF",cx.fillText("The End",145,170),cx.font="20px Arial Black",cx.fillText("Thank you for playing our game",85,220),cx.font="15px Arial Black",cx.fillText("Created by Daivan Trinh & Hakan Einarsson",75,350)}renderDead(){cx.font="50px Arial Black",cx.fillStyle="#FFF",cx.fillText("You died",140,170),cx.font="20px Arial Black",cx.fillText("Press Space to try again",115,350)}}
class TileSheet{constructor(t){let e=new Image;e.src="assets/images/ground.png",this.context=t,this.image=e,this.map=[]}setMap(t){this.map=t}render(){let t=0;this.map.length>0&&this.map.map(e=>{let a=0;e.map(e=>{let s=this.calculate(e);0!==e&&this.context.drawImage(this.image,s[0],s[1],32,32,64*a,64*t,64,64),a++}),t++})}calculate(t){return 1===t?[0,0]:2===t?[32,0]:3===t?[64,0]:4===t?[0,32]:5===t?[32,32]:6===t?[64,32]:7===t?[0,64]:8===t?[32,64]:9===t?[64,64]:void 0}}
let vendors=["webkit","moz"];for(let e=0;e<vendors.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[vendors[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vendors[e]+"CancelAnimationFrame"]||window[vendors[e]+"CancelRequestAnimationFrame"];let enemies=[],textInterface=new TextInterface,game=new Game,gameState=new GameState,level=new Levels(0),canvas=document.getElementById("canvas"),cw=canvas.width,ch=canvas.height,fps=30,interval=1e3/fps,lastTime=(new Date).getTime(),currentTime=0,delta=0;cx=canvas.getContext("2d");let Background=new TileSheet(cx),player=new Player(cx),music=new Music,startImage=new Image;startImage.src="assets/images/objects.png";let goalImage=new Image;goalImage.src="assets/images/objects.png";let start=[0,0],end=[3,5],state={pressedKeys:{space:!1,left:!1,right:!1,up:!1,down:!1}},keyMap={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down",Space:"space"};function keydown(e){let t=keyMap[e.code];state.pressedKeys[t]=!0}function keyup(e){let t=keyMap[e.code];state.pressedKeys[t]=!1}function gameLoop(){window.requestAnimationFrame(gameLoop),state.pressedKeys.space&&"start_menu"===gameState.state&&(gameState.initiateLevel(player,start,end,level.getCurrentLevel()),gameState.state="level1"),state.pressedKeys.space&&!0===gameState.dead&&(gameState.initiateLevel(player,start,end,level.getCurrentLevel()),gameState.state="inGame"),currentTime=(new Date).getTime(),(delta=currentTime-lastTime)>interval&&(cx.clearRect(0,0,cw,ch),"start_menu"===gameState.state?(cx.clearRect(0,0,cw,cw),textInterface.renderStart()):"end"===gameState.state?(cx.clearRect(0,0,cw,cw),textInterface.renderEnd()):"dead"===gameState.state?(game.update(),textInterface.renderDead()):game.update(),lastTime=currentTime-delta%interval)}function loadImage(e){return new Promise(t=>{let a=new Image;a.onload=(()=>t(a)),a.src=e})}window.addEventListener("keydown",keydown,!1),window.addEventListener("keyup",keyup,!1),Promise.all([loadImage("assets/images/ground.png"),loadImage("assets/images/robot.png"),loadImage("assets/images/objects.png"),loadImage("assets/images/enemy.png")]).then(()=>{gameLoop()});