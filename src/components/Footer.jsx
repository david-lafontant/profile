import React from 'react'

export const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <i className="bi bi-person"></i>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy;&nbsp;2024&nbsp;David&nbsp;Lafontant</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            Github&nbsp;<i className="bi bi-github social-icons"></i>
                        </a></li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            LinkedIn&nbsp;<i className="bi bi-linkedin social-icons"></i>
                        </a>
                    </li>

                </ul>
            </footer>
        </div>
    )
}

export default Footer;