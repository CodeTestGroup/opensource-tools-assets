function t(t,e,i,a){const s=()=>{let t=rInt(-300,300);return(this.x+t<0||this.x+t>2e3)&&(t=-t),new g(this.x+t,0)},n=[[[14,0,72,0,72,71,16,71],"","black",1],[[24,72,23,87,35,88,35,72],"","black",1],[[53,71,65,72,65,86,54,86],"","black",1],[[27,12,26,24,38,24,38,13],"","white",1],[[0,36,0,52,11,48,40,48,41,38,10,40],"","black",1]],r=[[[6,0,0,8,6,16,16,16,22,8,16,0],"","black",1],[[14,6,16,10,18,7,16,5],"","white",1]],o={stay:[n,[[[55,5,107,6,108,53,54,54],[54,54,33,28,14,59,33,34],[54,52,30,18,0,57,30,25],[108,52,128,27,146,58,128,34],[108,50,128,17,160,58,128,24],[60,14,60,21,70,21,70,12],[92,15,92,22,102,22,102,15]]],300],walk:[n,[[[14,8,72,8,72,79,16,78],[24,70,24,86,36,86,36,70],[53,64,65,65,65,80,54,80],[27,19,26,31,38,31,38,20],[-1,44,-1,60,10,56,39,56,40,46,9,48]],[[14,0,72,0,72,71,16,71],[24,62,24,78,36,78,36,62],[53,71,65,72,65,86,54,86],[27,12,26,24,38,24,38,13],[0,32,0,49,10,44,40,44,41,35,10,36]]],120],die:[n,[[[87,26,103,81,35,101,20,47],[24,77,10,83,14,94,29,87],[93,76,99,87,86,94,80,84],[74,41,70,42,75,53,78,52],[-32,73,-31,90,-21,85,9,85,10,76,-22,77]]],200,1],kick:[n,[[[20,0,78,2,76,73,20,71],[26,71,22,85,33,89,37,74],[55,70,67,73,64,87,52,85],[31,9,29,21,40,23,41,13],[13,33,11,52,24,48,58,51,60,40,24,38]]],100,1],hit:[n,[[[16,4,73,4,73,75,17,74],[24,72,23,87,35,88,35,72],[53,71,65,72,65,86,54,86],[26,21,26,24,38,24,38,21],[12,36,13,53,23,48,53,48,54,39,22,40]]],150,1]},h={active:0,started:0,live:100};this.type=t,this.x=e,this.y=i,this.active=1,this.collisionRadius=70,this.freeze={active:0,started:0,direction:0},this.following={active:0,lastSeen:0,to:s()},this.hitting={possible:1,active:0,started:0,next:0,direction:1,position:new g};let l=new d(...o.walk);this.follow=t=>{t?(this.following.active||(this.hitting.possible=0,this.hitting.started=+new Date),this.following.active=1,this.following.lastSeen=+new Date):+new Date-this.following.lastSeen>3e3&&(this.following.active=0,this.following.to=s()),character.position().get().x-this.x>405||character.position().get().x-this.x<-325?this.x<character.position().get().x?this.following.to=character.position().get().add(new g(-300,0)):this.following.to=character.position().get().add(new g(220,0)):character.isDying()||!this.hitting.possible||this.hitting.active||(this.hitting.possible=0,this.hitting.active=1,this.hitting.position=new g(this.x+10,this.y+34),this.hitting.direction=character.position().get().x-(this.x+36)>0?1:-1,this.hitting.started=+new Date,sfx.shoot(),l=new d(...o.kick),setTimeout(()=>{l=new d(...o.walk)},200))},this.contact=(t,e)=>{if(!h.active){let i=t;e&&(i=t*((300-this.center().distance(character.position().get().add(new g(character.size().x/2,character.size().y/2))))/300)),h.live-=i,particles.dying(new g(this.x+25,this.y+30),[color.dying1,color.dying2,color.dying3,color.dying4]),h.live<=0?this.destroy():(this.freeze.active=1,this.freeze.started=+new Date,this.freeze.direction=character.position().x<this.x?.2:-.2,l=new d(...o.hit))}},this.destroy=()=>{h.active=1,h.started=+new Date,l=new d(...o.die),particles.dying(new g(this.x+60,this.y+10),[color.dying1,color.dying2,color.dying3,color.dying4])},this.n=()=>{if(!this.freeze.active&&!h.active){const t=this.following.active?1.7:1,e=this.following.to.x-this.x,i=Math.abs(e)<t?Math.abs(e):t;this.x+=e<0?-i:i,!this.following.active&&Math.abs(this.following.to.x-this.x)<5&&(this.following.to=s(),l=new d(...o.walk))}this.freeze.active&&(this.x+=this.freeze.direction),this.hitting.active&&(this.hitting.position.x+=8*this.hitting.direction,character.position().get().add(new g(character.size().x/2,character.size().y/2)).distance(this.hitting.position.get().add(new g(11,8)))<30&&(character.hit(30),sfx.lowKick(),this.hitting.started=+new Date,this.hitting.active=0),+new Date-this.hitting.started>=1e3&&(this.hitting.active=0)),!this.hitting.possible&&!this.hitting.active&&+new Date-this.hitting.started>700&&(this.hitting.possible=1,l=new d(...o.walk)),this.freeze.active&&+new Date-this.freeze.started>=700&&(this.freeze.active=0,this.following.active=0,l=new d(...o.walk)),h.active&&+new Date-h.started>200&&(this.active=0)},this.center=()=>new g(this.x+36,this.y+44),this.r=()=>{c.save(),c.translate(this.x+36,this.y+44),this.following.active?c.scale(character.position().get().x-(this.x+36)>0?-1:1,-1):c.scale(this.following.to.x-this.x>0?-1:1,-1),draw.r(l.n(),[72,88]),c.restore(),this.hitting.active&&(c.save(),c.translate(this.hitting.position.x+11,this.hitting.position.y+8),c.scale(.8,-.8),draw.r(r,[22,16]),c.restore())}}function e(t,e,i){const a=()=>{let t=rInt(-300,300);return(this.x+t<0||this.x+t>2e3)&&(t=-t),new g(this.x+t,0)};this.type=t,this.x=e,this.y=i+rInt(-40,40),this.active=1,this.collisionRadius=70,this.following={to:a(),nextUpdate:rInt(500,2e3),lastUpdate:+new Date,speed:rFloat(1,3)},this.hitting={possible:1,active:0,started:0,last:0,next:0,position:new g};const s=[[[12,0,0,16,12,32,32,32,44,16,32,0],"","black",1],[[27,12,31,20,35,13,32,9],"","white",1]];let n=new d(...{fly:[[[[41,23,88,23,89,68,40,68],"","black",1],[[61,23,61,0,66,0,65,23],"","black",1],[[0,6,25,7,66,7,123,3,99,2,59,2],"","black",1],[[59,39,60,50,71,50,71,39],"","white",1]],[[[40,21,87,25,84,70,36,66],[61,23,61,0,66,0,65,23],[50,2,58,5,66,7,76,5,71,2,59,1],[57,38,56,49,67,50,69,39]],[0,0,0,0],[[39,25,86,21,91,66,42,70],[62,23,60,0,65,0,66,23],[51,3,56,6,66,6,76,5,68,2,59,2],[59,40,61,51,72,49,71,38]]],150]}.fly);this.n=()=>{if(this.active){const t=this.following.to.x-this.x,e=Math.abs(t)<this.following.speed?Math.abs(t):this.following.speed;this.x+=t<0?-e:e}if(Math.abs(this.following.to.x-this.x)<5&&(this.following.to=a()),+new Date-this.following.lastUpdate>=this.following.nextUpdate&&(this.following.to=character.position().get().add(new g(rInt(-200,200),0)),this.following.lastUpdate=+new Date,this.following.nextUpdate=rInt(500,2e3),this.following.speed=rFloat(1,3)),8!==this.type)if(this.hitting.active){if(this.hitting.position.y-=8,character.position().get().add(new g(character.size().x/2,character.size().y/2)).distance(this.hitting.position.get().add(new g(11,8)))<30&&(character.hit(40),this.hitting.active=0),this.hitting.position.y<40){particles.addJump(this.hitting.position,0,1),this.hitting.active=0,this.hitting.last=+new Date,this.hitting.next=rInt(1500,3e3);const t=this.hitting.position.distance(character.position().get().add(new g(character.size().x/2,character.size().y/2)));t<300&&character.hit((300-t)/300*40),sfx.bomb(),scene.doShake(1)}}else+new Date-this.hitting.last>=this.hitting.next&&Math.abs(character.position().x+character.size().x/2-(this.x+22))<200&&(this.hitting.active=1,this.hitting.position=new g(this.x+61,this.y))},this.center=()=>new g(this.x+61,this.y+34),this.r=()=>{c.save(),c.translate(this.x+61,this.y+34),c.scale(1,-1),draw.r(n.n(),[123,68]),c.restore(),this.hitting.active&&(c.save(),c.translate(this.hitting.position.x+22,this.hitting.position.y+16),c.scale(1,-1),draw.r(s,[44,32]),c.restore())}}function i(t,e,i){const a=()=>{let t=rInt(-300,300);return(this.x+t<0||this.x+t>2e3)&&(t=-t),new g(this.x+t,0)},s=[[[55,0,107,1,108,48,54,49],"","black",1],[[54,48,32,25,14,59,32,32],"","black",1],[[55,45,32,14,0,57,30,23],"","black",1],[[109,47,128,24,146,58,128,30],"","black",1],[[109,46,128,13,160,58,128,22],"","black",1],[[59,9,59,16,69,16,69,8],"","white",1],[[92,10,92,17,102,16,102,10],"","white",1]],n={stay:[s,[[[55,5,107,6,108,53,54,54],[54,54,33,28,14,59,33,34],[54,52,30,18,0,57,30,25],[108,52,128,27,146,58,128,34],[108,50,128,17,160,58,128,24],[60,14,60,21,70,21,70,12],[92,15,92,22,102,22,102,15]]],300],walk:[s,[[[55,4,107,4,108,52,54,52],[54,51,33,29,4,57,34,34],[53,50,28,14,6,57,30,22],[109,51,130,29,155,57,130,34],[108,49,126,13,150,58,126,20],[59,12,59,19,69,19,69,10],[92,13,92,20,102,20,102,13]]],120],die:[s,[[[99,-7,110,44,65,56,51,4],[67,57,26,48,2,59,27,54],[53,63,20,43,-10,65,20,48],[109,47,132,42,164,56,133,47],[112,48,142,38,173,57,140,44],[94,1,86,2,88,12,96,11],[100,30,93,32,96,41,102,40]]],200,1],kick:[s,[[[72,-12,122,0,113,46,61,36],[60,34,38,20,8,44,38,26],[60,31,47,-5,5,-5,44,3],[116,44,135,21,137,59,134,28],[115,44,135,11,143,61,134,20],[74,-2,72,5,82,8,84,0],[104,5,102,12,112,15,114,9]],[[85,-22,133,-2,116,42,66,23],[66,19,44,-9,0,-8,43,-4],[65,21,41,-2,10,33,41,5],[118,40,137,21,127,57,135,27],[118,39,141,12,137,58,140,19],[88,-11,85,-4,94,1,98,-7],[113,0,110,7,120,11,123,5]],[0,0,0,0,0,0,0]],120,1],hit:[s,[[[55,0,107,1,108,48,54,49],[54,48,32,25,50,61,32,32],[55,45,32,14,46,58,30,23],[109,47,128,24,119,58,128,30],[109,46,128,13,120,58,128,22],[60,12,60,16,70,16,70,14],[92,14,92,17,102,16,102,14]]],150,1]},r={active:0,started:0,live:100};this.type=t,this.x=e,this.y=i,this.active=1,this.collisionRadius=70,this.freeze={active:0,started:0,direction:0},this.following={active:0,lastSeen:0,to:a()},this.hitting={possible:1,active:0,started:0,next:0};let o=new d(...n.walk);this.follow=t=>{t?(this.following.active=1,this.following.lastSeen=+new Date):+new Date-this.following.lastSeen>3e3&&(this.following.active=0,this.following.to=a()),character.position().get().x-this.x>125||character.position().get().x-this.x<-25?(this.x<character.position().get().x?this.following.to=character.position().get().add(new g(-120,0)):this.following.to=character.position().get().add(new g(20,0)),this.hitting.active=0):character.isDying()||!this.hitting.possible||this.hitting.active||(this.hitting.possible=0,this.hitting.active=1,this.hitting.started=+new Date,this.hitting.next=rInt(100,600))},this.contact=(t,e)=>{if(!r.active){let i=t;e&&(i=t*((300-this.center().distance(character.position().get().add(new g(character.size().x/2,character.size().y/2))))/300)),r.live-=i,particles.dying(new g(this.x+60,this.y+30),[color.dying1,color.dying2,color.dying3,color.dying4]),r.live<=0?this.destroy():(this.freeze.active=1,this.freeze.started=+new Date,this.freeze.direction=character.position().x<this.x?.2:-.2,o=new d(...n.hit)),this.hitting.active=0,this.hitting.possible=1}},this.destroy=()=>{r.active=1,r.started=+new Date,o=new d(...n.die),particles.dying(new g(this.x+60,this.y+10),[color.dying1,color.dying2,color.dying3,color.dying4])},this.n=()=>{if(!this.freeze.active&&!r.active){const t=this.following.active?2.3:1.2,e=this.following.to.x-this.x,i=Math.abs(e)<t?Math.abs(e):t;this.x+=e<0?-i:i,!this.following.active&&Math.abs(this.following.to.x-this.x)<5&&(this.following.to=a(),o=new d(...n.walk))}this.freeze.active&&(this.x+=this.freeze.direction),this.hitting.active&&+new Date-this.hitting.started>=this.hitting.next&&(character.position().get().x-this.x<125&&character.position().get().x-this.x>-25&&Math.abs(this.y-character.position().get().y)<=100&&(character.hit(30),setTimeout(()=>{sfx.lowKick()},120),o=new d(...n.kick),this.hitting.started=+new Date),this.hitting.active=0),!this.hitting.possible&&+new Date-this.hitting.started>300&&(this.hitting.possible=1,o=new d(...n.walk)),this.freeze.active&&+new Date-this.freeze.started>=700&&(this.freeze.active=0,this.following.active=0,o=new d(...n.walk)),r.active&&+new Date-r.started>200&&(this.active=0)},this.center=()=>new g(this.x+70,this.y+25),this.r=()=>{c.save(),c.translate(this.x+80,this.y+30),this.following.active?c.scale(character.position().get().x-(this.x+80)>0?-1:1,-1):c.scale(this.following.to.x-this.x>0?-1:1,-1),draw.r(o.n(),[160,59]),c.restore()}}function a(t,e,i,a,s,n){this.type=t,this.x=e,this.y=i,this.w=a,this.h=s,this.d=n,this.isMovable=n.mag()>0,this.active=1;const r=[color.black,color.black,color.ice,color.black],o=[[[0,14,40,14,40,0,27,7,15,1,6,4,0,0],"black","black",1]],h=[[[12,0,0,22,11,40,40,36,40,4],"","black",1],[[19,16,16,20,19,24,24,23,26,17],"","mechanics",1]];let l=new g(e,i),d=0,w=this.isMovable?1/Math.floor(n.mag()/2):0,y=1;this.n=()=>{if(this.isMovable){const t=l.get().add(this.d.get().mult(d));this.x=t.x,this.y=t.y,(d>1||d<0)&&(y*=-1),d+=w*y}},this.getVelocity=()=>n.get().normalize().mult(2*y),this.r=()=>{if(this.isMovable&&(c.save(),c.translate(l.x+a/2,l.y+s/2),draw.r(h,[40,40]),c.restore(),c.save(),c.translate(l.x+n.x+a/2,l.y+n.y+s/2),draw.r(h,[40,40]),c.restore(),c.save(),c.strokeStyle=color.mechanics,c.moveTo(l.x+a/2,l.y+s/2),c.lineTo(l.x+n.x+a/2,l.y+n.y+s/2),c.stroke(),c.restore()),c.save(),c.translate(this.x,this.y),1===this.type){c.save(),c.scale(1,-1),c.translate(-20,-this.h-4);for(let t=0;t<Math.floor(this.w/40);t++)c.translate(40,0),draw.r(o,[40,8]);c.restore(),c.save(),c.translate(-20,-4);for(let t=0;t<Math.floor(this.w/40);t++)c.translate(40,0),draw.r(o,[40,8]);c.restore(),c.fillStyle=color.black,c.fillRect(0,0,this.w,this.h)}else c.fillStyle=r[this.type],c.fillRect(0,0,this.w,this.h);c.restore()}}function s(t){let e,i,a,s,n,r,o,h,l;function d(){e=.001,i=+new Date,a=t?rInt(1e3,1300):rInt(4e3,9e3),s=t?new g(rInt(-50,50),rInt(-10,10)):new g(rInt(-10,10),rInt(-80,-90)),n=t?new g(s.x<0?rFloat(.1,1):rFloat(-1,.1),rFloat(-1,-2)):new g(rFloat(-.3,.3),rFloat(-1.2,-2)),r=t?1:0,o=0,h=rFloat(-.03,.03),l=10}this.active=1,d(),this.n=()=>{const c=+new Date-i;let g=n.get().normalize().mult(.001);g.add(gc.gravity.get().mult(e)),n.add(g),s.add(n),r=.8-c/a*.8,r=r<0?0:r,t?l=10:(l=20,r=c/(a/2)*.5,l=5+40*r,r=r>.5?.5-r+.5:r),o+=h,this.active=c<=a,!this.active&&d()},this.r=()=>{c.save(),c.fillStyle=t?"hsl("+(40-50*r)+", 70%, 50%)":"hsl(224, 4%, 84%)",c.translate(s.x,s.y),c.rotate(o),bp(),c.globalAlpha=r,c.fillRect(-l,-l,2*l,2*l),c.restore()}}function n(t,e){const i=new d([[[3,60,3,24,0,1,3,2,6,2,9,0,6,29,7,60],"","black",1]],[]);let a=[];for(let t=0;t<100;t++)setTimeout(()=>{a.push(new s(1))},10*t);for(let t=0;t<150;t++)setTimeout(()=>{a.push(new s(0))},500+50*t);this.position=new g(t,e),this.n=()=>{a.forEach(t=>t.n())},this.r=()=>{c.save(),c.translate(this.position.x+5,this.position.y+30),c.save(),c.translate(0,110),c.scale(.3,-.3),a.forEach(t=>t.r()),c.restore(),c.scale(4,-4),draw.r(i.n(),[9,60]),c.restore()}}function r(t,e,i){const a=objects[t];let s=!!rInt(0,2);this.n=()=>{},this.r=()=>{c.save(),c.translate(e+a[1][0]/2,i+a[1][1]/2),c.scale(s?-1:1,-1),draw.r(a[0],a[1]),c.restore()}}function o(){let t=0;const e=[[[0,96,8,39,16,15,58,0,23,21,18,42,19,96],"","black",1],[[58,1,57,11,58,12,58,1],"","black",1],[[38,26,38,50,42,26,44,50,47,26,50,50,53,26,55,49,58,26,60,49,63,26,66,50,69,26,72,49,74,26,79,49,79,25],"","black",1],[[38,49,79,48,79,53,37,52],"","black",1],[[37,26,58,11,79,25],"","black",1]],i=[e,[[[0,87,51,62,75,55,112,81,75,64,54,71,11,103],[87,84,78,90,78,90,87,84],[39,97,58,113,43,94,61,109,46,90,66,104,50,86,69,101,53,82,72,96,57,78,76,93,61,74,80,88,65,70,85,83,67,66],[55,107,88,82,90,85,56,110],[86,75,110,84,111,109]]],300,1];let a;this.r=()=>{t||(a=new d(...i),t=1),c.save(),c.translate(300,300),c.scale(6,-6),draw.r(a.n(),[79,96]),c.restore()},this.rSplash=()=>{c.save(),c.translate(300,300),c.scale(6,-6),draw.r(e,[79,96]),c.restore()}}function h(t,e,i,a,s,n){this.isActive=1;let r=i.get(),o=a.get(),h=new g;const l=+new Date;this.n=()=>{h.add(o.get().normalize().mult(.001)),h.add(gc.gravity.get().mult(t)),o.add(h),r.add(o),h.mult(0),+new Date-l>=s&&(this.isActive=0)},this.r=()=>{const t=1-(+new Date-l)/s;c.save(),c.translate(r.x+20,r.y),c.globalAlpha=t>=0?t:0,bp(),c.fillStyle=n,c.rect(-e/2,-e/2,2*e,2*e),c.fill(),cp(),c.restore()}}function d(t,e,i,a){const s=i||200,n=e.length+1,c=[];let r,o=0,h=0,l=0,d=+new Date,g=d,w=0;c.push(t),e.forEach(e=>{c.push(t.map((t,i)=>{let a=t;return e[i]&&(a=t.map((t,a)=>a?t:e[i])),a}))}),this.n=()=>{g=+new Date-d,h+=g,o=Math.floor(h%(n*s)/s),o+1===n&&(w=1);const t=o+1===n?a?o:0:o+1;return l=h%(n*s)%s,d=+new Date,r=a&&w?c[n-1]:c[o].map((e,i)=>e.map((e,a)=>a?e:e.map((e,n)=>e+(c[t][i][a][n]-e)*l/s))),r},this.isFinished=()=>w}function g(t,e){this.x=t||0,this.y=e||0,this.add=t=>(this.x+=t.x,this.y+=t.y,this),this.angle=t=>t?Math.atan2(this.y,this.x):Math.atan2(t.y-this.y,t.x-this.x),this.apply=t=>(this.x=t.x,this.y=t.y,this),this.distance=t=>Math.hypot(this.x-t.x,this.y-t.y),this.div=t=>(this.x/=t,this.y/=t,this),this.dot=t=>this.mag()*t.mag()*Math.cos(this.angle(t)),this.get=()=>new g(this.x,this.y),this.mag=()=>Math.hypot(this.x,this.y),this.mult=t=>(this.x*=t,this.y*=t,this),this.normalize=()=>(this.mag()>0&&this.div(this.mag()),this),this.perpendicular=()=>{let t=this.x;return this.x=this.y,this.y=-t,this},this.round=()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this),this.sub=t=>(this.x-=t.x,this.y-=t.y,this),this.normal=t=>new g(this.x-t.x,this.y-t.y).perpendicular().normalize(),this.center=t=>new g(this.x+(t.x-this.x)/2,this.y+(t.y-this.y)/2)}(()=>{function t(){gc.size={x:window.innerWidth,y:window.innerHeight},gc.originalRatio=Math.min(gc.size.x/gc.res.x,gc.size.y/gc.res.y),gc.canvas.style.width=Math.round(gc.res.x*gc.originalRatio)+"px",gc.canvas.style.height=Math.round(gc.res.y*gc.originalRatio)+"px",gc.ratio=gc.originalRatio*(window.devicePixelRatio||1),e()}function e(){gc.canvas.width=Math.round(gc.res.x*gc.ratio*gc.graphicsQuality),gc.canvas.height=Math.round(gc.res.y*gc.ratio*gc.graphicsQuality)}function i(){gc.last=+new Date,function(){if(gc.paused)return;scene.n(),character.isGoingBack()?(gc.paused=1,s(-1)):character.levelIsCompleted()?(gc.paused=1,s(1)):character.isDead()&&(gc.paused=1,a())}(),c.save(),c.scale(gc.ratio*gc.graphicsQuality,gc.ratio*gc.graphicsQuality),scene.r(),c.restore(),requestAnimationFrame(i)}function a(){scene.reset(),gc.paused=0}function s(t){setTimeout(()=>{map.nextLevel(t),a()},30)}window.rInt=(t,e)=>Math.floor(t+Math.random()*(e-t)),window.rFloat=(t,e)=>t+Math.random()*(e-t),window.gc={res:{x:1280,y:720},started:0,start:+new Date,last:+new Date,paused:0,graphicsQuality:1,muted:0,changeQuality:t=>{gc.graphicsQuality=t,e()}},window.onload=function(){var e;e=document.getElementById("app"),gc.canvas=e,window.c=gc.canvas.getContext("2d"),c.imageSmoothingEnabled=0,window.l=c.lineTo.bind(c),window.m=c.moveTo.bind(c),window.bp=c.beginPath.bind(c),window.cp=c.closePath.bind(c),gc.gravity=new g(0,-.8),t(),control.i(),scene.i(),i(),gc.canvas.addEventListener("click",t=>{gc.started||(gc.started=1),gc.ac=window.AudioContext?new AudioContext:new window.webkitAudioContext})},window.onresize=t})(),window.control=(()=>{const t=[0,0,0,0,0];return{i:()=>{window.addEventListener("keydown",e=>{"KeyA"!==e.code&&"ArrowLeft"!==e.code||(t[0]=1),"KeyW"!==e.code&&"ArrowUp"!==e.key||(t[1]=1),"KeyD"!==e.code&&"ArrowRight"!==e.code||(t[2]=1),"Space"!==e.code&&"Enter"!==e.key||(t[3]=1),"KeyS"!==e.code&&"ArrowDown"!==e.key||(t[4]=1),"Digit1"===e.code&&gc.changeQuality(1),"Digit2"===e.code&&gc.changeQuality(.75),"Digit3"===e.code&&gc.changeQuality(.5),"Digit4"===e.code&&gc.changeQuality(.2),"KeyM"===e.code&&(gc.muted=!gc.muted)}),window.addEventListener("keyup",e=>{"KeyA"!==e.code&&"ArrowLeft"!==e.code||(t[0]=0),"KeyW"!==e.code&&"ArrowUp"!==e.code||(t[1]=0),"KeyD"!==e.code&&"ArrowRight"!==e.code||(t[2]=0),"Space"!==e.code&&"Enter"!==e.code||(t[3]=0),"KeyS"!==e.code&&"ArrowDown"!==e.key||(t[4]=0)})},pressed:t}})(),window.characterAnimations=(()=>{const t=[60,83],e=[[[0,8,60,0,31,31],"","black",1],[[32,32,50,83,51,50],"","black",1],[[31,33,3,82,30,62],"","black",1],[[46,6,37,8,43,11],"","red",1]],i={stay:[e,[[[1,10,61,5,30,35],[32,34,50,83,53,50],[29,35,3,82,32,63],[49,10,39,11,44,15]]],500,0],walk:[e,[[[1,9,61,3,31,33],[30,35,13,85,38,61],[33,35,47,84,54,53],[49,7,40,9,45,13]],[[1,7,60,-3,32,29],[32,32,-10,84,27,60],[34,33,65,80,60,47],[49,2,40,5,46,8]],[[0,8,60,0,31,31],[30,32,4,82,31,63],[32,32,51,83,56,50],[46,6,37,8,43,11]],[0,0,0,0],[[1,8,60,-7,34,28],[34,31,66,81,62,47],[32,31,-5,81,26,61],[47,1,39,4,45,7]]],110],jump:[e,[[[8,7,60,-24,45,17],[39,39,26,96,43,70],[35,38,0,93,27,69],[51,-14,44,-8,50,-7]],[[0,8,60,0,31,31],[32,32,50,83,55,49],[31,33,3,82,30,62],[46,6,37,8,43,11]]],300,1],drop:[e,[[[1,23,61,15,32,47],[33,40,38,84,61,53],[29,38,8,82,41,62],[49,23,40,24,46,28]],[0,0,0,0]],150,1],fall:[e,[[[20,-5,74,23,32,32],[32,32,36,71,55,49],[31,33,-5,68,25,62],[60,20,52,16,54,22]]],300,1],die:[e,[[[3,56,27,27,31,58],[66,46,57,60,34,59],[-29,57,-8,49,7,59],[21,40,25,34,26,41]]],1e3,1],lowKick:[e,[[[-8,14,49,-6,27,30],[31,32,37,55,52,26],[27,33,3,82,26,61],[39,2,31,6,37,8]],[[-7,21,46,-8,30,32],[32,32,93,64,61,39],[31,33,-2,82,26,62],[36,3,28,7,34,9]],[0,0,0,0]],120,1],highKick:[e,[[[-15,13,42,-7,20,30],[25,31,31,53,45,24],[19,31,3,82,20,60],[32,1,23,5,29,7]],[[-7,21,46,-8,30,32],[43,27,105,1,65,5],[31,33,-2,82,26,62],[36,3,28,7,34,9]],[0,0,0,0]],120,1],backKick:[e,[[[-8,14,49,-6,27,30],[31,32,37,55,52,26],[27,33,3,82,26,61],[39,2,31,6,37,8]],[[8,2,-22,55,24,35],[23,40,4,83,5,54],[39,30,95,14,68,31],[-10,42,-4,34,-1,40]],[0,0,0,0]],120,1],headKick:[e,[[[-21,34,34,9,15,47],[18,47,51,85,44,56],[16,50,3,82,35,66],[26,16,18,20,23,21]],[[67,11,79,70,46,43],[46,46,32,83,68,70],[43,45,3,82,38,68],[75,62,73,53,71,58]]],120,1],sit:[[[[35,0,76,44,34,38],"","black",1],[[33,40,20,64,59,63],"","black",1],[[33,39,0,63,46,63],"","black",1],[[63,35,56,29,56,35],"","red",1]],[[[32,0,76,41,33,38],0,0,[62,34,55,28,55,35]],[0,0,0,[63,35,56,29,58,33]]],1e3,0]};let a,s=new d(...i.stay,300),n="stay",r=0,o=0;function h(){a&&(s=new d(...i[a]),n=a,a=null,o=0)}return{mirror:t=>{r=t},to:(t,e,c)=>{"walk"===t?sfx.run():"wall"===t?sfx.wall():"flying"===t&&sfx.flying(),n!==t&&("jump"===t?sfx.jump():"drop"===t?sfx.fall():"die"===t?sfx.die():"lowKick"===t?setTimeout(()=>{sfx.lowKick()},120):"highKick"!==t&&"backKick"!==t||setTimeout(()=>{sfx.highKick()},120),o&&!c?a=t:(s=new d(...i[t]),n=t,o=e))},r:(e,i)=>{let a=i||1;c.translate(e.x+t[0]/2,e.y+t[1]/2),c.scale(r?-a:a,-a),draw.r(s.n(),t),o&&s.isFinished()&&h()},rSplash:(e,i)=>{let a=i||1;c.translate(e.x+t[0]/2,e.y+t[1]/2),c.scale(r?-a:a,-a),draw.r(s.n(),t),o&&s.isFinished()&&h()}}})(),window.character=(()=>{let t=0,e=1;const i={jump:0,fight:{possible:1,started:0,startedTime:0,type:0}};let a,s={isDead:0,dying:0},n=100,r=100,o=0,h=0,l=new g;const d={x:60,y:83},w=new g(0,20);let y=0,p=0,x=+new Date;function f(t){s.dying||(t?particles.dying(a.get().add(new g(0,d.y)),[color.dying1,color.dying2,color.dying3,color.dying4]):particles.dying(a,[color.dying1,color.dying2,color.dying3,color.dying4]),l=new g,s.dying=1,setTimeout(()=>{s.isDead=1},1e3))}return{i:()=>{a=map.getStart().get()},reset:()=>{r=100,l=new g,a=map.getCharacterStart().get(),characterAnimations.mirror(0!==a.x),s={dying:0,isDead:0},characterAnimations.to("stay"),y=0,o=0,h=0},hit:t=>{r-=t,particles.dying(a,[color.dying1,color.dying2,color.dying3,color.dying4])},n:()=>{if(s.dying){characterAnimations.to("die",0,1);const t=l.get().normalize().mult(-.017);return t.add(gc.gravity.get().mult(.4)),l.add(t),a.add(l),0}r=r>=100?100:r+.02,n=n>=100?100:n+.3;const t=l.get().normalize().mult(-.017);t.add(gc.gravity.get().mult(.8)),control.pressed[0]?(t.add(new g(-1,0)),characterAnimations.mirror(1)):control.pressed[2]&&(t.add(new g(1,0)),characterAnimations.mirror(0)),l.add(t),l.x=Math.abs(l.x)<4?l.x:Math.abs(l.x)/l.x*4,a.add(l);const e=function(t){const e={touches:[],sides:[],isOverFan:0};return map.getMap().enemy.forEach(e=>{if(5===e.type){if(e.active&&!e.freeze.active){const a=e.center().distance(t.get().add(new g(d.x/2,d.y/2)));i.fight.started&&a<e.collisionRadius+20?e.contact(20):Math.abs(e.center().x-t.get().x)<350&&Math.abs(e.center().y-t.get().y)<=150?e.follow(1):e.following.active&&e.follow()}}else if(6===e.type){if(e.active&&!e.freeze.active){const a=e.center().distance(t.get().add(new g(d.x/2,d.y/2)));i.fight.started&&a<e.collisionRadius+20?e.contact(30):Math.abs(e.center().x-t.get().x)<450&&Math.abs(e.center().y-t.get().y)<=150?e.follow(1):e.following.active&&e.follow()}}else 7!==e.type&&8!==e.type&&e.center().distance(t.get().add(new g(d.x/2,d.y/2)))<e.collisionRadius+20&&f()}),map.getMap().map.forEach(i=>{if(i.active&&t.x+d.x>i.x&&t.x<i.x+i.w&&t.y<i.y+i.h&&t.y+d.y>i.y){const a=[i.y+i.h,i.x+i.w,i.y-d.y,i.x-d.x],s=[i.y+i.h-t.y,i.x+i.w-t.x,t.y+d.y-i.y,t.x+d.x-i.x],n=s.indexOf(Math.min(...s));e.sides.push(n),e.touches.push({side:n,type:i.type,intersect:a[n],velocity:i.getVelocity()}),4===i.type&&i.startFalling()}}),e}(a);e.touches.forEach(t=>{0===t.side&&l.y<=0&&(a.y=t.intersect,l.y=0,a.add(t.velocity),control.pressed[0]||control.pressed[2]||(2===t.type?l.x/=1.02:l.x/=2),Math.abs(l.x)>.1&&particles.addRunning(a,l)),0===t.type&&(1!==t.side&&3!==t.side||(a.x=t.intersect),2===t.side&&(a.y=t.intersect,l.y=l.y>=0?0:l.y))}),-1!==e.sides.indexOf(0)&&l.y<=0?(control.pressed[0]||control.pressed[2]?characterAnimations.to("walk"):characterAnimations.to("stay"),control.pressed[1]&&(i.jump||(l.add(w),characterAnimations.to("jump",0,1),i.jump=1)),i.jump&&!control.pressed[1]&&(i.jump=0),y&&(characterAnimations.to("drop",1),particles.addJump(a,l.x,p),p&&(scene.doShake(),map.getMap().enemy.forEach(t=>{5!==t.type&&6!==t.type||t.active&&!t.freeze.active&&t.center().distance(a.get().add(new g(d.x/2,d.y/2)))<300&&t.contact(50,1)})),y=0,p=0)):y=1,!e.sides.length&&l.y<0&&(e.isOverFan||characterAnimations.to("fall"),!control.pressed[1]||i.jump||y||(l.apply(new g(0,15)),characterAnimations.to("jump",0,1),i.jump=1)),!control.pressed[1]&&l.y>0&&(l.y/=1.2),a.x<0&&map.isFirst()?a.x=0:a.x+d.x<=0&&(h=1),a.y+d.y<0&&f(1),a.x>=map.getEnd().x+20&&(map.isEmpty()?o=1:a.x=map.getEnd().x+20),(control.pressed[0]||control.pressed[1]||control.pressed[2])&&(x=+new Date),control.pressed[3]&&i.fight.possible&&!i.fight.started&&(i.fight.possible=0,i.fight.started=1,i.fight.type=rInt(0,4),i.fight.startedTime=+new Date,l.x=0,0===i.fight.type?characterAnimations.to("lowKick",1,1):1===i.fight.type?characterAnimations.to("highKick",1,1):2===i.fight.type?characterAnimations.to("backKick",1,1):3===i.fight.type&&characterAnimations.to("headKick",1,1)),i.fight.started&&+new Date-i.fight.startedTime>300&&(i.fight.started=0),control.pressed[3]||(i.fight.possible=1),control.pressed[4]&&y&&100===n&&(l.add(new g(0,-20)),p=1,n=0),y||(p=0),r<=0&&f()},nFinal:()=>{if(t)e-=.004,e<0&&(e=0);else{characterAnimations.to("walk");const e=l.get().normalize().mult(-.017);e.add(new g(.1,0)),l.add(e),l.x=Math.abs(l.x)<4?l.x:Math.abs(l.x)/l.x*4,a.add(l),a.x>=1e3-d.x/2&&(a.x=1e3-d.x/2,t=1,characterAnimations.to("stay"),setTimeout(()=>{finalScene.i()},5e3))}},nSplashScreen:()=>{},r:()=>{c.save(),characterAnimations.r(a),c.restore()},rFinal:()=>{c.save(),c.globalAlpha=e,c.scale(1,1-e+1),characterAnimations.r(a),c.globalAlpha=1,c.restore()},rSplashScreen:()=>{c.save(),characterAnimations.to("sit"),characterAnimations.r(new g(380,270),1),c.restore()},size:()=>d,position:()=>a,isDead:()=>s.isDead,isDying:()=>s.dying,levelIsCompleted:()=>o,isGoingBack:()=>h,life:()=>r,maxLife:()=>100,stamina:()=>n,maxStamina:()=>100}})(),window.background=(()=>{let t=rInt(0,470),e=0,i=0;return{i:()=>{e=rInt(0,backgroundObjects.length)},reset:()=>{t=rInt(0,470),e=rInt(0,backgroundObjects.length),i=!!rInt(0,2)},set:t=>{e=backgroundObjects[e]?t:rInt(0,backgroundObjects.length)},n:()=>{},r:()=>{c.save(),c.translate(1100-t-camera.getPosition().x/2,370+camera.getPosition().y/2),c.globalAlpha=.75,c.scale(20,i?20:-20),draw.r(backgroundObjects[e],[102,36]),c.globalAlpha=1,c.restore()}}})(),window.foreground=(()=>{let t=rInt(0,470),e=0,i=0;return{i:()=>{e=rInt(0,backgroundObjects.length)},reset:()=>{t=rInt(0,470),e=rInt(0,backgroundObjects.length),i=!!rInt(0,2)},set:t=>{e=backgroundObjects[e]?t:rInt(0,backgroundObjects.length)},n:()=>{},r:()=>{c.save(),c.translate(1100-t-2*camera.getPosition().x,340+2*camera.getPosition().y),c.scale(40,i?40:-40),draw.r(backgroundObjects[e],[102,36]),c.restore()}}})(),window.backgroundObjects=[[[[0,36,4,31,6,19,7,29,10,32,13,30,16,34,20,29,24,19,27,21,28,25,25,28,29,30,35,28,39,31,46,31,49,28,49,17,50,27,53,29,56,31,60,30,69,32,77,27,79,17,80,27,83,30,96,30,102,32,102,36],"","black",1],[[0,1,3,4,6,19,7,3,11,4,15,1,18,3,25,2,29,5,31,17,31,3,35,2,41,3,44,8,50,5,55,8,59,5,57,15,60,11,59,7,62,6,68,3,75,6,79,17,80,5,84,2,85,5,94,7,102,2,102,0],"","black",1]],[[[0,36,4,31,4,20,7,29,11,25,13,30,16,34,20,29,21,25,24,22,28,25,25,28,29,30,35,19,39,31,46,31,41,21,46,23,51,20,53,29,57,25,60,30,69,32,77,27,83,22,89,23,83,30,96,30,102,26,102,36],"","black",1],[[0,1,3,4,9,17,9,9,11,4,15,10,18,3,25,2,25,6,31,17,34,8,35,2,41,3,44,8,50,5,55,8,59,5,57,15,63,12,70,13,62,6,68,3,75,6,78,9,80,5,83,20,85,5,94,4,103,9,102,0],"","black",1]],[[[0,36,2,29,6,28,9,32,11,25,16,29,16,34,20,29,21,25,23,31,28,25,26,30,29,30,34,28,39,31,46,31,48,28,47,23,51,20,53,27,57,25,60,30,68,26,77,27,83,22,89,23,95,25,96,30,102,26,102,36],"","black",1],[[0,1,3,4,5,9,9,9,11,4,15,10,18,3,25,2,25,6,30,5,34,8,35,2,41,3,44,8,50,5,55,8,59,5,59,10,63,12,65,9,64,5,68,3,75,6,78,9,80,5,83,12,85,5,94,4,103,9,102,0],"","black",1]]],window.objects=[[[[[12,50,0,33,4,13,32,0,58,18,48,50],"","black",1]],[58,50]],[[[[8,62,18,44,0,24,20,0,54,29,44,62],"","black",1]],[54,62]],[[[[18,62,0,52,29,32,30,1,47,0,64,30,47,44,54,62],"","black",1]],[64,62]],[[[[0,194,143,27,125,30,158,16,148,44,147,29,8,194],"","black",1],[[135,34,115,56,111,0],"","black",1],[[136,34,135,88,144,58],"","black",1],[[134,33,163,74,155,48],"","black",1],[[114,13,114,22,117,18],"","red",1]],[163,194]]],window.map=(()=>{const s=40;let c=0;const o=[[[0,0,17,50,1],[0,0,0,50,1],[0,0,1,1,16],[5,22,1,1,1],[8,42,14,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[0,13,12,1,1],[0,13,11,1,1],[0,13,10,1,1],[0,13,9,1,1],[0,13,8,1,1],[0,12,8,1,1],[0,11,8,1,1],[0,11,9,1,1],[0,17,12,1,1],[0,16,12,1,1],[0,15,12,1,1],[0,15,11,1,1],[0,15,10,1,1],[0,16,10,1,1],[0,17,10,1,1],[0,17,9,1,1],[0,17,8,1,1],[0,16,8,1,1],[0,15,8,1,1],[0,20,12,1,1],[0,20,11,1,1],[0,20,10,1,1],[0,20,9,1,1],[0,20,8,1,1],[0,22,12,1,1],[0,23,12,1,1],[0,24,12,1,1],[0,24,11,1,1],[0,24,10,1,1],[0,23,10,1,1],[0,22,10,1,1],[0,24,9,1,1],[0,24,8,1,1],[0,23,8,1,1],[0,22,8,1,1],[0,27,12,1,1],[0,27,11,1,1],[0,27,10,1,1],[0,27,9,1,1],[0,27,8,1,1],[0,28,10,1,1],[0,29,11,1,1],[0,29,12,1,1],[0,29,9,1,1],[0,29,8,1,1],[5,21,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[5,12,1,1,1],[1,6,5,6,1],[5,23,1,1,1],[1,15,7,5,1],[1,26,5,9,1]],[[0,0,0,50,1],[6,31,1,1,1],[0,0,17,50,1],[8,13,14,1,1],[8,31,14,1,1],[1,10,6,12,1],[1,32,7,7,1]],[[0,0,0,50,1],[0,0,17,50,1],[1,7,6,5,1],[1,14,8,5,1],[1,21,10,5,1],[7,33,14,1,1],[5,24,1,1,1],[5,37,1,1,1],[5,11,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[7,33,14,1,1],[5,37,1,1,1],[7,15,14,1,1],[8,24,14,1,1],[6,24,1,1,1],[0,15,6,19,1]],[[0,0,0,50,1],[0,0,17,50,1],[1,9,4,5,1,12,6],[6,10,1,1,1],[6,23,1,1,1],[6,29,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[3,38,1,1,1],[5,35,1,1,1],[5,41,1,1,1],[1,14,6,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[5,35,1,1,1],[5,41,1,1,1],[0,20,6,1,1],[0,11,6,1,1],[7,6,15,1,1],[5,26,1,1,1],[5,7,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[7,9,14,1,1],[7,23,14,1,1],[8,31,14,1,1],[7,40,14,1,1],[8,16,14,1,1],[6,28,1,1,1],[0,8,6,1,1],[0,14,8,1,1],[0,20,6,1,1],[0,26,8,1,1],[0,32,6,1,1],[0,37,8,1,1],[0,43,6,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[5,6,1,1,1],[5,11,1,1,1],[5,16,1,1,1],[5,22,1,1,1],[5,34,1,1,1],[5,29,1,1,1],[5,43,1,1,1],[1,7,6,3,1],[1,23,6,3,1],[1,37,6,3,1],[8,14,14,1,1],[8,31,14,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[5,6,1,1,1],[5,29,1,1,1],[5,43,1,1,1],[6,22,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[6,16,1,1,1],[6,33,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[6,13,1,1,1],[6,42,1,1,1],[5,23,1,1,1],[5,33,1,1,1],[7,22,14,1,1],[0,7,7,1,1],[0,43,7,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[1,3,6,6,1],[1,14,6,7,1],[1,26,6,10,1],[1,41,6,6,1],[7,7,14,1,1],[7,23,14,1,1],[7,40,14,1,1],[6,10,1,1,1],[6,25,1,1,1],[6,41,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1],[6,25,1,1,1],[6,13,1,1,1],[6,42,1,1,1],[5,11,1,1,1]],[[0,0,0,50,1],[0,0,17,50,1]],[[0,0,0,50,1]]],h=[[[[0,29,1],[1,14,1],[2,3,1],[4,22,1]],1,0],[[[1,14,1],[2,5,1],[3,43,1],[0,10,1],[0,31,1]],1,2],[[[0,14,1],[1,5,1],[1,27,1],[3,42,1]],1,1],[[[1,14,1],[3,7,1],[4,18,1]]],[[[0,10,1],[2,14,1],[4,41,1]]],[[[1,5,1],[2,18,1],[2,27,1],[3,36,1]]],[[[0,45,1],[1,5,1],[2,21,1],[4,29,1]]],[[[0,14,1],[1,5,1],[1,27,1],[3,42,1]]],[[[1,5,1],[2,18,1],[2,27,1],[3,36,1]]],[[[1,18,1],[3,7,1],[2,27,1],[3,31,1],[4,44,1]],2,0],[[[0,14,1],[1,5,1],[1,27,1],[3,42,1]],0,2],[[[1,2,1],[3,17,1],[2,20,1],[3,39,1],[4,10,1]]],[[[0,25,1],[1,3,1],[3,7,1],[3,13,1],[2,27,1],[3,31,1],[4,44,1]]],[[[1,5,1],[2,18,1],[2,27,1],[3,36,1]]],[[[0,29,1],[1,14,1],[2,3,1],[4,22,1]],2,0],[[[4,3,1],[4,16,1],[4,20,1],[4,25,1],[4,29,1],[4,39,1],[4,43,1]]],[[[4,3,1],[4,16,1],[4,20,1],[4,25,1],[4,29,1],[4,39,1],[4,43,1]]],[[]]];let l=0,d={map:[],enemy:[],additions:[],start:new g,end:new g};function w(){d={map:[],enemy:[],additions:[],start:new g(0,s),end:new g(1960,s)},o[c].forEach(n=>{5===n[0]?d.enemy.push(new i(n[0],n[1]*s,n[2]*s)):6===n[0]?d.enemy.push(new t(n[0],n[1]*s,n[2]*s)):7===n[0]||8===n[0]?d.enemy.push(new e(n[0],n[1]*s,n[2]*s)):2===n[0]?d.enemy.push(new i(n[0],n[1]*s,n[2]*s)):d.map.push(new a(n[0],n[1]*s,n[2]*s,n[3]*s,n[4]*s,(void 0!==n[5]?new g(n[5],n[6]):new g).get().mult(s)))}),h[c]&&(h[c][0].forEach(t=>{t[0]?d.additions.push(new r(t[0]-1,t[1]*s,t[2]*s)):d.additions.push(new n(t[1]*s,t[2]*s))}),void 0!==h[c][1]&&background.set(h[c][1]),void 0!==h[c][2]&&foreground.set(h[c][2]))}return{i:()=>{w()},reset:()=>{w()},n:()=>{d.map.forEach(t=>{t.n()}),d.enemy.forEach(t=>{t.active&&t.n()}),d.additions.forEach(t=>{t.n()})},r:()=>{d.map.forEach(t=>{t.r()}),d.enemy.forEach(t=>{t.active&&t.r()}),d.additions.forEach(t=>{t.r()})},getMap:()=>d,currentLevel:()=>c,nextLevel:t=>{l=-1===t,c+=t},getStart:()=>new g(380,280),getCharacterStart:()=>l?d.end:d.start,getEnd:()=>d.end,isFirst:()=>0===c,isLast:()=>c===o.length-1,isEmpty:()=>!d.enemy.filter(t=>t.active&&7!==t.type&&8!==t.type).length}})(),window.particles=function(){let t=[],e=+new Date;new Date;return{reset:()=>{t=[]},addRunning:(i,a)=>{if(+new Date-e<200)return 0;for(let e=0;e<2;e++)t.push(new h(rFloat(.1,.15),4,i.get(),new g(rFloat(-1,1),rFloat(.5,.5+a.x/5)),500,color.walking));e=+new Date},addJump:(e,i,a)=>{const s=a?30:5,n=a?3:1;for(let c=0;c<s;c++)t.push(new h(rFloat(.1,.15),5,e.get(),new g(rFloat(i-n,i+n),rFloat(.5,n)),a?1500:500,color.walking))},addFan:e=>{for(let i=0;i<1;i++)t.push(new h(rFloat(1e-4,15e-5),2,e.get().add(new g(rInt(0,100),rInt(0,20))),new g(0,rFloat(1,3)),2e3,color.walking))},dying:(e,i)=>{for(let a=0;a<30;a++)t.push(new h(rFloat(.1,.3),rInt(3,10),e.get(),new g(rFloat(.5,2)*Math.sin(rFloat(0,2*Math.PI)),rFloat(3,4)*Math.cos(rFloat(0,2*Math.PI))),500,i[rInt(0,i.length)]))},n:()=>{t=t.filter((function(t){return t.n(),t.isActive}))},r:()=>{t.forEach((function(t){t.r()}))}}}(),window.camera=(()=>{let t=new g,e=new g;return{reset:()=>{const e=character.position();t.apply(new g(e.x-gc.res.x/2,e.y-gc.res.y/2)),t.x<0&&(t.x=0),t.x+gc.res.x>map.getEnd().x+40&&(t.x=map.getEnd().x+40-gc.res.x),t.y<0&&(t.y=0)},n:()=>{const i=character.position();e.apply(new g(i.x-gc.res.x/2,0)),e.x<0&&(e.x=0),e.x+gc.res.x>map.getEnd().x+40&&(e.x=map.getEnd().x+40-gc.res.x),e.y<0&&(e.y=0),t.add(e.get().sub(t).mult(.05))},r:()=>{c.translate(-t.x,-t.y)},getPosition:()=>t}})(),window.finalScene=(()=>{const t=[[[8,52,11,72,16,36],"","black",1],[[75,36,86,53,80,72],"","black",1],[[39,35,56,35,67,72,26,72],"","rgba(255, 255, 255, .1)",1],[[51,0,0,36,97,37],"","black",1],[[36,17,15,30,33,29],"","red",1],[[65,17,82,31,67,29],"","red",1]];let e,i,a=0,s=new g(1e3,147),n=new g,r=0,o=3;return{i:()=>{a=1,i=+new Date,e=new d(t,[[0,0,[39,35,56,35,56,35,38,35],0,0,0],[[33,32,47,16,16,35],[76,36,56,34,46,16],[39,35,56,35,57,35,38,35],0,0,0]],2e3,1)},n:()=>{if(a&&+new Date-i>2500){r+=.01,r>Math.PI/4&&(r=Math.PI/4),o-=.01;const t=n.get().normalize().mult(-.017);t.add(new g(-.2,.1)),n.add(t),s.add(n)}},r:()=>{c.save(),c.translate(100,550),c.scale(1,-1),c.font="120px Courier New",c.textAlign="left",c.fillStyle="white",c.fillText("THE END",0,0),c.translate(0,100),c.font="60px Courier New",c.fillText("Thanks for playing!",10,0),c.restore(),c.save(),c.translate(s.x,s.y),c.scale(o,-o),c.rotate(r),draw.r(a?e.n():t,[97,72]),c.restore()},rBackground:()=>{let t=c.createLinearGradient(0,0,0,gc.res.y);t.addColorStop(0,"hsl(47, 95%, 80%)"),t.addColorStop(1,"hsl(47, 95%, 40%)"),c.save(),c.fillStyle=t,c.fillRect(0,0,gc.res.x,gc.res.y),c.restore()}}})(),window.scene=(()=>{let t,e={active:0,started:0,light:0};const i=new o;return{i:()=>{t=c.createLinearGradient(0,0,0,gc.res.y),t.addColorStop(0,"hsl(188, 96%, 90%)"),t.addColorStop(1,"hsl(188, 96%, 65%)"),background.i(),foreground.i(),map.i(),character.i()},doShake:t=>{e.active=1,e.light=!!t,e.started=+new Date},reset:()=>{background.reset(),foreground.reset(),map.reset(),character.reset(),particles.reset(),camera.reset()},n:()=>{background.n(),map.n(),map.isLast()?(character.nFinal(),finalScene.n()):gc.started&&character.n(),particles.n(),camera.n(),e.active&&+new Date-e.started>=300&&(e.active=0)},r:()=>{c.save(),c.fillStyle=t,c.fillRect(0,0,gc.res.x,gc.res.y),c.restore(),c.save(),e.active&&(e.light?(c.scale(1.02,1.02),c.translate(rInt(-2,2)-10,rInt(-2,2)-10)):(c.scale(1.05,1.05),c.translate(rInt(-5,5)-20,rInt(-5,5)-20))),map.isLast()?finalScene.rBackground():background.r(),camera.r(),map.r(),map.isLast()?(character.rFinal(),finalScene.r()):gc.started?(character.r(),map.currentLevel()||i.r()):(character.rSplashScreen(),i.rSplash()),particles.r(),map.currentLevel()||(c.save(),c.translate(570,540),c.scale(1,-1),c.font="80px Courier New",c.textAlign="left",c.fillStyle="black",c.fillText("[Triangle Man]",0,0),c.translate(50,100),c.font="60px Courier New",c.fillText("Escape",0,0),gc.started||(c.translate(0,310),c.font="30px Courier New",c.fillText("(Click to Start)",-30,0)),c.restore()),c.restore(),map.isLast()||foreground.r(),c.save(),c.translate(1250,20),c.scale(.3,.3),gc.muted?draw.r([[[0,23,0,59,30,59,55,75,55,0,30,24],"","white",1]],[55,75]):draw.r([[[0,27,0,64,30,63,55,80,55,4,30,28],"","white",1],[[59,28,60,57,65,57,64,28],"","white",1],[[66,18,67,64,71,64,71,19],"","white",1],[[73,8,75,72,80,72,79,8],"","white",1],[[83,0,84,81,89,81,87,0],"","white",1]],[89,81]),c.restore(),c.save(),c.translate(156,700),c.scale(1,-1),draw.r([[[2,3,0,29,68,30,282,26,290,0,132,3],"","white",1]],[290,30]),c.fillStyle="#A90011";const a=character.life()/character.maxLife()*275;c.fillRect(-140,-10,a<0?0:a,20),c.restore(),c.save(),c.translate(1135,700),c.scale(-1,-1),draw.r([[[2,3,0,29,68,30,282,26,290,0,132,3],"","white",1]],[290,30]),c.fillStyle="#0089FF";const s=character.stamina()/character.maxStamina()*275;c.fillRect(-140,-10,s<0?0:s,20),c.restore()}}})(),window.sfx=(()=>{let t=+new Date;function e(t,e,i){if(gc.muted)return 0;const a=gc.ac.createOscillator(),s=gc.ac.createGain();a.type="triangle",a.connect(s),s.connect(gc.ac.destination),a.frequency.value=t,a.start(0),s.gain.value=i||1,s.gain.exponentialRampToValueAtTime(1e-5,gc.ac.currentTime+(e||.5))}return{fall:()=>{e(43.65)},jump:()=>{e(82.41,.2)},run:()=>{+new Date-t<200||(e(146.83,.05,.4),t=+new Date)},wall:()=>{+new Date-t<100||(e(41.2,.2),t=+new Date)},die:()=>{e(61.74,3)},flying:()=>{+new Date-t<30||(e(27.5,.5),t=+new Date)},lowKick:()=>{e(82.41,.1)},highKick:()=>{e(89.41,.1)},shoot:()=>{e(51.91,.3)},bomb:()=>{e(89.41,1)}}})(),window.color={mechanics:"hsl(60, 100%, 15%)",walking:"hsl(224, 4%, 5%)",dying1:"hsl(15, 85%, 41%)",dying2:"hsl(15, 85%, 60%)",dying3:"hsl(15, 85%, 10%)",dying4:"hsl(15, 85%, 30%)",black:"#141212",ice:"#001933",life:"red",stamina:"#023609",power:"yellow",white:"#D9D9D0"},window.draw=(()=>{let t="transparent";return{r:(e,i,a)=>{c.save(),i&&c.translate(-i[0]/2,-i[1]/2),e.forEach(e=>{bp(),c.fillStyle=color[e[2]]||e[2]||t,c.strokeStyle=color[e[1]]||e[1]||t,c.lineWidth=e[3]?.001:a,c.lineJoin="round",m(e[0][0],e[0][1]);for(let t=2;t<e[0].length;t+=2)l(e[0][t],e[0][t+1]);e[3]&&cp(),e[1]&&c.stroke(),e[3]&&c.fill()}),c.restore()}}})();