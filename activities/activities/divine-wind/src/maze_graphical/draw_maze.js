function initGraphicalMaze(e,t,l){let n=[];for(let s=0;s<e.grid.length;s++){let r=new BABYLON.TransformNode("layer "+s,t);r.setParent(l);let i=new MazeRotationLayer(r,e.grid[s].length,t,e.offsets[s]);n.push(i);let h=2*Math.PI/e.grid[s].length,o=INNER_RADIUS+CELL_HEIGHT*s,a=[[]];for(let c=0,g=0;c<e.grid[s].length;c++,g+=h){let u=a[a.length-1];if(e.grid[s][c].outer0?(0===u.length&&u.push(new BABYLON.Vector3(o*Math.sin(g),o*Math.cos(g),0)),u.push(new BABYLON.Vector3(o*Math.sin(g+h/2),o*Math.cos(g+h/2),0))):u.length>0&&(a.push([]),u=a[a.length-1]),e.grid[s][c].outer1?(0===u.length&&u.push(new BABYLON.Vector3(o*Math.sin(g+h/2),o*Math.cos(g+h/2),0)),u.push(new BABYLON.Vector3(o*Math.sin(g+h),o*Math.cos(g+h),0))):u.length>0&&(a.push([]),u=a[a.length-1]),e.grid[s][c].clockwise){let d={path:[new BABYLON.Vector3(o*Math.sin(g+h),o*Math.cos(g+h),0),new BABYLON.Vector3((o-CELL_HEIGHT)*Math.sin(g+h),(o-CELL_HEIGHT)*Math.cos(g+h),0)],radius:WALL_WIDTH,cap:BABYLON.Mesh.CAP_ALL},$=BABYLON.MeshBuilder.CreateTube("clockwise wall",d,t);$.isPickable=!1,$.setParent(i.origin),i.addWallMesh($)}}for(let p of a){if(0===p.length)continue;let w={path:p,radius:WALL_WIDTH,cap:BABYLON.Mesh.CAP_ALL},f=BABYLON.MeshBuilder.CreateTube("outer wall",w,t);f.isPickable=!1,f.setParent(i.origin),i.addWallMesh(f)}}return n}