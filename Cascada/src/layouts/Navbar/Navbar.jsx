import {NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
import MenuMovil from "./MenuMovil";


function Navbar() {
  return (
    <>
    <nav className={`contenedor ${styles.nav}`}>

        <div className={styles.enlaces}>
          <NavLink to='/' className={styles.enlace}>Inicio</NavLink>
          <NavLink to='/kit' className={styles.enlace}>Kit</NavLink>
        </div>
        <MenuMovil/>
    </nav>
    </>
  )
}

export default Navbar
