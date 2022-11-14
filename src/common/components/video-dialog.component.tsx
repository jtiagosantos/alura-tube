import { FC } from 'react';
import { X } from 'phosphor-react';
import { Dialog, Iframe } from '../styles/components';

type TVideoDialogProps = FC<{
  src: string;
  onClose: () => void;
}>;

export const VideoDialog: TVideoDialogProps = ({ src, onClose }) => {
  return (
    <Dialog.Root open={!!src}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          css={{ maxW: '500px', h: '350px', pt: '$9', px: '$4', pb: '$4' }}>
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
