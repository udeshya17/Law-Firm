import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './Faq.module.css';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

export default function AccordionExpandDefault() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.head}>
          <p>FAQ</p>
        </div>
        <div className={styles.subTitle}>
        <p>Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. </p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Accordion defaultExpanded className={styles.accordion}>
          <AccordionSummary
            expandIcon={<AddCircleSharpIcon className={styles.icon}/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Do I need a personal injury report?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.subTitle}>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exer. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<AddCircleSharpIcon className={styles.icon}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>How much is my case worth?</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography className={styles.subTitle}>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exer. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<AddCircleSharpIcon className={styles.icon}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>What should I do right after car accidect</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography className={styles.subTitle}>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exer. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<AddCircleSharpIcon className={styles.icon}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>How much is my case worth?</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exer. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
