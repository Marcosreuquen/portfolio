import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const First = styled.h1`
  font-family: var(--font-title);
  color: var(--strong-white);
  font-family: Space Grotesk;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: -0.02em;
  text-align: left;
  text-shadow: 0px 2px 2px var(--primary);
  margin: 0;
`;
const Second = styled.h1`
  font-family: var(--font-title);
  color: transparent;
  font-family: Space Grotesk;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0;
  -webkit-text-stroke: 1px var(--primary);
`;

const Title = (props: { first: string; second: string }) => {
  return (
    <StyledDiv>
      <First>{props.first}</First>
      <Second>{props.second}</Second>
    </StyledDiv>
  );
};

export default Title;
