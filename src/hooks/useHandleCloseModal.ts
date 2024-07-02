import { useState } from 'react';

type UseModalCloseReturn = {
  isClosing: boolean;
  handleClose: () => void;
};

const useModalClose = (
  setOpenModal: (value: boolean) => void,
  animationDuration: number = 500
): UseModalCloseReturn => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenModal(false);
    }, animationDuration); // Tempo da animação de fechamento
  };

  return {
    isClosing,
    handleClose,
  };
};

export default useModalClose;
