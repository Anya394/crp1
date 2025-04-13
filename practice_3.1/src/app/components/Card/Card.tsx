import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '@/types';
import { Button } from '@/app/components/Button/Button';

const Card: React.FC<CardProps> = ({
  title = 'Title',
  content = 'Content',
  buttonText,
  onButtonClick,
  variantButton,
  sizeButton
}) => {;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <Button 
        text={buttonText} 
        onClick={onButtonClick}
        variant={variantButton}
        size={sizeButton}/>
    </div>
  );
};

export default Card;