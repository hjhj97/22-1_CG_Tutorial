const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(5, h_scr2 / v_scr2, 0.1, 1000);
camera4.position.z = 50;

const renderer4 = new THREE.WebGLRenderer({ canvas: rubberDuckCanvas });

renderer4.setSize(h_scr, v_scr);

const light6 = new THREE.DirectionalLight(0xffffff, 1);
light6.position.set(1, 1, 2);
scene4.add(light6);
const light7 = new THREE.AmbientLight(0xffffff, 7);
scene4.add(light7);

const tubeGeo = new THREE.TorusGeometry(1.3, 0.6, 100, 120);
const duckGeo = new THREE.SphereGeometry(0.8);
const duckBeakGeo = new THREE.TorusGeometry(0.1, 0.15, 3, 120);
//const duckTexture = new THREE.TextureLoader().load("/img/duckTexture.png");
const duckTexture = new THREE.TextureLoader().load(
  "https://raw.githubusercontent.com/hjhj97/22-1_CG_Tutorial/main/img/duckTexture.png"
);

const tubeMaterial = new THREE.MeshPhongMaterial({
  color: 0xffaa00,
  shininess: 90.0,
});

const duckMaterial = new THREE.MeshPhongMaterial({
  map: duckTexture,
  shininess: 90.0,
});
const duckBeakMaterial = new THREE.MeshLambertMaterial({
  color: 0xff1100,
});

const tube = new THREE.Mesh(tubeGeo, tubeMaterial);
const duck = new THREE.Mesh(duckGeo, duckMaterial);
const duckBeak = new THREE.Mesh(duckBeakGeo, duckBeakMaterial);
duck.position.x = 0.6;
duck.position.y = 0.7;
duck.position.z = 1.0;

duckBeak.position.x = 0.1;
duckBeak.position.y = 0.7;
duckBeak.position.z = 0.2;

scene4.add(tube);
tube.add(duck);
duck.add(duckBeak);

const animate = function () {
  requestAnimationFrame(animate);

  tube.rotation.x += 0.01;
  tube.rotation.y += 0.01;
  renderer4.render(scene4, camera4);
};
animate();
