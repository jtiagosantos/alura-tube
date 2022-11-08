import { styled } from '../theme';

const ProfileRoot = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const ProfileName = styled('h2', {
  color: '$text_color_primary',
});

const ProfileOccupation = styled('p', {
  color: '$text_color_secondary',
});

export const Profile = {
  Root: ProfileRoot,
  Name: ProfileName,
  Occupation: ProfileOccupation,
};
