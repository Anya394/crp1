'use client'

import { ButtonProps } from '../../types';
import styled from '@emotion/styled';


let SButton = styled.div<ButtonProps>(props => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  background: 'rgb(243, 231, 253)',
  color: 'rgba(38, 14, 59, 1)',
  fontWeight: 'medium',
  margin: '5px',
  borderRadius: '10px',
  width: props.mini ? '30%' : "100%"
}))

const ButtonBase = ({ 
  text='Change', 
  onClick = () => {
      console.log('Button clicked!');
  } }: ButtonProps) => {
  return (
    <button onClick={onClick}>
        {text}
    </button>
  )
}

export function ButtonMini({ text, onClick }: ButtonProps) {
    return <SButton mini>
      <ButtonBase text={text} onClick={onClick}/>
    </SButton>
}

function Button({ text, onClick }: ButtonProps) {
  return <SButton>
    <ButtonBase text={text} onClick={onClick}/>
  </SButton>
}

export default Button;