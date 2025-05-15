import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";

let scene, camera, renderer, cube, controls;

function init() {
  // Cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
controls = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(20, 20, 20);
camera.lookAt(0, 0, 0);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 3);
const material = new THREE.MeshNormalMaterial();
const plane = new THREE.Mesh(geometry, material);
plane.position.set(8,8,8);
scene.add(plane);

const geometry2 = new THREE.SphereGeometry(3, 32, 32);
const material2 = new THREE.MeshNormalMaterial();
const esfera = new THREE.Mesh(geometry2, material2);
esfera.position.set(15,0,0);
scene.add(esfera);

const geometry3 = new THREE.BoxGeometry(3, 4,3);
const material3 = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(geometry3, material3);
box.position.set(0,15,0);
scene.add(box);

const geometry4 = new THREE.TorusGeometry(3, 0.4, 4,10);
const material4 = new THREE.MeshNormalMaterial();
const torus = new THREE.Mesh(geometry4, material4);
torus.position.set(0,0,15);
scene.add(torus);

const geometry5 = new THREE.CylinderGeometry(7, 8,7);
const material5 = new THREE.MeshNormalMaterial();
const cilindro = new THREE.Mesh(geometry5, material5);
cilindro.position.set(0,0,0);
scene.add(cilindro);


// 4. Definindo um eixo de rotação arbitrário
//    aqui escolhemos o eixo diagonal (1, 1, 0)
const axis = new THREE.Vector3(1, 1, 0).normalize();

// 5. Velocidade de rotação (radianos por quadro)
const angularSpeed = Math.PI / 180 * 1; // 1° por frame

// 6. Loop de animação
function animate() {
    requestAnimationFrame(animate);

    // Cria uma quaternion que representa uma rotação incremental
    const deltaQuat = new THREE.Quaternion()
        .setFromAxisAngle(axis, angularSpeed);

    // Multiplica: aplica primeiro delta, depois a orientação atual
   cilindro.quaternion.multiplyQuaternions(deltaQuat, cilindro.quaternion);
   controls.update();
    renderer.render(scene, camera);
}

animate();
}

init();