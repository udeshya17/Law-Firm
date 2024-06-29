import React from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from './Home.module.css';
import HeroImage from '../../../assets/hero-image.png';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.heroMain}>
                    <div className={styles.heading}>
                        <p className={styles.headOne}>You don’t have to</p>
                        <p className={styles.headTwo}>Fight them Alone.</p>
                        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                        <Stack direction="row" spacing={1} className={styles.chip}>
                            <span className={styles.nestedChipLabel}><EmailIcon />Enter your mail address</span>
                            <Chip
                                label="Let's Talk"
                                className={styles.nestedChip}
                            />
                        </Stack>
                    </div>
                    <div>
                        <img src={HeroImage} alt="HeroImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}
