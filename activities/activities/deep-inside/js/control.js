onkeydown=function(e){code=e.keyCode,(38==code||87==code)&&(keys[code]=!0),(40==code||83==code)&&(keys[code]=!0),(37==code||65==code)&&(keys[code]=!0),(39==code||68==code)&&(keys[code]=!0),(32==code||120==code)&&((0==s||1==s)&&(s++,spaceAudio()),3==s&&(localX=700,localX2=-900,s=0)),(88==code||120==code)&&4==s&&(s=sTemp,focus=!0),(77==code||109==code)&&(mute=!mute,bgAudio())},onkeyup=function(e){code=e.keyCode,(38==code||87==code)&&(keys[code]=!1),(40==code||83==code)&&(keys[code]=!1),(37==code||65==code)&&(keys[code]=!1),(39==code||68==code)&&(keys[code]=!1)};