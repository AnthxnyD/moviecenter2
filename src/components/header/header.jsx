import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

import logo from '../../Assets/center2.png';

const headerNav = [

    {
        display: 'Home',
        path : '/'
    },
    {
        display: 'Movies',
        path: '/movies'
    },
    {
        display: 'TV series',
        path: '/tv'
    }


]

const Header = () => {

    const {pathname} = useLocation();
    const headerRef = useRef(null);
    const active = header.findIndex(e => e.path === pathname);


    return(
        <div ref={headerRef} className='header'>
            <div className="header__wrap container">
                <div className="logo">
                <img src={logo} alt=""/>  
                <link to="/">tmovies</link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e,i) =>(
                            <li key={i} className={`${i === active ? 'active' : ''}`}>

                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default Header;