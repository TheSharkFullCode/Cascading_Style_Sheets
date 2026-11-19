import {NavLink } from "react-router-dom";
import styles from './Navbar.module.css'


function Navbar() {
  return (
    <>
    <nav className={`contenedor ${styles.nav}`}>
        <NavLink to='/' className={styles.enlace}>Inicio</NavLink>
        <NavLink to='/kit' className={styles.enlace}>Kit</NavLink>
    </nav>
    </>
  )
}

export default Navbar
