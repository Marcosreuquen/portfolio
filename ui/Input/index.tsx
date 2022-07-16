import { type } from "os";
import { StyledInput, StyledTextArea } from "./styled";

type inputs = "textarea" | "email" | "text" | "url";
const Input = (props: {
  type: inputs;
  placeholder: string;
  name: string;
  defaultValue?: string;
}) => {
  if (props.type == "textarea") return <StyledTextArea {...props} wrap='on' />;
  return <StyledInput {...props} />;
};

export default Input;
