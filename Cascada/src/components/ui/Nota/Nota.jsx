
import styles from "./Nota.module.css";

function Nota({children}) {

  return (
    <aside className={styles.nota}>
        <span className={styles.ojos} aria-hidden="true">
            <span className={styles.ojo}></span>
            <span className={styles.ojo}></span>
        </span>
      {children}
    </aside>
  )
}

export default Nota
