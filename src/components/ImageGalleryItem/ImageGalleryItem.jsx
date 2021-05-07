import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, onClick, modalFormatURL, onFocus }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        srcSet={modalFormatURL}
        src={src}
        alt=""
        className={s.ImageGalleryItem_image}
        onClick={e => onClick(onFocus(e))}
      />
    </li>
  );
};

export default ImageGalleryItem;
