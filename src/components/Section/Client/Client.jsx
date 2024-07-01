import React from 'react';
import styles from './Client.module.css';
import Image1 from '../../../assets/left-arrow.png'
import Image2 from '../../../assets/right-arrow.png'
import Card from '../../Card/Card'
import Client1 from '../../../assets/client1.png'
import Client2 from '../../../assets/client2.png'
import Client3 from '../../../assets/client3.png'



export default function CLient(){
    return (
        <div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.head}>
                <p>What says our
                happy Clients</p>
                
            </div>
            <div className={styles.images}>
                    <img src={Image1} className={styles.imageOne} alt="group40" />
                    <img src={Image2} alt="group41" />
                </div>
        </div>
        <div className={styles.cards} >
            <Card 
                bgColor="transparent" 
                image={Client1} 
                title="Jane Cooper" 
                showButton={false} 
                subTitle="Ceo of Hunt"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
            />
            <Card 
                bgColor="#2E2E2E" 
                image={Client2} 
                title="Devon Lane" 
                showButton={false} 
                subTitle="Ceo of Hunt"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
            />
            <Card 
                bgColor="transparent" 
                image={Client3} 
                title="Robert Fox" 
                showButton={false} 
                subTitle="Ceo of Hunt"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
            />  
        </div>
           
        </div>

    )
}