import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../../Images/logo.png'

const Header = () => {
    return (
        <>
            {/* Navber */}
            <div className="w-100 header-border" style={{ paddingBottom: '1em', marginBottom: '1em', position: 'fixed', top: 0, left: 0 }}>
                <Container className="container-fluid " >
                    {/* Site logo */}

                    <div className="navbar navbar-expand-md navbar-light w-100 m-0 p-0" >
                        <div className="col-md-7 col-sm-8 m-0 p-0 ">
                            <div className="navbar-brand m-0 p-0 site-logo me-sm-5" >
                                <NavLink activeClassName=" text-light" className="nav-link fs-6 text-start" to="/">
                                    <img className="w-50" src={logoImg} alt="" />
                                    {/* <h2 className='text-light text-start'>Shabit Ahtesham Songhi</h2> */}
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-sm-4 d-md-none">
                            <button className="navbar-toggler ms-5 mt-4 align-sm-middle text-sm-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-md-5 col-sm-12 ">
                            {/* Navigation bar */}

                            <nav className="collapse navbar-collapse p-md-0 p-3 text-center" id="navbarNav">
                                <div className="col-md-12">
                                    <ul className="navbar-nav text-end justify-content-end">
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-light border-5 rounded text-hover bg-golden" className="nav-link fs-6 border-5 border-transparent fw-bold text-golden p-3 rounded " to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-light border-5 rounded text-hover bg-golden" className="nav-link fs-6 border-5 border-transparent fw-bold text-golden p-3 rounded" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item p-2">
                                            <a activeClassName="border-bottom border-light border-5 rounded text-hover bg-golden" className="nav-link fs-6 border-5 border-transparent fw-bold text-golden p-3 rounded" href="https://www.seoguru.com.bd/services" target="_blank">Services</a>
                                        </li>
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-light border-5 rounded text-hover bg-golden" className="nav-link fs-6 border-5 border-transparent fw-bold text-golden p-3 rounded" to="/contact">contact</NavLink>
                                        </li>

                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
};

export default Header;