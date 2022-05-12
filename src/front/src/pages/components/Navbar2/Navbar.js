/* eslint-disable */
import React, {useState} from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
import Button from '../Button'
import { Link } from 'react-router-dom';

import img_logo_long from './img_logo_long.png';
import BT_mypage from './BT_mypage.png';

function Navbar () {

    const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
            <nav className="Navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={img_logo_long} style={{width:'13vw'}}/>
                        <i className="fab fa-react"></i>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                        )
                    })}
                </ul>
                <Button><Link to="/mypage">
                    <img src={BT_mypage} style={{width:'4vw'}}/>
                </Link></Button>
            </nav>
        )
}
export default Navbar