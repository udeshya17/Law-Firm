import React from 'react';
import styles from './Selection.module.css';
import Card from '../../Card/Card'

export default function Selection(){
    return (
        <div className={styles.container}>
        <div className={styles.head}>
            <p>Why Choose us?</p>
            <div className={styles.card}>
                <Card 
                    title="98% Success Rate" 
                    bgColor="transparent"
                />
                <Card 
                    title="100% Success Rate" 
                    bgColor="#2E2E2E"
                />
                <Card 
                    title="100% Success Rate" 
                    bgColor="transparent"
                />
            </div>
        </div>
        </div>
    );
}