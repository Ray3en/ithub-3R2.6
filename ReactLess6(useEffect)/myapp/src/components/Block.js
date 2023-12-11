import { useEffect } from "react"


function Block(){
    
    // 4-ый режим работы (размонтирование компонента)
    useEffect(() => {
        return () => {
            console.log('Размонтирование!')
        }
    },[])

    return(
        <h2>Unmounting!</h2>
    )
}

export default Block