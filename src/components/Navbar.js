import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/"
                className="navbar-brand"
                >
                    MERN STACK
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> ListMovie </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/create" className="nav-link"> CreateMovie </Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
