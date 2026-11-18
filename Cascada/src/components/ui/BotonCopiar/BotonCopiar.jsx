import useCopiar from '../../../hooks/useCopiar';
import styles from "./BotonCopiar.module.css";
import { Check } from "lucide-react";
import { Copy } from "lucide-react";



function BotonCopiar({texto}) {

    const  {copiar,copiado} = useCopiar()
  return (
    <button className={styles.boton} onClick={()=>copiar(texto)}>{copiado ? <Check size={14}></Check>:<Copy size={14}></Copy>}  {copiado ? '¡Copiado!' : 'Copiar'}</button>
  )
}

export default BotonCopiar
