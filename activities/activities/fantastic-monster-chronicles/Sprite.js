var MAXSPEED=128,Sprite=function(t,i,h,e,o,r,s){this.ctx=t,this.image=i,this.tileId=h,this.width=e,this.height=o,this.x=r,this.y=s};Sprite.prototype.update=function(t){},Sprite.prototype.render=function(){var t=this.tileId%4,i=Math.floor(this.tileId/4),h=t*this.width,e=i*this.height;ctx.drawImage(this.image,h,e,this.width,this.height,this.x,this.y,this.width,this.height)},Sprite.prototype.intersects=function(t,i){return!(i.left>t.right||i.right<t.left||i.top>t.bottom||i.bottom<t.top)},Sprite.prototype.bounds=function(){var t={};return t.left=this.x,t.top=this.y,t.right=this.x+this.width,t.bottom=this.y+this.height,t},Sprite.prototype.newCollisionMask=function(t,i,h,e){var o={};return o.left=t,o.top=i,o.right=t+h,o.bottom=i+e,o},Sprite.prototype.collided=function(t,i){for(var h=!1,e=0;e<t.length;e++){var o=t[e];if(this.intersects(i,o.bounds())){h=!0;break}}return h};