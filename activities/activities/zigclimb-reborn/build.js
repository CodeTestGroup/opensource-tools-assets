class CSSGrid{constructor(e,t,r){this.el=document.getElementById(e),this.width=t,this.height=r,this.build()}build(){this.el.style.gridAutoColumns="",this.el.innerHTML="<span/></span>".repeat(this.size),this.el.lastChild.style.gridColumn=`${this.width} / ${this.width+1}`,this.cells=this.el.childNodes}get size(){return this.width*this.height}offset([e,t]){return t*this.width+e}getCell(e){return this.cells[this.offset(e)]}renderCell(e,t){t(getCell(e))}set(e,t){getCell(e).innerHTML=t}}class Render{constructor(){}visible([e,t]){return"*"!==game.fog.get(e,t)}clear(){game.cave.traverse((e,t)=>{let r=this.grid.getCell(e);r.innerHTML="",r.style.backgroundColor="",r.style.fontSize=""})}dash(){let e=0===game.health?";(":"",t=document.querySelector("#status"),r=(game.health,game.level,game.weapon,game.armor,game.gold,game.wonMessage,`HP=${game.health} `+`&middot; Level ${game.level} `+`&middot; W/A= ${game.weapon}/${game.armor} `+`&middot; ${game.gold} gems ${e} ${game.wonMessage}`);t.innerHTML=r}}const renderTile=(e,t)=>{e.style.color="",e.style.backgroundColor="",e.className="",e.innerHTML=t,"~"===t&&(e.style.backgroundColor="#012",e.style.color="#069"),"."===t&&(e.style.color="#333",e.className="empty"),t>="a"&&t<="z"&&(e.style.color="#fc6",e.style.backgroundColor="#1a1a00"),"*"===t&&(e.style.color="rgb(58,150,221)"),"@"===t&&(e.style.color="white"),"!"===t&&(e.style.color="#3c3"),"<"===t&&(e.style.backgroundColor=""),"("===t&&(e.style.color="#c00"),"%"===t&&(e.style.color="saddlebrown"),"#"===t&&(e.style.fontSize="0.65em",e.style.color="#777",e.style.backgroundColor="#222")};class ClassicRender extends Render{constructor(){super(),this.grid=new CSSGrid("grid",game.width,game.height),window.grid=this.grid,this.boot()}boot(){var e=window.innerWidth;window.innerHeight;let t=e/game.width;document.querySelector("#status").style.fontSize=`${.6*t}px`,this.grid.el.style.fontSize=`${.8*t}px`,this.grid.el.style.setProperty("grid-auto-rows",`${t}px`),this.grid.el.style.setProperty("grid-auto-columns",`calc(100%/${game.width})`)}draw(){this.clear(),this.dash(),game.cave.traverse((e,t)=>{this.visible(e)&&renderTile(this.grid.getCell(e),t)})}}const MONSTER=52,TILES={"@":6,"#":13,".":0,"%":21,"(":20,"!":35,"<":18,"*":19,FOG:9,a:53,b:59,c:56,d:52,e:70,f:68,g:58,h:5,i:66,j:69,k:61,l:71,m:77,n:55,o:67,p:74};class SpriteSheet{constructor(e,t){this.url=e,this.opts=t}render(e,t){let r=TILES[t];if(void 0===r)return;if(e.title=t,e.innerHTML="",e.style.width=`${this.renderSize}px`,e.style.height=`${this.renderSize}px`,"FOG"===t)return e.title="",void(e.style.backgroundImage="");e.style.backgroundImage=this.url,e.style.imageRendering="pixelated",e.style.backgroundSize=`auto calc(${this.opts.sheet[1]}px*${this.renderSize}/16)`;let s=r%this.opts.width,i=Math.floor(r/this.opts.width),o=s*this.opts.tile[0],l=i*this.opts.tile[1]+this.opts.yOffset;e.style.backgroundPosition=`calc(-${o}px*${this.renderSize}/16) calc(-${l}px*${this.renderSize}/16)`}}let SS=new SpriteSheet("url(loveable_rogue.png)",{sheet:[207,240],tile:[16,16],width:13,yOffset:144});const renderTile$1=(e,t)=>{e.innerHTML=t,e.style.color="",e.className="","~"==t&&(e.style.backgroundColor="#012",e.style.color="#069"),"."==t&&(e.style.color="#333"),t>="a"&&t<="z"&&(e.style.color="#fc6"),"@"===t&&(e.style.color="white"),"!"===t&&(e.style.color="#3c3"),"<"===t&&(e.style.backgroundColor=""),"("===t&&(e.style.color="#c00"),"%"===t&&(e.style.color="saddlebrown"),SS.render(e,t)};class TileRender extends Render{constructor(){super(),this.grid=new CSSGrid("grid",game.width,game.height),window.grid=this.grid,SS.renderSize=32,grid.el.style.gridAutoColumns=`${SS.renderSize}px`}draw(){this.clear(),this.dash(),game.cave.traverse((e,t)=>{this.visible(e)?renderTile$1(this.grid.getCell(e),t):SS.render(this.grid.getCell(e),"FOG")})}}const cardinals=[[0,1],[0,-1],[-1,0],[1,0]];class Grid{constructor(e,t){this.width=e,this.height=t,this.data=new Array(t+1).fill(null).map(()=>new Array(e+1).fill(0))}fill(e,t=0,r=0,s=this.width,i=this.height){for(let o=t;o<t+s;o++)for(let t=r;t<r+i;t++)this.data[t][o]=e;return this}carve(e,t,r,s){this.fill(0,e,t,r,s)}set(e,t,r){this.data[t][e]=r}getSurrounding(e,t){let r=[];return this.traverse((e,t)=>{r.push([e,t])},e-1,t-1,3,3),r}getCardinals(e,t){return cardinals.map(([r,s])=>[[e+r,t+s],this.get(e+r,t+s)])}get(e,t){if(!(e<0||t<0||e>=this.width||t>=this.height))return this.data[t][e]}flipV(){this.data=this.data.reverse()}flipH(){this.data=this.data.map(e=>e.reverse())}traverse(e,t=0,r=0,s=this.width,i=this.height){for(let o=t;o<t+s;o++)for(let t=r;t<r+i;t++)e([o,t],this.get(o,t))}find(e,t=0,r=0,s=this.width,i=this.height){for(let o=t;o<t+s;o++)for(let t=r;t<r+i;t++)if(this.data[t][o]===e)return[o,t]}count(e,t=0,r=0,s=this.width,i=this.height){let o=0;for(let l=t;l<t+s;l++)for(let t=r;t<r+i;t++)this.data[t][l]===e&&o++;return o}}const rand=e=>Math.floor(Math.random()*e);function oneOf(e){return e[rand(e.length)]}function addVector([e,t],[r,s]){return[e+r,t+s]}const percentChance=e=>e>=100||Math.random()<e/100;let zzfx,zzfxV,zzfxX,zzfxR;zzfxV=.3,zzfx=(e=1,t=.05,r=220,s=0,i=0,o=.1,l=0,a=1,n=0,d=0,h=0,c=0,g=0,f=0,u=0,w=0,m=0,y=1,z=0,p=0)=>{let v,S,x=2*Math.PI,H=n*=500*x/zzfxR**2,T=(0<u?1:-1)*x/4,M=r*=(1+2*t*Math.random()-t)*x/zzfxR,C=[],b=0,E=0,R=0,I=1,A=0,k=0,L=0;for(d*=500*x/zzfxR**3,u*=x/zzfxR,h*=x/zzfxR,c*=zzfxR,g=zzfxR*g|0,S=(s=99+zzfxR*s)+(z*=zzfxR)+(i*=zzfxR)+(o*=zzfxR)+(m*=zzfxR)|0;R<S;C[R++]=L)++k%(100*w|0)||(L=l?1<l?2<l?3<l?Math.sin((b%x)**3):Math.max(Math.min(Math.tan(b),1),-1):1-(2*b/x%2+2)%2:1-4*Math.abs(Math.round(b/x)-b/x):Math.sin(b),L=(g?1-p+p*Math.sin(2*Math.PI*R/g):1)*(0<L?1:-1)*Math.abs(L)**a*e*zzfxV*(R<s?R/s:R<s+z?1-(R-s)/z*(1-y):R<s+z+i?y:R<S-m?(S-R-m)/o*y:0),L=m?L/2+(m>R?0:(R<S-m?1:(S-R)/m)*C[R-m|0]/2):L),b+=(v=(r+=n+=d)*Math.sin(E*u-T))-v*f*(1-1e9*(Math.sin(R)+1)%2),E+=v-v*f*(1-1e9*(Math.sin(R)**2+1)%2),I&&++I>c&&(r+=h,M+=h,I=0),!g||++A%g||(r=M,n=H,I=I||1);return(e=zzfxX.createBuffer(1,S,zzfxR)).getChannelData(0).set(C),(r=zzfxX.createBufferSource()).buffer=e,r.connect(zzfxX.destination),r.start(),r},zzfxX=new(window.AudioContext||webkitAudioContext),zzfxR=44100;const MAX_HEALTH=10,powerup=()=>{zzfx(...[,0,300,.15,.15,.5,,.5,,,50,,.3,,,,.1,.5,.1])},hurt=()=>{zzfx(...[,,26,.06,.12,0,3,1.3,,,,,,,3,,.14,,.18])};BATTLE_SOUNDS=[[,,158,,.05,.13,4,0,,,,,,.5,,.5,.15,.78,.02,.07],[,,126,,.01,.25,,2.49,,,,,,1.3,,.2,.03,.72,.05,.17],[,,480,,,.15,4,.85,,4.1,,,,,1,.4,.17,.74,.03],[,,363,,,.11,,2.42,.2,.3,,,,1.9,.3,.2,.07,.68,.06],[,,266,,.01,.11,4,2.6,,,,,,.1,,.5,,.95,.06,.04],[,,285,,.06,.27,,2.85,,,,,,1.8,-.8,.2,.04,.73,.1],[,,221,,,.32,1,2.93,,,,,,.1,,.3,.14,.82,.01,.29]];const battle=()=>{let e=oneOf(BATTLE_SOUNDS);zzfx(...e)};class Entity{constructor(){}get isSolid(){return!1}get isAlive(){return!1}interact(){}}class Monster{constructor(e){this.level=e.charCodeAt(0)-"a".charCodeAt(0)}get isAlive(){return!0}get isSolid(){return!0}interact(){battle()}attack(e){this.level+rand(5)>=e.level&&(e.dead=!0)}attackPlayer(){battle(),this.level+rand(5)-game.armor>=3&&(game.health-=1,hurt())}}class Wall extends Entity{get isSolid(){return!0}interact(){zzfx(...[,,308,.03,.01,.05,,2.15,,-29,,.01,,-.1,.1,,,,.03])}}class Stairs extends Entity{interact(){zzfx(...[.7,0,300,.06,.5,.25,2,5,,,-50,-.1,.25,,,,,,.15]),game.advanceLevel()}}class Armor extends Entity{constructor(){super(),this.defense=game.level+rand(7)}interact(){powerup(),game.armor=this.defense}}class Weapon extends Entity{constructor(){super(),this.attack=game.level+rand(5)}interact(){powerup(),game.weapon=this.attack}}class Potion extends Entity{interact(){game.health=MAX_HEALTH,zzfx(...[,,1062,,.01,.29,,,,,704,.01,.1,.1,,,.1,.81,.03])}}class Floor extends Entity{interact(){}}class Gold extends Entity{constructor(){super(),this.value=game.level+rand(3)||1}interact(){zzfx(...[,,1062,,.01,.29,,,,,704,.01,.1,.1,,,.1,.81,.03]),game.gold+=this.value}}const TILE_to_CLASS={".":Floor,"#":Wall,"*":Gold,"!":Potion,"%":Armor,"(":Weapon,"<":Stairs};function animate(e){return TILE_to_CLASS[e]?new TILE_to_CLASS[e]:e>="a"&&e<="z"?new Monster(e):void 0}const WIDTH=40,HEIGHT=20,dig=(e,t,r)=>{if(!(t<1||r<1||t>=WIDTH-1||r>=HEIGHT-1)&&"."!==e.get(t,r)){e.set(t,r,".");for(let s=0;s<3;s++)for(let i=0;i<3;i++)percentChance(20)&&dig(e,t+s-1,r+i-1)}},newCave=e=>{let t="@<!%(****".split(""),r=new Grid(WIDTH,HEIGHT),s=0;for(;s<.25;){r.fill("#"),dig(r,20,10),s=r.count(".")/(WIDTH*HEIGHT)}t.forEach(e=>{for(;;){let t=rand(WIDTH),s=rand(HEIGHT);if(console.log(t,s),"."===r.get(t,s)){r.set(t,s,e);break}}});let i=2*e+rand(9);for(;i;)for(;;){let t=String.fromCharCode("a".charCodeAt(0)+rand(7)+e),s=rand(WIDTH),o=rand(HEIGHT);if(console.log(s,o),"."===r.get(s,o)){r.set(s,o,t),i--;break}}let o=[];return r.traverse(([e,t])=>{r.getSurrounding(e,t).map(([e,t])=>t).every(e=>"#"===e||void 0===e)&&o.push([e,t])}),o.forEach(e=>r.set(...e,"")),r};function newWinMap(){let e=new Grid(WIDTH,HEIGHT);return e.fill("."),e.set(0,0,"@"),e}function isMonster(e){return e>="a"&&e<="z"}class Game{constructor(){this.level=0,this.health=10,this.armor=1,this.weapon=1,this.gold=0,this.width=WIDTH,this.height=HEIGHT,this.newLevel(),this.filledWithFog(),this.sight()}filledWithFog(){this.fog=new Grid(WIDTH,HEIGHT),this.fog.fill("*")}newLevel(){10!==this.level?this.cave=newCave(this.level):this.cave=newWinMap()}tick(){this.sight(),this.moveMonsters()}advanceLevel(){this.level++,this.newLevel(),this.filledWithFog()}sight(){let[e,t]=this.cave.find("@");this.cave.traverse(([r,s],i)=>{(e-r)*(e-r)+(t-s)*(t-s)<=25&&this.fog.set(r,s,null)})}moveMonsters(){let e=this.cave.find("@"),t=[];this.cave.traverse((e,r)=>{isMonster(r)&&t.push({type:r,pos:e})}),t.forEach(t=>{let r=new Monster(t.type),[s,i]=e,[o,l]=t.pos,a=[[s-o],[i-l]].map(e=>e<0?-1:e>0?1:0),n=addVector(t.pos,a),d=this.cave.get(...n);if(console.log("want to move to",n,d),"."===d)this.cave.set(...t.pos,"."),this.cave.set(...n,t.type);else if("@"===d)r.attackPlayer();else if(isMonster(d)){let e=new Monster(d);r.attack(e),e.dead&&this.cave.set(...n,"*")}})}movePlayer(e){let t=this.cave.find("@"),r=addVector(t,e),s=animate(this.cave.get(...r));if(s.isSolid||(this.cave.set(...t,"."),this.cave.set(...r,"@"),s.interact()),s instanceof Wall&&s.interact(),s.isAlive){s.interact(),this.weapon+rand(5)>=s.level&&this.cave.set(...r,"*")}}get wonMessage(){return 10===this.level?"You won, you escaped!":this.health<=0?"You died.":""}}let DIRS={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0],nw:[-1,-1],ne:[1,-1],se:[1,1],sw:[-1,1]};const KEY_to_DIR={ArrowLeft:"w",ArrowRight:"e",ArrowDown:"s",ArrowUp:"n",q:"nw",w:"n",e:"ne",a:"w",s:"s",d:"e",z:"sw",x:"s",c:"se",7:"nw",8:"n",9:"ne",4:"w",5:"s",6:"e",1:"sw",2:"s",3:"se"},changeRenderer=()=>{renderer instanceof ClassicRender?(renderer=new TileRender,localStorage.setItem("zig-render","tile")):(renderer=new ClassicRender,localStorage.setItem("zig-render","classic")),window.renderer=renderer,renderer.draw()};KEY_HANDLERS={t:changeRenderer,n:start,N:start},document.onkeydown=e=>{if(KEY_to_DIR[e.key]){if(finishBoot(),e.preventDefault(),e.repeat)return!0;let t=KEY_to_DIR[e.key],r=DIRS[t];return game.health>0?(game.movePlayer(r),game.tick()):alert("You are dead.  Hit `N` to start a new game."),void renderer.draw()}let t=KEY_HANDLERS[e.key];if(t){if(e.preventDefault(),e.repeat)return!0;t()}};let grid$1=document.querySelector("#grid"),scroller=e=>{document.body.scrollHeight;let t=document.querySelector(".story").offsetHeight;window.scrollY;window.scrollY>=2.25*t&&0===state&&gameMode(),0===window.scrollY&&1===state&&(state++,document.body.className="gohome",adventure.style.display="none",stayhome.style.display="block",play.style.display="none")};var state=0;function gameMode(){document.body.className="play",state=1}function finishBoot(){booted||(window.booted=!0,window.onscroll=null,setTimeout(()=>{document.querySelectorAll(".story").forEach(e=>e.style.display="none")},50))}function start(){const e=new Game;window.game=e;let t=localStorage.getItem("zig-render")||"tile";window.renderer="tile"===t?new TileRender:new ClassicRender,renderer.draw()}OS=new Proxy({},{get:()=>()=>{}}),window.booted=!1,window.onload=()=>{OS.setTitle("Zigclimb Reborn"),window.onscroll=scroller,start()};