import {Canvas} from "@react-three/fiber";
import {
    ScrollControls,
} from "@react-three/drei";
import Composition from "./components/Composition";
import HTMLContent from "./components/HTMLContent";

function App() {
    return (
        <Canvas shadows>
            <ScrollControls pages={5} >
                <Composition />
                <HTMLContent />
            </ScrollControls>
        </Canvas>
  )
}


export default App
