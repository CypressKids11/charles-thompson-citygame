import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000); 

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth,window.innerHeight); 
document.body.appendChild(renderer.domElement); 

const controls = new OrbitControls(camera, renderer.domElement); 

const geometry1 = new THREE.BoxGeometry(2,4,1); 
const material1 = new THREE.MeshLambertMaterial({color: 0xffff00});
const cube1 = new THREE.Mesh(geometry1,material1); 
cube1.position.x = -5
scene.add(cube1); 

const geometry2 = new THREE.BoxGeometry(2,4,1); 
const material2 = new THREE.MeshLambertMaterial({color: 0xff0000});
const cube2 = new THREE.Mesh(geometry2,material2); 
cube2.position.x = 5
scene.add(cube2); 

const light = new THREE.PointLight(0xffffff, 100); 
scene.add(light); 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);  

const sphereGeometry = new THREE.SphereGeometry(2,64,64); 
const sphereMaterial = new THREE.MeshLambertMaterial({color:0xff00ff}); 
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); 
scene.add(sphere); 

camera.position.z = 5; 

function animate(){
    requestAnimationFrame(animate); 

    cube1.rotation.x += 0.01
    cube1.rotation.y += 0.1
    cube2.rotation.x += 0.01
    cube2.rotation.y += 0.1

    renderer.render(scene,camera); 
}
animate();