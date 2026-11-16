import styles from "./Boton.module.css";


function Boton({children,variante='primario',...resto}) {
  return (
    <button className={`${styles.boton} ${styles[variante]}`} {...resto}>{children}</button>
  )
}

export default Boton