function start_game(e){isLoaded&&!isRunning&&"Enter"==e.code?(canvas.style.backgroundColor="lightblue",text_box.innerHTML="",loop.start()):isLoaded&&isOver&&"Enter"==e.code&&(canvas.style.backgroundColor="lightblue",text_box.innerHTML="",isRunning=!1,reset())}kontra.init(),kontra.initKeys(),kontra.setImagePath("assets/images"),kontra.setAudioPath("assets/sounds"),kontra.load("run.png","cactus.png","totem.png","rock.png","coin.png").then(function(){screen_write(1);var e=kontra.SpriteSheet({image:kontra.imageAssets.run,frameWidth:16,frameHeight:15,animations:{walk:{frames:"0..1",frameRate:10},jump:{frames:0,frameRate:30}}}),t=kontra.Sprite({x:width/2-8,y:height-50,animations:e.animations}),n=kontra.Sprite({x:0,y:height-35,color:"green",height:50,width:width});y_origin=t.y,spawner_ground=y_origin,spawner_max=y_origin-24,loop=kontra.GameLoop({update:function(){if(isRunning?isOver&&(t.y=y_origin,isOver=!1):(isRunning=!0,talk(dialogue_intro1)),time++,kontra.keyPressed("up")?jump(t):stop_jump(),t.y<y_origin?gravity(t):t.y==y_origin&&jump_cooloff(t),time%coin_period==0){var e=spawn_obstacle(1);collects.push(e)}if(time%spawn_period==0){score++;var i=spawn_obstacle(0);obstacles.push(i)}else time%talk_period==0&&talk_decision();t.update(),n.update(),obstacles.forEach(function(e,i){e.update(),e.collidesWith(t)?screen_write(2):e.x>=width+e.width&&(count_score(e),obstacles.splice(i,1))}),collects.forEach(function(e,i){e.update(),e.collidesWith(t)?(count_score(e),collects.splice(i,1)):e.x>=width+e.width&&collects.splice(i,1)}),score_html.innerHTML=score,check_score()},render:function(){if(n.render(),t.render(),obstacles.length>0)for(i=0;i<obstacles.length;i++)obstacles[i].render();if(collects.length>0)for(i=0;i<collects.length;i++)collects[i].render()}}),isLoaded=!0}),document.addEventListener("keyup",function(e){start_game(e)});