'use client'

import { css, cva } from "@/../styled-system/css";
import { ButtonProps } from '@/types';

const button = cva({
  base: {
    rounded: 'md',
    _hover: { bg: 'rgba(243, 231, 253, 0.8)' },
    _active: { bg: 'rgba(243, 231, 253, 0.6)' },
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    bg: 'rgb(243, 231, 253)',
    color: 'rgba(38, 14, 59, 1)',
    fontWeight: 'medium',
  },
  variants: {
    variant: {
      center: {
        fontWeight: 'semibold'
      },
      right: {
        marginLeft: 'auto'
      },
      left: {
        marginRight: 'auto'
      },
    },
    size: {
      sm: { w: '30%' },
      md: { w: '50%' },
      lg: { w: '100%' },
    },
  },
  defaultVariants: {
    variant: "center",
    size: "md",
  },
});

export const Button = ({ 
    text='Change', 
    onClick = () => {
        console.log('Button clicked!');
    }, 
    variant, 
    size }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={button({variant, size})}>
        {text}
    </button>
  );
};