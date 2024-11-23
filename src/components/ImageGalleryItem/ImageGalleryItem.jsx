const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
