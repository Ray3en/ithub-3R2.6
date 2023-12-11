import BlockItem from "./BlockItem"

function BlockList(props){

    const {todos} = props

    return(
        <div>
            {todos.map(elem => <BlockItem
                                    key={elem.id}
                                    title={elem.title} 
                                    completed={elem.completed}
                                />)}
        </div>
    )
}

export default BlockList