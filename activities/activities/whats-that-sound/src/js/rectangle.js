var Rectangle=function(a,b,c,d){this.left=void 0===a?0:a;this.top=void 0===b?0:b;this.width=void 0===c?0:c;this.height=void 0===d?0:d;this.right=this.left+this.width;this.bottom=this.top+this.height};Rectangle.prototype.set=function(a,b,c,d){this.left=a;this.top=b;this.width=c||this.width;this.height=d||this.height;this.right=this.left+this.width;this.bottom=this.top+this.height};
Rectangle.prototype.intersectsWith=function(a){return a.left<this.right&&this.left<a.right&&a.top<this.bottom&&this.top<a.bottom};Rectangle.prototype.within=function(a){return a.left<=this.left&&a.right>=this.right&&a.top<=this.top&&a.bottom>=this.bottom};
