import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ hits, onClick, onFocus }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            modalFormatURL={largeImageURL}
            onClick={onClick}
            onFocus={onFocus}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape),
};

export default ImageGallery;
