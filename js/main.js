let scene, camera, renderer, cube, player, texture, material;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(4.5, 2, 2);
  // var material = new THREE.MeshBasicMaterial({ color: 0xd2d6d6 });
  texture = new THREE.TextureLoader().load('images/texture.png');
  material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.set(0, 0, 5);
}

// function tileDisplay() {
//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(
//     75, 
//     window.innerWidth / window.innerHeight, 
//     0.1,
//     1000
//   );

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);

//   document.body.appendChild(renderer.domElement);
//   var geometry = new THREE.BoxGeometry(2, 2, 2);
//   texture = new THREE.TextureLoader().load('images/image.png');
//   material = new THREE.MeshBasicMaterial({ map: texture });

//   player = new THREE.Mesh(geometry, material);
//   scene.add(player);
//   camera.position.z = 2;
// }

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.00;
  cube.rotation.y += 0.00;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspetRatio = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
tileDisplay();