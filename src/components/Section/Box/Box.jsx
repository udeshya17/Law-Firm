import React from 'react';
import styles from './Box.module.css';

export default function Box(){
    return (
        
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.head}>Subscribe Our Newsletter</p>

                <div className={styles.input}>
                    <input type="text"  placeholder='Name'/>
                    <input type="text" placeholder='Enter your Email'/>
                    <button className={styles.button}>Submit</button>
                </div>
            </div>

        </div>
    )
}