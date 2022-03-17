import { StyledCaption } from "./styled";

const Caption = (props: { children: string; primary: boolean }) => {
  return (
    <StyledCaption primary={props.primary}>{props.children}</StyledCaption>
  );
};

export default Caption;
