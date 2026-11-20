import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./MenuMovil.module.css";
import {NavLink } from "react-router-dom";


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
        <NavLink to='/' onClick={()=>setAbierto(false)} className={styles.enlace}>Inicio</NavLink>
        <NavLink to='/kit' onClick={()=>setAbierto(false)} className={styles.enlace}>Kit</NavLink>  
      </div>
    )}
    </>
  );
}

export default MenuMovil