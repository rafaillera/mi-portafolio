import { postulaciones as postulacionesIniciales} from "./data/postulaciones";
import FormularioPostulaciones from "./components/FormularioPostulaciones";
import TablaPostulaciones from "./components/TablaPostulaciones";
import { useState } from "react";


function App() {
  const [postulaciones, setPostulaciones] = useState(postulacionesIniciales);

function agregarPostulaciones(nueva) {
  setPostulaciones([...postulaciones, nueva])
}

  return (
    <main>
      <h1>Postulaciones</h1>
      <FormularioPostulaciones agregarPostulaciones={agregarPostulaciones}/>
      <TablaPostulaciones postulaciones={postulaciones} />
    </main>
  );
}

export default App;