import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <div>
                <h1>Color Bubbles</h1>
            </div>
            <div>
                <Link>Home</Link>
                <Link>Logout</Link>
            </div>
        </div>
    )
}

export default NavBar;