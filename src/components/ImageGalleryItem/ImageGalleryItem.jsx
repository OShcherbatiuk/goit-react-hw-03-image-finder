import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, onClick, modalFormatURL }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        url={modalFormatURL}
        src={src}
        alt=""
        className={s.ImageGalleryItem_image}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
