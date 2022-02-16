import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [respuesta, setRespuesta] = useState(null)

    useEffect(() => {

        fetch(url).then(resp => resp.json()).then(data => setRespuesta(data)).catch(err => console.warn(err))
        
    }, [url])
    
    return respuesta;

}
