import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images }) => {
  return (
    <ul>
          Набор "li" с изображениями
      <ImageGalleryItem />
      {/* {images.map(image => (
          <ImageGalleryItem key={image.id} {...image} />)
      )} */}
    </ul>
  );
};

