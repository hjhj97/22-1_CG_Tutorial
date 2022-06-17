const $radius_out = document.querySelector("#radius_out");
const $tube_out = document.querySelector("#tube_out");
const $radialSeg_out = document.querySelector("#radialSeg_out");
const $tubularSeg_out = document.querySelector("#tubularSeg_out");
const $arc_out = document.querySelector("#arc_out");

const $range_radius = document.querySelector("#range_radius");
const $range_tube = document.querySelector("#range_tube");
const $range_radialSeg = document.querySelector("#range_radialSeg");
const $range_tubularSeg = document.querySelector("#range_tubularSeg");
const $range_arc = document.querySelector("#range_arc");

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

$radius_out.innerText = $range_radius.value;
$tube_out.innerText = $range_tube.value;
$radialSeg_out.innerText = $range_radialSeg.value;
$tubularSeg_out.innerText = $range_tubularSeg.value;
$arc_out.innerText = $range_arc.value;

$range_radius.oninput = onChangeEvent;
$range_tube.oninput = onChangeEvent;
$range_radialSeg.oninput = onChangeEvent;
$range_tubularSeg.oninput = onChangeEvent;
$range_arc.oninput = onChangeEvent;

function onChangeEvent() {
  $radius_out.innerText = $range_radius.value;
  $tube_out.innerText = $range_tube.value;
  $radialSeg_out.innerText = $range_radialSeg.value;
  $tubularSeg_out.innerText = $range_tubularSeg.value;
  $arc_out.innerText = $range_arc.value;
  scene.remove(scene.children[2]);
  const geo = new THREE.TorusGeometry(
    parseFloat($range_radius.value),
    parseFloat($range_tube.value),
    parseInt($range_radialSeg.value),
    parseInt($range_tubularSeg.value),
    parseFloat($range_arc.value)
  );
  r(geo);
}
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 90.0,
});

r(new THREE.TorusGeometry(0.6, 0.2, 100, 100));

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
