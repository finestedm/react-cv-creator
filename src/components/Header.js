import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Header() {
    return (

        <nav className="navbar navbar-light bg-colored justify-content-center">
            <i className="bi bi-briefcase text-black" style={{'fontSize': '3rem'}}></i>
            <span className="navbar-brand mb-0 p-3 text-black"><h1>CV Creator</h1></span>
        </nav>
    )
}