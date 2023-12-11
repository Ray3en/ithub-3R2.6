import { useEffect, useState } from "react";


function useStorageState(defualtState, keyStorage){

    const loadData = JSON.parse(localStorage.getItem(keyStorage))

    const [value, setValue] = useState(loadData ?? defualtState)

    useEffect(() => {
        localStorage.setItem(keyStorage, JSON.stringify(value))
    }, [value])
    
    return [value, setValue]
}


export {useStorageState}
