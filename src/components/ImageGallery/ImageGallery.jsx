import ImageGalleryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ hits }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {hits.map(({ id, webformatURL }) => (
          <ImageGalleryItem key={id} src={webformatURL} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
