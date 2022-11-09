import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Sun, Moon } from 'phosphor-react';
import { styled } from '../theme';

const SwitchRoot = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 60,
  height: 30,
  bg: '$text_color_secondary',
  br: '16px',
  position: 'relative',
  cursor: 'pointer',

  '&[data-state="checked"]': {
    bg: '$text_color_secondary',
  },
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 25,
  height: 25,
  bg: '$background_secondary',
  br: '$rounded',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(3px)',
  position: 'relative',
  zIndex: 1,

  '&[data-state="checked"]': {
    transform: 'translateX(33px)',
    bg: '$background_secondary',
  },
});

const SwitchMoonIcon = styled(Moon, {
  position: 'absolute',
  right: '3px',
  top: '3px',
  color: '$moon_icon_color',
  zIndex: 0,
});

const SwitchSunIcon = styled(Sun, {
  position: 'absolute',
  left: '3px',
  top: '4px',
  color: '$sun_icon_color',
});

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
  MoonIcon: SwitchMoonIcon,
  SunIcon: SwitchSunIcon,
};
