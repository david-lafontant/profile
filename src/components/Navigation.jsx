import React, { useState } from 'react'

export const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleClick() {
        setMenuOpen(prev => !prev);
    }

    return (

        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Offcanvas navbar</a>
                <button className="navbar-toggler p-0 border-0"
                    type="button"
                    id="navbarSideCollapse"
                    aria-label="Toggle navigation"
                    onClick={handleClick}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={menuOpen ? "navbar-collapse offcanvas-collapse open" : "navbar-collapse offcanvas-collapse"} id="profileNavbar" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
