import styled, { css } from "styled-components";

type weights = "bold" | false;

export const StyledP = styled.p`
  font-family: ${(props: { weight: weights }) =>
    props.weight == "bold" ? "var(--font-title)" : "var(--font-body)"};
  font-style: ${(props: { weight: weights }) =>
    props.weight == "bold" ? "bold" : "normal"};
  font-weight: ${(props: { weight: weights }) =>
    props.weight == "bold" ? 700 : 500};
  font-size: ${(props: { weight: weights }) =>
    props.weight == "bold" ? "22px" : "15px"};
  line-height: 22px;
  letter-spacing: 0.04em;
  margin: 0;
`;
