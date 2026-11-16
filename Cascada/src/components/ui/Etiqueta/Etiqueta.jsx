import styles from "./Etiqueta.module.css";

function Etiqueta({children,color='electrico'}) {
  return (
    <span className={styles.etiqueta} style={{'--color':`var(--${color})`}}>
      {children}
    </span>
  )
}

export default Etiqueta
