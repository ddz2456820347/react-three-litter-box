import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import "./index.scss";

async function init(container: HTMLElement) {
  const scene = new THREE.Scene();

  // 设置光源
  const point = new THREE.PointLight(0xffffff);
  point.position.set(0, 0, 0); //点光源位置
  scene.add(point); //点光源添加到场景中

  //环境光
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 1, 1);
  scene.add(directionalLight);

  //相机设置
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  ); //透视摄像机
  camera.position.set(300, -100, 700); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

  // 加载模型
  const loader = await new GLTFLoader();

  //对模型文件glb进行解码操作 某些glb文件不需要

  const dracoLoader = await new DRACOLoader();
  dracoLoader.setDecoderPath("../../../public/gltf/");
  loader.setDRACOLoader(dracoLoader);

  //加载模型文件

  loader.load(
    "../../../public/glb/bmw.glb",
    (glb) => {
      console.log(glb.scene);
      glb.scene.position.set(0, 0, 0);
      scene.add(glb.scene);
    },
    undefined,
    (error) => {
      console.error(error);
    },
  );

  // 创建渲染对象
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染区域尺寸
  renderer.setClearColor(0xffffff, 1); //设置背景颜色
  container.appendChild(renderer.domElement);
  // 执行渲染操作
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera); //执行渲染操作
  };
  //创建控件对象1
  new OrbitControls(camera, renderer.domElement);

  animate();
}

export default function Three(): React.JSX.Element {
  const container = useRef(null);

  useEffect(() => {
    try {
      init(container.current as unknown as HTMLDivElement);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <div className="container" ref={container}></div>
    </>
  );
}
