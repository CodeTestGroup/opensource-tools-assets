function P(a,b,c,d,e){this.r=c,this.c=[a,b],this.c0=[a,b],this.t=0,this.ti=0,this.ty=d,this.co=e,this.u=function(){switch(this.ty){case 1:this.c[1]-=1;break;case 2:this.ti+=.02,this.c=[this.c0[0]+50*Math.sin(this.ti),this.c0[1]+50*Math.cos(this.ti)];break;case 3:this.ti+=.03,this.c=[this.c0[0]-30*Math.sin(this.ti),this.c0[1]+30*Math.cos(this.ti)];break;case 4:this.ti+=.03,this.c=[this.c0[0],50*Math.sin(this.ti)+this.c0[1]];break;case 5:this.ti+=.03,this.c=[50*Math.sin(this.ti)+this.c0[0],this.c0[1]];break;case 6:this.ti+=.03,this.c=[this.c0[0]-100*Math.sin(this.ti),this.c0[1]+100*Math.cos(this.ti)]}}}function E(a,b,c,d){this.r=c,this.c=[a,b],this.co=d,this.d=0}function A(a,b,c){this.r=10,this.c=[a,b],this.t=0,this.j=0,this.v=[0,0],this.p=c,this.d=0,this.x0=0,this.u=function(a){0!=this.j?(g=[0,0],G=50,player=this,a.forEach(function(a){gM=G*a.r/(Math.pow(a.c[0]-player.c[0],2)+Math.pow(a.c[1]-player.c[1],2)),gu=[a.c[0]-player.c[0],a.c[1]-player.c[1]],gu[0]/=Math.sqrt(gu[0]*gu[0]+gu[1]*gu[1]),gu[1]/=Math.sqrt(gu[0]*gu[0]+gu[1]*gu[1]),gu[0]*=gM,gu[1]*=gM,g[0]+=gu[0],g[1]+=gu[1]}),0==this.x0&&(this.x0=this.c,this.c[0]+=30*.05*this.v[0],this.c[1]+=30*3*.05*this.v[1],this.v[0]+=.05*g[0],this.v[1]+=.05*g[1]),this.c[0]+=30*.05*this.v[0],this.c[1]+=30*.05*this.v[1],this.v[0]+=.05*g[0],this.v[1]+=.05*g[1]):(this.c[0]=Math.floor(-(this.p.r+this.r)*Math.sin(this.t)+this.p.c[0]),this.c[1]=Math.floor(-(this.p.r+this.r)*Math.cos(this.t)+this.p.c[1]))}}function ls(a){a.clearRect(0,0,W,H),a.fillStyle="rgb(250, 250, 250)",a.font="24px Helvetica",a.textAlign="left",a.textBaseline="top",a.fillText("You were lost into the deep space!",100,130),a.fillText("There's nothing out there... but you.",100,180),a.fillStyle="rgb(250, 0, 0)",a.font="18px Helvetica",a.fillText("Press any button to start again",160,250)}function u(b){k="which"in b?b.which:b.keyCode,(39==k||37==k&&1==play)&&(a.d=0)}function d(b){-1!=play&&(0==play?(lvl(lv),play=1):(k="which"in b?b.which:b.keyCode,39==k&&0==a.j&&(a.d=-1),37==k&&0==a.j&&(a.d=1),38==k&&0==a.j&&(a.j=1,a.d=0,a.t=0,a.v=[(a.c[0]-a.p.c[0])/a.p.r,(a.c[1]-a.p.c[1])/a.p.r],a.p=0)))}function setStars(a){for(var b=1;50>b;b++)a.save(),a.fillStyle="#fff",a.translate(Math.floor(Math.random()*W),Math.floor(Math.random()*H)),drawStar(a,Math.floor(4*Math.random())+2),a.restore()}function drawStar(a,b){a.save(),a.beginPath(),a.fillStyle="rgba(255,255,255,0.5)",a.moveTo(b,0);for(var c=0;9>c;c++)a.rotate(Math.PI/5),0==c%2?a.lineTo(.200811*(b/.525731),0):a.lineTo(b,0);a.closePath(),a.fill(),a.restore()}function move(){if(0!=a.j)for(a.t+=.05,i=0;i<p.length;i++)Math.sqrt(Math.pow(a.c[0]-p[i].c[0],2)+Math.pow(a.c[1]-p[i].c[1],2))<=p[i].r+a.r-5&&(a.p=p[i],dr=[a.c[0]-a.p.c[0],a.c[1]-a.p.c[1]],a.t=Math.atan2(dr[0],dr[1])+Math.PI,a.j=0,a.d=1,a.u(p),a.d=0,a.x0=0);else 0!=a.d&&(a.t+=.05*a.d);a.u(p),(a.c[0]+a.r<0||a.c[0]-a.r>W||a.c[1]+a.r<0||a.c[1]-a.r>H)&&0!=a.j&&(play=0),el.forEach(function(b){if(0==b.d&&Math.pow(a.c[0]-b.c[0],2)+Math.pow(a.c[1]-b.c[1],2)<=Math.pow(a.r+b.r,2)){got+=1,b.c=[30+(b.r+10)*got,30],b.d=1;var c=new Audio("a.wav");c.play(),4==got&&(lv+=1,setTimeout(function(){lvl(lv)},4e3))}})}function nlvl(a){a.clearRect(0,0,W,H),a.fillStyle="rgb(250, 250, 250)",a.font="24px Helvetica",a.textAlign="center",a.textBaseline="bottom",lvv=lv-1,text="LEVEL "+lvv+" COMPLETED!",a.fillText(text,.5*W,.5*H)}function lvl(b){switch(p=[],el=[],got=0,b){case 1:p.push(new P(100,200,50,0,1)),p.push(new P(500,300,200,0,3)),a=new A(100,145,p[0]),el.push(new E(45,200,5,1)),el.push(new E(500,95,5,2)),el.push(new E(295,300,5,3)),el.push(new E(335,170,5,4));break;case 2:p.push(new P(50,200,100,0,2)),p.push(new P(250,400,60,0,1)),p.push(new P(250,0,60,0,3)),a=new A(100,145,p[0]),el.push(new E(150,300,5,1)),el.push(new E(150,80,5,2)),el.push(new E(250,150,5,3)),el.push(new E(250,250,5,4));break;case 3:p.push(new P(300,80,50,0,1)),p.push(new P(50,400,150,0,3)),p.push(new P(500,400,50,1,3)),a=new A(100,145,p[0]),el.push(new E(500,100,5,1)),el.push(new E(470,150,5,2)),el.push(new E(250,150,5,3)),el.push(new E(300,375,5,4));break;case 4:p.push(new P(300,200,40,2,2)),p.push(new P(350,300,40,2,2)),p.push(new P(400,50,20,3,1)),p.push(new P(500,100,20,4,3)),a=new A(100,145,p[0]),el.push(new E(450,200,5,1)),el.push(new E(500,150,5,2)),el.push(new E(250,150,5,3)),el.push(new E(300,375,5,4));break;case 5:p.push(new P(50,380,100,0,2)),p.push(new P(300,200,60,2,3)),p.push(new P(50,110,30,4,1)),a=new A(100,145,p[0]),el.push(new E(50,480,5,1)),el.push(new E(250,150,5,2)),el.push(new E(200,180,5,3)),el.push(new E(300,375,5,4));break;case 6:p.push(new P(120,200,60,3,2)),p.push(new P(300,300,40,2,1)),p.push(new P(300,50,40,5,1)),p.push(new P(500,250,50,2,1)),a=new A(100,145,p[0]),el.push(new E(400,150,5,1)),el.push(new E(250,150,5,2)),el.push(new E(325,150,5,3)),el.push(new E(300,375,5,4));break;case 7:p.push(new P(50,385,100,0,3)),p.push(new P(50,50,100,0,3)),p.push(new P(650,385,100,0,3)),p.push(new P(600,50,100,0,3)),p.push(new P(300,260,100,4,2)),a=new A(100,145,p[0]),el.push(new E(50,-50,5,1)),el.push(new E(650,485,5,2)),el.push(new E(600,-50,5,3)),el.push(new E(300,410,5,4));break;case 8:p.push(new P(100,200,20,0,3)),p.push(new P(100,200,10,6,2)),p.push(new P(500,200,20,0,3)),p.push(new P(500,200,10,6,2)),a=new A(100,145,p[0]),el.push(new E(100,310,5,1)),el.push(new E(500,310,5,2)),el.push(new E(500,230,5,3)),el.push(new E(300,350,5,4));break;case 9:p.push(new P(50,200,100,0,2)),p.push(new P(250,400,60,1,1)),p.push(new P(250,600,60,1,1)),p.push(new P(250,800,60,1,1)),p.push(new P(250,1e3,60,1,1)),p.push(new P(250,1200,60,1,1)),p.push(new P(250,1400,60,1,1)),p.push(new P(250,0,60,1,3)),a=new A(100,145,p[0]),el.push(new E(150,300,5,1)),el.push(new E(150,80,5,2)),el.push(new E(250,150,5,3)),el.push(new E(250,250,5,4));break;default:play=-1}}function init(){lv=1,play=1,lvl(lv),main()}var render=function(){ctx.clearRect(0,0,W,H),ctx.drawImage(m_canvas,0,0),ctx.save(),p.forEach(function(a){ctx.save();var b=ctx.createRadialGradient(a.c[0],a.c[1],10,a.c[0],a.c[1],a.r+5);switch(a.co){case 1:b.addColorStop(0,"#8A4B08"),b.addColorStop(1,"#3B170B");break;case 2:b.addColorStop(0,"#6E6E6E"),b.addColorStop(1,"#2E2E2E");break;case 3:b.addColorStop(0,"#886A08"),b.addColorStop(1,"#3A2F0B")}ctx.fillStyle=b,ctx.beginPath(),ctx.arc(a.c[0],a.c[1],a.r,0,2*Math.PI),ctx.strokeStyle="rgba(0,0,0,0)",ctx.fill(),ctx.stroke(),ctx.restore()}),el.forEach(function(a){switch(ctx.save(),ctx.beginPath(),ctx.arc(a.c[0],a.c[1],a.r,0,2*Math.PI),ctx.strokeStyle="rgba(0,0,0,0)",ctx.strokeStyle="#F6E3CE",a.co){case 1:ctx.fillStyle="red";break;case 2:ctx.fillStyle="#0174DF";break;case 3:ctx.fillStyle="#8A4B08";break;case 4:ctx.fillStyle="#BDBDBD"}ctx.fill(),ctx.stroke(),ctx.restore()}),ctx.save(),ctx.beginPath(),ctx.arc(a.c[0],a.c[1],a.r,0,2*Math.PI),ctx.strokeStyle="rgba(0,0,0,0)",ctx.strokeStyle="#F6E3CE",ctx.fillStyle="orange",ctx.fill(),ctx.stroke(),ctx.restore()},main=function(){if(-1==play)ctx.clearRect(0,0,W,H),ctx.fillStyle="rgb(250, 250, 250)",ctx.font="24px Helvetica",ctx.textAlign="left",ctx.textBaseline="top",ctx.fillText("You've completed all the levels",130,180);else if(1==play)if(4==got)nlvl(ctx);else{for(move(ctx),i=0;i<p.length;i++)p[i].u();render()}else ls(ctx);requestAnimationFrame(main)},c=document.createElement("canvas"),ctx=c.getContext("2d");H=400,W=600,c.height=H,c.width=W,document.body.appendChild(c);var m_canvas=document.createElement("canvas");m_canvas.width=W,m_canvas.height=H;var m_context=m_canvas.getContext("2d");setStars(m_context);var then=Date.now(),p=[],a,play=-1,el=[],got=0,lv=1;ctx.fillStyle="rgb(250, 250, 250)",ctx.font="24px Helvetica",ctx.textAlign="left",ctx.textBaseline="top",ctx.fillText("Go through the planets, and pick the 4",80,130),ctx.fillText("elements that you may find to win points.",80,180),ctx.fillText("Some elements might be 'hidden'.",100,230),ctx.fillText("Use the arrows to move in the planet",90,280),setTimeout(init,4e3);