var stage;var canvas;var ctx;var Mouse={x:0,y:0};var gridArea;var gridX=190;var gridY=80;var gridRows=18;var gridCols=10;var gridWidth=300;var gridHeight=480;var gridCellWidth=0;var gridCellHeight=0;var currShape;var nextShape;var prevShape=new Object();var shapeTicks=36;var levelCount=0;var rowClearTicks=1;var rowMoveTicks=2;var currShapeTickCount=0;var rowRemoveAnimation=false;var allDropAnimation=false;var endGame=false;var removeRowList=new Array();var rowRemoveCount=0;var rowRemoveMax=5;var shapeUpdateInProgress=false;var pauseGameFlag=false;var gameState=0;var angl=0;var angleTicksMax=2;var angleTicks=0;var scoreMax=9999999999;var score=0;var level=0;var highScore1=0;var highScore2=0;var highScore3=0;var headImg=new Image();var showBigGrowTextAimFlag=false;var showBigGrowTextFlag=false;var showBigGrowMsg="";var showBigGrowTicks=0;var rowFlashAnimFlag=false;var rowFlashTicks=0;var shapeUpdateDelay=1500;var shapeUpdateLast=0;var splashUpdateDelay=150;var splashUpdateLast=0;var bigGrowTextAnimDelay=100;var bigGrowTextAnimLast=0;var rowFlashAnimDelay=2;var rowFlashAnimLast=0;ShapeStateEnum={ADD:0,CLEAR:1,BRICK:2,MOVE_DOWN:3,MOVE_LEFT:4,MOVE_RIGHT:5,ROTATE:6,NONE:7};MoveStateEnum={OUT_OF_COLS:0,OUT_OF_ROWS:1,CAN_MOVE:2,CANNOT_MOVE:3};var oShape=new Object();oShape.pat=new Array();oShape.pat[0]=[[1,1],[1,1]];oShape.currPat=0;oShape.pivotRow=0;oShape.pivotCol=0;oShape.isFalling=true;oShape.row=0;oShape.col=0;var z1Shape=new Object();z1Shape.pat=new Array();z1Shape.pat[0]=[[2,1,0],[0,1,1]];z1Shape.pat[1]=[[0,1],[2,1],[1,0]];z1Shape.currPat=0;z1Shape.pivotRow=0;z1Shape.pivotCol=0;z1Shape.isFalling=true;z1Shape.row=0;z1Shape.col=0;var z2Shape=new Object();z2Shape.pat=new Array();z2Shape.pat[0]=[[0,1,1],[1,1,0]];z2Shape.pat[1]=[[1,0],[1,1],[0,1]];z2Shape.currPat=0;z2Shape.pivotRow=0;z2Shape.pivotCol=0;z2Shape.isFalling=true;z2Shape.row=0;z2Shape.col=0;var l2Shape=new Object();l2Shape.pat=new Array();l2Shape.pat[0]=[[0,1],[0,1],[1,1]];l2Shape.pat[1]=[[1,1,1],[0,0,1]];l2Shape.pat[2]=[[1,1],[1,0],[1,0]];l2Shape.pat[3]=[[1,0,0],[1,1,1]];l2Shape.currPat=0;l2Shape.pivotRow=0;l2Shape.pivotCol=0;l2Shape.isFalling=true;l2Shape.row=0;l2Shape.col=0;var l1Shape=new Object();l1Shape.pat=new Array();l1Shape.pat[0]=[[1,0],[1,0],[1,1]];l1Shape.pat[1]=[[0,0,1],[1,1,1]];l1Shape.pat[2]=[[1,1],[0,1],[0,1]];l1Shape.pat[3]=[[1,1,1],[1,0,0]];l1Shape.currPat=0;l1Shape.pivotRow=0;l1Shape.pivotCol=0;l1Shape.isFalling=true;l1Shape.row=0;l1Shape.col=0;var iShape=new Object();iShape.pat=new Array();iShape.pat[0]=[[2,1,1,1]];iShape.pat[1]=[[2],[1],[1],[1]];iShape.currPat=0;iShape.pivotRow=0;iShape.pivotCol=0;iShape.isFalling=true;iShape.row=0;iShape.col=0;var tShape=new Object();tShape.pat=new Array();tShape.pat[0]=[[1,1,1],[0,1,0]];tShape.pat[1]=[[1,0],[1,1],[1,0]];tShape.pat[2]=[[0,1,0],[1,1,1]];tShape.pat[3]=[[0,1],[1,1],[0,1]];tShape.currPat=0;tShape.pivotRow=0;tShape.pivotCol=0;tShape.isFalling=true;tShape.row=0;tShape.col=0;var x1Shape=new Object();x1Shape.pat=new Array();x1Shape.pat[0]=[[1]];x1Shape.currPat=0;x1Shape.pivotRow=0;x1Shape.pivotCol=0;x1Shape.isFalling=true;x1Shape.row=0;x1Shape.col=0;var x2Shape=new Object();x2Shape.pat=new Array();x2Shape.pat[0]=[[1,1]];x2Shape.pat[1]=[[1],[1]];x2Shape.currPat=0;x2Shape.pivotRow=0;x2Shape.pivotCol=0;x2Shape.isFalling=true;x2Shape.row=0;x2Shape.col=0;var x3Shape=new Object();x3Shape.pat=new Array();x3Shape.pat[0]=[[1,1,1]];x3Shape.pat[1]=[[1],[1],[1]];x3Shape.currPat=0;x3Shape.pivotRow=0;x3Shape.pivotCol=0;x3Shape.isFalling=true;x3Shape.row=0;x3Shape.col=0;var x4Shape=new Object();x4Shape.pat=new Array();x4Shape.pat[0]=[[1,0],[1,1]];x4Shape.pat[1]=[[0,1],[1,1]];x4Shape.pat[2]=[[1,1],[0,1]];x4Shape.pat[3]=[[1,1],[1,0]];x4Shape.currPat=0;x4Shape.pivotRow=0;x4Shape.pivotCol=0;x4Shape.isFalling=true;x4Shape.row=0;x4Shape.col=0;var x5Shape=new Object();x5Shape.pat=new Array();x5Shape.pat[0]=[[0,1,0],[1,1,1],[0,1,0]];x5Shape.currPat=0;x5Shape.pivotRow=0;x5Shape.pivotCol=0;x5Shape.isFalling=true;x5Shape.row=0;x5Shape.col=0;var x6Shape=new Object();x6Shape.pat=new Array();x6Shape.pat[0]=[[1,0,1],[1,1,1]];x6Shape.pat[1]=[[1,1],[0,1],[1,1]];x6Shape.pat[2]=[[1,1,1],[1,0,1]];x6Shape.pat[3]=[[1,1],[1,0],[1,1]];x6Shape.currPat=0;x6Shape.pivotRow=0;x6Shape.pivotCol=0;x6Shape.isFalling=true;x6Shape.row=0;x6Shape.col=0;function init(){if(!(!!document.createElement("canvas").getContext)){var a=document.getElementById("canvasWrapper");a.innerHTML="Your browser does not support the HTML5 Canvas element";return}canvas=document.getElementById("stage");ctx=canvas.getContext("2d");headImg.src="headImg.png";headImg.onload=function(){gameInit();window.addEventListener("keydown",doKeyDown,true);canvas.onmousemove=mouseMoveHandler;canvas.onmousedown=mouseClickHandler;(function(){var d=0;var e=["ms","moz","webkit","o"];for(var c=0;c<e.length&&!window.requestAnimationFrame;++c){window.requestAnimationFrame=window[e[c]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[e[c]+"CancelAnimationFrame"]||window[e[c]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(m,g){var f=new Date().getTime();var h=Math.max(0,16-(f-d));var l=window.setTimeout(function(){m(f+h)},h);d=f+h;return l}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(f){clearTimeout(f)}}}());(function b(){requestAnimationFrame(b);tick()})()}}var lastTime=0;function calculateFps(){var a=(+new Date);var b=(a-lastTime);if(b!==0){fps=1000/(a-lastTime)}else{fps=60}lastTime=a;return fps}function canUpdate(c,b){var a=(+new Date);var d=(a-b);if(d>c){return true}return false}function gameInit(){gameState=0;levelCount=1;endGame=false;nextShape=null;loadTopScores();gridArea=createGrid(gridRows,gridCols);shapeTicks=36;currShapeTickCount=shapeTicks-1;rowRemoveCount=0;level=1;spawnNewShape();createButtons()}function gameReset(){currShape=null;nextShape=null;shapeTicks=36;levelCount=0;rowClearTicks=1;rowMoveTicks=2;currShapeTickCount=shapeTicks-1;rowRemoveAnimation=false;allDropAnimation=false;endGame=false;rowRemoveCount=0;rowRemoveMax=5;shapeUpdateInProgress=false;pauseGameFlag=false;gameState=0;angl=0;angleTicksMax=2;angleTicks=0;score=0;level=1;showBigGrowTextAimFlag=false;showBigGrowMsg="";showBigGrowTicks=0;showBigGrowTextFlag=false;rowFlashAnimFlag=false;rowFlashTicks=0;shapeUpdateLast=0;splashUpdateLast=0;bigGrowTextAnimLast=0;rowFlashAnimLast=0;loadTopScores();for(i=0;i<gridRows;i++){removeRowList[i]=false;for(j=0;j<gridCols;j++){gridArea[i][j].isBricked=false;gridArea[i][j].isOccupied=false}}}function startGame(){spawnNewShape();drawGrid(gridArea,gridWidth,gridHeight,gridX,gridY,gridRows,gridCols)}function doKeyDown(a){if(rowFlashAnimFlag===true){return}resetButtons();switch(a.keyCode){case 87:case 38:if(endGame||pauseGameFlag){return}updateShape(ShapeStateEnum.ROTATE);redraw(ShapeStateEnum.ROTATE);break;case 83:case 40:if(endGame||pauseGameFlag){return}updateShape(ShapeStateEnum.MOVE_DOWN);redraw(ShapeStateEnum.MOVE_DOWN);break;case 65:case 37:if(endGame||pauseGameFlag){return}updateShape(ShapeStateEnum.MOVE_LEFT);redraw(ShapeStateEnum.MOVE_LEFT);break;case 68:case 39:if(endGame||pauseGameFlag){return}updateShape(ShapeStateEnum.MOVE_RIGHT);redraw(ShapeStateEnum.MOVE_RIGHT);break;default:break}}function tick(){if(endGame){return}var b=calculateFps();var c=Math.ceil(b*(angleTicksMax/25));if(gameState===0){angleTicks++;if(canUpdate(splashUpdateDelay,splashUpdateLast)){splashUpdateLast=(+new Date);angl=angl+10;angleTicks=0;if(angl>360){angl=0}drawSplashScreen();displayButtons()}return}if(pauseGameFlag){return}if(shapeUpdateInProgress===true){return}if(rowFlashAnimFlag===true){updateGrid();return}if(rowRemoveAnimation===true){removeRowElementFromGrid(removeRowList,2);updateGrid();return}if(allDropAnimation===true){dropBricksToFill(removeRowList);updateGrid();return}if(showBigGrowTextAimFlag===true){if(canUpdate(bigGrowTextAnimDelay,bigGrowTextAnimLast)){updateGrid()}return}var a=Math.ceil(b*(shapeTicks/25));currShapeTickCount++;if(canUpdate(shapeUpdateDelay,shapeUpdateLast)){currShapeTickCount=0;shapeUpdateLast=(+new Date);updateState(ShapeStateEnum.MOVE_DOWN);redraw(ShapeStateEnum.MOVE_DOWN)}removeRowList=isAnyLineComplete(gridArea,gridRows,gridCols);if(frstRowContainsBrick()===true){endGame=true;gameState=3;drawGrayOut();grayOutMessageBox("GAME OVER","Your score is: "+score);displayButtons()}}function updateState(a){updateShape(a)}function updateShape(a){shapeUpdateInProgress=true;if(prevShape!==null&&currShape!==null){copyShape(currShape,prevShape);if(a===ShapeStateEnum.MOVE_DOWN){currShape.row+=1}else{if(a===ShapeStateEnum.MOVE_LEFT){currShape.col-=1;if(currShape.col<0){currShape.col+=1}}else{if(a===ShapeStateEnum.MOVE_RIGHT){currShape.col+=1;if(currShape.col+currShape.pat[currShape.currPat][0].length>gridCols){currShape.col-=1}}else{if(a===ShapeStateEnum.ROTATE){var b=currShape.pat.length;currShape.currPat=((currShape.currPat+1)%b);if(currShape.col+currShape.pat[currShape.currPat][0].length>gridCols){currShape.col=gridCols-currShape.pat[currShape.currPat][0].length}if(currShape.row+currShape.pat[currShape.currPat].length>gridRows){currShape.row=gridRows-currShape.pat[currShape.currPat].length}if(currShape.col<0){currShape.col=0}}}}}}else{spawnNewShape()}}function redraw(a){var b=canShapeMove(currShape,a);if(b===MoveStateEnum.CAN_MOVE){setShapeState(prevShape,prevShape.row,prevShape.col,ShapeStateEnum.CLEAR);setShapeState(currShape,currShape.row,currShape.col,ShapeStateEnum.ADD)}else{if(b===MoveStateEnum.OUT_OF_ROWS){setShapeState(prevShape,prevShape.row,prevShape.col,ShapeStateEnum.BRICK);currShape=null;spawnNewShape();setShapeState(currShape,currShape.row,currShape.col,ShapeStateEnum.ADD)}else{if(b===MoveStateEnum.OUT_OF_COLS){setShapeState(prevShape,prevShape.row,prevShape.col,ShapeStateEnum.CLEAR);setShapeState(prevShape,prevShape.row,prevShape.col,ShapeStateEnum.ADD)}else{if(b===MoveStateEnum.CANNOT_MOVE){copyShape(prevShape,currShape);setShapeState(prevShape,prevShape.row,prevShape.col,ShapeStateEnum.CLEAR);setShapeState(prevShape,prevShape.row,prevShape.col,ShapeStateEnum.ADD)}}}}shapeUpdateInProgress=false;updateGrid()}function updateGrid(){ctx.clearRect(0,0,canvas.width,canvas.height);drawGrid(gridArea,gridWidth,gridHeight,gridX,gridY,gridRows,gridCols);displayButtons();drawhud();if(rowFlashAnimFlag===true){if(canUpdate(rowFlashAnimDelay,rowFlashAnimLast)){rowFlashAnimLast=(+new Date);doRowFlashAnimation(removeRowList)}}if(showBigGrowTextAimFlag===true){showBigGrowMsg="Level Up!";bigGrowTextAnimLast=(+new Date);showBigGrowTicks++;bigGrowText(showBigGrowMsg)}}function getRandomShape(){var a=0;if(level<3){a=Math.floor(Math.random()*(7))}else{a=Math.floor(Math.random()*(13))}var b=Math.floor(Math.random()*(7));if(a===0){z1Shape.colorStyle=b;return z1Shape}else{if(a===1){iShape.colorStyle=b;return iShape}else{if(a===2){tShape.colorStyle=b;return tShape}else{if(a===3){z2Shape.colorStyle=b;return z2Shape}else{if(a===4){l1Shape.colorStyle=b;return l1Shape}else{if(a===5){l2Shape.colorStyle=b;return l2Shape}else{if(a===6){oShape.colorStyle=b;return oShape}else{if(a===7){x1Shape.colorStyle=b;return x1Shape}else{if(a===8){x2Shape.colorStyle=b;return x2Shape}else{if(a===9){x3Shape.colorStyle=b;return x3Shape}else{if(a===10){x4Shape.colorStyle=b;return x4Shape}else{if(a===11){x5Shape.colorStyle=b;return x5Shape}else{if(a===12){x6Shape.colorStyle=b;return x6Shape}else{z1Shape.colorStyle=b;return z1Shape}}}}}}}}}}}}}}function spawnNewShape(){if(nextShape===null){nextShape=getRandomShape()}currShape=nextShape;nextShape=getRandomShape();currShape.row=0;randGridCol=Math.floor(Math.random()*(gridCols-currShape.pat[currShape.currPat][0].length));currShape.col=randGridCol;copyShape(currShape,prevShape)}function copyShape(a,b){b.currPat=a.currPat;b.pat=a.pat;b.colorStyle=a.colorStyle;b.pivotRow=a.pivotRow;b.pivotCol=a.pivotCol;b.isFalling=a.isFalling;b.row=a.row;b.col=a.col}function rotateCurrentShape(){var a=currShape.pat.length;currShape.currPat=(currShape.currPat+1)%a}function canShapeMove(a,e){if(a===null){return MoveStateEnum.CANNOT_MOVE}aGridCellRow=a.row;aGridCellCol=a.col;var f=a.pat[a.currPat];for(var c=0;c<f.length;c++){var d=f[c];for(var b=0;b<d.length;b++){if(f[c][b]>0){gridPosRow=aGridCellRow+(c-a.pivotRow);gridPosCol=aGridCellCol+(b-a.pivotCol);if(gridPosRow<0||gridPosRow>=gridRows){return MoveStateEnum.OUT_OF_ROWS}if(gridPosCol<0||gridPosCol>=gridCols){return MoveStateEnum.OUT_OF_COLS}if(gridArea[gridPosRow][gridPosCol].isBricked===true){if(e===ShapeStateEnum.MOVE_DOWN){return MoveStateEnum.OUT_OF_ROWS}else{return MoveStateEnum.CANNOT_MOVE}}}}}return MoveStateEnum.CAN_MOVE}function setShapeState(a,d,f,h){if(a===null){return}var g=a.pat[a.currPat];for(var c=0;c<g.length;c++){var e=g[c];for(var b=0;b<e.length;b++){if(g[c][b]>0){gridPosRow=d+(c-a.pivotRow);gridPosCol=f+(b-a.pivotCol);if(gridPosRow>=0&&gridPosRow<gridRows&&gridPosCol>=0&&gridPosCol<gridCols){if(h===ShapeStateEnum.BRICK){gridArea[gridPosRow][gridPosCol].isBricked=true;gridArea[gridPosRow][gridPosCol].colorStyle=a.colorStyle}else{if(h===ShapeStateEnum.ADD){gridArea[gridPosRow][gridPosCol].isOccupied=true;gridArea[gridPosRow][gridPosCol].colorStyle=a.colorStyle}else{if(h===ShapeStateEnum.CLEAR){gridArea[gridPosRow][gridPosCol].isOccupied=false;gridArea[gridPosRow][gridPosCol].colorStyle=-1}}}}}}}}function isAnyLineComplete(b,a,c){var e=new Array();var d=0;var f=0;for(i=0;i<a;i++){f=0;for(j=0;j<c;j++){if(b[i][j].isBricked===true){f++}}if(f===gridCols){rowRemoveCount++;if(rowRemoveCount>=rowRemoveMax){rowRemoveCount=0;level++;showBigGrowTextFlag=true;shapeUpdateDelay=shapeUpdateDelay-100;if(shapeUpdateDelay<100){shapeUpdateDelay=100}}e[i]=true;rowFlashAnimFlag=true;d++}else{e[i]=false}}if(d===1){score=score+250}else{if(d===2){score=score+250+500}else{if(d===3){score=score+250+1000}else{if(d===4){score=score+250+2000}}}}return e}function removeRowElementFromGrid(a,c){for(i=0;i<a.length;i++){if(a[i]===true){var b=0;for(j=0;j<gridCols;j++){if(gridArea[i][j].isBricked===true){b++;gridArea[i][j].isOccupied=false;gridArea[i][j].isBricked=false;if(b>=c){break}}}if(b===0){rowRemoveAnimation=false;allDropAnimation=true;break}}}}function doRowFlashAnimation(b){if(rowFlashAnimFlag===false){return}var f=3;rowFlashTicks++;if(rowFlashTicks>f){rowFlashAnimFlag=false;rowFlashTicks=0;rowRemoveAnimation=true;tick();return}var c=gridWidth/gridCols;var a=gridHeight/gridRows;for(i=0;i<b.length;i++){if(b[i]===true){for(j=0;j<gridCols;j++){var e=gridX;var d=gridY+(a*i);ctx.fillStyle="rgba(200,200,200,"+rowFlashTicks/20+")";ctx.fillRect(e,d,c*gridCols,a)}}}}function frstRowContainsBrick(){for(j=0;j<gridCols;j++){if(gridArea[0][j].isBricked===true){return true}}return false}function dropBricksToFill(a){for(i=a.length-1;i>0;i--){if(a[i]===true&&i!==0){var b=-1;for(k=i;k>=0;k--){if(a[k]===false){b=k;break}}if(b>=0){for(j=0;j<gridCols;j++){if(gridArea[b][j].isBricked===true){gridArea[i][j].isBricked=gridArea[b][j].isBricked;gridArea[b][j].isBricked=false;gridArea[i][j].isOccupied=gridArea[b][j].isOccupied;gridArea[b][j].isOccupied=false;gridArea[i][j].colorStyle=gridArea[b][j].colorStyle;gridArea[b][j].colorStyle=-1}}a[i]=false;a[b]=true}}}allDropAnimation=false;if(showBigGrowTextFlag){showBigGrowTextFlag=false;showBigGrowTextAimFlag=true}}function createGridCell(){var a=new Object();a.isOccupied=false;a.isBricked=false;a.colorStyle=-1;a.block=null;return a}function createGrid(a,c){var b=new Array(a);for(i=0;i<a;i++){b[i]=new Array(c);for(j=0;j<c;j++){b[i][j]=createGridCell()}}return b}function getRandomNumber(b,a){return(Math.floor((Math.random()*(a-b)))+b)}function drawShape(a,m,g,e,h,o){if(a===null){return}var d=a.pat[0];var l=m;var f=g;for(var c=0;c<d.length;c++){var n=d[c];for(var b=0;b<n.length;b++){if(d[c][b]>0){drawBrick(l,f,e,h,o)}l=l+e}l=m;f=f+h}}function drawShapeBrick(a,f,d,e,b){doShadowOn("rgba(0,0,0,0.5)");var c=ctx.createLinearGradient(a+1,f+1,a+d,f+e);if(b===0){c.addColorStop(0,"rgba(228,125,125,1)");c.addColorStop(0.75,"rgba(118,20,20,1)");c.addColorStop(1,"rgba(118,15,15,0.8)")}else{if(b===1){c.addColorStop(0,"rgba(125,228,125,1)");c.addColorStop(0.75,"rgba(25,128,25,1)");c.addColorStop(1,"rgba(25,128,25,0.8)")}else{if(b===2){c.addColorStop(0,"rgba(125,125,228,1)");c.addColorStop(0.75,"rgba(45,45,148,1)");c.addColorStop(1,"rgba(45,45,148,0.8)")}else{if(b===3){c.addColorStop(0,"rgba(228,125,125,1)");c.addColorStop(0.75,"rgba(128,25,25,1)");c.addColorStop(1,"rgba(128,25,25,0.8)")}else{if(b===4){c.addColorStop(0,"rgba(125,228,228,1)");c.addColorStop(0.75,"rgba(28,125,125,1)");c.addColorStop(1,"rgba(28,125,125,0.8)")}else{if(b===5){c.addColorStop(0,"#dfd43e");c.addColorStop(0.75,"rgba(130,125,28,1)");c.addColorStop(1,"rgba(130,125,28,0.8)")}else{if(b===6){c.addColorStop(0,"rgba(230,125,230,1)");c.addColorStop(0.75,"rgba(125,28,125,1)");c.addColorStop(1,"rgba(125,28,125,0.8)")}else{c.addColorStop(0,"rgba(200,200,125,1)");c.addColorStop(0.75,"rgba(128,125,125,1)");c.addColorStop(1,"rgba(128,125,125,0.8)")}}}}}}}ctx.lineWidth=0.5;ctx.fillStyle=c;ctx.fillRect(a,f,d,d);ctx.lineWidth=0.5;ctx.strokeStyle="#220000";ctx.strokeRect(a,f,d,d);doShadowOff()}function drawBrick(a,e,c,d,b){ctx.fillStyle=b;ctx.fillRect(a,e,c,c);ctx.lineWidth=0.5;ctx.strokeStyle="#114411";ctx.strokeRect(a,e,c,c);ctx.lineWidth=1}function drawGrid(n,f,h,l,g,m,d){var c=f/d;var e=h/m;gridCellWidth=c;gridCellHeight=e;gridX=l;gridY=g;ctx.fillStyle="#888899";ctx.fillRect(gridX-4,gridY-4,gridWidth+8,gridHeight+10);ctx.fillStyle="#222222";ctx.fillRect(gridX,gridY,gridWidth,gridHeight+4);for(i=0;i<m;i++){for(j=0;j<d;j++){var b=l+(c*j);var a=g+(e*i);ctx.lineWidth=0.5;ctx.strokeStyle="#333333";ctx.strokeRect(b,a,c,e)}}for(i=0;i<m;i++){for(j=0;j<d;j++){b=l+(c*j);a=g+(e*i);if(gridArea[i][j].isBricked===true){drawShapeBrick(b,a,c,e,gridArea[i][j].colorStyle)}else{if(gridArea[i][j].isOccupied===true){drawShapeBrick(b,a,c,e,gridArea[i][j].colorStyle)}}}}roundedStrokeRect(gridX-8,gridY-8,gridWidth+16,gridHeight+20,20,"#555555",12,true,true,"rgba(170,170,170,1)","rgba(85,85,85,1)");ctx.save();ctx.scale(0.6,0.6);ctx.drawImage(headImg,314,4);ctx.scale(1,1);ctx.restore()}function drawhud(){labelStyle2(5,80,125,30,"Level","rgba(250,250,250,1)",level,"rgba(0,0,0,1)",false);labelStyle2(5,170,125,30,"Score","rgba(250,250,250,1)",score,"rgba(0,0,0,1)",false);labelStyle2(535,80,125,100,"Next","rgba(250,250,250,1)","","rgba(0,0,0,1)",true);displayTopScores();drawShape(nextShape,535+30,80+20,20,20,"#aaaaaa")}function displayText(a,h,g,f,b,d,e,c){if(d){doShadowOn("rgba(0,0,0,0.5)")}else{doShadowOff()}ctx.font=f;ctx.fillStyle=b;ctx.textAlign=c;ctx.fillText(g,a,h);if(e){ctx.lineWidth=1;ctx.strokeStyle="rgba(228,228,245,1)";ctx.strokeText(g,a,h)}doShadowOff()}function roundedRect(m,l,o,f,b,p,g,e,d,c,a){if(typeof b==="undefined"){b=5}if(e){doShadowOn("rgba(130,130,130,0.5)")}ctx.beginPath();var n=ctx.createLinearGradient(m+(o/2),l,m+(o/2),l+f);n.addColorStop(0,c);n.addColorStop(1,a);if(d){ctx.fillStyle=n}else{ctx.fillStyle=p}ctx.lineWidth=g;ctx.moveTo(m+b,l);ctx.lineTo(m+o-b,l);ctx.quadraticCurveTo(m+o,l,m+o,l+b);ctx.lineTo(m+o,l+f-b);ctx.quadraticCurveTo(m+o,l+f,m+o-b,l+f);ctx.lineTo(m+b,l+f);ctx.quadraticCurveTo(m,l+f,m,l+f-b);ctx.lineTo(m,l+b);ctx.quadraticCurveTo(m,l,m+b,l);ctx.closePath();ctx.fill();ctx.lineWidth=0.5}function doShadowOn(a){ctx.shadowBlur=8;ctx.shadowOffsetX=3;ctx.shadowOffsetY=3;ctx.shadowColor=a}function doShadowOff(){ctx.shadowBlur=0;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;ctx.shadowColor="rgba(0,0,0,0)"}function roundedStrokeRect(m,l,o,f,b,p,g,e,d,c,a){if(typeof b==="undefined"){b=5}if(e){doShadowOn("rgba(130,130,130,0.5)")}var n=ctx.createLinearGradient(m,l,m+o,l+f);n.addColorStop(0,c);n.addColorStop(1,a);ctx.beginPath();if(d){ctx.strokeStyle=n}else{ctx.strokeStyle=p}ctx.lineWidth=g;ctx.moveTo(m+b,l);ctx.lineTo(m+o-b,l);ctx.quadraticCurveTo(m+o,l,m+o,l+b);ctx.lineTo(m+o,l+f-b);ctx.quadraticCurveTo(m+o,l+f,m+o-b,l+f);ctx.lineTo(m+b,l+f);ctx.quadraticCurveTo(m,l+f,m,l+f-b);ctx.lineTo(m,l+b);ctx.quadraticCurveTo(m,l,m+b,l);ctx.closePath();ctx.stroke();ctx.lineWidth=0.5;doShadowOff()}function labelStyle1(a,g,c,e,b,f,d){ctx.strokeStyle=b;ctx.strokeRect(a,g,c,e);ctx.fillStyle=b;ctx.fillRect(a,g,c,20);displayText(a+2,g+18-2,f,"Bold 18px Arial",d,false,false,"start")}function textLabel(g,f,l,B,t,s,m,e,q){var A=ctx.measureText(s);var u=A.width;var b=e;var r=u/s.length;var p=5;var c=Math.floor((l-10)/Math.ceil(r));var a=-1;var n=0;var o=0;var v=0;var C=false;var d="";if(q){d="Bold"}if(t!==null){ctx.fillStyle=t;ctx.fillRect(g,f,l,B)}for(i=0;i<s.length;i++){o++;C=false;if(s.charAt(i)===" "||s.charAt(i)==="\n"||s.charAt(i)==="\r"||s.charAt(i)==="\t"){a=i;if(s.charAt(i)==="\n"||s.charAt(i)==="\r"){C=true}}if(o>c||i===s.length-1||C){var z=s.substring(0,i);if(i===s.length-1){a=s.length}if(a>0){z=s.substring(n,a);n=a+1}v++;displayText(g+5,f+(b*v),z,d+" "+b+"px Arial",m,false,false,"start");o=0}}}function labelStyle2(f,e,g,c,l,d,a,n,b){var m=5;if(!b){roundedRect(f,e,g,c,2,"#000",1,false,true,"rgba(210,210,210,1)","rgba(85,85,85,1)")}else{roundedStrokeRect(f,e,g,c,2,"#000",5,false,true,"rgba(210,210,210,1)","rgba(85,85,85,1)")}displayText(f+2,e-2-m,l,"Bold 18px Arial",d,false,false,"start");displayText(f+(g/2),e+(c/2)+4,a,"Bold 18px Arial",n,false,false,"center")}function bigGrowText(a){if(!showBigGrowTextAimFlag===true){return}var d=10;if(showBigGrowTicks>d){showBigGrowTicks=0;showBigGrowTextAimFlag=false;return}var c=1;if(showBigGrowTicks>4){c=1-((showBigGrowTicks)/d)}var b=c.toFixed(1);displayText(gridX+(gridWidth/2),gridY+(gridHeight/2),a,"Bold 25px Arial","rgba(250, 250, 250, "+b+")",false,false,"center")}function drawGrayOut(){ctx.fillStyle="rgba(120,120,190,0.65)";ctx.fillRect(0,0,canvas.width,canvas.height)}function grayOutMessageBox(c,a){doShadowOn();var b=canvas.width;var h=canvas.height/4+50;var l=ctx.createLinearGradient(0,canvas.height/2-h/2,b,h);l.addColorStop(0,"#223");l.addColorStop(0.4,"#bbb");l.addColorStop(0.6,"#bbb");l.addColorStop(1,"#223");ctx.fillStyle=l;ctx.fillRect(0,canvas.height/2-h/2,b,h);doShadowOff();displayText(canvas.width/2,(canvas.height/2-h/2)+20,""+c+"","Bold 18px Arial","#800",false,false,"center");var g=ctx.measureText(a);var e=g.width;var f=500;var d=160;if(e<f){f=300;d=100}textLabel(canvas.width/2-d,(canvas.height/2-h/2)+30,f,150,null,a,"#339",14,false)}function mouseMoveHandler(b){var c=WindowToCanvas(b.clientX,b.clientY);var a=checkButtonHover(buttonList,c.x,c.y);displayButtons()}function mouseClickHandler(a){var b=WindowToCanvas(a.clientX,a.clientY);checkButtonHit(buttonList,b.x,b.y);displayButtons()}function WindowToCanvas(a,c){var b=canvas.getBoundingClientRect();return{x:a-b.left*(canvas.width/b.width),y:c-b.top*(canvas.height/b.height)}}var buttonList=new Array();function setPause(){pauseGameFlag=true;gameState=2;drawGrayOut();grayOutMessageBox("GAME PAUSED","")}function showHelp(){pauseGameFlag=true;gameState=2;drawGrayOut();grayOutMessageBox("HELP","Move/rotate and place falling shapes to complete horizontal lines with no gaps.\nThis will clear that line and you will score points\n\nMove Left: Left Arrow / A\nMove Right: Right Arrow / D\nMove Down: Down Arrow / S\nRotate Shape:  Up Arrow / W")}function unsetPause(){pauseGameFlag=false;gameState=1;updateGrid()}function setExitGame(){gameState=4;pauseGameFlag=true;drawGrayOut();grayOutMessageBox("CONFIRM","Do you want to exit the game?")}function startGameClick(){gameState=1;updateGrid()}function replayGame(){checkAndAddScore(score);gameReset();gameState=1;tick()}function goToSplash(){checkAndAddScore(score);gameReset();tick()}function createButtons(){createButton(buttonList,canvas.width-230,canvas.height-150,160,80,"Start Game","red","red",startGameClick,0);createButton(buttonList,canvas.width-140,canvas.height-200,110,40,"Help","red","red",showHelp,1);createButton(buttonList,canvas.width-140,canvas.height-150,110,40,"Pause","red","red",setPause,1);createButton(buttonList,canvas.width-140,canvas.height-100,110,40,"Exit Game","red","red",setExitGame,1);createButton(buttonList,canvas.width/2-55,canvas.height/2+50,110,40,"Resume","red","red",unsetPause,2);createButton(buttonList,canvas.width/2-120,canvas.height/2+20,150,40,"Play Again","red","red",replayGame,3);createButton(buttonList,canvas.width/2+50,canvas.height/2+20,60,40,"Quit","red","red",goToSplash,3);createButton(buttonList,canvas.width/2-60,canvas.height/2+20,50,40,"Yes","red","red",goToSplash,4);createButton(buttonList,canvas.width/2+20,canvas.height/2+20,50,40,"No","red","red",unsetPause,4)}function createButton(f,g,e,m,c,l,o,n,d,a){var b=new Object();b.x=g;b.y=e;b.w=m;b.h=c;b.text=l;b.textColor=n;b.color=o;b.visible=true;b.enabled=true;b.state=0;b.gameState=a;b.hitFunction=d;f[f.length]=b}function checkButtonHit(b,a,c){for(i=0;i<b.length;i++){if(b[i].enabled===true&&b[i].gameState===gameState){if(a>b[i].x&&a<b[i].x+b[i].w){if(c>b[i].y&&c<b[i].y+b[i].h){b[i].state=0;b[i].hitFunction();return i}}}}return -1}function checkButtonHover(c,a,d){var b=-1;for(i=0;i<c.length;i++){if(c[i].enabled===true&&c[i].gameState===gameState){c[i].state=0;if(a>c[i].x&&a<c[i].x+c[i].w){if(d>c[i].y&&d<c[i].y+c[i].h){document.getElementById("canvasWrapper").style.cursor="pointer";c[i].state=1;b=i}}}}if(b<0){document.getElementById("canvasWrapper").style.cursor="default"}return b}function resetButtons(){for(i=0;i<buttonList.length;i++){if(buttonList[i].enabled===true&&buttonList[i].gameState===gameState){buttonList[i].state=0}}}function displayButtons(){for(i=0;i<buttonList.length;i++){if(buttonList[i].enabled===true&&buttonList[i].gameState===gameState){drawButton(buttonList[i].x,buttonList[i].y,buttonList[i].w,buttonList[i].h,buttonList[i].state,buttonList[i].text,20)}}}function drawButton(g,f,n,c,e,m,d){var a="#fdd638";var b="#fdb02a";var o="#000";var l=ctx.createLinearGradient(g+n/2,f,g+n/2,f+c);if(e===0){l.addColorStop(0,"rgba(250,250,250,0.15)");l.addColorStop(0.5,"rgba(250,250,250,0.5)");l.addColorStop(1,"rgba(0,0,0,0.05)");ctx.strokeStyle="#ddd"}else{l.addColorStop(0,"rgba(250,250,250,0.8)");l.addColorStop(0.4,"rgba(250,250,250,0.05)");l.addColorStop(0.9,"rgba(250,250,250,0.8)");l.addColorStop(1,"rgba(0,0,0,0.05)");ctx.strokeStyle="#ddd"}if(e===0){ctx.fillStyle=a;ctx.fillRect(g,f,n,c)}else{ctx.fillStyle=b;ctx.fillRect(g,f,n,c)}displayText(g+n/2,f+c/2+4,m,"Bold "+d+"px Arial",o,false,false,"center");ctx.lineWidth=2;ctx.strokeRect(g,f,n,c);if(e===0){ctx.beginPath();ctx.lineWidth=3;ctx.strokeStyle="rgba(250,250,250,0.75)";ctx.moveTo(g+2,f+2);ctx.lineTo(g+2,f+c-2);ctx.lineTo(g+2,f+2);ctx.lineTo(g+n-2,f+2);ctx.stroke();ctx.closePath();ctx.beginPath();ctx.lineWidth=3;ctx.strokeStyle="rgba(2,2,2,0.75)";ctx.moveTo(g+n-2,f+2);ctx.lineTo(g+n-2,f+c-2);ctx.lineTo(g+2,f+c-2);ctx.stroke();ctx.closePath()}else{ctx.beginPath();ctx.lineWidth=3;ctx.strokeStyle="rgba(2,2,2,0.75)";ctx.moveTo(g+2,f+2);ctx.lineTo(g+2,f+c-2);ctx.lineTo(g+2,f+2);ctx.lineTo(g+n-2,f+2);ctx.stroke();ctx.closePath();ctx.beginPath();ctx.lineWidth=3;ctx.strokeStyle="rgba(250,250,250,0.75)";ctx.moveTo(g+n-2,f+2);ctx.lineTo(g+n-2,f+c-2);ctx.lineTo(g+2,f+c-2);ctx.stroke();ctx.closePath()}doShadowOff()}var welcomeText1="How to play? \n\nMove/rotate and place random falling shapes to complete horizontal lines with no gaps.\nThis will clear that line and you will score points.\n\nDon't let the shapes stack to the top";var welcomeText2="Controls:\n\n Move Left:  Left Arrow / A \n Move Right:  Right Arrow / D\n Move Down:  Down Arrow / S\n Rotate Shape:  Up Arrow / W";function drawSplashScreen(){ctx.fillStyle="#000";ctx.fillRect(0,0,canvas.width,canvas.height);var b=angl;var a="#222233";ctx.save();ctx.translate(450,190);ctx.rotate((35+b)*Math.PI/180);drawShape(z1Shape,0,0,30,30,a);ctx.restore();ctx.save();ctx.translate(540,190);ctx.rotate((90+b)*Math.PI/180);drawShape(iShape,0,0,20,20,a);ctx.restore();ctx.save();ctx.translate(450,320);ctx.rotate((15+b)*Math.PI/180);drawShape(x6Shape,0,0,30,30,a);ctx.restore();ctx.save();ctx.translate(580,270);ctx.rotate((215+b)*Math.PI/180);drawShape(l1Shape,0,0,30,30,a);ctx.restore();ctx.save();ctx.translate(610,320);ctx.rotate((76+b)*Math.PI/180);drawShape(oShape,0,0,30,30,a);ctx.restore();b=0;ctx.save();ctx.translate(450,190);ctx.rotate((35+b)*Math.PI/180);drawShape(z1Shape,0,0,30,30,"#feff34");ctx.restore();ctx.save();ctx.translate(540,190);ctx.rotate((90+b)*Math.PI/180);drawShape(iShape,0,0,20,20,"#cdfe30");ctx.restore();ctx.save();ctx.translate(450,320);ctx.rotate((15+b)*Math.PI/180);drawShape(x6Shape,0,0,30,30,"#0362d0");ctx.restore();ctx.save();ctx.translate(580,270);ctx.rotate((215+b)*Math.PI/180);drawShape(l1Shape,0,0,30,30,"#23ffcc");ctx.restore();ctx.save();ctx.translate(610,320);ctx.rotate((76+b)*Math.PI/180);drawShape(oShape,0,0,30,30,"#df0000");ctx.restore();ctx.drawImage(headImg,94,64);textLabel(20,200,380,160,"rgba(56,56,76,0.5)",welcomeText1,"#f6f5cc",17,false);textLabel(20,430,380,110,"rgba(56,56,76,0.5)",welcomeText2,"#f6f5cc",17,false);ctx.strokeStyle="#070";ctx.strokeRect(0,0,canvas.width,canvas.height)}function checkLocalStorage(){if(typeof(localStorage)=="undefined"){return false}return true}function checkAndAddScore(e){if(!checkLocalStorage()){return}var c=0;var f=0;var a=true;for(var b=0;b<localStorage.length;b++){var d=localStorage.getItem(""+b);if(parseInt(e,10)===parseInt(d,10)){a=false}if(b===0){c=d;f=b}else{if(parseInt(c,10)>parseInt(d,10)){c=d;f=b}}}if(localStorage.length<3&&a){localStorage.setItem(localStorage.length,e)}else{if((parseInt(e,10)>parseInt(c,10))&&a){if(localStorage.length===3){localStorage.removeItem(f)}localStorage.setItem(f,e)}}}var scoreArray=new Array();function loadTopScores(){if(!checkLocalStorage()){return}for(var a=0;a<localStorage.length;a++){scoreArray[a]=localStorage.getItem(""+a)}scoreArray.sort(function(d,c){return c-d})}function displayTopScores(){var a=5;var b=250;labelStyle2(5,250,125,100,"Your Best","rgba(250,250,250,1)","","rgba(0,0,0,1)",true);for(i=0;i<scoreArray.length;i++){displayText(a+5,b+26+(20*i),(i+1)+". "+scoreArray[i],"Bold 16px Arial","rgba(250,250,250,1)",false,false,"start")}};