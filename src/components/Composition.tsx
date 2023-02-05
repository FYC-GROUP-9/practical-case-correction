import {Environment, PerspectiveCamera, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {MutableRefObject, useRef} from "react";
import {Smartphone} from "./Smartphone";

function Composition() {
    const scroll = useScroll()
    const { width, height } = useThree((state) => state.viewport)
    const smartphone: MutableRefObject<any> = useRef();
    useFrame((state, delta) => {
        const r1 = scroll.range(0 , 2 / 16);
        const r2 = scroll.range(4 / 16, 2 / 16);
        const r3 = scroll.range(8 / 16, 2 / 16);
        const r4 = scroll.range(12 / 16, 2 / 16);

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
            <Smartphone ref={smartphone} position={[0, 0, 0]} scale={[width*0.2,width*0.2,width*0.2]}/>
        </>
    );
}

export default Composition;