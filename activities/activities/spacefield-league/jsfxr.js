(()=>{function a(){this.ss=(a)=>{for(var b=0;24>b;b++)this[String.fromCharCode(97+b)]=a[b]||0;.01>this.c&&(this.c=.01);var c=this.b+this.c+this.e;if(.18>c){var d=.18/c;this.b*=d,this.c*=d,this.e*=d}}}var b=new function(){this._p=new a;var b,c,d,e,f,g,h,k,l,m,o,q;this.reset=()=>{var a=this._p;e=100/(a.f*a.f+.001),f=100/(a.g*a.g+.001),g=1-.01*(a.h*a.h*a.h),h=1e-6*(-a.i*a.i*a.i),a.a||(o=.5-a.n/2,q=5e-5*-a.o),k=1+a.l*a.l*(0<a.l?-.9:10),l=0,m=1==a.m?0:2e4*((1-a.m)*(1-a.m))+32},this.tr=()=>{this.reset();var a=this._p;return b=1e5*(a.b*a.b),c=1e5*(a.c*a.c),d=1e5*(a.e*a.e)+12,3*(0|(b+c+d)/3)},this.sw=(a,r)=>{var s=this._p,p=1!=s.s||s.v,t=.1*(s.v*s.v),u=1+3e-4*s.w,v=.1*(s.s*s.s*s.s),w=1+1e-4*s.t,x=1!=s.s,y=s.x*s.x,z=s.g,A=s.q||s.r,B=.2*(s.r*s.r*s.r),C=s.q*s.q*(0>s.q?-1020:1020),D=s.p?(0|2e4*((1-s.p)*(1-s.p)))+32:0,E=s.d,F=s.j/2,G=.01*(s.k*s.k),H=s.a,I=b,J=1/b,K=1/c,L=1/d,M=5/(1+20*(s.u*s.u))*(.01+v);.8<M&&(M=.8),M=1-M;for(var N,O,P,Q,R,S,T=!1,U=0,V=0,W=0,X=0,Y=0,Z=0,$=0,_=0,aa=0,ba=0,ca=Array(1024),da=Array(32),ea=ca.length;ea--;)ca[ea]=0;for(var ea=da.length;ea--;)da[ea]=2*Math.random()-1;for(var ea=0;ea<r;ea++){if(T)return ea;if(D&&++aa>=D&&(aa=0,this.reset()),m&&++l>=m&&(m=0,e*=k),g+=h,e*=g,e>f&&(e=f,0<z&&(T=!0)),O=e,0<F&&(ba+=G,O*=1+Math.sin(ba)*F),O|=0,8>O&&(O=8),H||(o+=q,0>o?o=0:.5<o&&(o=.5)),++V>I)switch(V=0,++U){case 1:I=c;break;case 2:I=d;}0==U?W=V*J:1==U?W=1+2*(1-V*K)*E:2==U?W=1-V*L:3==U?(W=0,T=!0):void 0,A&&(C+=B,P=0|C,0>P?P=-P:1023<P&&(P=1023)),p&&u&&(t*=u,1e-5>t?t=1e-5:.1<t&&(t=.1)),S=0;for(var i=8;i--;){if($++,$>=O&&($%=O,3==H))for(var j=da.length;j--;)da[j]=2*Math.random()-1;0===H?R=$/O<o?.5:-.5:1===H?R=1-2*($/O):2===H?(Q=$/O,Q=6.28318531*(.5<Q?Q-1:Q),R=1.27323954*Q+.405284735*Q*Q*(0>Q?1:-1),R=.225*((0>R?-1:1)*R*R-R)+R):3===H?R=da[Math.abs(0|32*$/O)]:void 0,p&&(N=Z,v*=w,0>v?v=0:.1<v&&(v=.1),x?(Y+=(R-Z)*v,Y*=M):(Z=R,Y=0),Z+=Y,X+=Z-N,X*=1-t,R=X),A&&(ca[_%1024]=R,R+=ca[(_-P+1024)%1024],_++),S+=R}S*=.125*W*y,a[ea]=1<=S?32767:-1>=S?-32768:0|32767*S}return r}};window.jsfxr=(c)=>{b._p.ss(c);var d=b.tr(),e=new Uint8Array(4*(0|(d+1)/2)+44),f=2*b.sw(new Uint16Array(e.buffer,44),d),g=new Uint32Array(e.buffer,0,44);g[0]=1179011410,g[1]=f+36,g[2]=1163280727,g[3]=544501094,g[4]=16,g[5]=65537,g[6]=44100,g[7]=88200,g[8]=1048578,g[9]=1635017060,g[10]=f,f+=44;for(var h=0,i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',j='data:audio/wav;base64,';h<f;h+=3){var k=e[h]<<16|e[h+1]<<8|e[h+2];j+=i[k>>18]+i[63&k>>12]+i[63&k>>6]+i[63&k]}return j}})();