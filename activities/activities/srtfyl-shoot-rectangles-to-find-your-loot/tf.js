"use strict";const DEFAULT_CHAR_HEIGHT=5,DEFAULT_COLOR="#000",initFont=({height:t=5,...o}={},r)=>{if(!o)return void console.error("No font provided!");if(!r)return void console.error("No context provided");return(e,n=0,i=0,c=24,a="#000")=>{[...e].reduce(((e,d)=>{const l=c/t,p=o[d.charCodeAt()]||"";const s=((p>0?p:p.codePointAt())||0).toString(2),f=Math.ceil(s.length/t),h=e+l;return((t,o)=>t.match(new RegExp(`.{${o}}`,"g")))(s.padStart(f*t,0),t).map(((t,o)=>[...t].map(((t,e)=>{r.fillStyle=+t?a:"transparent",r.fillRect(n+h+o*l,i+e*l,l,l)})))),e+(f+1)*l}),0)}},font=[...Array(33),29,,,,,,12,,,,"ᇄ",3,"ႄ",1,1118480,"縿",31,"庽","嚿","炟","皷","纷","䈟","线","皿",17,,,"⥊",,"䊼",,"㹏","纮","縱","縮","纵","纐","񴚦","粟","䟱","丿",1020241,"簡",33059359,1024159,"縿","纜","񼙯","繍","皷","䏰","簿",25363672,32541759,18157905,"惸",18470705,,,,,"С"];export{initFont,font};