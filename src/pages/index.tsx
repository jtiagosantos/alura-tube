import { useState } from 'react';
import Image from 'next/image';
import { X } from 'phosphor-react';

import { styled } from '@/common/styles/theme';
import {
  Header,
  Banner,
  Avatar,
  Profile,
  Video,
  Playlist,
  Favorite,
  Dialog,
  Form,
} from '@/common/styles/components';
import {
  InputSearch,
  ThemeSwitch,
  VideoDialog,
  AddNewVideoButton,
} from '@/common/components';

import { playlists } from '@/mock/playlists.mock';
import { favorites } from '@/mock/favorites.mock';

const Main = styled('main', {
  p: '0 12px',
  mt: '$8',
  maxW: '1300px',
  mx: 'auto',
});

const FavoritesSection = styled('section', {
  mt: '56px',
});

const FavoritesTitle = styled('h3', {
  color: '$text_color_primary',
  fontWeight: '$bold',
  mb: '$4',
});

export default function Home() {
  const playlistsName = Object.keys(playlists) as [
    'jogos' | 'front-end' | 'back-end',
  ];

  const [search, setSearch] = useState('');
  const [selectedVideo, setSeletedVideo] = useState('');
  const [isOpenAddNewVideoModal, setIsOpenAddNewVideoModal] = useState(false);

  const handleOpenVideo = (url: string) => {
    const videoId = url.split('=')[1];
    const videoEmbedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    setSeletedVideo(videoEmbedLink);
  };

  const handleCloseVideo = () => setSeletedVideo('');

  const handleOpenAddNewVideoModal = () => setIsOpenAddNewVideoModal(true);

  const handleCloseAddNewVideoModal = () => setIsOpenAddNewVideoModal(false);

  return (
    <>
      <Header.Root>
        <Header.Top>
          <Image
            src="/assets/logo.svg"
            width={120}
            height={24}
            alt="AluraTube logo"
          />
          <InputSearch
            placeholder="Pesquisar"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <ThemeSwitch />
        </Header.Top>
        <Banner />
        <Header.Bottom>
          <Profile.Root>
            <Avatar
              src="https://github.com/jtiagosantos.png"
              width={80}
              height={80}
              alt="jtiagosantos"
            />
            <div>
              <Profile.Name>Tiago Santos</Profile.Name>
              <Profile.Occupation>
                Middle Front-end Software Enginner
              </Profile.Occupation>
            </div>
          </Profile.Root>
        </Header.Bottom>
      </Header.Root>

      <Main>
        <Playlist.Group>
          {playlistsName.map((name) => (
            <Playlist.Root key={name}>
              <Playlist.Title>{name}</Playlist.Title>
              <Playlist.Videos>
                {playlists[name]
                  .filter((video) =>
                    video.title.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((video) => (
                    <Video.Root
                      key={video.url}
                      onClick={() => handleOpenVideo(video.url)}>
                      <Video.Thumbnail
                        src={video.thumb}
                        width={210}
                        height={118}
                        alt={video.title}
                      />
                      <Video.Title>{video.title}</Video.Title>
                    </Video.Root>
                  ))}
              </Playlist.Videos>
            </Playlist.Root>
          ))}
        </Playlist.Group>

        <FavoritesSection>
          <FavoritesTitle>AluraTubes favoritos</FavoritesTitle>
          <Favorite.Group>
            {favorites.map((favorite) => (
              <Favorite.Root key={favorite.name}>
                <Favorite.Avatar
                  src={favorite.image}
                  width={80}
                  height={80}
                  alt={favorite.name}
                />
                <Favorite.Name>{favorite.name}</Favorite.Name>
              </Favorite.Root>
            ))}
          </Favorite.Group>
        </FavoritesSection>
      </Main>

      <VideoDialog src={selectedVideo} onClose={handleCloseVideo} />

      <Dialog.Root open={isOpenAddNewVideoModal}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content css={{ maxW: '400px', px: '$4', pb: '$4' }}>
            <Dialog.Title>Adicionar vídeo</Dialog.Title>
            <Form.Root>
              <Form.Input>
                <Form.Label htmlFor="video-title">Título do vídeo</Form.Label>
                <Form.Field
                  type="text"
                  placeholder="Título do vídeo aqui"
                  id="video-title"
                />
              </Form.Input>
              <Form.Input>
                <Form.Label htmlFor="video-url">URL do vídeo</Form.Label>
                <Form.Field
                  type="text"
                  placeholder="URL do vídeo aqui"
                  id="video-url"
                />
              </Form.Input>
              <Form.SubmitButton type="submit">Adicionar</Form.SubmitButton>
            </Form.Root>
            <Dialog.Close asChild>
              <Dialog.CloseButton onClick={handleCloseAddNewVideoModal}>
                <X size={24} weight="bold" />
              </Dialog.CloseButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <AddNewVideoButton onClick={handleOpenAddNewVideoModal} />
    </>
  );
}
