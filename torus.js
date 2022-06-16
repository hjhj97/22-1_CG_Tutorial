const h_scr = window.innerWidth;
const v_scr = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(10, h_scr / v_scr, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({ canvas: HelloCanvas });
renderer.setSize(h_scr, v_scr);

const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(1, 1, 2);
scene.add(light1);
const light2 = new THREE.AmbientLight(0xffffff, 1);
scene.add(light2);

const geometry = new THREE.TorusGeometry(0.6, 0.2, 24, 120);
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 90.0,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const animate = function () {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();
