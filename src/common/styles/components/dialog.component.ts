import * as PrimitiveDialog from '@radix-ui/react-dialog';
import { styled } from '@/common/styles/theme';

const DialogOverlay = styled(PrimitiveDialog.Overlay, {
  bg: '$overlay',
  position: 'fixed',
  inset: 0,
  backdropFilter: 'blur(2px)',
});

const DialogContent = styled(PrimitiveDialog.Content, {
  maxW: '500px',
  w: '$full',
  h: '400px',
  bg: '$background_tertiary',
  br: '8px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: '$2',
  pt: '$9',
});

const DialogCloseButton = styled('button', {
  h: '25px',
  w: '25px',
  br: '$rounded',
  border: 'none',
  position: 'absolute',
  right: '5px',
  top: '5px',
  bg: 'transparent',
  cursor: 'pointer',
  color: '$text_color_secondary',
});

export const Dialog = {
  Root: PrimitiveDialog.Root,
  Portal: PrimitiveDialog.Portal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Close: PrimitiveDialog.Close,
  CloseButton: DialogCloseButton,
};
