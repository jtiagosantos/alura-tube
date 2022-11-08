import { FC, InputHTMLAttributes } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { styled } from '../styles/theme';

const Wrap = styled('div', {
  maxW: '350px',
  w: '$full',
  position: 'relative',
});

const Field = styled('input', {
  w: '$full',
  h: '34px',
  br: '24px',
  borderWidth: '1px',
  borderColor: '$border_color_primary',
  borderStyle: 'solid',
  px: '$9',
  color: '$text_color_secondary',
  fontSize: '$1',
  bg: 'transparent',
  outlineColor: '$text_color_secondary',
});

const Icon = styled(MagnifyingGlass, {
  position: 'absolute',
  left: '10px',
  top: '8px',
  color: '$text_color_secondary',
});

type TInputSearchProps = FC<InputHTMLAttributes<HTMLInputElement>>;

export const InputSearch: TInputSearchProps = ({ ...props }) => {
  return (
    <Wrap>
      <Icon size={18} weight="bold" />
      <Field type="text" {...props} />
    </Wrap>
  );
};
