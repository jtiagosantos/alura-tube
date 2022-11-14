import { createStitches } from '@stitches/react';

import { colors } from './colors.theme';
import { fontSizes, fontWeights } from './fonts.theme';
import { space } from './space.theme';
import { sizes } from './sizes.theme';
import { radii } from './radii.theme';
import { utils } from './utils.theme';

const { light, dark } = colors;

const { config, createTheme, css, getCssText, globalCss, styled, theme } =
  createStitches({
    theme: {
      colors: light,
      space,
      fontSizes,
      fontWeights,
      radii,
      sizes,
    },
    utils,
  });

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins',
    transition: 'all 0.4s ease',

    '::-webkit-scrollbar': {
      w: '8px',
      h: '8px',
    },

    '::-webkit-scrollbar-track': {
      bg: '$background_tertiary',
      br: '5px',
    },

    '::-webkit-scrollbar-thumb': {
      bg: '$text_color_secondary',
      br: '5px',
    },
  },
  'html, body': {
    backgroundColor: '$background_primary',
    color: '$text_color_primary',
    minHeight: '100vh',
  },
});

const darkTheme = createTheme({
  colors: dark,
});

export {
  config,
  createTheme,
  css,
  getCssText,
  styled,
  theme,
  globalStyles,
  darkTheme,
};
