import { ButtonElement } from "./styles";
const Button = ({
  children,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <ButtonElement {...props} disabled={isLoading || disabled}>
      {isLoading ? "Loading" : children}
    </ButtonElement>
  );
};

export default Button;
