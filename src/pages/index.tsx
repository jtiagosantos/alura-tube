import { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'phosphor-react';
import * as Tabs from '@radix-ui/react-tabs';

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
  Iframe,
} from '@/common/styles/components';
import {
  InputSearch,
  ThemeSwitch,
  VideoDialog,
  AddNewVideoButton,
} from '@/common/components';

import { useForm } from '@/common/hooks/use-form.hook';

import { getVideoEmbedLink } from '@/common/utils/get-video-embed-link.util';

import { styled } from '@/common/styles/theme';

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

const TabsRoot = styled(Tabs.Root, {
  w: '$full',
  display: 'flex',
  flexDirection: 'column',
  mt: '$2',
});

const TabsList = styled(Tabs.List, {
  display: 'flex',
  gap: '$4',
  mb: '$8',
});

const TabsTrigger = styled(Tabs.Trigger, {
  fontSize: '1rem',
  color: '$text_color_secondary',
  border: 'none',
  bg: 'transparent',
  borderBottom: '2px solid transparent',
  pb: '$1',

  '&[data-state="active"]': {
    borderColor: '$text_color_secondary',
  },
});

type TForm = {
  title: string;
  url: string;
};

export default function Home() {
  const playlistsName = Object.keys(playlists) as [
    'jogos' | 'front-end' | 'back-end',
  ];

  const { values, handleChange, clearFields } = useForm<TForm>({
    title: '',
    url: '',
  });

  const [search, setSearch] = useState('');
  const [selectedVideo, setSeletedVideo] = useState('');
  const [isOpenAddNewVideoModal, setIsOpenAddNewVideoModal] = useState(false);
  const [videoPreviewURL, setVideoPreviewURL] = useState('');

  const handleOpenVideo = (url: string) => {
    const videoEmbedLink = getVideoEmbedLink(url);

    videoEmbedLink && setSeletedVideo(videoEmbedLink);
  };

  const handleCloseVideo = () => setSeletedVideo('');

  const handleOpenAddNewVideoModal = () => setIsOpenAddNewVideoModal(true);

  const handleCloseAddNewVideoModal = () => setIsOpenAddNewVideoModal(false);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    console.log({ values });

    clearFields();
  };

  useEffect(() => {
    const videoEmbedLink = getVideoEmbedLink(values.url);

    if (videoEmbedLink) {
      setVideoPreviewURL(videoEmbedLink);
    } else {
      setVideoPreviewURL('');
    }
  }, [values.url]);

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
          <Dialog.Content
            css={{ maxW: '420px', h: '305px', px: '$4', pb: '$4' }}>
            <TabsRoot defaultValue="add-new-video-tab">
              <TabsList>
                <TabsTrigger value="add-new-video-tab">
                  Adicionar vídeo
                </TabsTrigger>
                <TabsTrigger value="preview-tab">Pré-visualização</TabsTrigger>
              </TabsList>
              <Tabs.Content value="add-new-video-tab">
                <Form.Root onSubmit={handleSubmitForm}>
                  <Form.Input>
                    <Form.Label htmlFor="video-title">
                      Título do vídeo
                    </Form.Label>
                    <Form.Field
                      type="text"
                      placeholder="Título do vídeo aqui"
                      id="video-title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      autoComplete="none"
                    />
                  </Form.Input>
                  <Form.Input>
                    <Form.Label htmlFor="video-url">URL do vídeo</Form.Label>
                    <Form.Field
                      type="text"
                      placeholder="URL do vídeo aqui"
                      id="video-url"
                      name="url"
                      value={values.url}
                      onChange={handleChange}
                      autoComplete="none"
                    />
                  </Form.Input>
                  <Form.SubmitButton>Adicionar</Form.SubmitButton>
                </Form.Root>
              </Tabs.Content>
              <Tabs.Content value="preview-tab">
                <Iframe src={videoPreviewURL} css={{ h: '210px' }} />
              </Tabs.Content>
            </TabsRoot>
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
