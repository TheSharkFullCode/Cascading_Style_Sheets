import styles from "./BloqueCodigo.module.css";

function BloqueCodigo({codigo}) {
  return (
    <div className={styles.ventana}>
        <div className={styles.barra}>
            <span className={styles.punto}></span>
            <span className={styles.punto}></span>
            <span className={styles.punto}></span>
        </div>
    <pre className={styles.bloque}>
       <code>{codigo}</code>
    </pre>
    </div>
  )
}

export default BloqueCodigo
