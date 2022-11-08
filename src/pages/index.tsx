import Image from 'next/image';

import { styled } from '@/common/styles/theme';
import {
  Header,
  Banner,
  Avatar,
  Profile,
  Video,
  Playlist,
  Favorite,
} from '@/common/components';

import { playlists } from '@/mock/playlists.mock';
import { favorites } from '@/mock/favorites.mock';

const Main = styled('main', {
  p: '0 12px',
  mt: '$8',
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

  return (
    <>
      <Header.Root>
        <Header.Top>
          <Image
            src="/assets/logo.png"
            width={120}
            height={24}
            alt="AluraTube logo"
          />
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
            <Playlist.Root>
              <Playlist.Title>{name}</Playlist.Title>
              <Playlist.Videos>
                {playlists[name].map((video) => (
                  <Video.Root>
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
              <Favorite.Root>
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
    </>
  );
}
