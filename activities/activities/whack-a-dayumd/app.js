let cnv=document.querySelector("canvas");cnv.width=window.innerWidth,cnv.height=window.innerHeight;let animate,c=cnv.getContext("2d");const maxtW=70,maxth=70;let useH=!0,useS=!1,useP=!1;class Tile{constructor(e,t,l,s,x,i,o,n){this.w=e,this.h=t,this.types=s,this.hp=2,this.pos=l,this.img=x,this.imgUrl=i,this.setImg=o,this.deg=n}draw(){if(this.deg>0?(c.translate(this.pos.x+this.w/2,this.pos.y+this.h/2),c.rotate(this.deg*Math.PI/180),c.drawImage(this.img,0,0,70,70,-this.w/2,-this.h/2,70,70),c.rotate(-this.deg*Math.PI/180),c.translate(-this.pos.x-this.w/2,-this.pos.y-this.h/2)):c.drawImage(this.img,0,0,70,70,this.pos.x,this.pos.y,70,70),0===this.setImg.length)this.img.src=this.imgUrl;else switch(this.hp){case 0:this.img.src=this.setImg[2];break;case 1:this.img.src=this.setImg[1];break;case 2:this.img.src=this.setImg[0];break;case 3:this.img.src=this.setImg[3]}}}class NPC{constructor(e,t,l,s,x,i,o){this.pos=e,this.vel=t,this.w=l,this.h=s,this.coll=[],this.memo=[],this.dirMap=["b","t","r","l"],this.dir=x,this.img=i,this.allImgs=o,this.atkCD=0}draw(e){"l"===this.dir?(c.translate(this.pos.x+this.w,this.pos.y),c.scale(-1,1),c.drawImage(this.img,0,0),c.setTransform(1,0,0,1,0,0)):c.drawImage(this.img,0,0,70,70,this.pos.x,this.pos.y,70,70),this.img.src=0===e?this.allImgs[0]:10===e?this.allImgs[1]:20===e?this.allImgs[2]:30===e?this.allImgs[3]:this.img.src}update(e){if(this.draw(e),this.remember()){let e=[];if(this.dirMap.forEach((t=>{let l=!1;this.coll.forEach((e=>{t===e&&(l=!0)})),l||e.push(t)})),3===e.length||2===e.length){let t="t"===this.dir?"b":"b"===this.dir?"t":"l"===this.dir?"r":"r"===this.dir?"l":null;e=e.filter((e=>e!==t))}e.length<4&&(this.dir=e[Math.floor(Math.random()*e.length)])}this.vel="t"===this.dir?{x:0,y:-.5}:"b"===this.dir?{x:0,y:.5}:"l"===this.dir?{x:-.5,y:0}:"r"===this.dir?{x:.5,y:0}:null,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.memo=this.coll,this.coll=[],this.atkCD>0&&this.atkCD--}remember(){let e=!1;if(this.memo.length!==this.coll.length)return!0;for(let t=0;t<this.coll.length;t++){for(let l=0;l<this.memo.length;l++)this.coll[t]===this.memo[l]&&(e=!0);if(!e)break}return e}}let lvM,mxI=0,allLevel=[];const lv0M=[["x","x","x","x","x","x","x","x","x","x","x","x","x"],["x","o","x","x","o","x","o","x","o","x","o","x","x"],["x","b","-","u","-","-","-","-","-","-","-","ne","x"],["x","x","x","v","x","x","x","x","x","x","x","v","x"],["x","o","x","v","x","o","x","o","x","o","x","v","x"],["x","b","-","c","-","-","-","-","-","-","-","r","x"],["x","x","x","v","x","x","x","x","x","x","x","v","x"],["x","x","x","v","x","o","x","o","x","o","x","v","x"],["s","-","-","d","-","-","-","-","-","-","-","se","x"],["x","x","x","x","x","x","x","x","x","x","x","x","x"]],lv1M=[["x","x","x","x","x","x","x","x","x","x","x","x","x"],["x","o","x","x","o","x","o","x","o","x","o","x","x"],["x","b","-","u","-","-","-","-","-","-","-","ne","x"],["x","x","x","v","x","x","x","x","x","x","x","v","x"],["x","o","x","v","x","o","x","o","x","o","x","v","x"],["x","b","-","c","-","-","-","-","-","-","-","r","x"],["x","x","x","v","x","x","x","x","x","x","x","v","x"],["x","x","x","v","x","o","x","o","x","o","x","v","x"],["s","-","-","d","-","-","-","-","-","-","-","se","x"],["x","x","x","x","x","x","x","x","x","x","x","x","x"]],lv2M=[["x","x","x","x","x","x","x","x","x","x","x","x","x"],["x","o","x","x","o","x","o","x","o","x","o","x","x"],["x","b","-","u","-","-","-","-","-","-","-","ne","x"],["x","x","x","v","x","x","x","x","x","x","x","v","x"],["x","o","x","v","x","o","x","o","x","o","x","v","x"],["x","b","-","d","x","b","-","-","-","-","-","r","x"],["x","x","x","x","x","x","x","x","x","x","x","v","x"],["x","x","x","x","x","o","x","o","x","o","x","v","x"],["s","-","-","-","-","-","-","-","-","-","-","se","x"],["x","x","x","x","x","x","x","x","x","x","x","x","x"]],lv3M=[["x","x","x","x","x","x","x","x","x","x","x","x","x"],["x","o","x","x","o","x","o","x","o","x","o","x","x"],["x","b","-","u","-","-","-","-","-","-","-","b2","x"],["x","x","x","v","x","x","x","x","x","x","x","x","x"],["x","o","x","v","x","o","x","o","x","o","x","x","x"],["x","b","-","d","-","-","-","-","-","-","-","ne","x"],["x","x","x","x","x","x","x","x","x","x","x","v","x"],["x","x","x","x","x","o","x","o","x","o","x","v","x"],["s","-","-","-","-","-","-","-","-","-","-","se","x"],["x","x","x","x","x","x","x","x","x","x","x","x","x"]];allLevel=[lv0M,lv1M,lv2M,lv3M];let exit,allTiles=[],tSpwn=[],allT=[],zs=[],gOs=[],tombsL=allT.length;lvM=allLevel[mxI];let allQ=["Use the hammer, click on all the hordes on the map and don't let them reach the exit gate.","Use the shovel to repair the tombs. Keep the zombies in check with your hammer.","Grieving families are here to pay tribute! Defend them...or else!","Fortify the tombs. Stone tombs can resist one additional attack. "];function buildLevel(){for(let e=0;e<lvM.length;e++)for(let t=0;t<lvM[e].length;t++){const l=lvM[e][t];let s,x=0,i=new Image;if("x"===l&&(s=new Tile(70,70,{x:70*t,y:70*e},["w"],i,"img/grass.png",[],x)),"o"===l&&(s=new Tile(70,70,{x:70*t,y:70*e},["zS","p"],i,"img/t_1.png",["img/t_1.png","img/d_t.png","img/b_t.png","img/t_s.png"],0),tSpwn.push({x:70*t,y:70*e}),allT.push(s)),"s"===l&&(s=new Tile(70,70,{x:70*t,y:70*e},["vP","w"],i,"img/hor.png",[],x),exit=s),"-"!==l&&"v"!==l||(x="-"===l?0:90,s=new Tile(70,70,{x:70*t,y:70*e},["p"],i,"img/hor.png",[],x)),"c"===l&&(s=new Tile(70,70,{x:70*t,y:70*e},["p"],i,"img/cross.png",[],x)),"u"!==l&&"r"!==l&&"d"!==l||(x="r"===l?0:"u"===l?270:90,s=new Tile(70,70,{x:70*t,y:70*e},["p"],i,"img/lat_pR.png",[],x)),"ne"!==l&&"se"!==l||(x="ne"===l?0:90,s=new Tile(70,70,{x:70*t,y:70*e},["p"],i,"img/cor_ne.png",[],x)),"b"!==l&&"b2"!==l||(x="b"===l?0:180,s=new Tile(70,70,{x:70*t,y:70*e},["p"],i,"img/end.png",[],x)),allTiles.push(s),mxI>=2&&(2===e&&2===t||5===e&&3===t||2===e&&8===t)){let l=new Image,s=new NPC({x:70*t,y:70*e},{x:0,y:.5},70,70,"r",l,["img/gr_1.png","img/gr_2.png","img/gr_1.png","img/gr_3.png"]);gOs.push(s),s.draw(0)}}}function npcColl(e,t){return e.pos.x+e.w+e.vel.x>t.pos.x&&e.pos.x+e.vel.x<t.pos.x+t.w&&e.pos.y+e.h+e.vel.y>t.pos.y&&e.pos.y+e.vel.y<t.pos.y+t.h}let shCD=0,pUpCD=0,kills=0;cnv.addEventListener("click",(e=>{useH?zs.forEach(((t,l)=>{t.pos.x+t.w>e.clientX&&t.pos.x<e.clientX&&t.pos.y+t.h>e.clientY&&t.pos.y<e.clientY&&(zs.splice(l,1),kills++,0===mxI&&kills>=5?prgPerc=100:prgPerc++,prog.style.height=prgPerc+"%",zzfx(...[1.06,,176,.01,.09,.11,2,2,5.8,,,.01,,1.4,,.3,,.91,.07,.27]))})):useS&&0===shCD?allT.forEach((t=>{t.pos.x+t.w>e.clientX&&t.pos.x<e.clientX&&t.pos.y+t.h>e.clientY&&t.pos.y<e.clientY&&t.hp<2&&(prgPerc+=2,prog.style.height=prgPerc+"%",shCD=200,0===t.hp?t.hp=1:1===t.hp&&(t.hp=2),zzfx(...[1.73,,455,.03,.01,.09,,.72,13,-.1,-100,.01,.01,1.3,,,.07,.59,.05,.01]))})):useP&&0===pUpCD&&allT.forEach((t=>{t.pos.x+t.w>e.clientX&&t.pos.x<e.clientX&&t.pos.y+t.h>e.clientY&&t.pos.y<e.clientY&&(t.hp=3,prgPerc+=2,prog.style.height=prgPerc+"%",pUpCD=1e3,zzfx(...[1.77,,1707,.02,.03,.18,,.15,.4,1,,,.14,,,.1,.1,.98,.02,.04]))}))}));let hB=document.getElementById("hammer"),shB=document.getElementById("shovel"),shCDDiv=document.getElementById("shCD"),pCDDiv=document.getElementById("powerCD"),pUpB=document.getElementById("powerup"),tryB=document.getElementById("try"),quest=document.getElementById("quest"),qtext=document.getElementById("q-text"),mainM=document.getElementById("main"),startB=document.getElementById("start"),backS=document.getElementsByClassName("back"),gOP=document.getElementById("goPanel"),retryB=document.getElementById("retry"),winP=document.getElementById("win"),nextB=document.getElementById("next"),finalWinP=document.getElementById("winPanel");function aHammer(){useH=!0,useS=!1,useP=!1,hB.style.color="red",shB.style.color="black",pUpB.style.color="black"}function aShovel(){useH=!1,useS=!0,useP=!1,hB.style.color="black",shB.style.color="red",pUpB.style.color="black"}function aPower(){useH=!1,useS=!1,useP=!0,hB.style.color="black",shB.style.color="black",pUpB.style.color="red"}hB.addEventListener("click",(()=>{aHammer()})),shB.addEventListener("click",(()=>{aShovel()})),pUpB.addEventListener("click",(()=>{aPower()})),document.addEventListener("keypress",(e=>{"a"===e.key&&aHammer(),"s"===e.key&&"none"!==shB.style.display&&aShovel(),"d"===e.key&&"none"!==pUpB.style.display&&aPower(),"v"===e.key&&(startLevel(),0===mxI&&(firstlv=!0),gOP.style.display="none")}));let prog=document.getElementById("prgbar"),pBar=document.getElementById("pointbar"),spn=0,prgPerc=2,firstlv=!0,frames=0;function lockUI(){hB.style.display="none",shB.style.display="none",pUpB.style.display="none",pBar.style.display="none",quest.style.display="none",tryB.style.display="none"}function animation(){if(animate=requestAnimationFrame(animation),cnv.width=window.innerWidth,cnv.height=window.innerHeight,tombsL=allT.length,shCD>0&&(shCD--,shCDDiv.style.width=shCD/2+"%"),pUpCD>0&&(pUpCD--,pCDDiv.style.width=pUpCD/10+"%"),c.clearRect(0,0,cnv.width,cnv.height),allTiles.forEach((e=>{e.draw(),"zS"===e.types[0]||e.types.includes("p")||e.types.includes("vP")?zs.forEach((t=>{(npcColl({...t,vel:{x:0,y:.1}},{...e,h:50,w:50})||npcColl({...t,vel:{x:0,y:-.1}},{...e,h:50,w:50})||npcColl({...t,vel:{x:.1,y:0}},{...e,h:50,w:50})||npcColl({...t,vel:{x:-.1,y:0}},{...e,h:50,w:50}))&&0===t.atkCD&&"zS"===e.types[0]&&(3===e.hp?e.hp=2:e.hp<=2&&e.hp>0&&(e.hp=0,prgPerc-=2,prog.style.height=prgPerc+"%"),t.atkCD=400,zzfx(...[2.34,,218,.01,.09,.05,4,2.42,,,,,.04,.3,,.3,.18,.86,.01,.17]))})):zs.forEach((t=>{npcColl({...t,vel:{x:0,y:.1}},e)&&e.pos.x===t.pos.x&&t.coll.push("b"),npcColl({...t,vel:{x:0,y:-.1}},e)&&e.pos.x===t.pos.x&&t.coll.push("t"),npcColl({...t,vel:{x:.1,y:0}},e)&&e.pos.y===t.pos.y&&t.coll.push("r"),npcColl({...t,vel:{x:-.1,y:0}},e)&&e.pos.y===t.pos.y&&t.coll.push("l")})),(e.types.includes("p")||e.types.includes("vP"))&&"zS"!==e.types[0]||gOs.forEach((t=>{npcColl({...t,vel:{x:0,y:.1}},e)&&e.pos.x===t.pos.x&&t.coll.push("b"),npcColl({...t,vel:{x:0,y:-.1}},e)&&e.pos.x===t.pos.x&&t.coll.push("t"),npcColl({...t,vel:{x:.1,y:0}},e)&&e.pos.y===t.pos.y&&t.coll.push("r"),npcColl({...t,vel:{x:-.1,y:0}},e)&&e.pos.y===t.pos.y&&t.coll.push("l")}))})),0!==mxI){if(spn++,spn>=Math.floor(100*Math.random())+50){let e=allT[Math.floor(Math.random()*allT.length)],t={x:e.pos.x,y:e.pos.y};if(2!==e.hp&&zzfx(...[2.34,,218,.01,.09,.05,4,2.42,,,,,.04,.3,,.3,.18,.86,.01,.17]),3===e.hp)e.hp=2;else if(2===e.hp)e.hp=1;else if(1===e.hp||0===e.hp){e.hp=0;let l=new Image,s=new NPC(t,{x:0,y:.5},70,70,"b",l,["img/z_1.png","img/z_2.png","img/z_1.png","img/z_4.png"]);s.draw(0),zs.push(s),prgPerc--,prog.style.height=prgPerc+"%"}spn=0}}else if(firstlv){for(let e=0;e<5;e++){let e=allT[Math.floor(Math.random()*allT.length)],t={x:e.pos.x,y:e.pos.y},l=new Image,s=new NPC(t,{x:0,y:.5},70,70,"b",l,["img/z_1.png","img/z_2.png","img/z_1.png","img/z_4.png"]);s.draw(0),zs.push(s)}firstlv=!1}prgPerc<=0&&(gOP.style.display="block",cancelAnimationFrame(animate),lockUI()),prgPerc>=100?3!==mxI?(winP.style.display="block",cancelAnimationFrame(animate)):(finalWinP.style.display="block",lockUI(),cancelAnimationFrame(animate)):0===mxI&&prgPerc>=100&&(winP.style.display="block",cancelAnimationFrame(animate)),frames++,zs.forEach(((e,t)=>{e.update(frames),npcColl({...e,vel:{x:-.1,y:0}},{...exit,w:0})&&(zs.splice(t,1),0===mxI?prgPerc=0:prgPerc-=2,prog.style.height=prgPerc+"%")})),gOs.forEach(((e,t)=>{e.update(frames),zs.forEach((l=>{(npcColl({...l,vel:{x:0,y:.1}},{...e,pos:{x:e.pos.x+40,y:e.pos.y+40}})&&"b"===l.dir||npcColl({...l,vel:{x:0,y:-.1}},{...e,h:30,w:30})&&"t"===l.dir||npcColl({...l,vel:{x:.1,y:0}},{...e,pos:{x:e.pos.x+40,y:e.pos.y+40}})&&"r"===l.dir||npcColl({...l,vel:{x:-.1,y:0}},{...e,h:30,w:30})&&"l"===l.dir)&&(gOs.splice(t,1),prgPerc-=50,prog.style.height=prgPerc+"%",prgPerc>0&&zzfx(...[1.06,,176,.01,.1,.12,3,1.9,5.8,,-50,,,1.4,1,.2,,.91,.08,.27]))})),npcColl({...e,vel:{x:-.1,y:0}},{...exit,w:0})&&(gOs.splice(t,1),prgPerc+=25,prog.style.height=prgPerc+"%")})),30===frames&&(frames=0)}function resetParams(){lvM=allLevel[mxI],zs=[],gOs=[],allTiles=[],tSpwn=[],allT=[],kills=0,prgPerc=50,prog.style.height=prgPerc+"%",c.clearRect(0,0,cnv.width,cnv.height),pUpCD=0,pCDDiv.style.width="0%",shCD=0,shCDDiv.style.width="0%"}function addQuest(){for(let e=0;e<allQ.length;e++)e===mxI&&(qtext.innerHTML=allQ[e])}function unlockLevelUI(){hB.style.display="block",mxI>=1&&(shB.style.display="block"),pBar.style.display="block",3===mxI&&(pUpB.style.display="block"),quest.style.display="block",tryB.style.display="block"}function startLevel(){resetParams(),unlockLevelUI(),buildLevel(),animation(),addQuest()}startB.addEventListener("click",(()=>{mxI=0,startLevel(),mainM.style.display="none"}));for(let e=0;e<backS.length;e++)backS[e].addEventListener("click",(()=>{mxI=0,winP.style.display="none",mainM.style.display="block",finalWinP.style.display="none",lockUI(),firstlv=!0,gOP.style.display="none"}));retryB.addEventListener("click",(()=>{0===mxI&&(firstlv=!0),startLevel(),gOP.style.display="none"})),tryB.addEventListener("click",(()=>{0===mxI&&(firstlv=!0),gOP.style.display="none",startLevel()})),nextB.addEventListener("click",(()=>{mxI++,startLevel(),winP.style.display="none"}));