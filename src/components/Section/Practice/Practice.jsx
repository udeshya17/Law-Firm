import React from 'react';
import styles from './Practice.module.css';
import Image1 from '../../../assets/practice1.png';
import Image2 from '../../../assets/practice2.png';
import Image3 from '../../../assets/practice3.png';
import Image4 from '../../../assets/practice4.png';
import Image5 from '../../../assets/practice5.png';
import Image6 from '../../../assets/practice6.png';


export default function Practice(){
    return(
        <div className={styles.container}>
        <div className={styles.head}>
            <p>Area of Practices</p>
            <div className={styles.images}>
                <img src={Image1} alt="practice" />
                <img src={Image2} alt="practice" />
                <img src={Image4} alt="practice" />
                <img src={Image3} alt="practice" />
                <img src={Image5} alt="practice" />
                <img src={Image6} alt="practice" />
            </div>
        </div>
        </div>

    )
}