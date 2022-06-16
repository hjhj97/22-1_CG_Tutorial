const h_scr = window.innerWidth;
const v_scr = window.innerHeight;
// const h_scr = 450;
// const v_scr = 300;
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

const donutGeo = new THREE.TorusGeometry(0.7, 0.3, 100, 120);
const loader = new THREE.TextureLoader();
const donutTex = loader.load(
  "https://media.istockphoto.com/vectors/chocolate-flow-on-the-pink-seamless-donut-texture-vector-id821527352"
);
const geometry = new THREE.TorusGeometry(0.6, 0.1, 2, 120);
const geometry2 = new THREE.TorusGeometry(0.4, 0.1, 2, 120);
const donutMaterial = new THREE.MeshLambertMaterial({
  map: donutTex,
});
const material = new THREE.MeshPhongMaterial({
  color: 0xfcec03,
  shininess: 90.0,
});
const material2 = new THREE.MeshPhongMaterial({
  color: 0xa1a83d,
  shininess: 90.0,
});
const donut = new THREE.Mesh(donutGeo, donutMaterial);
const torus = new THREE.Mesh(geometry, material);
const torus2 = new THREE.Mesh(geometry2, material2);
scene.add(donut);

const animate = function () {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus2.rotation.x += 0.01;
  torus2.rotation.y += 0.01;
  donut.rotation.x += 0.01;
  donut.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();
