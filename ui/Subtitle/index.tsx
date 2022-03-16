import styled, { css } from "styled-components";

const First = styled.h2`
  font-family: var(--font-title);
  color: var(--strong-black);
  font-family: Space Grotesk;
  font-size: 38px;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

const Subtitle = (props: { children: string }) => {
  return <First>{props.children}</First>;
};

export default Subtitle;
