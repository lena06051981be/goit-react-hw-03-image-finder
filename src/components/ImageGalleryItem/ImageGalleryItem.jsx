// import PropTypes from 'prop-types';

// export const ImageGalleryItem = () => (
//     <li className="gallery-item">
//         <img src="" alt="" />
//     </li>
// )

export const ImageGalleryItem = ({ image, onSelect }) => {
  return (
    <img
    src={image.webformatURL}
    alt={image.tags}
    onClick={() => onSelect(image.largeImageURL, image.tags)}
    loading="lazy"
    />
  );
};

  // ImageGalleryItem.propTypes = {
  //   largeImageURL: PropTypes.string,
  //   webformatURL: PropTypes.string,
  //   tags: PropTypes.string,
  // };