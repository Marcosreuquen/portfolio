import { StyledButton } from "./styled";

const Button = (props: { children: string }) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
