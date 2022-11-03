import { Box } from 'components/Box/Box';
import ImageGalleryItem from 'components/ImageGalleryItem';

import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Box px={4} pb={5}>
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
    </Box>
  );
};

export default ImageGallery;
