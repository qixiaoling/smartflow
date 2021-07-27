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

    return (
        <nav className='navbar'>
            <Link to='/' className='company-logo'>
                SmartFlow<i className="fab fa-battle-net"></i>
            </Link>
            <ul className={changeClasses()}>
                <li className='title-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='title-item'>
                    <Link to='/about-me'>About Me</Link>
                </li>
                <li className='title-item'>
                    <Link to='/project'>Project</Link>
                </li>
                <li className='title-item'>
                    <Link to='/review'>Review</Link>
                </li>
                <li lassName='title-item'>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger-menu' onClick={() => toggleTitleOpen(!titleOpen)}>
                <i className='fas fa-bars'/>
            </div>
        </nav>
    )
}

export default Navbar