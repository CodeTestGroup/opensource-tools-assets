function Nmy0(){var a=this,b=utl.any(2,0),c=utl.any(2,0);a.x=b?utl.any(env.w,0):c?-50:env.w+50,a.y=b?c?-50:env.h+50:utl.any(env.h,0),a.a=utl.infany(2*pi),a.v=utl.infany(1)+1,a.r,a.action="follow",a.vxy=utl.get_xy(a.a,a.v,0,0),a.fill="black",a.stroke="white",a.countdown=0,a.id,a.vbits=3,a.dbits=0,a.bits=[],a.bits_count=0,a.rst_cl=function(){cx.strokeStyle=a.stroke,cx.fillStyle=a.fill},a.get_pdir=function(){return utl.angle_between(a.x,a.y,env.x,env.y)},a.translate=function(){a.vxy=utl.get_xy(a.a,a.v,0,0),a.x+=a.vxy[0],a.y+=a.vxy[1]},a.follow=function(){var b=a.get_pdir();a.a=(2*pi+a.a+.01*utl.which_way(a.a,b))%(2*pi),a.translate(),a.trail_wobble(),a.tail_test()},a.wobble=function(){--a.countdown<=0?a.action="follow":plr.is_touching_whole(a.x,a.y,a.r)&&(a.action="reversed",num_nmys--,plr.add_to_tail(a),a.fill="white",a.stroke="black",scrbrd.pt())},a.reversed=function(){},a.death=function(){a.bits_count++<0||(a.translate(),a.v*=.98,a.dbits+=a.vbits,a.vbits*=.96)},a.death_init=function(){["follow","circle","retreat","randomy","group"].indexOf(a.action)>-1&&num_nmys--;for(var b=0,c=24;c>b;b++)a.bits.push([-3+utl.infanyeq(4),-3+utl.infanyeq(4),3+utl.infanyeq(4),3+utl.infanyeq(4),utl.infany(2*pi),utl.any(25,0)+5]);a.action="death";var d=utl.on_scrn(a.x,a.y)?1:.4;snds.boom(d)},a.trail_wobble=function(){plr.is_in_trail_bounds(a.x,a.y)&&plr.is_touching_trail(a.x,a.y,a.r)&&(a.action="wobble",a.countdown=500)},a.tail_test=function(){return plr.tail_ht(a.x,a.y,a.r)?(a.death_init(),!0):!1},a.npt_xy=function(b,c){return utl.get_xy(b,c,a.x-env.scrx,a.y-env.scry)},a.death_col=function(){var b=(100-3*a.bits_count)/100;cx.strokeStyle="rgba(255,32,0,"+b+")",cx.fillStyle="rgba(255,224,0,"+b+")"},a.drw_tmr=function(b,c,d,e){cx.fillStyle=e||"#309060";var f=[a.x-b,a.y-c],g=a.npt_xy(3*pi/2,4/3*a.r);utl.shape_start(f),utl.ln_2_pt(g),cx.arc(f[0],f[1],4*a.r/3,3*pi/2,3*pi/2+2*pi*d),utl.ln_2_pt(f),cx.fill(),cx.closePath(),a.rst_cl()},a.drw_death=function(){if(!(a.bits_count<0)){a.death_col();for(var b=0,c=a.bits.length;c>b;b++)if(!a.bits[b]||a.bits[b][5]<a.bits_count)a.bits.splice(b,1);else{var d=utl.get_xy(a.bits[b][4],a.dbits/a.bits[b][0]*3,a.x-env.scrx,a.y-env.scry);cx.beginPath(),cx.moveTo(d[0]+a.bits[b][0],d[1]),cx.lineTo(d[0],d[1]+a.bits[b][1]),cx.lineTo(d[0]+a.bits[b][2],d[1]),cx.lineTo(d[0],d[1]+a.bits[b][3]),cx.lineTo(d[0]+a.bits[b][0],d[1]),utl.shape_stop()}}}}