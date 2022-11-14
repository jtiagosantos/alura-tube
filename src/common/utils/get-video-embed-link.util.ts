export const getVideoEmbedLink = (url: string) => {
  if (url.includes('v=')) {
    const videoId = url.split('v=')[1];
    const videoEmbedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return videoEmbedLink;
  }

  return null;
};
