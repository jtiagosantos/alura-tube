import { styled } from '../theme';

const FormRoot = styled('form', {
  w: '$full',
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '16px',
});

const FormInput = styled('div', {
  w: '$full',
  display: 'flex',
  flexDir: 'column',
  gap: '$1',
});

const FormLabel = styled('label', {
  w: '$full',
  textAlign: 'start',
  fontSize: '0.9rem',
});

const FormField = styled('input', {
  w: '$full',
  h: '34px',
  br: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  p: '$2',
  color: '$text_color_secondary',
  fontSize: '$1',
  bg: 'transparent',
  outlineColor: '$text_color_secondary',
});

const FormSubmitButton = styled('button', {
  w: '$full',
  mt: '$4',
  py: '$2',
  br: '8px',
  border: 'none',
  bg: '$button_color_primary',
  color: '$background_secondary',
  cursor: 'pointer',
  fontSize: '1rem',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
});

export const Form = {
  Root: FormRoot,
  Input: FormInput,
  Label: FormLabel,
  Field: FormField,
  SubmitButton: FormSubmitButton,
};
