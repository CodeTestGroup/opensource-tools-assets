var Menu=function(){var e=function(){};return e.prototype.bind=function(e,t){this.view=t,this.game=e,this.setListeners()},e.prototype.show=function(e){this.view.classList.remove("display-none")},e.prototype.hide=function(){this.view.classList.add("display-none")},e.prototype.setScore=function(e){this.view.querySelector("#score-panel").textContent=e},e.prototype.setListeners=function(){var e=this;this.view.querySelector("#resume-btn").addEventListener("click",function(t){e.game.start(),e.hide()}),this.view.querySelector("#start-btn").addEventListener("click",function(t){e.game.start(),e.hide()}),this.view.querySelector("#restart-btn").addEventListener("click",function(t){e.game.restart(),e.game.start(),e.hide()})},e}(),game=new Game;game.init(new Container,new Control,new Menu,12,16,30,{target:document.querySelector("#game"),energy:document.querySelector("#combo"),score:document.querySelector("#score"),next:document.querySelectorAll(".sidebar__element__next__block"),menu:document.querySelector("#menu")});