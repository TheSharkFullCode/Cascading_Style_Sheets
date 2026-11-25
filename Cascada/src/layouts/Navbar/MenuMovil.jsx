import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MENU } from "../../config/variables.js";
import styles from "./MenuMovil.module.css";


function MenuMovil() {
   const [abierto,setAbierto] = useState(false)


  return (
    <>

    <button type="button" className={styles.boton}
      onClick={()=> setAbierto(!abierto)}
      aria-label={abierto ?'cerrar menu':'abrir menu'}>

      {abierto ? <X size={22}/>: <Menu size={22}/>}

    </button>

    {abierto && ( 
      <div className={styles.panel}>
        {MENU.map(({ruta, texto})=> 
        <NavLink to={ruta} key={ruta}
         className={styles.enlace}
         onClick={()=>setAbierto(false)}>
         {texto}</NavLink>
        )}
      
      </div>
    )}
    </>
  );
}

export default MenuMovil