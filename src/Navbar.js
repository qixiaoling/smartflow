import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {links} from './Assets/navbar_title';
import './Navbar.css'

function Navbar() {

    const [titleOpen, toggleTitleOpen] = useState(false);

    function changeClasses() {
        let classes = "titles";
        if (titleOpen) {
            classes += ' active'
        }
        return classes;
    }
    function closeMobileMenu(){
        toggleTitleOpen(false);
    }

    return (
        <nav className='navbar'>
            <Link to='/' className='company-logo'>
                SmartFlow<i className="fab fa-battle-net"></i>
            </Link>
            <ul className={changeClasses()}>
                <li className='title-item'>
                    <Link to='/' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='title-item'>
                    <Link to='/about-me' onClick={closeMobileMenu}>About Me</Link>
                </li>
                <li className='title-item'>
                    <Link to='/project' onClick={closeMobileMenu}>Project</Link>
                </li>
                <li className='title-item'>
                    <Link to='/review' onClick={closeMobileMenu}>Review</Link>
                </li>
                <li lassName='title-item'>
                    <Link to='/contact' onClick={closeMobileMenu}>Contact</Link>
                </li>
            </ul>
            <div className='hamburger-menu' onClick={() => toggleTitleOpen(!titleOpen)}>
                <i className='fas fa-bars'/>
            </div>
        </nav>
    )
}

export default Navbar