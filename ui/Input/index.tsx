import { type } from "os";
import { StyledInput, StyledTextArea } from "./styled";

type inputs = "textarea" | "email" | "text";
const Input = (props: { type: inputs; placeholder: string; name: string }) => {
  if (props.type == "textarea") return <StyledTextArea {...props} wrap='on' />;
  return <StyledInput {...props} />;
};

export default Input;
