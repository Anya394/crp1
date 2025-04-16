import React from 'react';
import { CardProps } from '../../types';
import  Button, { ButtonMini } from '../Button/Button';

const Card: React.FC<CardProps> = ({
  title = 'Title',
  content = 'Content',
  buttonText,
  onButtonClick,
  miniButton
}) => {;

  return (
    <div className="border border-[#e0e0e0] rounded-[20px] p-6 max-w-screen shadow-[0_2px_8px_rgba(38,14,59,0.1)] m-8 bg-[rgb(38,14,59)] flex flex-col items-center">
      <h3 className='text-xl mb-3 text-[rgb(243,231,253)]'>{title}</h3>
      <p className='text-custom-light mb-2 text-[rgb(243,231,253)]'>{content}</p>
      {miniButton ? <ButtonMini text={buttonText} onClick={onButtonClick}/> : <Button/>}
    </div>
  );
};

export default Card;