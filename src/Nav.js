import React from 'react';
import { Link } from 'react-router-dom';

function Nav( {links}) {
    return(
        <ul>
            {links.map((text, i) => (<li key={i}><Link to={`/giphy/${text}`}>{text}</Link></li>))}
        </ul>
    );
}

export default Nav;