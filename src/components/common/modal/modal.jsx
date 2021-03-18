import React from 'react';
import { SecModal, ModalDiv } from '../../../styledComponents/styledComponents';

const Modal = ({ show, children }) => {
  return (
    <ModalDiv show={show}>
      <SecModal>{children}</SecModal>
    </ModalDiv>
  );
};

export default Modal;
