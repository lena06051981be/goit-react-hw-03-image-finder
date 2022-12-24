import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, onSelect }) => {
  return images.map((image) => (
      <GalleryItem className="photo-card" key={image.id}>        
          <GalleryImage
          className='image'
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => onSelect(image.largeImageURL, image.tags)}
          loading="lazy"
          />        
      </GalleryItem>  
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};