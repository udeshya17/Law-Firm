import React from 'react';
import styles from './Attorneys.module.css';

export default function Attorneys() {
    return (
        <div className={styles.container}>
            <div className={styles.headOne}>
                <p>Let’s Introduce Ourself</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.headTwo}>
                <p className={styles.headright}>Criminal Lawyer</p>
                <p className={styles.para}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.
                </p>
            </div>
        </div>
        
    );
}
