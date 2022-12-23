import { ButtonLoadMore } from "./Button.styled";


const Button = ({ onClick }) => {
    return (
      <ButtonLoadMore onClick={onClick} type="button">
        Load more
      </ButtonLoadMore>
    );
};
  
export default Button;