import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {links} from './Assets/navbar_title';
import './Navbar.css'

function Navbar() {

    const[titleOpen, toggleTitleOpen] = useState(false);
    function changeClasses() {
        let classes = "titles";
        if(titleOpen) {
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
                {links.map((nav) => {
                    const {id, url, text} = nav;
                    return (
                        <li key={id} className='title-item'>
                            <a href={url}>{text}</a>
                        </li>
                    )
                })}

            </ul>
            <div className='hamburger-menu' onClick={()=>toggleTitleOpen(!titleOpen)}>
                <i className='fas fa-bars'/>
            </div>
        </nav>
    )
}

export default Navbar