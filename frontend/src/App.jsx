import { postulaciones } from "./data/postulaciones";
import TablaPostulaciones from "./components/TablaPostulaciones";

function App() {
  return (
    <main>
      <h1>Mis postulaciones</h1>
      <TablaPostulaciones postulaciones={postulaciones} />
    </main>
  );
}

export default App;