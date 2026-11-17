import useCopiar from '../../../hooks/useCopiar';

function BotonCopiar({texto}) {

    const  {copiar,copiado} = useCopiar()
  return (
    <button onClick={()=>copiar(texto)}>{copiado ? '¡Copiado!':'Copiar'}</button>
  )
}

export default BotonCopiar
