import styled from "styled-components";

export const GalleryItem = styled.li`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms linear, box-shadow 250ms linear;
    &:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transform: scale(1.08);
            cursor: pointer;
            /* cursor: zoom-in; */
        }
`
export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;
  overflow: hidden;
  object-fit: cover;
  transition: transform 250ms linear;

    &:hover{
        transform: scale(1.03);
    }
`
