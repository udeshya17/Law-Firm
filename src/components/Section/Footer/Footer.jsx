import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../Logo/Logo'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer(){
    return (
        <div className={styles.container}>
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

                <div className={styles.icons}>
                    <InstagramIcon sx={{marginRight:'10px'}}/>
                    <FacebookIcon sx={{marginRight:'10px'}}/>
                    <TwitterIcon sx={{marginRight:'10px'}}/>
                    <PinterestIcon sx={{marginRight:'10px'}}/>
                </div>

            </nav>

            <div className={styles.head}>
                <span>© 2024 Acme. All right reserved.</span> 
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    )
}