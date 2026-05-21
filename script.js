import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 1. Nastavení Scény
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0'); // Šedé pozadí

// 2. Nastavení Kamery
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// 3. Renderer (Vykreslovač)
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 4. Světla (Bez nich by byl objekt černý)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Jemné celkové světlo
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Přímé světlo (jako slunce)
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// 5. Ovládání myší (OrbitControls) - umožní ti objektem otáčet
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 6. NAČTENÍ 3D OBJEKTU
const loader = new GLTFLoader();

// Nahraď 'cesta/k/tvemu_modelu.glb' skutečnou cestou k souboru
loader.load(
    src="img/Untitled.glb" , 
    (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        console.log('Model úspěšně načten!');
    },
    (xhr) => {
        // Průběh načítání v procentech
        console.log((xhr.loaded / xhr.total * 100) + '% načteno');
    },
    (error) => {
        // Pokud nastane chyba
        console.error('Došlo k chybě při načítání:', error);
    }
);

// 7. Animační smyčka (vykresluje scénu cca 60x za sekundu)
const animate = () => {
    requestAnimationFrame(animate);
    
    // Aktualizace ovládání
    controls.update();
    
    // Vykreslení
    renderer.render(scene, camera);
};

animate();

// 8. Responzivita (přizpůsobení při změně velikosti okna)
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
