import styled, { css } from "styled-components";

const StyledCaption = styled.p`
  font-family: var(--font-body);
  color: ${(props: { primary: boolean }) =>
    props.primary ? "var(--primary)" : "var(--strong-white)"};
  font-size: 20px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: left;
  &:hover {
    color: var(--primary);
    transition: 1s;
  }
  &:before {
    content: "―――――――――――――――";
    letter-spacing: -0.2em;
    margin-right: 8px;
  }
`;
const Caption = (props: { children: string; primary: boolean }) => {
  return (
    <StyledCaption primary={props.primary}>{props.children}</StyledCaption>
  );
};

export default Caption;
