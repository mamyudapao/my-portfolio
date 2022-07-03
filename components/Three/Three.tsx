import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Styles from "./three.module.scss";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "dog/scene.gltf");
  return <primitive object={gltf.scene} />;
};

const Three = () => {
  return (
    <div className={Styles.model}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0.8, 0.8, 0.8] }}>
          <ambientLight></ambientLight>
          <Model></Model>
          <OrbitControls autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Three;
