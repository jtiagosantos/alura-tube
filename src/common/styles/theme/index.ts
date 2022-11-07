import { createStitches } from '@stitches/react';

import { colors } from './colors.theme';
import { fontSizes, fontWeights } from './fonts.theme';
import { space } from './space.theme';
import { utils } from './utils.theme';

const { config, createTheme, css, getCssText, globalCss, styled, theme } =
  createStitches({
    theme: {
      colors,
      space,
      fontSizes,
      fontWeights,
    },
    utils,
  });

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins',
  },
  'html, body': {
    backgroundColor: '$background_primary',
    color: '$text_color_primary',
    minHeight: '100vh',
  },
});

export { config, createTheme, css, getCssText, styled, theme, globalStyles };
