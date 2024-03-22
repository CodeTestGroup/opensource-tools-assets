import{stopTune,playStartsound,playGameOversound,playWonTune,playLooseTune,playTune}from"./sound.js";import Asteroid from"./asteroid.js";import Ship from"./ship.js";import{requestWakeLock,releaseWakeLock}from"./no-sleep.js";const startButton=document.querySelector("button"),legend=document.querySelector("ul"),statusBar=document.querySelector(".statusBar"),instructions=document.querySelector(".instructions"),levelLabel=document.querySelector("h2"),gameOverLabel=document.querySelector("h3"),canvas=document.querySelector("canvas");canvas.setAttribute("height",window.innerHeight),canvas.setAttribute("width",window.innerWidth);const ctx=canvas.getContext("2d"),NUMBER_OF_ASTEROIDS=30,NUMBER_OF_NEW_ASTEROIDS=5,NUMBER_OF_POWER_UPS=5,NUMBER_OF_POINTS=10;let speed,score,cycles,level,gameOver=!0,asteroids=[];const powerUps=new Array(NUMBER_OF_POWER_UPS).fill(0).map(()=>new Asteroid("life.png",ctx)),points=new Array(NUMBER_OF_POINTS).fill(0).map(()=>new Asteroid("point.png",ctx)),ship=new Ship(ctx),checkCollided=e=>e.find(({posX:e,posY:s,radius:t})=>{const a=[[e,s],[e+t,s],[e,s+t],[e+t,s+t]];return a.some(([e,s])=>e>=ship.posX&&e<=ship.posX+ship.width&&s>=ship.posY&&s<=ship.posY+ship.height)}),drawText=()=>{statusBar.innerHTML=`<span>Lives:<span class="space"></span>${ship.lives}</span><span>Litter:<span class="space"></span>${score}</span><span>Level:<span class="space"></span>${level}</span>`},showLevelLabel=e=>{levelLabel.innerHTML=`level<span class="space"></span>${e}`,levelLabel.classList.remove("hidden"),setTimeout(()=>{levelLabel.classList.add("hidden")},800)},loop=async()=>{if(ctx.clearRect(0,0,canvas.width,canvas.height),ship.draw(),drawText(),window.requestAnimationFrame(loop),!gameOver){if(0===ship.lives)return gameOverLabel.classList.remove("hidden"),startButton.classList.remove("hidden"),stopTune(),ship.stop(),navigator.vibrate(400),gameOver=!0,void releaseWakeLock();cycles++,cycles%1500==0&&(level++,speed++,showLevelLabel(level),asteroids=asteroids.concat(new Array(NUMBER_OF_NEW_ASTEROIDS).fill(0).map(()=>new Asteroid("asteroid.png",ctx))),asteroids.forEach(e=>e.init(speed+Math.random()))),asteroids.forEach(e=>e.move()),powerUps.forEach(e=>e.move()),points.forEach(e=>e.move());const e=checkCollided(asteroids);e&&(ship.explode(),navigator.vibrate(200),(0<ship.lives?playLooseTune:playGameOversound)(),e.init(speed));const s=checkCollided(powerUps);s&&(ship.addLife(),playWonTune(),s.init(speed));const t=checkCollided(points);t&&(score++,playWonTune(),t.init(speed))}},start=()=>{gameOverLabel.classList.add("hidden"),startButton.classList.add("hidden"),instructions.classList.add("hidden"),statusBar.hidden=!1,legend.hidden=!1,score=0,speed=4,level=1,cycles=0,gameOver=!1,asteroids=new Array(NUMBER_OF_ASTEROIDS).fill(0).map(()=>new Asteroid("asteroid.png",ctx)),requestWakeLock(),playStartsound(),playTune(),ship.init(),showLevelLabel(level),asteroids.forEach(e=>e.init(speed+Math.random())),powerUps.forEach(e=>e.init(1.1*speed+Math.random())),points.forEach(e=>e.init(1.2*speed+Math.random()))};loop(),startButton.addEventListener("click",start);