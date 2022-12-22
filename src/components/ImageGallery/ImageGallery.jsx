import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul>      
      {images.map((image, id) => (
        <li key={id}>
          <ImageGalleryItem image={image} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
};

