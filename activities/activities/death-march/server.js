const users=[],rooms=[];module.exports={io:e=>{e.on("nU",(({type:o="online",friendRoom:n="",createRoom:r=!1,player:s={}},i)=>{s.id=e.id;const t=users.filter((e=>e.type===o&&e.player.token!==s.token));if(0!==t.length&&!r||"friend"===o&&!r){let r=-1;if("online"===o&&(r=rnd(0,t.length-1)),"friend"===o&&(r=t.findIndex((e=>e.room===n)),r<0))return i("Invalid room");if(r<0)return i("Invalid type");const d={player:s,partner:t[r].player},l=t[r].room,m={BOARD:newBoard(),users:setOrder(["player","partner"].map((e=>[d[e].name,d[e].token,0,d[e].id]))),room:l,typeGame:3};e.join(l),rooms.push({room:l,users:[d.player.id,d.partner.id]});const p=users.findIndex((e=>e.room===l));users.splice(p,1),io.sockets.in(l).emit("sG",m)}else{const r=String("online"===o?guid():n);users.push({room:r,type:o,player:s}),e.join(r)}i()})),e.on("action",(e=>{if("end"!==e.type)io.sockets.in(e.room).emit("action",e);else{const o=rooms.findIndex((({room:o})=>e.room===o));o>=0&&rooms.splice(o,1)}})),e.on("disconnect",(()=>{const o=rooms.findIndex((({users:o})=>[o[0],o[1]].includes(e.id)));if(o>=0)io.sockets.in(rooms[o].room).emit("action",{type:"leave"}),rooms.splice(o,1);else{const o=users.findIndex((({player:o})=>o.id===e.id));o>=0&&users.splice(o,1)}}))}};