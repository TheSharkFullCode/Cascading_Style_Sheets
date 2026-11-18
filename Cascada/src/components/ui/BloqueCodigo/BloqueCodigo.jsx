import { RiTokenSwapFill } from "react-icons/ri";
import BotonCopiar from "../BotonCopiar/BotonCopiar";
import styles from "./BloqueCodigo.module.css";
import {Highlight, themes} from 'prism-react-renderer'


function BloqueCodigo({codigo}) {

  return (
    <div className={styles.ventana}>
        <div className={styles.barra}>
            <span className={styles.punto}></span>
            <span className={styles.punto}></span>
            <span className={styles.punto}></span>
        <div className={styles.accion}>
            <BotonCopiar texto={codigo}></BotonCopiar>
        </div>
        </div>

        <Highlight code={codigo} language='css' theme={themes.nightOwl}>    
            {({tokens,getLineProps,getTokenProps})=> (

            <pre className={styles.bloque}>

            <code>
            {tokens.map((linea,i)=> (
                <div key={i} {...getLineProps({line:linea})}> {linea.map((token,j)=>(

                    <span key={j} {...getTokenProps({token})}/>
                ))}

                </div>
            ))}
            </code>

            </pre>

            )}     

            

        </Highlight>

    </div>
  )
}

export default BloqueCodigo
