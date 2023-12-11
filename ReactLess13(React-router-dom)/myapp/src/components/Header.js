import { Link } from "react-router-dom"


function Header(){

    const menu_data = ['About', 'Contacts', 'A&Q']

    return (
        <div className="header">
            <div className="logo"></div>
            <div className="menu_wrapper">
                <Link to={'/'}>
                    <p>Home</p>
                </Link>
                {menu_data.map(elem => 
                    <Link to={'/'+elem.toLowerCase()} key={elem}> 
                        <p>{elem}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header