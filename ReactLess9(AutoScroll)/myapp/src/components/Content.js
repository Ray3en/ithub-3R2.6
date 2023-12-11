import { forwardRef } from "react"

let Content = forwardRef((props, ref) => {
    
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    return(
        <div >
            {numbers.map((elem) => 
                (elem === 7) ? 
                <div ref={ref} className="card red" key={elem}>
                    <p>{elem}</p>
                </div> :
                <div className="card" key={elem}>
                    <p>{elem}</p>
                </div>
            )}
            <img alt="PNG!"/>
        </div>
    )
})

export default Content