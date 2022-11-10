import Image from 'next/image';
import { styled } from '../theme';

const VideoRoot = styled('div', {
  maxW: '210px',
  w: '$full',
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
});

const VideoThumbnail = styled(Image, {
  br: '8px',
  objectFit: 'cover',
});

const VideoTitle = styled('h4', {
  color: '$text_color_secondary',
  fontSize: '$1',
  fontWeight: '$normal',
  py: '$1',
});

export const Video = {
  Root: VideoRoot,
  Thumbnail: VideoThumbnail,
  Title: VideoTitle,
};
