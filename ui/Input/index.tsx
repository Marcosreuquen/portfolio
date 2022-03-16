import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 65px;
  border: 1px solid #c6c6c6;
  font-family: var(--font-body);
  padding: 10px 15px;
  border-radius: 4px;
  &::-webkit-input-placeholder {
    font-family: var(--font-title);
    font-weight: 700;
    opacity: 0.8;
    color: var(--strong-black);
  }
`;
type inputs = "textarea" | "email" | "text";
const Input = (props: { type: inputs; placeholder: string; name: string }) => {
  return <StyledInput {...props} />;
};

export default Input;
