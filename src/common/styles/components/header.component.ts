import { styled } from '../theme';

const HeaderRoot = styled('header', {
  width: '$full',
  bg: '$background_secondary',
  py: '58px',
});

const HeaderTop = styled('div', {
  width: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$3',
  position: 'fixed',
  top: 0,
  bg: '$background_primary',
});

const HeaderBottom = styled('div', {
  width: '$full',
  p: '$3',
});

export const Header = {
  Root: HeaderRoot,
  Top: HeaderTop,
  Bottom: HeaderBottom,
};
