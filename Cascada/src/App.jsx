import { Rocket } from "lucide-react";
import Antetitulo from "./components/ui/Antetitulo/Antetitulo.jsx";


function App() {

  return (
    <>
    <div className="contenedor">
      <Antetitulo>Css · de cero a Experto</Antetitulo>
    <h1> <span className="texto-grad">Cascada</span> <Rocket size={28} strokeWidth={1.5} color="#2f5bff" /></h1>
    </div>
    </>
  )
}

export default App