<template>
  <div ref="sceneContainer" class="scene-container"></div>
</template>

<script>
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';

export default {
  name: 'PlyRenderer',
  mounted() {
    this.initThree();
    this.loadPLY();
    this.animate();
    window.addEventListener('resize', this.onWindowResize, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false);
  },
  methods: {
    initThree() {
      // Set up scene, camera, and renderer
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0xffffff); // Set background color to white
      this.$refs.sceneContainer.appendChild(this.renderer.domElement);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight);

      // Set camera position
      this.camera.position.z = 5;
    },
    loadPLY() {
      // Load the PLY file
      const loader = new PLYLoader();
      loader.load('/plyexam.ply', (geometry) => {
        geometry.computeVertexNormals();
        const material = new THREE.MeshStandardMaterial({ color: 0x808080, flatShading: true }); // Set color to gray
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
      }, undefined, (error) => {
        console.error('An error happened during loading PLY file:', error);
      });
    },
    animate() {
      requestAnimationFrame(this.animate);

      // Rotate the scene for better visibility
      this.scene.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  },
};
</script>

<style>
.scene-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
