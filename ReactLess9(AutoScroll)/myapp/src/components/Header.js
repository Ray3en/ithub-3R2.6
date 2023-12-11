


function Header(props){

    const {scrollHandle} = props

    return(
        <div className="header">
            <button onClick={scrollHandle}>Scroll to last element!</button>
        </div>
    )
}

export default Header