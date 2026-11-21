import { useEffect  } from "react";
import { useLocation  } from "react-router-dom";

function useScrollArriba(){

    const { pathname } = useLocation();

    useEffect(()=>{
        /*Desplazate a:*/
        window.scrollTo(0,0)
    },[pathname])


}

export default useScrollArriba