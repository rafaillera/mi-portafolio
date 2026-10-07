import { postulaciones as postulacionesIniciales} from "./data/postulaciones";
import FormularioPostulaciones from "./components/FormularioPostulaciones";
import TablaPostulaciones from "./components/Tablapostulaciones";
import { useState } from "react";


function App() {
  const [postulaciones, setPostulaciones] = useState(postulacionesIniciales);

function agregarPostulaciones(nueva) {
  setPostulaciones([...postulaciones, nueva])
};

function eliminarPostulaciones(id) {
  setPostulaciones(postulaciones.filter(e => e.id !== id));
};

  return (
    <main>
      <h1>Postulaciones</h1>
      <FormularioPostulaciones agregarPostulaciones={agregarPostulaciones}/>
      <TablaPostulaciones postulaciones={postulaciones} onEliminar={eliminarPostulaciones}/>
    </main>
  );
}

export default App;