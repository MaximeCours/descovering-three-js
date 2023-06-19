import * as THREE from 'three';

// Sizes
const sizes = {
    width: 1920,
    height: 927
}

const scene = new THREE.Scene();

// Plan

const plane = new THREE.PlaneGeometry(2, 2);

const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(plane, material);

// Sphere

const sphere1 = new THREE.SphereGeometry(0.5, 32, 32);
const sphere2 = new THREE.SphereGeometry(0.5, 32, 32);
const sphere3 = new THREE.SphereGeometry(0.5, 32, 32);

const material1 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const material2 = new THREE.MeshLambertMaterial({ color: 0x00ffff });
const material3 = new THREE.MeshLambertMaterial({ color: 0xff00ff });

const mesh1 = new THREE.Mesh(sphere1, material1);
const mesh2 = new THREE.Mesh(sphere2, material2);
const mesh3 = new THREE.Mesh(sphere3, material3);

mesh1.position.x = 0;
mesh1.position.y = 0.5;
mesh2.position.x = 0.7;
mesh2.position.y = -0.5;
mesh3.position.x = -0.7;
mesh3.position.y = -0.5;

// Add mesh

scene.add(mesh);
scene.add(mesh1);
scene.add(mesh2);
scene.add(mesh3);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);

scene.add(ambientLight);

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.x = 0
camera.position.y = 0
camera.position.z = 5;
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
