import { styled } from '@/common/styles/theme';
import { Banner } from '@/common/styles/components';
import { GetServerSideProps } from 'next';
import { signIn } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

const Container = styled('main', {
  position: 'relative',
});

const Glassmorphism = styled('div', {
  maxW: '450px',
  w: '$full',
  bg: '$glassmorphism_color',
  backdropFilter: 'blur(4px)',
  br: '8px',
  border: '1px solid $border_color_secondary',
  p: '$4',
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '$6',

  '*': {
    color: '#FFFFFF',
  },
});

const Text = styled('h2', {
  textAlign: 'center',
  fontWeight: '$normal',
  fontSize: '1.3rem',
});

const AuthButton = styled('button', {
  w: '50%',
  py: '$2',
  br: '5px',
  border: 'none',
  bg: '$button_color_primary',
  fontWeight: '$semiBold',
  fontSize: '1rem',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
});

export default function Home() {
  return (
    <Container>
      <Banner
        css={{
          h: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Glassmorphism>
          <Text>
            Para ter acesso às funcionalidades do AluraTube, faça login clicando
            no botão abaixo:
          </Text>
          <AuthButton onClick={() => signIn()}>Entrar</AuthButton>
        </Glassmorphism>
      </Banner>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
