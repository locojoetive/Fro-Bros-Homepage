import {AfterViewInit, Component} from '@angular/core';
import anime from 'animejs/lib/anime.es';
import * as THREE from 'three-js/three';


@Component({
  selector: 'app-anime-example',
  templateUrl: './anime-example.component.html',
  styleUrls: ['./anime-example.component.scss']
})
export class AnimeExampleComponent implements AfterViewInit {
  ngAfterViewInit() {
    const app = new App();
    app.init();
  }
}

class App {
  private randFrom: string[];
  private easing: string[];
  private randFromText: HTMLElement;
  private randEasingText: HTMLElement;
  private camera: THREE.PerspectiveCamera;
  private controls: THREE.OrbitControls;
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private geometry: THREE.BoxBufferGeometry;
  private nRows: number;
  private nCols: number;
  private staggerArray = [];

  constructor() {
    this.randFrom = [
      'first',
      'last',
      'center'
    ];

    this.easing = [
      'linear',
      'easeInOutQuad',
      'easeInOutCubic',
      'easeInOutQuart',
      'easeInOutQuint',
      'easeInOutSine',
      'easeInOutExpo',
      'easeInOutCirc',
      'easeInOutBack',
      'cubicBezier(.5, .05, .1, .3)',
      'spring(1, 80, 10, 0)',
      'steps(10)'
    ];

    this.randFromText = document.getElementById('randFrom');
    this.randEasingText = document.getElementById('randEasing');
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = -45;
    this.camera.position.y = 20;
    this.camera.position.z = -45;

    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.target = new THREE.Vector3(5, -5, 5);

    this.scene = new THREE.scene();

    window.addEventListener('resize', this.onResize, false);

    this.createBoxes();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);

    this.beginAnimationLoop();

    this.animate();
  }

  createBoxes() {
    this.geometry = new THREE.BoxBufferGeometry(1, 10, 1);

    const vertexShader = `
      varying vec2 vUv;
      void main()	{
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `;

    const fragmentShader = `
      #extension GL_OES_standard_derivatives : enable

      varying vec2 vUv;
      uniform float thickness;

      float edgeFactor(vec2 p){
        vec2 grid = abs(fract(p - 0.5) - 0.5) / fwidth(p) / thickness;
        return min(grid.x, grid.y);
      }

      void main() {

        float a = edgeFactor(vUv);

        vec3 c = mix(vec3(1), vec3(0), a);

        gl_FragColor = vec4(c, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        thickness: {
          value: 1.5
        }
      },
      vertexShader,
      fragmentShader
    });
    const cube = new THREE.Mesh(this.geometry, material);

    const offset = 1.25;
    this.nRows = 25;
    this.nCols = 25;
    this.staggerArray = [];

    for (let column = 0; column < this.nCols; column++) {
      for (let row = 0; row < this.nRows; row++) {
        const obj = cube.clone();
        obj.position.x = (row * offset) - ((this.nRows * 0.5) + (this.geometry.parameters.width * 0.5));
        obj.position.y = -(this.geometry.parameters.height * 0.5);
        obj.position.z = (column * offset) - ((this.nCols * 0.5) + (this.geometry.parameters.width * 0.5));
        this.staggerArray.push(obj.position);
        this.scene.add(obj);
      }
    }
  }

  beginAnimationLoop() {

    // random from array
    const randFrom = this.randFrom[Math.floor(Math.random() * this.randFrom.length)];
    const easingString = this.easing[Math.floor(Math.random() * this.easing.length)];

    this.randFromText.textContent = randFrom;
    this.randEasingText.textContent = easingString;

    anime({
      targets: this.staggerArray,
      y: [
        {value: (this.geometry.parameters.height * 0.25), duration: 500},
        {value: -(this.geometry.parameters.height * 0.25), duration: 2000},
      ],
      delay: anime.stagger(200, {grid: [this.nRows, this.nCols], from: randFrom}),
      easing: easingString,
      complete: (anim) => this.beginAnimationLoop()
    });
  }

  animate() {

    requestAnimationFrame(() => this.animate());
    this.update();
    this.render();
  }

  update() {

    // update orbit controls
    if (this.controls) {
      this.controls.update();
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {

    // scene & camera update
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

}
