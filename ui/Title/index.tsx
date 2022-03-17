import { StyledDiv, First, Second } from "./styled";

const Title = (props: { first: string; second: string }) => {
  return (
    <StyledDiv>
      <First>{props.first}</First>
      <Second>{props.second}</Second>
    </StyledDiv>
  );
};

export default Title;
