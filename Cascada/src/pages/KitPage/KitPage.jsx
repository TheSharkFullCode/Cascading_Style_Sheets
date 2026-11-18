import { Rocket } from "lucide-react";
import styles from "./KitPage.module.css";
import Antetitulo from "../../components/ui/Antetitulo/Antetitulo.jsx";
import TextoDegradado from '../../components/ui/TextoDegradado/TextoDegradado.jsx'
import Nota from "../../components/ui/Nota/Nota.jsx";
import Boton from "../../components/ui/Boton/Boton.jsx";
import Etiqueta from "../../components/ui/Etiqueta/Etiqueta.jsx";
import BloqueCodigo from "../../components/ui/BloqueCodigo/BloqueCodigo.jsx";
import BarraProgreso from "../../components/ui/BarraProgreso/BarraProgreso.jsx";

function KitPage() {
  return (
    <div className="contenedor">        
    <Antetitulo>Css · de cero a Experto</Antetitulo>
    <h1> <span className="texto-grad">Cascada</span> <Rocket size={28} strokeWidth={1.5} color="#2f5bff" /></h1>
    <h2>Aprende CSS <TextoDegradado>escribiendo CSS</TextoDegradado> </h2>

    <section className={styles.seccion}>
        <h3>Botones</h3>
        <div className={styles.fila}>
        <Boton variante='primario'>Empezar</Boton>
        <Boton variante='grad'>ver Temas</Boton>
        <Boton variante='fantasma'>Más info</Boton>
        </div>
    </section>

    <section className={styles.seccion}>
        <h3>Etiquetas</h3>
        <div className={styles.fila}>
        <Etiqueta>Fundamentos</Etiqueta>
        <Etiqueta color='mandarina'>Caja</Etiqueta>
        <Etiqueta color='rebecca'>Layout</Etiqueta>
        <Etiqueta color='menta'>Responsive</Etiqueta>
        <Etiqueta color='fucsia'>Movimiento</Etiqueta>
        <Etiqueta color='coral'>CSS moderno</Etiqueta>

        </div>
    </section>

    <section className={styles.seccion}>
        <h3>Nota</h3>
        <Nota>Truco: margin-inline: auto centra cualquier caja con ancho máximo</Nota>
    </section>

    <section className={styles.seccion}>
        <h3>Bloque Codigo</h3>
        <BloqueCodigo codigo={`.caja{
        margin-inline: auto;
        }`}/>
    </section>

    <section className={styles.seccion}>
        <h3>Barra Progreso</h3>
    <BarraProgreso valor={40}/>
    </section>
    
    </div>
  )
}

export default KitPage
