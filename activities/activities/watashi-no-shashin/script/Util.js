var Util={Rnd:function(e,t){return parseInt(Math.random()*(t-e))+e},Lerp:function(e,t,n){return(t-e)*n+e}},ObjectPool=function(){var n=[];return{Add:function(e){for(var t=0;t<n.length;t++)if(0==n[t].enabled)return n[t]=e,n[t];n.push(e)},Get: function(){ return n.filter(l => l.enabled);}, Count: function(all){return (all) ? n : n.filter(l => l.enabled).length;} }},Const={game:{friction:6,mobFont:"12px Arial",h1Font:"bold 48px Arial",h2Font:"24px Arial",h3Font:"16px Arial"},actors:{player:1,shopr:2,troll:3,hater:4},txts:{msgs:["At the mall, lol","Really need the loo","Ive been here for ages","Just seen @BrianHambo3","Need a charge point, lol","Outside Pret lol","Going to get new shoes","Where can I get a doughnut","I always wanted to be a lumberjack"]}};