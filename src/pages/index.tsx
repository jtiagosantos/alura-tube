import { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
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
  ActionButton,
} from '@/common/styles/components';
import {
  InputSearch,
  ThemeSwitch,
  VideoDialog,
  AddNewVideoButton,
} from '@/common/components';

import { CreateOneVideoService } from '@/modules/video/services/create-one-video.service';
import { CreateOnePlaylistService } from '@/modules/playlist/services/create-one-playlist.service';
import { FindManyPlaylistsService } from '@/modules/playlist/services/find-many-playlists.service';
import { FindManyVideosService } from '@/modules/video/services/find-many-videos.service';
import { FindManyFavoritesServices } from '@/modules/favorite/services/find-many-favorites.service';

import { useForm } from '@/common/hooks/use-form.hook';
import { useDisclosure } from '@/common/hooks/use-disclosure.hook';

import { getVideoEmbedLink } from '@/common/utils/get-video-embed-link.util';
import { getVideoThumbnailLink } from '@/common/utils/get-video-thumbnail-link.util';

import { VideoEntity } from '@/modules/video/entities/video.entity';
import { PlaylistEntity } from '@/modules/playlist/entities/playlist.entity';
import { TFavorite } from '@/modules/favorite/types/favorite.type';

import { styled } from '@/common/styles/theme';

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

const Select = styled('select', {
  w: '$full',
  h: '34px',
  br: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  px: '$2',
  mt: '-10px',
  color: '$text_color_secondary',
  fontSize: '$1',
  bg: 'transparent',
});

const Option = styled('option', {
  w: '$full',
  bg: '#222222',
});

type TForm = {
  video_title: string;
  video_url: string;
  video_playlist: string;
  playlist_name: string;
};

type THomeServerProps = {
  playlists: PlaylistEntity[];
  data: Record<string, VideoEntity[]>;
  favorites: TFavorite[];
};

export default function Home(props: THomeServerProps) {
  const playlistsName = Object.keys(props.data);

  const { values, handleChange, clearFields } = useForm<TForm>({
    video_title: '',
    video_url: '',
    video_playlist: '',
    playlist_name: '',
  });
  const actionButtons = useDisclosure();

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedVideo, setSeletedVideo] = useState('');
  const [isOpenAddNewVideoModal, setIsOpenAddNewVideoModal] = useState(false);
  const [isOpenAddNewPlaylistModal, setIsOpenAddNewPlaylistModal] =
    useState(false);
  const [videoPreviewURL, setVideoPreviewURL] = useState('');
  const [playlists, setPlaylists] = useState(props.playlists);

  const handleOpenVideo = (url: string) => {
    const videoEmbedLink = getVideoEmbedLink(url);

    videoEmbedLink && setSeletedVideo(videoEmbedLink);
  };

  const handleCloseVideo = () => setSeletedVideo('');

  const handleOpenAddNewVideoModal = () => {
    actionButtons.close();
    setIsOpenAddNewVideoModal(true);
  };

  const handleOpenAddNewPlaylistModal = () => {
    actionButtons.close();
    setIsOpenAddNewPlaylistModal(true);
  };

  const handleCloseAddNewVideoModal = () => setIsOpenAddNewVideoModal(false);

  const handleCloseAddNewPlaylistModal = () =>
    setIsOpenAddNewPlaylistModal(false);

  const handleCreateOneVideo = async (event: FormEvent) => {
    event.preventDefault();

    const { video_title, video_url, video_playlist } = values;
    const thumbnail = getVideoThumbnailLink(video_url);

    if (thumbnail) {
      await CreateOneVideoService.execute({
        title: video_title,
        url: video_url,
        thumbnail,
        playlist_id: Number(video_playlist),
      });
      router.reload();
      clearFields();
      handleCloseAddNewVideoModal();
    }
  };

  const handleCreateOnePlaylist = async (event: FormEvent) => {
    event.preventDefault();

    const { playlist_name } = values;

    if (playlist_name) {
      await CreateOnePlaylistService.execute({
        name: playlist_name,
      });
      // setPlaylists([...playlists, ...data!]);
      router.reload();
      clearFields();
      handleCloseAddNewPlaylistModal();
    }
  };

  useEffect(() => {
    const videoEmbedLink = getVideoEmbedLink(values.video_url);

    if (videoEmbedLink) {
      setVideoPreviewURL(videoEmbedLink);
    } else {
      setVideoPreviewURL('');
    }
  }, [values.video_url]);

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
                {props.data[name]
                  .filter((video) =>
                    video.title.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((video) => (
                    <Video.Root
                      key={video.url}
                      onClick={() => handleOpenVideo(video.url)}>
                      <Video.Thumbnail
                        src={video.thumbnail}
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
            {props.favorites.map((favorite) => (
              <Link key={favorite.id} href={favorite.html_url} target="_blank">
                <Favorite.Root>
                  <Favorite.Avatar
                    src={favorite.avatar_url}
                    width={80}
                    height={80}
                    alt={favorite.login}
                  />
                  <Favorite.Name>{favorite.login}</Favorite.Name>
                </Favorite.Root>
              </Link>
            ))}
          </Favorite.Group>
        </FavoritesSection>
      </Main>

      <VideoDialog src={selectedVideo} onClose={handleCloseVideo} />

      <Dialog.Root open={isOpenAddNewVideoModal}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content
            css={{ maxW: '420px', h: '370px', px: '$4', pb: '$4' }}>
            <TabsRoot defaultValue="add-new-video-tab">
              <TabsList>
                <TabsTrigger value="add-new-video-tab">
                  Adicionar vídeo
                </TabsTrigger>
                <TabsTrigger value="preview-tab">Pré-visualização</TabsTrigger>
              </TabsList>
              <Tabs.Content value="add-new-video-tab">
                <Form.Root onSubmit={handleCreateOneVideo}>
                  <Form.Input>
                    <Form.Label htmlFor="video_title">
                      Título do vídeo
                    </Form.Label>
                    <Form.Field
                      type="text"
                      placeholder="Título do vídeo aqui"
                      id="video_title"
                      name="video_title"
                      value={values.video_title}
                      onChange={handleChange}
                      autoComplete="none"
                    />
                  </Form.Input>
                  <Form.Input>
                    <Form.Label htmlFor="video_url">URL do vídeo</Form.Label>
                    <Form.Field
                      type="text"
                      placeholder="URL do vídeo aqui"
                      id="video_url"
                      name="video_url"
                      value={values.video_url}
                      onChange={handleChange}
                      autoComplete="none"
                    />
                  </Form.Input>
                  <Form.Label htmlFor="video_playlist">
                    Playlist do vídeo
                  </Form.Label>
                  <Select
                    id="video_playlist"
                    name="video_playlist"
                    value={values.video_playlist}
                    onChange={handleChange}>
                    <Option value="" disabled>
                      Selecione a playlist
                    </Option>
                    {playlists.map((playlist) => (
                      <Option key={playlist.id} value={playlist.id}>
                        {playlist.name}
                      </Option>
                    ))}
                  </Select>
                  <Form.SubmitButton>Adicionar</Form.SubmitButton>
                </Form.Root>
              </Tabs.Content>
              <Tabs.Content value="preview-tab">
                <Iframe src={videoPreviewURL} css={{ h: '285px' }} />
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

      <Dialog.Root open={isOpenAddNewPlaylistModal}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content css={{ maxW: '420px', px: '$4', pb: '$4', pt: '$2' }}>
            <Dialog.Title>Adicinar playlist</Dialog.Title>
            <Form.Root onSubmit={handleCreateOnePlaylist} css={{ pt: '$4' }}>
              <Form.Input>
                <Form.Label htmlFor="playlist_name">
                  Nome da playlist
                </Form.Label>
                <Form.Field
                  type="text"
                  placeholder="Nome da playlist aqui"
                  id="playlist_name"
                  name="playlist_name"
                  value={values.playlist_name}
                  onChange={handleChange}
                  autoComplete="none"
                />
              </Form.Input>
              <Form.SubmitButton>Adicionar</Form.SubmitButton>
            </Form.Root>
            <Dialog.Close asChild>
              <Dialog.CloseButton onClick={handleCloseAddNewPlaylistModal}>
                <X size={24} weight="bold" />
              </Dialog.CloseButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {actionButtons.isOpen && (
        <ActionButton.Root>
          <ActionButton.Item onClick={handleOpenAddNewVideoModal}>
            Adicionar novo vídeo
          </ActionButton.Item>
          <ActionButton.Item onClick={handleOpenAddNewPlaylistModal}>
            Adicionar nova playlist
          </ActionButton.Item>
        </ActionButton.Root>
      )}

      <AddNewVideoButton onClick={actionButtons.toggle} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const playlists = await FindManyPlaylistsService.execute();
  const videos = await FindManyVideosService.execute();

  let data = {} as Record<string, VideoEntity[]>;

  playlists?.forEach((playlist) => {
    const videosByPlaylist = videos?.filter((video, index) => {
      const condition = video.playlist_id === playlist.id;

      condition && videos.splice(index, 1);
      return condition;
    });
    data = {
      ...data,
      [playlist.name]: videosByPlaylist,
    };
  });

  const favorites = await FindManyFavoritesServices.execute({
    where: {
      username: 'jtiagosantos',
    },
  });

  return {
    props: {
      playlists,
      data,
      favorites,
    },
  };
};
