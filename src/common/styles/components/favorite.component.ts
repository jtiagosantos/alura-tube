import { styled } from '../theme';
import { Avatar } from './avatar.component';

const FavoriteGroup = styled('section', {
  w: '$full',
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  overflowX: 'auto',

  '& a': {
    textDecoration: 'none',
  },
});

const FavoriteRoot = styled('div', {
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
});

const FavoriteAvatar = styled(Avatar, {});

const FavoriteName = styled('p', {
  maxW: '70px',
  color: '$text_color_primary',
  'text-overflow': 'ellipsis',
  overflow: 'hidden',
});

export const Favorite = {
  Group: FavoriteGroup,
  Root: FavoriteRoot,
  Avatar: FavoriteAvatar,
  Name: FavoriteName,
};
