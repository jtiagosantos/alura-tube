import { styled } from '../styles/theme';

const PlaylistGroup = styled('div', {
  w: '$full',
  display: 'flex',
  flexDir: 'column',
  gap: '56px',
});

const PlaylistRoot = styled('div', {});

const PlaylistVideos = styled('div', {
  w: '$full',
  display: 'flex',
  gap: '$4',
  overflowX: 'auto',
  pt: '$4',
});

const PlaylistTitle = styled('h3', {
  color: '$text_color_primary',
  fontWeight: '$bold',
});

export const Playlist = {
  Group: PlaylistGroup,
  Root: PlaylistRoot,
  Videos: PlaylistVideos,
  Title: PlaylistTitle,
};
