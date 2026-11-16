import { Rocket } from "lucide-react";
import Antetitulo from "./components/ui/Antetitulo/Antetitulo.jsx";
import TextoDegradado from './components/ui/TextoDegradado/TextoDegradado.jsx'
import Nota from "./components/ui/Nota/Nota.jsx";
import Boton from "./components/ui/Boton/Boton.jsx";
import Etiqueta from "./components/ui/Etiqueta/Etiqueta.jsx";


function App() {

  return (
    <>
    <div className="contenedor">
    <Antetitulo>Css · de cero a Experto</Antetitulo>
    <h1> <span className="texto-grad">Cascada</span> <Rocket size={28} strokeWidth={1.5} color="#2f5bff" /></h1>
    <h2>Aprende CSS <TextoDegradado>escribiendo CSS</TextoDegradado> </h2>
    <Boton variante='primario'>Empezar</Boton>
    <Boton variante='grad'>ver Temas</Boton>
    <Boton variante='fantasma'>Más info</Boton>
    <Etiqueta>Fundamentos</Etiqueta>
    <Etiqueta color='mandarina'>Caja</Etiqueta>
    <Etiqueta color='rebecca'>Layout</Etiqueta>
    <Etiqueta color='menta'>Responsive</Etiqueta>
    <Etiqueta color='fucsia'>Movimiento</Etiqueta>
    <Etiqueta color='coral'>CSS moderno</Etiqueta>
    <Nota>Truco: margin-inline: auto centra cualquier caja con ancho máximo</Nota>


    </div>
    </>
  )
}

export default App