import { useState } from 'react';
import './header.css';

function Header() {
  return (
    <>
        <nav className="hea navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand mx-2 " href="/" style={{ width: "10%" }}><img className="card-img" src="/img/logo.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link ml-5" href="/saveurs">Saveurs</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link ml-5 " href="/saveurs_bis">Avocat/Coriandre</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link ml-5 " href="/aliments">Aliments</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link ml-5 " href="/california">California</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link ml-5 " href="/inferieur">Pieces inferieur 13</a>
                    </li>                    
                    <li className="nav-item active">
                        <a className="nav-link ml-5 " href="/prix">Prix</a>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Header
