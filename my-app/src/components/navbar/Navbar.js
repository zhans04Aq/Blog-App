import React from "react";

/*scss import */

import classes from './navbar.module.scss'

/*scss import */

/*img import */

import logo from '../../assets/img/Logo.png'
import searchIcon from '../../assets/icons/search-outline.png'
import lightMode from '../../assets/icons/Light-mode.png'

/*img import */


const Navbar = () => {
    return(
        <div className={classes.navbar}>
            <div className={classes.navbarContainer}>
                <div className={classes.logo} >
                    <img src={logo} alt="logo" />
                </div>        
                <div className={classes.navigation}>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Single Post</p>
                    <p>Pages</p>
                    <p>Contact</p>
                </div>
                <div className={classes.searchBar}>
                    <input type="text" placeholder="Search" className={classes.searchBarInput}/>
                    <img src={searchIcon} alt="search icon" className={classes.searchIcon} />
                </div>
                <div className={classes.modeSwitch}>
                    <img src={lightMode} alt="light mode icon" className={classes.lightModeIcon} />
                </div>
            </div>
        </div>
    )
}

export default Navbar