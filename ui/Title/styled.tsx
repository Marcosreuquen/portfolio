import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const First = styled.h1`
  font-family: var(--font-title);
  color: var(--strong-white);
  font-family: Space Grotesk;
  font-size: 7vmax;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
  text-shadow: 0px 2px 2px var(--primary);
  margin: 0;
`;
export const Second = styled.h1`
  font-family: var(--font-title);
  color: transparent;
  font-family: Space Grotesk;
  font-size: 7vmax;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0;
  -webkit-text-stroke: 1px var(--primary);
`;
