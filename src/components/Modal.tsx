import { ReactNode } from 'react';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  modalId: string;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className='modal-overlay' onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className='modal-window'>
            {props.modalId === 'rules' && props.children}
            {props.modalId === 'rates' && props.children}
            {props.modalId === 'calendar' && props.children}
            {props.modalId === 'gallery' && props.children}
            {props.modalId === 'success' && props.children}
          </div>
        </div>
      )}
    </>
  );
}
