import { FC } from 'react';
import { X } from 'phosphor-react';
import { Dialog } from '../styles/components';
import { styled } from '../styles/theme';

const Iframe = styled('iframe', {
  w: '$full',
  h: '$full',
  br: '8px',
  border: 'none',
});

type TVideoDialogProps = FC<{
  src: string;
  onClose: () => void;
}>;

export const VideoDialog: TVideoDialogProps = ({ src, onClose }) => {
  return (
    <Dialog.Root open={!!src}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Iframe src={src} />
          <Dialog.Close asChild>
            <Dialog.CloseButton onClick={onClose}>
              <X size={24} weight="bold" />
            </Dialog.CloseButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
