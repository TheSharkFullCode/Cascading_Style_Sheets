import styles from './Antetitulo.module.css'


function Antetitulo({children}) {

  return (
    <>
    <p className={styles.antetitulo}>{children}</p>
    </>
  )
}

export default Antetitulo