import { StyledP } from "./style";

export type weightType = "bold" | "regular" | "italic";

const Paragraph = (props: { children: string; weight: weightType }) => {
  const isStyle = () => {
    return props.weight == "italic" ? <i>{props.children}</i> : props.children;
  };
  return (
    <StyledP weight={props.weight == "bold" ? "bold" : false}>
      {isStyle()}
    </StyledP>
  );
};

export default Paragraph;
