import { styled } from '../theme';

const ActionButtonRoot = styled('div', {
  display: 'flex',
  flexDir: 'column',
  gap: '8px',
  position: 'fixed',
  right: '20px',
  bottom: '90px',
});

const ActionButtonItem = styled('button', {
  border: 'none',
  bg: '$button_color_primary',
  p: '$2',
  px: '$4',
  br: '5px',
  fontSize: '1rem',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
});

export const ActionButton = {
  Root: ActionButtonRoot,
  Item: ActionButtonItem,
};
