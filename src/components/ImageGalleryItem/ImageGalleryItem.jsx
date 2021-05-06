import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={src} alt="" className={s.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
