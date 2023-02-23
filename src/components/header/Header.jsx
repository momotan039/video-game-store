import React from 'react'
import  './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header({games}) {
    return (
        <header>
            <nav>
                <NavLink state={games} to={''}>Store</NavLink>
                <NavLink state={games} to={'/manage-games'}>Manage Games</NavLink>
            </nav>
        </header>
    )
}
