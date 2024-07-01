import React from 'react';
import styles from './Selection.module.css';
import Card from '../../Card/Card'
import Image from '../../../assets/gift-icon.png';


export default function Selection(){
    return (
        <div className={styles.container}>
        <div className={styles.head}>
            <p>Why Choose us?</p>
            <div className={styles.card}>
                <Card 
                    title="98% Success Rate" 
                    bgColor="transparent"
                    image={Image}
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
                />
                <Card 
                    title="100% Success Rate" 
                    bgColor="#2E2E2E"
                    image={Image}
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
                />
                <Card 
                    title="100% Success Rate" 
                    bgColor="transparent"
                    image={Image}
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
                />
            </div>
        </div>
        </div>
    );
}