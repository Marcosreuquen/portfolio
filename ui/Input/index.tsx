import { StyledInput } from "./styled";

type inputs = "textarea" | "email" | "text";
const Input = (props: { type: inputs; placeholder: string; name: string }) => {
  return <StyledInput {...props} />;
};

export default Input;
