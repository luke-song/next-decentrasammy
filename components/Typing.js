import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF('/typing.glb');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.typing.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <primitive object={nodes.mixamorig9Hips} />
          <skinnedMesh
            geometry={nodes.Ch31_Body.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Body.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Ch31_Collar.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Collar.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Ch31_Eyelashes.geometry}
            material={materials.Ch31_hair}
            skeleton={nodes.Ch31_Eyelashes.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Ch31_Hair.geometry}
            material={materials.Ch31_hair}
            skeleton={nodes.Ch31_Hair.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Ch31_Pants.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Pants.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Ch31_Shoes.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Shoes.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Ch31_Sweater.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Sweater.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/typing.glb');
