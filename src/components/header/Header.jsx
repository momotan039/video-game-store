import React from 'react'
import  './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to={''}>Store</NavLink>
                <NavLink to={'/admin'}>Admin</NavLink>
            </nav>
        </header>
    )
}
