'use strict';var h;Array.i=function(...a){return(a[0]||[]).map((b,d)=>a.map((a)=>a[d]))};h=Array.prototype;h.i=function(...a){return Array.i(this,...a)};h.G=function(){return this.reduce((a,b)=>a+b,0)};h.product=function(){return this.reduce((a,b)=>a*b,1)};h.add=function(...a){return this.i(...a).map((a)=>a.G())};h.B=function(){return this.map((a)=>-a)};h.sub=function(a){return this.add(a.B())};h.scale=function(a){return this.map((b)=>b*a)};h.h=function(...a){return Array.h(this,...a)};
h.A=function(){return this.reduce((a,b)=>a.concat(b),[])};Array.h=function(a,...b){return void 0===a?[[]]:a.map((a)=>Array.h(...b).map((b)=>[a,...b])).A()};Array.prototype.w=function(){return Array(Math.ceil(this.length/2)).fill().map((a,b)=>this.slice(2*b,2*b+2))};Number.prototype.a=function(){return(this%1024+1024)%1024};const m=([a,b],[d,c])=>[a+d,b+c],t=([a,b])=>[-a,-b],u=(a,b)=>m(a,t(b)),w=([a,b])=>Math.sqrt(a*a+b*b),x=([a,b],[d,c])=>{var [e,k]=[0,0];return e<=a&&a<d&&k<=b&&b<c},y=(a,b)=>b.add(a).scale(.03125).map(Math.floor);function z(a,b,d,c){this.source=a;this.g=b;this.offset=d||[0,0];this.size=c||m(b,t(this.offset))}h=z.prototype;h.keys=function*(){for(let a=0;a<this.size[0];a++)for(let b=0;b<this.size[1];b++)yield[a,b]};function B([a,b],[,d]){return a*d+b}h.get=function(a){if(!(0>a[0]||a[0]>this.size[0]||0>a[1]||a[1]>this.size[1]))return this.source[B(m(a,this.offset),this.g)]};h.set=function(a,b){0>a[0]||a[0]>this.size[0]||0>a[1]||a[1]>this.size[1]||(this.source[B(m(a,this.offset),this.g)]=b)};
h.update=function(a,b){this.set(a,b(this.get(a),a))};h.shift=function(a){return new z(this.source,this.g,m(this.offset,a),m(this.size,t(a)))};h.F=function(a){return new z(this.source,this.g,this.offset,a)};h.window=function(a,b){return this.shift(a).F(b)};h.toJSON=function(){return Array.from(this.keys()).map((a)=>this.get(a))};function C(a){this.v=a;this.origin=[0,0];this.size=[0,0];this.data=[]}let D=([a,b],[,d])=>a*d+b;C.prototype.get=function(a){return this.data[D(m(a,t(this.origin)),this.size)]};C.prototype.m=function(a,b,d){for(let c=0;c<d[0];c++)for(let e=0;e<d[1];e++){let k=[c,e],f=m(m(k,b),t(this.origin));x(f,this.size)&&(this.data[D(f,this.size)]=a[D(k,d)])}};C.prototype.b=function(a,b){let d=this.data,c=this.origin,e=this.size;this.data=Array(b[0]*b[1]).fill();this.origin=a;this.size=b;this.m(d,c,e)};
C.prototype.update=function(a,b){a=a||this.origin;b=b||this.size;return fetch(`${this.v}/${a[0]}/${a[1]}/${b[0]}/${b[1]}/`).then((a)=>a.json()).then((d)=>this.m(d,a,b))};const E=Uint8Array.from("0061736d01000000013c0c6000017d6000017c60027f7d0060027f7f0060047f7f7f7f0060027f7f017d60000060027d7d017d60047f7f7f7d0060017f0060017d006000017f022e0403656e760672616e646f6d000103656e76036c6f67000903656e76046c6f6766000a03656e7604706f77660007030d0c000203040504060706080b060504010091030609017f0141f08ac00c0b074a06066d656d6f7279020004696e6974000a047469636b000c0f6164645f696e737472756374696f6e000d0761646472657373000e13727573745f65685f706572736f6e616c697479000f0aa7160c05001000b60b3301017d200020002a02002202430000704143000070c1200220015e1b92220220022001200220015d1b200120015c1b3802000b6501027f230041106b220224002000027f200128020822032001410c6a280200470440200141086a200341016a360200200241086a2001280200200141046a28020020032d000010072000200229030837020441010c010b41000b360200200241106a24000b2f0020002003411874411875410274220341c0086a28020020026a3602042000200341a0086a28020020016a3602000b2b002000410a744180f83f71200141ff077172410274220041e0086a2a0200200041e08880026a2a0200920bf30101037d200020011008200220031008932204430000000020044300000000601b2106430000803f21042000410a744180f83f71200141ff077172410274220041e08880026a22012a0200220543000000005e4504402005430000404095430000803f922204430000803f2004430000803f5d1b2204430000000020044300000000601b21040b20012005200620049443cdcccc3e942204933802002002410a744180f83f71200341ff077172410274220241e08880026a220320032a0200200492380200200041e0086a220320032a02002004436f12833a94220493380200200241e0086a2202200420022a0200923802000bb20303027f027d017c41807e2100024003402000450d01200041e18a800c6a027f41001000440000000000007040a2220444000000000000f0416320044400000000000000006671450d001a2004ab0b3a0000200041016a21000c000b000b418080807e2100024003402000450d01200041e08880026a200141ff0771b22202430000003e942001410a76b22203430000003e94100b430000003f92433333333f942002430000804492430000c041952003430000c04195100b430000803f92436666e63f94922002430000004592430000803c942003430000803c94100b430000803f9243cdcc4c3f949243abaa2a4294380200200041046a2100200141016a21010c000b000b418080800221000240034020004180808004460d01200041e0086a1000b6430000704194430000a0c092380200200041046a21000c000b000b418080800421000240034020004180808006460d01200041e0086a4100360200200041046a21000c000b000b41e0888006210041808080062101024003402001450d0120001000b64300007f439438020820001000b6430000204294380204200141746a21012000410c6a21000c000b000b0b870502047f067d027f4100430000803f43000000002000200020019243ae67bb3e9422082000928e2206200620082001928e220892438c65583e94220793932200200120082007939322015e22031b2207430000804f5d200743000000006071450d001a2007a90b027f41808080807820068b430000004f5d450d001a2006a80b22026a027f41004300000000430000803f20031b2206430000804f5d200643000000006071450d001a2006a90b027f41808080807820088b430000004f5d450d001a2008a80b22036a41ff017141e188800c6a2d00006a41ff017141e188800c6a2d0000410c7021042001200693438c65583e9221062000200793438c65583e922108200143000080bf922107200043000080bf9221092002200341016a41ff017141e188800c6a2d00006a41016a41ff017141e188800c6a2d0000410c702105430000003f200020009493200120019493220a43000000005d450440200341ff017141e188800c6a2d000020026a41ff017141e188800c6a2d00002102200a4300008040100320002002410c704101744188086a2f00002202411874411875b29420012002411074411875b2949294210b0b2007438c65d83e9221002009438c65d83e9221014300000000210743000000002109430000003f200820089493200620069493220a43000000005d450440200a430000804010032008200441ff01714101744188086a2f00002202411874411875b29420062002411074411875b294929421090b430000003f200120019493200020009493220643000000005d4504402006430000804010032001200541ff01714101744188086a2f00002202411874411875b29420002002411074411875b294929421070b200b2009922007924300008c42940bf60702107f077d230041306b220f2400024003402004418008460d01200441016a210241002100418008210e02400340200e450d012004200020022000100920022000200420001009200420002004200041016a2201100920042001200420001009200e417f6a210e200121000c000b000b200221040c000b000b200f41186a210b02400340200d418008460d01200d410a744180f83f71210a41002103024003402003418008460d01200341ff0771200a722204410c6c220041e48880066a22092a02002114200041e08880066a2208280200210c2004410274220441e08880026a2a02002111200041e88880066a22072a0200211302400240200441e08880046a22062a020022154300007f436022050d002014200441e0086a2a0200938b430000f0415d0d002015430000a0c09221150c010b1004221643cdcccc3e60201620165c720d00430000204143000020c1200c41c801481b2110200f41086a200d2003027f418080808078100443000000419422168b430000004f5d450d001a2016a80b220041002000417f6a41ff01714107491b1007200f2802082204410a744180f83f71200f28020c220e41ff07717241027441e08880046a2a02002116200b418008360200200f411c6a418808360200200f2003360214200f200d36021002400340200f41206a200f41106a1006200f2802204101470d01200f2802242201410a744180f83f71200f41286a280200220241ff07717241027441e08880046a2a020022122016201220165e201220155d7122001b21162002200e20001b210e2001200420001b21040c000b000b2004410a744180f83f71200e41ff077172220441027441e08880046a22002a0200221643000040405e201620165c724504402004410c6c220441e08880066a4100360200200441e48880066a20141004430000a041949243000020c192380200200441e88880066a20131004430000a041949243000020c19238020020002a020021160b200020102016923802000b200341016a210020092014380200200720133802002008200c41056a200c20051b41016a2204360200200b418008360200200f411c6a418808360200200f2003360214200f200d3602104300000000211602400340200f41206a200f41106a1006200f2802204101470d012016200f280224410a744180f83f71200f41286a28020041ff07717241027441e08880026a2a02009221160c000b000b20062015430000204192201520132016938b43000020425d1b2216430000a0c1922016201143000040405e1b221643000020c1922016200441c7014a1b2216430000000020164300000000601b22164300007f4320164300007f435d1b380200200021030c000b000b200d41016a210d0c000b000b200f41306a24000bf40100200241187441187510012003100202400240200241ff01712202410247044020024101460d0220020d012000410a744180f83f71200141ff07717241027441e08880026a2202200343000070429420022a0200923802000f0b2000410a744180f83f71200141ff0771722200410c6c220241e08880066a41003602002000410274220041e08880046a2201200343000070429420012a020092380200200241e88880066a200041e0086a2a02001005200241e48880066a200041e08880026a2a020010050b0f0b2000410a744180f83f71200141ff07717241027441e0086a2202200343000070429420022a0200923802000b050041e0080b0300010b0b6601004181080b5f010203040506070101ff0101ffffff0100ff000100ff00000100ff000100ff0000000001000000010000000100000000000000ffffffffffffffffffffffffffffffffffffffff0000000001000000010000000100000000000000ffffffff".split("").w().map(([a,
b])=>parseInt(a+b,16)));function F(){var a=new WebAssembly.Module(E);this.c=new WebAssembly.Instance(a,{env:{random:Math.random,log:(a)=>console.log("from rust with love: "+a),logf:(a)=>console.log("from rust with love: "+a),powf:Math.pow}});this.c.exports.init();a=this.c.exports.memory;this.f=this.c.exports.address();console.log("address: "+this.f);this.H=new z(new Float32Array(a.buffer,this.f,1048576),[1024,1024]);this.J=new z(new Float32Array(a.buffer,this.f+4194304,1048576),[1024,1024]);this.I=new z(new Float32Array(a.buffer,
this.f+8388608,1048576),[1024,1024])}F.prototype.o=function(){this.c.exports.tick()};F.prototype.s=function(a,b){this.c.exports.add_instruction(a[0],a[1],b.code,b.l)};let G,J=null,K=[];function L(a,b,d){this.name=a;this.code=b;this.l=d;if("undefined"!==typeof document){a=document.createElement("div");a.innerText=this.name;a.className="instruction";let b=this;a.addEventListener("click",()=>{let a=b.C;K.forEach((a)=>a.setActive(!1));b.setActive(!a);J&&J(a?null:b)});this.node=a;K.push(this)}}h=L.prototype;h.setActive=function(a){this.C=a;this.node.className="instruction"+(a?" active":"")};h.u=function(){G.appendChild(this.node)};
h.remove=function(){G.removeChild(this.node);let a=K.indexOf(this);-1<a&&K.splice(a,1)};h.D=function(){this.className="instruction placed"};h.j=function({water:a}){return 0>a};const M=["Water","Grow","Plant"];function N(){let a=new F,b=a.H,d=a.J,c=a.I,e=(b,d)=>{setTimeout(()=>{let f=new Date;for(let b=0;10>b;b++)a.o();console.log("Time for 10 generations: "+(new Date-f)+"ms");0<b?e(b-10,d):d()},100)},k=()=>{let b=new Date;a.o();console.log("tick time: "+(new Date-b));setTimeout(k,1E3)};e(0,k);return{io:(a)=>{a.on("disconnect",()=>{console.log("Disconnected: "+a.id)});console.log("Connected: "+a.id)},"terrain/:col/:row/:width/:height":(a,d)=>{let [c,g,e,f]=["col","row","width","height"].map((b)=>parseInt(a.params[b])),
n=[];for(let a=c;a<c+e;a++)for(let d=g;d<g+f;d++)n.push(b.get([a.a(),d.a()]));d.json(n)},"water/:col/:row/:width/:height":(a,b)=>{let [c,g,e,f]=["col","row","width","height"].map((b)=>parseInt(a.params[b])),n=[];for(let a=c;a<c+e;a++)for(let b=g;b<g+f;b++)n.push(d.get([a.a(),b.a()]));b.json(n)},"vegetation/:col/:row/:width/:height":(a,b)=>{let [d,g,e,f]=["col","row","width","height"].map((b)=>parseInt(a.params[b])),n=[];for(let a=d;a<d+e;a++)for(let b=g;b<g+f;b++)n.push(c.get([a.a(),b.a()]));b.json(n)},
"place_instruction/:x/:y/:code/:impact":(b,d)=>{let [c,g,e]=["x","y","code"].map((a)=>parseInt(b.params[a])),f=new L(M[e],e,parseFloat(b.params.impact));console.log(`Placing ${e} at ${c},${g}`);a.s([c,g],f);d.json({ok:"sick"})}}};"undefined"!==eval("typeof window")?window.addEventListener("load",()=>{let a=new C("/terrain"),b=new C("/water"),d=new C("/vegetation"),c;c=io({K:!1,transports:["websocket"]});let e=[0,0],k=null,f=null,H=[-1,-1],p=null,g=document.getElementById("c"),I=document.getElementById("titles_container");document.body.addEventListener("click",()=>I.remove());let q=g.getContext("2d"),n=()=>{g.width=window.innerWidth;g.height=window.innerHeight;let l=y(e,[0,0]),c=u(y(e,[g.width,g.height]),l);a.b(u(l,[5,5]),
m(c,[10,10]));b.b(u(l,[5,5]),m(c,[10,10]));d.b(u(l,[5,5]),m(c,[10,10]))};window.addEventListener("resize",n);n();g.addEventListener("mousedown",(a)=>{k=f=[a.x,a.y]});g.addEventListener("mouseup",()=>{if(5>w(m(f,t(k)))&&p){let [l,c]=y(e,f);if(p.j({vegetation:d.get([l,c]),water:b.get([l,c]),terrain:a.get([l,c])})){p.D();let a=p;p=null;fetch(`/place_instruction/${l}/${c}/${a.code}/${a.l}`).then(()=>a.remove())}}f=null});g.addEventListener("mousemove",(c)=>{H=[c.x,c.y];if(f){c=[c.x,c.y].sub(f);e=e.sub(c);
f=H;c=y(e,[0,0]);let l=u(y(e,[g.width,g.height]),c);a.b(u(c,[5,5]),m(l,[10,10]));b.b(u(c,[5,5]),m(l,[10,10]));d.b(u(c,[5,5]),m(l,[10,10]))}window.requestAnimationFrame(v)});G=document.getElementById("toolbar");J=(a)=>{p=a};setInterval(()=>{if(5>K.length){var a=Math.floor(Math.random()*M.length);a=new L(M[a],a,Math.random());a.u()}},5E3);let v=()=>{{var c=e,f=H,n=p;q.clearRect(0,0,g.width,g.height);let [l,r]=y(c,[0,0]),[I,O]=y(c,[g.width,g.height]),[P,Q]=y(c,f);for(f=l;f<=I;f++)for(let e=r;e<=O;e++){var k=
a.get([f,e]),A=b.get([f,e]);let g=d.get([f,e]),l={water:A||NaN,terrain:k||NaN,vegetation:g||NaN};var v=c;v=[f,e].scale(32).sub(v);let [p,r]=v;A=k+A;k=A>k?"hsl(230,80%,"+Math.floor(32+A/255*40)+"%)":240<k?"hsl(0,0%,"+Math.floor(70+(k-240)/15*20)+"%)":220<k?"hsl(35,48%,"+Math.floor(29+(k-220)/35*-14)+"%)":"hsl(70,56%,"+Math.floor(55+k/110*-21)+"%)";q.fillStyle=k;q.fillRect(p,r,32,32);0<g&&(q.fillStyle="hsla(131, 70%, 31%, "+Math.floor(g/255*70)+"%)",q.fillRect(p,r,32,32));n&&f==P&&e==Q&&(n.j(l)?(q.fillStyle=
"rgba(255,255,255,30%)",q.fillRect(p,r,32,32)):(q.strokeStyle="rgba(255,255,255,30%)",q.lineWidth=1,q.strokeRect(p,r,31,31)))}}},r=()=>{a.update().then(v);b.update().then(v);d.update().then(v);setTimeout(r,1E3)};r();(()=>{c.on("start",()=>{console.log("Started")});c.on("connect",()=>{console.log("Connected")});c.on("disconnect",()=>{console.log("Disconnected")});c.on("error",()=>{console.log("Oh shit")})})()},!1):module.exports=N();
