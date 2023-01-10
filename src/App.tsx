import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
    ScrollControls,
    SpotLight,
    Stage,
    useScroll
} from "@react-three/drei";
import {MutableRefObject, useRef} from "react";
import {Smartphone} from "./components/Smartphone";

function App() {

  return (
    <Canvas shadows>
        <ScrollControls pages={5} >
            <Composition />
        </ScrollControls>
    </Canvas>
  )
}

function Composition({...props}) {
    const scroll = useScroll()
    const { width, height } = useThree((state) => state.viewport)
    const smartphone: MutableRefObject<any> = useRef();
    useFrame((state, delta) => {
        const r1 = scroll.range(0 , 1 / 5);
        const r2 = scroll.range(1 / 5, 1 / 5);
        const r3 = scroll.range(2 / 5, 1 / 5);
        const r4 = scroll.range(3 / 5, 1 / 5);
        const r5 = scroll.range(4 / 5, 1 / 5);

        // Etape 1
        smartphone.current.position.y = 1.25 * r1 - 1.25

        // Etape 2
        smartphone.current.rotation.y = Math.PI * r2;
        smartphone.current.position.x = -r2

        // Position et rotation actuelles:
        // Position: {x: -1, y: 0, z: 0}
        // Rotation: {x: 0, y: Math.PI, z: 0}

        // Etape 3
        // Futures positions et rotations:
        // Position: {x: 1.5, y: -0.5, z: 1}
        // Rotation: {x: -0.1, y: Math.PI, z: -0.55}

        if (r2 === 1) {
            smartphone.current.position.x = (2.5 * r3) - 1;
            smartphone.current.position.y = -r3 * 0.5;
            smartphone.current.position.z = r3;

        }
        smartphone.current.rotation.x = -r3 * 0.1;
        smartphone.current.rotation.z = -r3 * 0.55;

        // Etape 4
        // Futures positions et rotations:
        // Position: {x: 0, y: -1, z: 0}
        // Rotation: {x: Math.PI/2, y: Math.PI, z: Math.PI/2}



        if (r3 === 1) {
            smartphone.current.rotation.x = ((Math.PI / 2) + 0.1) * r4 - 0.1;
            smartphone.current.rotation.z = ((Math.PI / 2) + 0.55) * r4 - 0.55;
            smartphone.current.position.y = -0.5 * r4 - 0.5;
            smartphone.current.position.x = -1.5 * r4 + 1.5;
            smartphone.current.position.z = -r4 + 1;
        }


    });


    return (
      <>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <Environment preset="park" />
        {/*/!*<SpotLight position={[0, 0, 5]} distance={5} angle={0.15} attenuation={5} anglePower={50} color={0xff0000} />*!/*/}
        <Smartphone ref={smartphone} position={[0, 0, 0]}/>
      </>
  );
}

export default App
