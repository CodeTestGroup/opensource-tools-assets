function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},_=t.parcelRequire14e6;null==_&&((_=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var _={id:e,exports:{}};return s[e]=_,t.call(_.exports,_,_.exports),_.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire14e6=_),_.register("dRo73",function(t,s){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>_,e=>_=e);var i,_,r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},_=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),_("dRo73").register(JSON.parse('{"bHvjr":"index.3509965e.js","83h2d":"map-sprite-sheet.2d1c38bb.png","fM25s":"smoke-and-fire-sprite-sheet.1be7abd7.png","eQUpq":"bitty-bud-sprite-sheet.db2ba1ad.png","a3U6H":"bitty-bud-hott-sprite-sheet.3ec83845.png","8hrO1":"bldg-post-sprite-sheet.88fc2ec3.png","3dsZ8":"dragon-shade-sprite-sheet.7d132f29.png"}'));class r{_img;constructor(e){this._img=new Image,this._img.src=e}get img(){return this._img}async load(){return new Promise(e=>{this._img.onload=()=>{e()}})}}class h{_spriteSheetImg;_size;_sheetX;_sheetY;constructor({spriteSheetImg:e,size:t,sheetX:s,sheetY:i}){this._spriteSheetImg=e,this._size=t,this._sheetX=s,this._sheetY=i}draw(e,t,s,i,_=0,r=0){e.drawImage(this._spriteSheetImg,this._sheetX*this._size,this._sheetY*this._size,this._size,this._size,t*i+(_??0),s*i+(r??0),i,i)}}class n{_containerEl;_sprites;_cellSizePx;_rows;_cols;_isRenderInitialized=!1;_ctx;_cameraEl;constructor(e,{cellSizePx:t,rows:s,cols:i}){this._containerEl=e,this._cellSizePx=t,this._rows=s,this._cols=i}async init(e){this._sprites=await this._loadSprites(e)}async render({background:e,camera:t,gameObjects:s}){this._initRender(),this._updateCamera(t.position,t.zoom),this._renderBackground(e.sprites,e.color),this._renderGameObjects(s)}async _initRender(){if(this._isRenderInitialized)return;this._cameraEl=this._createCameraElement();let e=this._createCanvasElement();this._ctx=e.getContext("2d"),this._cameraEl.appendChild(e),this._containerEl.innerHTML="",this._containerEl.appendChild(this._cameraEl),this._isRenderInitialized=!0}async _loadSprites(e){// I liked having an object when defining the sprites to ensure there are no duplicate names,
// but it is easier to work with an array of sprites here.
e=Object.entries(e).map(([e,t])=>({name:e,...t}));// Get a unique list of sprite sheets from our list of sprites I thought this was a nice way to
// structure the data
let t=new Set;e.forEach(e=>t.add(e.spriteSheet));// Create a map where the key is the path of the sprite sheet and the value is our SpriteSheet
// object
let s=new Map;t.forEach(e=>s.set(e,new r(e))),// Load all of the spritesheet images
await Promise.all([...s.values()].map(e=>e.load()));// Create a map where the key is the name of the sprite and the value is our Sprite object
let i=new Map;return e.forEach(({name:e,spriteSheet:t,size:_,sheetX:r,sheetY:n})=>{let a=new h({spriteSheetImg:s.get(t).img,size:_,sheetX:r,sheetY:n});i.set(e,a)}),i}_createCanvasElement(){let e=document.createElement("canvas");return e.width=this._cellSizePx*(this._cols+2),e.height=this._cellSizePx*(this._rows+2),e.id="gameboard-canvas",e}_createCameraElement(){let e=document.createElement("div");return e}_updateCamera(e,t){this._cameraEl.style.transform=`scale(${t})`}_renderBackground(e,t){// Set the background color
this._containerEl.style.backgroundColor=t;// Render the background tiles
for(let t=0;t<this._rows+2;t++)for(let s=0;s<this._cols+2;s++){let i=e.MIDDLE;0===t?i=e.TOP:t===this._rows+1?i=e.BOTTOM:0===s?i=e.LEFT:s===this._cols+1&&(i=e.RIGHT);let _=this._sprites.get(i);_.draw(this._ctx,s,t,this._cellSizePx)}}_renderGameObjects(e){[...e].sort((e,t)=>e.zIndex-t.zIndex).forEach(({spriteID:e,position:t,offsetY:s,offsetX:i,moving:_,movingProgress:r})=>{switch(_){case"UP":s=-(this._cellSizePx*r)+(s||0);break;case"DOWN":s=this._cellSizePx*r+(s||0);break;case"LEFT":i=-(this._cellSizePx*r)+(i||0);break;case"RIGHT":i=this._cellSizePx*r+(i||0)}let h=this._sprites.get(e);if(!h)throw Error(`Sprite ${e} not found`);h.draw(this._ctx,t[0]+1,t[1]+1,this._cellSizePx,i,s)})}}class a{_position;_zoom=1;_maxZoom=4;_maxCellX;_maxCellY;static create({cellsX:e,cellsY:t}){let s=Math.floor(e/2),i=Math.floor(t/2);return new a([s,i],e,t)}constructor(e,t,s){this._position=e,this._maxCellX=t,this._maxCellY=s}getRenderState(){return{position:this._position,zoom:this._zoom}}zoom(e){switch(e){case"IN":if(this._zoom===this._maxZoom)return;this._zoom=this._zoom+1;break;case"OUT":if(1===this._zoom)return;this._zoom=this._zoom-1}}move(e){let[t,s]=this._position;switch(e){case"UP":if(0===s)return;this._moveTo(t,s-1);break;case"DOWN":if(s===this._maxCellY)return;this._moveTo(t,s+1);break;case"LEFT":if(0===t)return;this._moveTo(t-1,s);break;case"RIGHT":if(t===this._maxCellX)return;this._moveTo(t+1,s)}}_moveTo(e,t){this._position=[e,t]}}class l{_game;_cellX;_cellY;_frame=1;_gameObjectID;_spriteID;constructor(e,t,s,{ignite:i=!1}={}){this._game=e,this._cellX=t,this._cellY=s,this._gameObjectID=Math.random().toString(36).substring(7),i?this._spriteID="FIRE_1":this._spriteID="SMOKE_1"}get gameObjectID(){return this._gameObjectID}isBlocking(){return!1}isGameOver(){return!0}isAt(e,t){return this._cellX===e&&this._cellY===t}getRenderState(){return[{position:[this._cellX,this._cellY],moving:null,movingProgress:null,zIndex:this._cellY*this._game.zIndexSize*3+4,offsetY:-3,spriteID:this._spriteID}]}update(){if(this._frame<=7){this._frame+=.5,this._spriteID=this._spriteID.split("_")[0]+"_"+Math.ceil(this._frame);return}this._game.removeGameObject(this.gameObjectID)}}class o{_game;_cellX;_cellY;_gameObjectID;_isMoving=!1;_movingDirection;_movingProgress=0;_spriteID;_isIgnited=!1;_dieAfterFrames;_aliveFrames=1;_tickBetweenMovesInterval=60;_ticksUntilNextMove;_currentAnimation;_currentAnimationFrame;// Only animate every 6 frames
_animationFrameProgress;_animationFrameLimit=4;_animations={IDLE:["BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_2","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_1"],IDLE_HOTT:["BITTY_BUD_IDLE_1","BITTY_BUD_IDLE_2"],IDLE_DOWN:["BITTY_BUD_DOWN_WALK_1"],IDLE_UP:["BITTY_BUD_UP_WALK_1"],IDLE_LEFT:["BITTY_BUD_LEFT_WALK_1"],IDLE_RIGHT:["BITTY_BUD_RIGHT_WALK_1"],WAVE:["BITTY_BUD_WAVE_1","BITTY_BUD_WAVE_2","BITTY_BUD_WAVE_3","BITTY_BUD_WAVE_4"],WALK_DOWN:["BITTY_BUD_DOWN_WALK_1","BITTY_BUD_DOWN_WALK_2","BITTY_BUD_DOWN_WALK_1","BITTY_BUD_DOWN_WALK_3"],WALK_UP:["BITTY_BUD_UP_WALK_1","BITTY_BUD_UP_WALK_2","BITTY_BUD_UP_WALK_1","BITTY_BUD_UP_WALK_3"],WALK_LEFT:["BITTY_BUD_LEFT_WALK_1","BITTY_BUD_LEFT_WALK_2","BITTY_BUD_LEFT_WALK_1","BITTY_BUD_LEFT_WALK_3"],WALK_RIGHT:["BITTY_BUD_RIGHT_WALK_1","BITTY_BUD_RIGHT_WALK_2","BITTY_BUD_RIGHT_WALK_1","BITTY_BUD_RIGHT_WALK_3"]};constructor(e,t,s){this._game=e,this._cellX=t,this._cellY=s,this._gameObjectID=Math.random().toString(36).substring(7),this._ticksUntilNextMove=this._tickBetweenMovesInterval,this._setAnimation("IDLE")}get gameObjectID(){return this._gameObjectID}isBlocking(){return!0}isGameOver(){return!0}isAt(e,t){return this._cellX===e&&this._cellY===t}ignite({dieAfterFrames:e=90}={}){this._isIgnited=!0,this._ticksUntilNextMove=0,this._dieAfterFrames=e,this._aliveFrames=1}isIgnited(){return this._isIgnited}extinguish(){this._isIgnited=!1,this._ticksUntilNextMove=0}getRenderState(){let e=[{position:[this._cellX,this._cellY],moving:this._isMoving?this._movingDirection:null,movingProgress:this._isMoving?this._movingProgress:null,zIndex:this._cellY*this._game.zIndexSize+1,offsetY:-3,spriteID:this._spriteID}];return this._updateAnimationProgress(),e}update(){this._isIgnited&&++this._aliveFrames>this._dieAfterFrames&&!this._isMoving&&this._game.removeGameObject(this.gameObjectID,[this._cellX,this._cellY]),this._isMoving?(this._movingProgress+=this._isIgnited?.1:.05,this._movingProgress>=1&&(// Done moving
this._movingProgress=0,this._isMoving=!1,"LEFT"===this._movingDirection?this._cellX-=1:"RIGHT"===this._movingDirection?this._cellX+=1:"UP"===this._movingDirection?this._cellY-=1:"DOWN"===this._movingDirection&&(this._cellY+=1),this._setAnimation(`IDLE_${this._movingDirection}`))):this._tickAIMove(),this._spriteID=this._animations[this._currentAnimation][this._currentAnimationFrame],this._isIgnited&&(this._spriteID=this._spriteID.replace("BITTY_BUD","BITTY_BUD_HOTT"))}_tickAIMove(){if(this._ticksUntilNextMove>0){this._ticksUntilNextMove-=1;return}// Randomly decide to move or wave or be idle and do nothing
let e=["MOVE","MOVE","MOVE","MOVE","MOVE","IDLE","IDLE","IDLE","IDLE","WAVE"],t=e[Math.floor(Math.random()*e.length)];"MOVE"===t?this._handleAIMove():"WAVE"===t?this._setAnimation("WAVE"):"IDLE"===t&&this._setAnimation("IDLE"),this._ticksUntilNextMove=this._isIgnited?this._tickBetweenMovesInterval/3:this._tickBetweenMovesInterval}_setAnimation(e){this._currentAnimation!==e&&(this._isIgnited&&e.startsWith("IDLE")&&(e="IDLE_HOTT"),this._currentAnimation=e,this._currentAnimationFrame=0,this._animationFrameProgress=this._animationFrameLimit)}_updateAnimationProgress(){if(this._animationFrameProgress>0){this._animationFrameProgress-=this._isIgnited?1.5:1;return}this._animationFrameProgress=this._animationFrameLimit,this._currentAnimationFrame+=1,this._currentAnimationFrame>=this._animations[this._currentAnimation].length&&(this._currentAnimationFrame=0)}_handleAIMove(){// get a random direction
let e=["LEFT","RIGHT","UP","DOWN"],t=e[Math.floor(Math.random()*e.length)],s=this._cellX,i=this._cellY;"LEFT"===t?s-=1:"RIGHT"===t?s+=1:"UP"===t?i-=1:"DOWN"===t&&(i+=1),this._game.isCellBlocked(s,i)||(// Start moving, twice as fast if you on fire 🔥
this._isMoving=!0,this._movingDirection=t,this._movingProgress=0,this._setAnimation(`WALK_${t}`))}}class c{_game;_cellX;_cellY;_pieces;_frame=1;_gameObjectID;_destroyAfterFrames=180;constructor(e,t,s){this._game=e,this._cellX=t,this._cellY=s,this._gameObjectID=Math.random().toString(36).substring(7),this._pieces=[{pieceID:"TOP_LEFT",position:[this._cellX,this._cellY],isIgnited:!1,hp:500},{pieceID:"TOP_RIGHT",position:[this._cellX+1,this._cellY],isIgnited:!1,hp:500},{pieceID:"BOTTOM_LEFT",position:[this._cellX,this._cellY+1],isIgnited:!1,hp:500},{pieceID:"BOTTOM_RIGHT",position:[this._cellX+1,this._cellY+1],isIgnited:!1,hp:500}]}get gameObjectID(){return this._gameObjectID}isBlocking(){return!0}isGameOver(){return this._pieces.every(e=>0===e.hp)}isBuildingIgnited(e,t){let s=this._findPieceAt(e,t);return s.isIgnited}isAlive(e,t){let s=this._findPieceAt(e,t);return s.hp>0}extinguish(e,t){let s=this._findPieceAt(e,t);s.isIgnited=!1,this._updatePiece(s)}ignite(e,t){let s=this._findPieceAt(e,t);s.isIgnited=!0,this._updatePiece(s)}isAt(e,t){return!!this._findPieceAt(e,t)}getRenderState(){let e=[];return this._pieces.forEach(({pieceID:t,isIgnited:s,position:i,hp:_})=>{e.push({position:i,moving:null,movingProgress:null,zIndex:i[1]*this._game.zIndexSize,offsetY:0,spriteID:`BLDG_POST_${t}`}),s&&_>0?e.push({position:i,moving:null,movingProgress:null,zIndex:i[1]*this._game.zIndexSize,offsetY:0,spriteID:"FIRE_"+(this._frame<8?"3":"4")}):s&&0===_&&e.push({position:i,moving:null,movingProgress:null,zIndex:i[1]*this._game.zIndexSize,offsetY:0,spriteID:"FIRE_1"})}),e}update(){// TODO: This is a hack to make the fire animation work.
this._frame++,this._frame%16==0&&(this._frame=0),this._pieces.forEach(e=>{e.isIgnited&&e.hp>0&&(e.hp-=1,this._updatePiece(e))})}_findPieceAt(e,t){return this._pieces.find(({position:[s,i]})=>s===e&&i===t)}_updatePiece(e){this._pieces.splice(this._pieces.findIndex(({pieceID:t})=>t===e.pieceID),1,e)}}var m={};m=new URL(_("dRo73").resolve("83h2d"),import.meta.url).toString();const d=new URL(m).href;var T={};T=new URL(_("dRo73").resolve("fM25s"),import.meta.url).toString();const g=new URL(T).href;var I={};I=new URL(_("dRo73").resolve("eQUpq"),import.meta.url).toString();const u=new URL(I).href;var p={};p=new URL(_("dRo73").resolve("a3U6H"),import.meta.url).toString();const Y=new URL(p).href;var D={};D=new URL(_("dRo73").resolve("8hrO1"),import.meta.url).toString();const B=new URL(D).href;var O={};O=new URL(_("dRo73").resolve("3dsZ8"),import.meta.url).toString();const E=new URL(O).href,S={GRASS_1:{spriteSheet:d,size:8,sheetX:0,sheetY:0},WATER_1:{spriteSheet:d,size:8,sheetX:0,sheetY:1},WATER_2:{spriteSheet:d,size:8,sheetX:1,sheetY:1},ROCK_1:{spriteSheet:d,size:8,sheetX:0,sheetY:2},SMOKE_1:{spriteSheet:g,size:16,sheetX:0,sheetY:0},SMOKE_2:{spriteSheet:g,size:16,sheetX:1,sheetY:0},SMOKE_3:{spriteSheet:g,size:16,sheetX:2,sheetY:0},SMOKE_4:{spriteSheet:g,size:16,sheetX:3,sheetY:0},SMOKE_5:{spriteSheet:g,size:16,sheetX:0,sheetY:1},SMOKE_6:{spriteSheet:g,size:16,sheetX:1,sheetY:1},SMOKE_7:{spriteSheet:g,size:16,sheetX:2,sheetY:1},SMOKE_8:{spriteSheet:g,size:16,sheetX:3,sheetY:1},FIRE_1:{spriteSheet:g,size:16,sheetX:0,sheetY:2},FIRE_2:{spriteSheet:g,size:16,sheetX:1,sheetY:2},FIRE_3:{spriteSheet:g,size:16,sheetX:2,sheetY:2},FIRE_4:{spriteSheet:g,size:16,sheetX:3,sheetY:2},FIRE_5:{spriteSheet:g,size:16,sheetX:0,sheetY:3},FIRE_6:{spriteSheet:g,size:16,sheetX:1,sheetY:3},FIRE_7:{spriteSheet:g,size:16,sheetX:2,sheetY:3},FIRE_8:{spriteSheet:g,size:16,sheetX:3,sheetY:3},BITTY_BUD_IDLE_1:{spriteSheet:u,size:8,sheetX:0,sheetY:5},BITTY_BUD_IDLE_2:{spriteSheet:u,size:8,sheetX:1,sheetY:5},BITTY_BUD_WAVE_1:{spriteSheet:u,size:8,sheetX:0,sheetY:4},BITTY_BUD_WAVE_2:{spriteSheet:u,size:8,sheetX:1,sheetY:4},BITTY_BUD_WAVE_3:{spriteSheet:u,size:8,sheetX:2,sheetY:4},BITTY_BUD_WAVE_4:{spriteSheet:u,size:8,sheetX:3,sheetY:4},BITTY_BUD_DOWN_WALK_1:{spriteSheet:u,size:8,sheetX:0,sheetY:0},BITTY_BUD_DOWN_WALK_2:{spriteSheet:u,size:8,sheetX:1,sheetY:0},BITTY_BUD_DOWN_WALK_3:{spriteSheet:u,size:8,sheetX:3,sheetY:0},BITTY_BUD_UP_WALK_1:{spriteSheet:u,size:8,sheetX:0,sheetY:1},BITTY_BUD_UP_WALK_2:{spriteSheet:u,size:8,sheetX:1,sheetY:1},BITTY_BUD_UP_WALK_3:{spriteSheet:u,size:8,sheetX:3,sheetY:1},BITTY_BUD_LEFT_WALK_1:{spriteSheet:u,size:8,sheetX:0,sheetY:2},BITTY_BUD_LEFT_WALK_2:{spriteSheet:u,size:8,sheetX:1,sheetY:2},BITTY_BUD_LEFT_WALK_3:{spriteSheet:u,size:8,sheetX:3,sheetY:2},BITTY_BUD_RIGHT_WALK_1:{spriteSheet:u,size:8,sheetX:0,sheetY:3},BITTY_BUD_RIGHT_WALK_2:{spriteSheet:u,size:8,sheetX:1,sheetY:3},BITTY_BUD_RIGHT_WALK_3:{spriteSheet:u,size:8,sheetX:3,sheetY:3},BITTY_BUD_HOTT_IDLE_1:{spriteSheet:Y,size:8,sheetX:0,sheetY:5},BITTY_BUD_HOTT_IDLE_2:{spriteSheet:Y,size:8,sheetX:1,sheetY:5},BITTY_BUD_HOTT_WAVE_1:{spriteSheet:Y,size:8,sheetX:0,sheetY:4},BITTY_BUD_HOTT_WAVE_2:{spriteSheet:Y,size:8,sheetX:1,sheetY:4},BITTY_BUD_HOTT_WAVE_3:{spriteSheet:Y,size:8,sheetX:2,sheetY:4},BITTY_BUD_HOTT_WAVE_4:{spriteSheet:Y,size:8,sheetX:3,sheetY:4},BITTY_BUD_HOTT_DOWN_WALK_1:{spriteSheet:Y,size:8,sheetX:0,sheetY:0},BITTY_BUD_HOTT_DOWN_WALK_2:{spriteSheet:Y,size:8,sheetX:1,sheetY:0},BITTY_BUD_HOTT_DOWN_WALK_3:{spriteSheet:Y,size:8,sheetX:3,sheetY:0},BITTY_BUD_HOTT_UP_WALK_1:{spriteSheet:Y,size:8,sheetX:0,sheetY:1},BITTY_BUD_HOTT_UP_WALK_2:{spriteSheet:Y,size:8,sheetX:1,sheetY:1},BITTY_BUD_HOTT_UP_WALK_3:{spriteSheet:Y,size:8,sheetX:3,sheetY:1},BITTY_BUD_HOTT_LEFT_WALK_1:{spriteSheet:Y,size:8,sheetX:0,sheetY:2},BITTY_BUD_HOTT_LEFT_WALK_2:{spriteSheet:Y,size:8,sheetX:1,sheetY:2},BITTY_BUD_HOTT_LEFT_WALK_3:{spriteSheet:Y,size:8,sheetX:3,sheetY:2},BITTY_BUD_HOTT_RIGHT_WALK_1:{spriteSheet:Y,size:8,sheetX:0,sheetY:3},BITTY_BUD_HOTT_RIGHT_WALK_2:{spriteSheet:Y,size:8,sheetX:1,sheetY:3},BITTY_BUD_HOTT_RIGHT_WALK_3:{spriteSheet:Y,size:8,sheetX:3,sheetY:3},BLDG_POST_TOP_LEFT:{spriteSheet:B,size:8,sheetX:0,sheetY:0},BLDG_POST_TOP_RIGHT:{spriteSheet:B,size:8,sheetX:1,sheetY:0},BLDG_POST_BOTTOM_LEFT:{spriteSheet:B,size:8,sheetX:2,sheetY:0},BLDG_POST_BOTTOM_RIGHT:{spriteSheet:B,size:8,sheetX:3,sheetY:0},DRAGON_TOP_LEFT:{spriteSheet:E,size:16,sheetX:0,sheetY:0},DRAGON_TOP_RIGHT:{spriteSheet:E,size:16,sheetX:1,sheetY:0},DRAGON_BOTTOM_LEFT:{spriteSheet:E,size:16,sheetX:0,sheetY:1},DRAGON_BOTTOM_RIGHT:{spriteSheet:E,size:16,sheetX:1,sheetY:1}};class L{_game;_cellX=-1;_cellY=-1;_gameObjectID;_lastTime=0;_maxX;_maxY;_pos;_delayTime=0;_delayed=!1;constructor(e){this._game=e,this._maxX=e.cellsX,this._maxY=e.cellsY,this._gameObjectID=Math.random().toString(36).substring(7),this._startPos()}_startPos(){let e=["N","S","W","E"];switch(this._pos=e[Math.floor(Math.random()*e.length)],this._pos){case"N":this._cellY=-1,this._cellX=Math.floor(Math.random()*this._maxX);break;case"S":this._cellY=this._maxY,this._cellX=Math.floor(Math.random()*this._maxX);break;case"W":this._cellX=-1,this._cellY=Math.floor(Math.random()*this._maxY);break;case"E":this._cellX=this._maxX,this._cellY=Math.floor(Math.random()*this._maxY)}}update(e){if(e-this._delayTime<this._game.dragonDelay){this._delayed=!0;return}if(e-this._lastTime>=this._game.dragonInterval){switch(this._delayed=!1,this._lastTime=e,this._pos){case"N":this._cellY++;break;case"S":this._cellY--;break;case"W":this._cellX++;break;case"E":this._cellX--}if(this._cellX<0||this._cellX>this._maxX-1||this._cellY<0||this._cellY>this._maxY-1){this._startPos(),this._delayTime=e,this._delayed=!0;return}let t=this._game.getGameObjectAt(this._cellX,this._cellY);if(t instanceof c){this._game.addGameObject("TAP",this._cellX,this._cellY,{ignite:!0});let e=t.isAlive(this._cellX,this._cellY);if(e&&!t.isBuildingIgnited(this._cellX,this._cellY)&&t.ignite(this._cellX,this._cellY),e){let e=this._game.getClosestEmptyCell(this._cellX,this._cellY);if(e){let t=this._game.addGameObject("BITTY_BUD",e[0],e[1],{ignite:Math.random()>.5});t.update(),this._game.addGameObject("TAP",e[0],e[1])}}}else t instanceof o?t.isIgnited()||t.ignite():this._game.addGameObject("TAP",this._cellX,this._cellY,{ignite:!0})}}isAt(){return!1}get gameObjectID(){return this._gameObjectID}isBlocking(){return!1}isGameOver(){return!0}getRenderState(){return this._delayed?[]:[{position:[this._cellX,this._cellY],moving:null,movingProgress:null,zIndex:1e6,spriteID:"DRAGON_TOP_LEFT"},{position:[this._cellX+1,this._cellY],moving:null,movingProgress:null,zIndex:1e6,spriteID:"DRAGON_TOP_RIGHT"},{position:[this._cellX,this._cellY+1],moving:null,movingProgress:null,zIndex:1e6,spriteID:"DRAGON_BOTTOM_LEFT"},{position:[this._cellX+1,this._cellY+1],moving:null,movingProgress:null,zIndex:1e6,spriteID:"DRAGON_BOTTOM_RIGHT"}]}}class A{_gameEl;_scoreEl;_roundEl;_fps=60;_camera;_cellSize=8;_cellsX=9;_cellsY=9;_zIndexSize=10;_gameObjects=[];_score=0;_round=1;_isAddingBuilding=!1;_maxNumBuildings=4;_dragonInterval=200;_dragonDelay=1e3;_onGameOver;constructor(e,t,s,i){this._gameEl=e,this._scoreEl=t,this._roundEl=s,this._onGameOver=i}get cellsX(){return this._cellsX}get cellsY(){return this._cellsY}get zIndexSize(){return this._zIndexSize}get dragonInterval(){return this._dragonInterval}get dragonDelay(){return this._dragonDelay}async start(){this._camera=a.create(this),// Zoom in twice to make pixels fit perfectly - hax0r
this._camera.zoom("IN"),this._camera.zoom("IN");let e=new n(this._gameEl,{cellSizePx:this._cellSize,cols:this._cellsX,rows:this._cellsY});await e.init(S),this.setupBuildings(),this._gameObjects=[...this._gameObjects,new L(this)],this._scoreEl.addEventListener("animationend",()=>{this._scoreEl.classList.remove("animate__headShake")}),this._scoreEl.innerText=this._score,this._roundEl.addEventListener("animationend",()=>{this._roundEl.classList.remove("animate__headShake")}),this._roundEl.innerText=this._round;let t=0,s=999,i=async _=>{let r=_-t;if(s<1e3/this._fps?s+=r:(// Update game objects
this._gameObjects.forEach(e=>e.update(_)),// Re-render the game every x frames per second
await e.render(this._getRenderState()),s=0,t=_),this._isGameOver()){this._onGameOver({score:this._score,round:this._round});return}requestAnimationFrame(i)};// Start our game loop
await i(0)}// Randomly add buildings up to the set maximum
setupBuildings(){let e=0;for(;e<this._maxNumBuildings;){let t=Math.floor(Math.random()*this._cellsX),s=Math.floor(Math.random()*this._cellsY);!1!==this.addGameObject("BUILDING",t,s)&&e++}}zoomCamera(e){this._camera.zoom(e)}moveCamera(e){this._camera.move(e)}handleClick(e,t){let s=this._getCellAt(e,t);if(!s)return;let[i,_]=s;if(this._isAddingBuilding){this.addGameObject("BUILDING",i,_);return}// add a bitty bud if they click a random number of times
let r=this.getGameObjectAt(i,_);r instanceof c?(// if it's on fire, put that baby out
this.addGameObject("TAP",i,_),r.isAlive(i,_)&&r.isBuildingIgnited(i,_)&&(r.extinguish(i,_),this._increaseScore(20))):r instanceof o?(this.addGameObject("TAP",i,_,{ignite:!1}),r.isIgnited()&&Math.random()>.85&&(r.extinguish(),this._increaseScore(25))):this.addGameObject("TAP",i,_)}setIsAddingBuilding(e){this._isAddingBuilding=e}getGameObjectAt(e,t){return this._gameObjects.find(s=>s.isAt(e,t))}_increaseScore(e){this._score+=e,this._scoreEl.innerText=this._score,this._scoreEl.classList.add("animate__headShake"),this._score/100>=this._round&&this._advanceRound()}_advanceRound(){this._round++,this._roundEl.innerText=this._round,this._roundEl.classList.add("animate__headShake"),// Make the dragoom go faster and faster
this._dragonInterval=Math.max(10,200*Math.pow(.9,this._round)+10),this._dragonDelay=Math.max(20,990*Math.pow(.9,this._round)+10)}addGameObject(e,t,s,i={}){let _;if("TAP"===e)_=new l(this,t,s,i);else if("BITTY_BUD"===e)_=new o(this,t,s,i),i.ignite&&_.ignite();else if("BUILDING"===e){let e=[[t,s],[t+1,s],[t,s+1],[t+1,s+1]];if(e.some(([e,t])=>this.isCellBlocked(e,t)))return!1;_=new c(this,t,s,i)}return this._gameObjects=[...this._gameObjects,_],_}removeGameObject(e,t=null){t&&this.addGameObject("TAP",t[0],t[1]),this._gameObjects=this._gameObjects.filter(t=>t.gameObjectID!==e)}findGameObject(e){return this._gameObjects.find(t=>t.gameObjectID===e)}isCellBlocked(e,t){if(!this.isValidCell(e,t))return!0;let s=this.getGameObjectAt(e,t);if(s?.isBlocking(e,t))return!0}getClosestEmptyCell(e,t){let s=[[e,t],[e+1,t],[e-1,t],[e,t+1],[e,t-1]].find(([e,t])=>!this.isCellBlocked(e,t));return s||null}isValidCell(e,t){return!(e<0)&&!(e>=this._cellsX)&&!(t<0)&&!(t>=this._cellsY)}_getCellAt(e,t){let s=Math.floor(e/this._cellSize),i=Math.floor(t/this._cellSize);return s<=0||s>this._cellsX||i<=0||i>this._cellsY?null:[s-1,i-1]}_getRenderState(){return{background:{color:"_191c19",sprites:{TOP:"ROCK_1",RIGHT:"ROCK_1",LEFT:"ROCK_1",BOTTOM:"ROCK_1",MIDDLE:"GRASS_1"}},camera:this._camera.getRenderState(),gameObjects:this._gameObjects.reduce((e,t)=>{let s=[...e,...t.getRenderState()];return s},[])}}_isGameOver(){return this._gameObjects.every(e=>e.isGameOver())}}(async()=>{let e=document.querySelector("#gameboard"),t=document.querySelector("#score-tracker"),s=document.querySelector("#round-tracker"),i=document.querySelector("#title-screen"),_=document.querySelector(".scoreboard"),r=document.querySelector("#game-over-screen"),h=document.querySelector("#final-score"),n=document.querySelector("#final-round"),a=({score:t,round:s})=>{r.classList.remove("hidden"),e.classList.add("hidden"),_.classList.add("hidden"),h.textContent=t,n.textContent=s},l=new A(e,t,s,a),o=document.querySelector("#start-button");o.addEventListener("click",async()=>{e.classList.remove("hidden"),_.classList.remove("hidden"),i.classList.add("hidden"),await l.start()});let c=document.querySelector("#restart");c.addEventListener("click",async()=>{r.classList.add("hidden"),i.classList.remove("hidden"),l=new A(e,t,s,a)}),e.addEventListener("click",e=>{if(!e.target.matches("#gameboard-canvas"))return;let{offsetX:t,offsetY:s}=e;l.handleClick(t,s)})})();