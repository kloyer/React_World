import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" className="nav-active">Accueil</NavLink>
            <NavLink exact to="/About" className="nav-active">A propos</NavLink>
        </div>
    );
};

export default Navigation;