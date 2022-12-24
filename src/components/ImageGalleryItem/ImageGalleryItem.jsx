import { 
  GalleryItem,
  GalleryImage,
  GalleryInfo,
  GalleryInfoItem,
} from './ImageGalleryItem.styled';
import { FcLike } from "react-icons/fc";
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
          <GalleryInfo class='info'>
            <GalleryInfoItem class='info__item'>
              <b>Likes</b>
              <FcLike style={{ width: 14, height: 14 }} />              
              {image.likes}
            </GalleryInfoItem>
            <GalleryInfoItem class='info__item'>
              <b>Views</b>
              {/* <svg class='icon view'><use xlink:href='#view'>
                  <symbol id='view' viewBox='0 0 32 32'>
                    <path
                      d='M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z'
                    ></path>
                  </symbol>
                </use></svg> */}
              {image.views}
            </GalleryInfoItem>
            <GalleryInfoItem class='info__item'>
              <b>Comments</b>
              {/* <svg class='icon comment'><use xlink:href='#comment'>
                  <symbol id='comment' viewBox='0 0 36 32'>
                    <path
                      d='M34 28.161c0 1.422 0.813 2.653 2 3.256v0.498c-0.332 0.045-0.671 0.070-1.016 0.070-2.125 0-4.042-0.892-5.398-2.321-0.819 0.218-1.688 0.336-2.587 0.336-4.971 0-9-3.582-9-8s4.029-8 9-8c4.971 0 9 3.582 9 8 0 1.73-0.618 3.331-1.667 4.64-0.213 0.463-0.333 0.979-0.333 1.522zM16 0c8.702 0 15.781 5.644 15.995 12.672-1.537-0.685-3.237-1.047-4.995-1.047-2.986 0-5.807 1.045-7.942 2.943-2.214 1.968-3.433 4.607-3.433 7.432 0 1.396 0.298 2.747 0.867 3.993-0.163 0.004-0.327 0.007-0.492 0.007-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z'
                    ></path>
                  </symbol>
                </use></svg> */}
              {image.comments}
            </GalleryInfoItem>
            <GalleryInfoItem class='info__item'>
              <b>Downloads</b>
              {/* <svg class='icon download'><use xlink:href='#download'>
                  <symbol id='download' viewBox='0 0 32 32'>
                    <path
                      d='M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z'
                    ></path>
                  </symbol></use>
              </svg> */}
              {image.downloads}
            </GalleryInfoItem>
          </GalleryInfo>        
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