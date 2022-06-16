// const h_scr = window.innerWidth;
// const v_scr = window.innerHeight;
const h_scr = 450;
const v_scr = 300;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(5, h_scr / v_scr, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({ canvas: TorusCanvas1 });
renderer.setSize(h_scr, v_scr);

const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(1, 1, 2);
scene.add(light1);
const light2 = new THREE.AmbientLight(0xffffff, 1);
scene.add(light2);

const $range_radius = document.querySelector("#range_radius");
const $output = document.querySelector("#output");
$output.innerHTML = $range_radius.value;
$range_radius.oninput = () => {
  $output.innerHTML = $range_radius.value;
  scene.remove(scene.children[2]);
  const geo = new THREE.TorusGeometry(
    parseFloat($range_radius.value),
    0.2,
    100,
    100
  );
  r(geo);
  // geometry.parameters.radius = parseFloat($range_radius.value);
  // renderer.render(scene, camera);
  console.log($range_radius.value);
};

// const geometry = new THREE.TorusGeometry(
//   parseFloat($range_radius.value),
//   0.2,
//   100,
//   100
// );
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 90.0,
});

r();
function r(geo) {
  const torus = new THREE.Mesh(geo, material);
  scene.add(torus);

  const animate = function () {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
}
