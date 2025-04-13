import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  title = 'Title',
  content = 'Content',
  buttonText = 'Change',
  onButtonClick = () => {
    console.log('Button clicked!');
  }
}) => {;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <button className={styles.button}>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;