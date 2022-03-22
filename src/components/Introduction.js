import { Canvas } from '@react-three/fiber'
import React from 'react'
import AnimatedSphere from './AnimatedSphere'
import TextSection from './TextSection'
import { Suspense } from "react";
import manimg from "../images/man.png"
import styled from "styled-components";


const Introduction = () => {
  return (
    <Wrapper >
      <TextSection />
      <CanvasContainer>
        <Img src={manimg} alt="" />
        <Canvas clasName="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
  align-items:center;
  min-height: 100vh;
  > div {
    width: 50%;
    min-width: 500px;
  }
`;

const CanvasContainer = styled.div`
  position: relative;
  height: 800px;
  canvas  {
    height: 800px;
  }
`;


const Img = styled.img`
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  height: 300px;
`;

export default Introduction