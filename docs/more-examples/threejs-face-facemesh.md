---
id: threejs-face-facemesh
title: ThreeJS FaceMesh
sidebar_label: ThreeJS FaceMesh
---

import {customFields} from '/docusaurus.config.js';
import useBaseUrl from '@docusaurus/useBaseUrl';

FaceMesh effect

## Try it out
![img](/img/demo/face-mesh-demo.gif)

<a href={useBaseUrl('/face-tracking-samples/three-facemesh.html')} target="_blank">Live Demo</a>

<code>
{`
<html>
  <head>
    <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
    <script type="importmap">
    {
      "imports": {
	"three": "https://unpkg.com/three@0.147.0/build/three.module.js",
	"three/addons/": "https://unpkg.com/three@0.147.0/examples/jsm/",
	"mindar-face-three":"https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-face-three.prod.js"
      }
    }
    <script type="module">
      import * as THREE from 'three';
      import { MindARThree } from 'mindar-face-three';
      const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
      });
      const {renderer, scene, camera} = mindarThree;
      const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
      scene.add(light);
      const faceMesh = mindarThree.addFaceMesh();
      const texture = new THREE.TextureLoader().load('./assets/canonical_face_model_uv_visualization.png');
      faceMesh.material.map = texture;
      faceMesh.material.transparent = true;
      faceMesh.material.needsUpdate = true;
      scene.add(faceMesh);
      const start = async() => {
	await mindarThree.start();
	renderer.setAnimationLoop(() => {
	  renderer.render(scene, camera);
	});
      }
      start();
    </script>
    <style>
      body {
	margin: 0;
      }
      #container {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div id="container">
    </div>
  </body>
</html>
`}
</code>
