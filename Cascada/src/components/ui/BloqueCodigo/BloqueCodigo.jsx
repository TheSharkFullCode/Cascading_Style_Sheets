import styles from "./BloqueCodigo.module.css";

function BloqueCodigo({codigo}) {
  return (
      <pre className={styles.bloque}>
        <code>{codigo}</code>
      </pre>
  )
}

export default BloqueCodigo
