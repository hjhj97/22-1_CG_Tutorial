const h_scr2 = 800;
const v_scr2 = 600;
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(5, h_scr2 / v_scr2, 0.1, 1000);
camera2.position.z = 50;

const renderer2 = new THREE.WebGLRenderer({ canvas: saturnCanvas });
renderer2.setSize(h_scr2, v_scr2);

const light3 = new THREE.DirectionalLight(0xffffff, 0.5);
light3.position.set(1, 1, 2);
scene2.add(light3);
const light4 = new THREE.AmbientLight(0xffffff, 1);
scene2.add(light4);

const geometry1 = new THREE.TorusGeometry(1.7, 0.15, 2, 120);
const geometry2 = new THREE.TorusGeometry(1.5, 0.05, 2, 120);
const geometry3 = new THREE.TorusGeometry(1.25, 0.2, 2, 120);
const sphereGeo = new THREE.SphereGeometry(0.8, 120, 120);
const saturnTex = new THREE.TextureLoader().load("img/saturn_texture.jpg");
const material1 = new THREE.MeshLambertMaterial({
  color: 0x95925a,
});
const material2 = new THREE.MeshLambertMaterial({
  color: 0x4e5238,
});
const material3 = new THREE.MeshLambertMaterial({
  color: 0x9fa665,
});
const saturnMaterial = new THREE.MeshBasicMaterial({
  map: saturnTex,
  // color: 0xc8d179,
});
const ring1 = new THREE.Mesh(geometry1, material1);
const ring2 = new THREE.Mesh(geometry2, material2);
const ring3 = new THREE.Mesh(geometry3, material3);
const saturn = new THREE.Mesh(sphereGeo, saturnMaterial);
scene2.add(ring1);
scene2.add(ring2);
scene2.add(ring3);
scene2.add(saturn);

const $saturn_zoom = document.querySelector("#saturn_zoom");
$saturn_zoom.oninput = () => {
  console.log($saturn_zoom.value);
  camera2.position.z = $saturn_zoom.value;
};

const animate2 = function () {
  requestAnimationFrame(animate2);
  ring1.rotation.x += 0.01;
  ring1.rotation.y += 0.01;
  ring2.rotation.x += 0.01;
  ring2.rotation.y += 0.01;
  ring3.rotation.x += 0.01;
  ring3.rotation.y += 0.01;
  saturn.rotation.x += 0.01;
  saturn.rotation.y += 0.01;
  renderer2.render(scene2, camera2);
};
animate2();
