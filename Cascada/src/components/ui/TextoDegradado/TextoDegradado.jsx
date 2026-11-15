import styles from './TextoDegradado.module.css'


function TextoDegradado({children}) {

  return (
    <span className={`texto-grad ${styles.texto}`}>{children}</span>
  )
}

export default TextoDegradado