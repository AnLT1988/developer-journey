import React from 'react'
import { Link } from 'react-router-dom'

interface Props {

}

const NavBar = (props: Props) => {
    return (
        <div className="navbar">
            <li><Link to='/'>Home page</Link></li>
            <li><Link to='/aboutus'>About us</Link></li>
            <li><Link to='/products'>Products</Link></li>
        </div>
    )
}

export default NavBar
