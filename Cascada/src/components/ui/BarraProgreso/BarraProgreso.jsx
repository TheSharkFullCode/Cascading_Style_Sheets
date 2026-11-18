import styles from './BarraProgreso.module.css'

function BarraProgreso({valor}) {

  return (
    <div className={styles.pista}>
        <div className={styles.relleno} style={{width:`${valor}%`}}></div>      
    </div>
  )
}

export default BarraProgreso
