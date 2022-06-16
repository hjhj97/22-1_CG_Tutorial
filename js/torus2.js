const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(5, h_scr / v_scr, 0.1, 1000);
camera2.position.z = 30;

const renderer2 = new THREE.WebGLRenderer({ canvas: TorusCanvas2 });
renderer2.setSize(h_scr, v_scr);

const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(1, 1, 2);
scene2.add(light3);
const light4 = new THREE.AmbientLight(0xffffff, 1);
scene2.add(light4);

const geometry2 = new THREE.TorusGeometry(0.6, 0.1, 20, 120);
const material2 = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  shininess: 90.0,
});
const torus2 = new THREE.Mesh(geometry2, material2);
scene2.add(torus2);

const animate2 = function () {
  requestAnimationFrame(animate2);
  torus2.rotation.x += 0.01;
  torus2.rotation.y += 0.01;
  renderer2.render(scene2, camera2);
};
animate2();
