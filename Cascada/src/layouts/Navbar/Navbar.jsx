import { NavLink } from "react-router-dom";
import { MENU } from "../../config/variables.js";
import styles from './Navbar.module.css'
import MenuMovil from "./MenuMovil";


function Navbar() {
  return (
    <>
    <nav className={`contenedor ${styles.nav}`}>

        <div className={styles.enlaces}>

          {MENU.map(({ruta, texto})=> <NavLink key={ruta} to={ruta} className={styles.enlace}>{texto}</NavLink>  )}

        </div>
        <MenuMovil/>
    </nav>
    </>
  )
}

export default Navbar
