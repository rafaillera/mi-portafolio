import { postulaciones as postulacionesIniciales} from "./data/postulaciones";
import FormularioPostulaciones from "./components/FormularioPostulaciones";
import TablaPostulaciones from "./components/Tablapostulaciones";
import { useState, useEffect } from "react";


function App() {

const [postulaciones, setPostulaciones] = useState(() => {
  const guardado = localStorage.getItem("postulaciones");
  if(guardado) {
    return JSON.parse(guardado);
  }
  return PostulacionesIniciales;
});

useEffect (() => {
  localStorage.setItem("postulaciones", JSON.stringify(postulaciones))
}, [postulaciones])


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