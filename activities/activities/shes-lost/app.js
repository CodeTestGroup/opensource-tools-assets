let targetIpAddress='';const lockoutMax=12;let lockoutHits=0;const amountOfIps=20;let ipAttempts=[],time=4.6e5,lose=!1,win=!1,timerElement=document.getElementById('timer'),timeInterval={},score=0,winScore=3;const systemTypes=['HIDDEN','KALILINUX','WINDOWSXP','WINDOWS2000','WINDOWS10','REDHAT','ANDROID4.4','NETHUNTER'],Entry=function(){return{value:createIP(),machineType:systemTypes[randomInRange(0,systemTypes.length-1,0)],status:'ACTIVE',hostName:createRandomName(),lastResponse:randomInRange(1e3,1e7,0),systemLocation:{long:randomInRange(-180,180,3),lat:randomInRange(-180,180,3)}}};function createIP(){let a='',b='0123456789';for(var c=0;10>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a}function formatIP(a){let b=a;return b=b.slice(0,2)+'.'+b.slice(2),b=b.slice(0,6)+'.'+b.slice(6),b=b.slice(0,9)+'.'+b.slice(9),b}function randomInRange(a,b,c){return 1*(Math.random()*(b-a)+a).toFixed(c)}function createEntryHTML(a){let{value:b,status:c,machineType:d,hostName:f,lastResponse:g,systemLocation:h}=a,j=formatIP(b),k='<tbody>                      <tr class=\'entry\' data-ip-value=\''+b+'\'>                          <span style=\'display: hidden\'></span>                          <td>'+formatIP(b)+'</td>                          <td>'+c+'</td>                          <td>'+f+'</td>                          <td>'+d+'</td>                          <td>'+g+'MS</td>                          <td>'+h.long+'_'+h.lat+'</td>                      </tr>                    </tbody>';return k}function createEntryHTMLArray(a){let b=[];return a.forEach(function(c){b.push(createEntryHTML(c))},this),b}function createRandomName(){let a='',b='0123456789QWERTYUIOP_-ASDFGHJKLZXCVBNM';for(var c=0;10>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a}function createEntryArray(){let a=[];for(i=0;i<amountOfIps;i++)a.push(new Entry);return a}function concatEntryHTMLArray(a){let b='';return a.forEach(function(c){b+=c},this),b}function renderEntries(a){document.getElementById('entry_table').innerHTML=a}function extractIpAddressFromElement(a){return ipAddress=a.getAttribute('data-ip-value'),ipAddress}function selectTargetIpAddress(a){let b=a[randomInRange(0,a.length-1,0)].value;return b}function compareIpAddress(a){let b=new Levenshtein(a,targetIpAddress),c=10-b.distance;return c}function beginRound(){document.getElementById('entry_table').innerHTML='',ipAttempts=[];let a=createEntryArray(),b=createEntryHTMLArray(a),c=concatEntryHTMLArray(b),d=document.getElementsByClassName('entry');targetIpAddress=selectTargetIpAddress(a),renderEntries(c),assignClickEvent(d),renderSuccessPrecentage(100*score/winScore),renderAttempts(),console.log(targetIpAddress)}function beginClicked(){let a=document.getElementById('messege');a.innerHTML='',a.className='hidden',timeInterval=setInterval(countDown,10),beginRound()}function assignClickEvent(a){for(i=0;i<a.length;i++){let b=a[i];b.onclick=function(){clickedEntry(b)}}}function clickedEntry(a){if(!lose&&!win){let b=compareIpAddress(extractIpAddressFromElement(a));10===b?targetIpAddressFound(a):(wrongEntrySelected(a,b),renderLockout(),renderSuccessPrecentage(100*score/winScore),checkStatus())}}function targetIpAddressFound(){score+=1,score>winScore-1?gameWin():beginRound()}function wrongEntrySelected(a,b){let c=extractIpAddressFromElement(a);++lockoutHits,saveAttempt(c),renderAttempts(),console.log(c+' was incorrect. Tries left: '+(lockoutMax-lockoutHits)),console.log(b+' characters were correct. Try Again!')}function renderSuccessPrecentage(a){let b=document.getElementById('precentage');b.innerHTML=Math.floor(a)+'%'}function renderLockout(){let a=document.getElementById('lockout');for(a.innerHTML='',i=0;i<lockoutHits;i++)a.innerHTML+='<span class\'lockoutMark\'> X </span>'}function saveAttempt(a){ipAttempts.push(a)}function renderAttempts(){let a=document.getElementById('attempts_table');a.innerHTML='',ipAttempts.forEach(function(b){a.innerHTML+='<td>'+formatIP(b)+'</td>                                <td>'+compareIpAddress(b)+' similar chars</td>'},this)}function renderEndGame(){document.getElementById('entry_table').innerHTML='';let a=document.getElementById('messege');a.innerHTML='<p>You have found her! It was not easy, but your diligence paid off. The data you have collected has been sent to the F.B.I. Please help actually fight human trafficking by donating to one of several private organizations or report tips to goverment agencies that do just that!</p><button onclick=\'redirectToFoundation()\'>HELP</button>',a.className=''}function checkStatus(){lockoutHits>=lockoutMax&&gameLose()}function gameLose(){let a=document.getElementsByClassName('entry');lose=!0,timerElement.innerHTML=0,clearInterval(timeInterval),Array.prototype.forEach.call(a,function(c){c.className='entry error'},this),setTimeout(function(){window.location.reload(!0)},4e3)}function gameWin(){let a=document.querySelector('[data-ip-value="'+targetIpAddress+'"]');win=!0,a.className='win',clearInterval(timeInterval),timerElement.innerHTML=0,renderEndGame(),console.log('Game Win')}function countDown(){0<time&&!lose?(time-=10,timerElement.innerHTML=time):gameLose()}function redirectToFoundation(){window.open('https://www.dhs.gov/blue-campaign/identify-victim?utm_source=bing&utm_medium=cpc&utm_campaign=search-p1.broad-allcit-allpri&utm_content=trafficking&utm_term=%2Btrafficking','_blank')}(function(a,b){'function'==typeof define&&'object'==typeof define.amd&&define.amd?define(function(){return b(a)}):'object'==typeof module&&module&&module.exports?module.exports=b(a):a.Levenshtein=b(a)})(this,function(){function b(g,h){var j,k;for(j=-1,k=g.length;++j<k;)h(g[j],j,g)}function c(g,h){var j;return j=Array(g.length),b(g,function(k,l,n){j[l]=h(k,l,n)}),j}function d(g,h,j){return b(g,function(k,l,n){j=h(k,l,n)}),j}function f(g,h){var j,k,l;return l=this._matrix=[],g==h?this.distance=0:''==g?this.distance=h.length:''==h?this.distance=g.length:(j=[0],b(g,function(n,p){p++,j[p]=p}),l[0]=j,b(h,function(n,p){k=[++p],b(g,function(q,r){r++,k[r]=g.charAt(r-1)==h.charAt(p-1)?j[r-1]:Math.min(j[r]+1,k[r-1]+1,j[r-1]+1)}),j=k,l[l.length]=j}),this.distance=k[k.length-1])}return f.prototype.toString=f.prototype.inspect=function(){var j,k,l,n,p;for(j=this.getMatrix(),k=d(j,function(q,r){return Math.max(q,d(r,Math.max,0))},0),l=Array((k+'').length).join(' '),n=[];n.length<(j[0]&&j[0].length||0);)n[n.length]=Array(l.length+1).join('-');return n=n.join('-+')+'-',p=c(j,function(q){var r;return r=c(q,function(s){return(l+s).slice(-l.length)}),r.join(' |')+' '}),p.join('\n'+n+'\n')},f.prototype.getMatrix=function(){return this._matrix.slice()},f.prototype.valueOf=function(){return this.distance},f});