import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}></ambientLight>
      <directionalLight position={[0, 0, 0.05]}></directionalLight>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}></icosahedronGeometry>
        <meshStandardMaterial
          color="#d1d1f1"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        ></meshStandardMaterial>
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        ></Decal>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <Ball imgUrl={icon}></Ball>
      </Suspense>

      <Preload all></Preload>
    </Canvas>
  );
};

export default BallCanvas;
