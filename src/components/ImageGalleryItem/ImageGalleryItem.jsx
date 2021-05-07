import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  src: PropTypes.string,
  modalFormatURL: PropTypes.string,
};

export default ImageGalleryItem;
