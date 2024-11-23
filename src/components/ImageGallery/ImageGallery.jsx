import ImageGalleryItem from '../ImageGalleryItem';
import { createPortal } from 'react-dom';
import Modal from '../Modal';
import { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const toggleModal = e => {
    setIsOpenModal(prevState => !prevState);
  };
  const onImageClick = largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
    toggleModal();
  };

  const onModalKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          onImageClick={onImageClick}
        />
      ))}
      {isOpenModal &&
        createPortal(
          <Modal
            largeImage={largeImageUrl}
            onModalClick={toggleModal}
            onModalKeyDown={onModalKeyDown}
          />,
          document.querySelector('.imageModal')
        )}
    </ul>
  );
};

export default ImageGallery;
