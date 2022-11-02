import ImageGalleryItem from 'components/ImageGalleryItem';

import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImagesList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformat={image.webformatURL}
            largeImage={image.largeImageURL}
            alt={image.tags}
          />
        );
      })}
    </ImagesList>
  );
};

export default ImageGallery;
