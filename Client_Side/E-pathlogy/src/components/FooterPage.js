import { Link } from '@mui/material'
import React from 'react'

function FooterPage() {
    return (
        <>

            <footer className="bg-success">


                <div className="container">

                    <div className="row d-flex justify-content-center">


                        <div className="col-md-6 pt-3 pb-2" style={{ height: "60px" }}>
                            <div className="mb-5 d-flex justify-content-between">

                                <div>
                                    <a href="https://www.facebook.com/"><i className="bi bi-facebook h3 text-light"></i></a>
                                </div>
                                <div><a href="https://www.twitter.com/"><i className="bi bi-twitter h3 text-light"></i></a></div>
                                <div><a href="https://www.instagram.com/"><i className="bi bi-instagram h3 text-light"></i></a></div>
                                <div><a href="https://www.linkedin.com/"><i className="bi bi-linkedin h3 text-light"></i></a></div>
                                <div><a href="https://www.github.com/"><i className="bi bi-github h3 text-light"></i></a></div>

                                <div className="footer-copyright text-center pt-0 pb-" style={{ color: "white" }}>© 2022 Copyright:
                                    <a href="/" ><strong style={{ color: "white" }}>E-Pathology</strong></a>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                </div>






            </footer>
        </>
    )
}

export default FooterPage