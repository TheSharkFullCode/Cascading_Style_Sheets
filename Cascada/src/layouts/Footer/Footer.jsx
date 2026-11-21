import styles from "./Footer.module.css";

function Footer() {
    const anio = new Date().getFullYear()
  return (
    <footer className={`contenedor ${styles.footer}`}>
        <p>Cascada · Aprende CSS escribiendo CSS </p>
        <p>© {anio} Oscar Rodriguez</p>
    </footer>
  )
}

export default Footer