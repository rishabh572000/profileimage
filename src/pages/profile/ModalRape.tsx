import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

const ModalWrapper = ({ opener, children }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleOpenerClick = () => {
    openModal();
    opener.onClick();
  };

  return (
    <>
      {opener.render(handleOpenerClick)}

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {children}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

function ModalRape() {
  const opener = {
    onClick: () => {
      console.log('Opener clicked');
    },
    render: (handleClick) => (
      <button onClick={handleClick}>Open Modal</button>
    ),
  };

  return (
    <ModalWrapper opener={opener}>
      <h2>Modal Title</h2>
      <p>Modal content goes here...</p>
    </ModalWrapper>
  );
};
export default ModalRape

