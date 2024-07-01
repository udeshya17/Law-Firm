import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css';

export default function MediaCard({ title, bgColor, image, description, showButton = true, subTitle }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: bgColor, border: '2px solid #2E2E2E' }} className={styles.card}>
      <CardMedia
        image={image}
        title="gift icon"
        className={styles.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={styles.head}>
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div" className={styles.head}>
          {subTitle}
        </Typography>
        <Typography variant="body2" className={styles.para}>
            {description}
        </Typography>
      </CardContent>
      {showButton && (
        <CardActions>
        <Button variant="contained" className={styles.button}>
          Read more
        </Button>
      </CardActions>
      )}
    </Card>
  );
}
