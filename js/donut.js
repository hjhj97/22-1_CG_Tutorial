const h_scr3 = 450;
const v_scr3 = 300;
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(5, h_scr3 / v_scr3, 0.1, 1000);
camera3.position.z = 50;

const renderer3 = new THREE.WebGLRenderer({ canvas: donutCanvas });
renderer3.setSize(h_scr3, v_scr3);

const light5 = new THREE.AmbientLight(0xffffff, 1);
scene3.add(light5);
// const donutGeo = new THREE.TorusGeometry(1.5, 0.6, 100, 120);
// const donutTex = new THREE.TextureLoader().load(
//   "https://media.istockphoto.com/vectors/chocolate-flow-on-the-pink-seamless-donut-texture-vector-id821527352"
// );
// const donutMat = new THREE.MeshLambertMaterial({
//   map: donutTex,
// });
// const donut = new THREE.Mesh(donutGeo, donutMat);
// scene3.add(donut);

const $donut_tube = document.querySelector("#donut_tube");
$donut_tube.oninput = () => {
  scene3.remove(scene3.children[1]);
  const geo = new THREE.TorusGeometry(
    1.5,
    parseFloat($donut_tube.value),
    100,
    120
  );
  const donutTex = new THREE.TextureLoader().load(
    "https://media.istockphoto.com/vectors/chocolate-flow-on-the-pink-seamless-donut-texture-vector-id821527352"
  );
  const mat = new THREE.MeshLambertMaterial({
    map: donutTex,
  });
  r(geo, mat);
};

const donutTex = new THREE.TextureLoader().load(
  "https://media.istockphoto.com/vectors/chocolate-flow-on-the-pink-seamless-donut-texture-vector-id821527352"
);
const mat = new THREE.MeshLambertMaterial({
  map: donutTex,
});
r(new THREE.TorusGeometry(1.5, 0.7, 100, 120), mat);

function r(geo, mat) {
  const donut = new THREE.Mesh(geo, mat);
  scene3.add(donut);

  const animate3 = function () {
    requestAnimationFrame(animate3);
    donut.rotation.x += 0.01;
    donut.rotation.y += 0.01;

    renderer3.render(scene3, camera3);
  };
  animate3();
}
