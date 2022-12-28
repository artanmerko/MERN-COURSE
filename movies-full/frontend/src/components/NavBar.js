import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    
    return (
        <div>
            <NavLink to='/form'>Go to Form</NavLink>
            <NavLink to='/list'>Go to List</NavLink>
        </div>
    )
}

export default NavBar