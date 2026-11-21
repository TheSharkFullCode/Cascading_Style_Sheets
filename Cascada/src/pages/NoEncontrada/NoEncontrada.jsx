import {Link} from 'react-router-dom'
import styles from "./NoEncontrada.module.css";

function NoEncontrada() {
  return (
    <section className={styles.pagina}>
        <h1 className={`texto-grad ${styles.codigo}`}>404</h1>
        <p>Esta página no existe ... ¡todavía!</p>
        <Link className={styles.enlace} to='/'>Volver al inicio </Link>
    </section>
  )
}

export default NoEncontrada