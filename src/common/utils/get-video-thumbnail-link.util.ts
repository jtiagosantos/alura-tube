export const getVideoThumbnailLink = (url: string) => {
  if (url.includes('v=')) {
    const videoId = url.split('v=')[1];
    const videoThumbnailLink = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return videoThumbnailLink;
  }

  return null;
};
