import type * as Stitches from '@stitches/react';

export const utils = {
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  mx: (value: Stitches.PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginright: value,
  }),
  my: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  px: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingright: value,
  }),
  py: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  bg: (value: Stitches.PropertyValue<'background'>) => ({
    background: value,
  }),
  w: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
  }),
  h: (value: Stitches.PropertyValue<'height'>) => ({
    height: value,
  }),
  square: (value: Stitches.PropertyValue<'width' | 'height'>) => ({
    width: value,
    height: value,
  }),
};
