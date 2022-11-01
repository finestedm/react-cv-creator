import React from 'react';

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-colored justify-content-center">
            <i className="bi bi-briefcase text-white" style={{fontSize: '3rem'}}></i>
            <span className="navbar-brand mb-0 p-3 text-white"><h1>CV Creator</h1></span>
        </nav>
    )
}