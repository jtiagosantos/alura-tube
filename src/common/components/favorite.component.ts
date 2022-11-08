import { styled } from '../styles/theme';
import { Avatar } from './avatar.component';

const FavoriteGroup = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const FavoriteRoot = styled('div', {
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '$2',
});

const FavoriteAvatar = styled(Avatar, {});

const FavoriteName = styled('p', {
  color: '$text_color_primary',
});

export const Favorite = {
  Group: FavoriteGroup,
  Root: FavoriteRoot,
  Avatar: FavoriteAvatar,
  Name: FavoriteName,
};
