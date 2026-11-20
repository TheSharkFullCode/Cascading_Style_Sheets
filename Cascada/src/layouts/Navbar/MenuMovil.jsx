import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./MenuMovil.module.css";


function MenuMovil() {
   const [abierto,setAbierto] = useState(false)


  return (
    <button type="button" className={styles.boton}
    onClick={()=> setAbierto(!abierto)}
    aria-label={abierto ?'cerrar menu':'abrir menu'}>
      {abierto ? <X size={22}/>: <Menu size={22}/>}
    </button>
  )
}

export default MenuMovil