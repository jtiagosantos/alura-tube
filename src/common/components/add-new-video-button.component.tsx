import { FC, ButtonHTMLAttributes } from 'react';
import { Plus } from 'phosphor-react';
import { styled } from '../styles/theme';

const Button = styled('button', {
  w: '60px',
  h: '60px',
  bg: '$button_color_primary',
  color: '$background_secondary',
  border: 'none',
  br: '$rounded',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  position: 'fixed',
  bottom: '20px',
  right: '20px',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
});

type TAddNewVideoButtonProps = FC<ButtonHTMLAttributes<HTMLButtonElement>>;

export const AddNewVideoButton: TAddNewVideoButtonProps = ({ ...props }) => {
  return (
    <Button {...props}>
      <Plus size={25} weight="bold" />
    </Button>
  );
};
