import React from 'react'

export const Footer = () => {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap" /></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">&copy;&nbsp;2024&nbsp;David&nbsp;Lafontant</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3">
                        <a class="text-body-secondary" href="#">
                            Github&nbsp;<i class="bi bi-github social-icons"></i>
                        </a></li>
                    <li class="ms-3">
                        <a class="text-body-secondary" href="#">
                            LinkedIn&nbsp;<i class="bi bi-linkedin social-icons"></i>
                        </a>
                    </li>

                </ul>
            </footer>
        </div>
    )
}

export default Footer;