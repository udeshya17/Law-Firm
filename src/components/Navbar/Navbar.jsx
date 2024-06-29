import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavButton from "../Button/Button";

function Navbar(){
    return(
       
        <nav className={styles.navbar}>
            <Logo />

            <ul className={styles.navbarList}>
            <li>
              <a href="#one" className={styles.navbarLink}>Home</a>
            </li>

            <li>
              <a href="#two" className={styles.navbarLink}>About</a>
            </li>

            <li>
              <a href="#three" className={styles.navbarLink}>Projects</a>
            </li>

            <li>
              <a href="#four" className={styles.navbarLink}>Contact</a>
            </li>
          </ul>

          <NavButton />
        </nav>
        
    )
}

export default Navbar;