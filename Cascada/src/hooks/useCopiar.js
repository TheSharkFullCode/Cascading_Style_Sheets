import { useState } from "react";

function useCopiar() {
    
    const [copiado,setCopiado]=useState(false);

    function copiar(texto){

        navigator.clipboard.writeText(texto)
        setCopiado(true)

        setTimeout(()=>{
            setCopiado(false)
        },2000)

    }
    return {copiar,copiado}
    
}

export default useCopiar