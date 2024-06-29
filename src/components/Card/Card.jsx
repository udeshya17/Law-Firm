import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../../assets/gift-icon.png';
import styles from './Card.module.css';

export default function MediaCard({ title, bgColor }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: bgColor, border: '2px solid #2E2E2E' }} className={styles.card}>
      <CardMedia
        image={Image}
        title="gift icon"
        className={styles.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={styles.head}>
          {title}
        </Typography>
        <Typography variant="body2" className={styles.para}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" className={styles.button}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
