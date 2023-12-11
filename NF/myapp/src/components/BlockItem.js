


function BlockItem(props){

    const {title, completed} = props
    
    return(
        <div>
            <h2>{title}</h2>
            <p>{completed}</p>
        </div>
    )
}

export default BlockItem