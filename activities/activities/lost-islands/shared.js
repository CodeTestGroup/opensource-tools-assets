const skins=["#ffdbac","#f1c27d","#e0ac69","#c68642","#8d5524","#5e672f"],hairs=["#FFEAAE","yellow","#090806","#B55239"],grades=["#9d9d9d","#ece1d5","#1eff00","#0070dd","#a335ee","#ff8000","#e6cc80"],grounds=["#D9D5C5","#B5874B","#60A095","#ac0","#00b0cc","rgb(255, 232, 180)"],green=["#DDE663","#BDCE39","#A4A741"],brown=["#72422B"],sky=["#89e9ff","#74d1e6","#4c91a0","##132529"];var COLORS=Object.freeze({skins:skins,hairs:hairs,grades:grades,grounds:grounds,green:green,brown:brown,sky:sky});const areas=[[0,"water",5,15,"blue",[-1,-1,-1,10,20,30,40,50],[],[[2],[4],[-1],[]]],[1,"path",5,15,"green",[-1,-1,-1,10,10,20],[],[[2],[0],[-1],[]]],[2,"sand",5,15,"#EDC9AF",[5,5,5,10,10,20],[],[[2],[3],[-1],[]]],[3,"forest",5,15,green[2],[-1,10,10,10,10,30,40,50,60],[],[[2],[0],[0],[]]],[4,"desert",10,20,grounds[0],[-1,10,10,10,20,30,40,50,60],[],[[2],[3],[-1],[]]],[5,"river",4,5,grounds[4],[-1,-1,-1,30,40,60],[],[[2],[1],[-1],[]]]];var MAPS=Object.freeze({areas:areas});const gears=[[[8,8,[["hemlet"]],1,1,4,-3]],[[11,8,[["armor"]],1.5,1.5,2.1,4.5]],[[11,8,[["sword"]],1,1.5,14,-4,45],[11,8,[["axe"]],1,1.5,14,-4,45]]],data=[[18,9,[["triangle",green,0,0],["triangle",green,0,3,1.2,1.2,-.5],["triangle",green,0,6,1.4,1.4,-.7],["rect",brown[0],2,10],["rect",brown[0],2,14]],2,2]];gears.forEach(e=>{e.forEach(e=>{grades.forEach(r=>{data.push([e[0],e[1],e[2].map(e=>[e[0],r,e[1],e[2],e[3],e[4]]),e[3],e[4],e[5],e[6],e[7]])})})});var OBJS=Object.freeze({data:data});const data$1={hemlet:{obj:1,attrs:{def:2},factor:1,pos:1},armor:{obj:8,attrs:{def:2},factor:1,pos:2},sword:{obj:15,attrs:{atk:2},factor:1,pos:3},axe:{obj:22,attrs:{atk:4,spd:-1},factor:1.5,pos:3}};var ITEMS=Object.freeze({data:data$1});const getRandom=(e,r)=>~~(Math.random()*(r-e))+e,random=(e,r=0)=>e[~~(Math.random()*(e.length-r)+r)],uuid=e=>e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid);var UTILS=Object.freeze({getRandom:(e,r)=>~~(Math.random()*(r-e))+e,random:(e,r=0)=>e[~~(Math.random()*(e.length-r)+r)],uuid:uuid});const stories=["Warriors! We have to find the dark general and kill him!"];var DATA={COLORS:COLORS,MAPS:MAPS,OBJS:OBJS,ITEMS:ITEMS,UTILS:UTILS,stories:stories,noop:()=>null};"undefined"==typeof window?module.exports=DATA:(window.DATA=DATA,window.noop=DATA.noop);