import { useEffect } from 'react';

const Modal = ({ onModalKeyDown, onModalClick, largeImage }) => {
  useEffect(() => {
    window.addEventListener('keydown', onModalKeyDown);
    return () => {
      window.removeEventListener('keydown', onModalKeyDown);
    };
  }, [onModalKeyDown]);

  return (
    <div className="Overlay" onClick={onModalClick}>
      <div className="Modal">
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
