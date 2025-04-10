import { Button } from 'antd';
import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: void;
}

export const ButtonAntd = ({ text = "Ок", onClick}: ButtonProps) => {
  return (
    <Button type="primary" onClick={() => onClick}>
      {text}
    </Button>
  );
};