import { ModalWrapper } from "./style";

function Modal({children}) {
  return ( 
    <ModalWrapper>
      {children}
    </ModalWrapper>
   )
}

export default Modal;