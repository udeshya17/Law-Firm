import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./MiniCard.module.css";

export default function ActionAreaCard({ image, title, subTitle }) {
  return (
    <Card className={styles.cards}>
      <CardActionArea style={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className={styles.image}
        />
        <CardContent className={styles.content}>
          <Typography gutterBottom component="div" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.subTitle}>
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
