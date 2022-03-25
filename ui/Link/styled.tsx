import styled from "styled-components";
import type { iconSize } from ".";

export const StyledA = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props: { iconSize: iconSize }) =>
    props.iconSize == "s" ? "var(--strong-black)" : "var(--strong-white)"};
  &:hover {
    color: var(--primary);
    font-weight: 700;
    transition: 1s;
  }
  & > svg > path {
    height: ${(props: { iconSize: iconSize }) =>
      props.iconSize == "s" ? "20px" : "40px"};
    width: ${(props: { iconSize: iconSize }) =>
      props.iconSize == "s" ? "20px" : "40px"};
  }
  & > svg {
    height: ${(props: { iconSize: iconSize }) =>
      props.iconSize == "s" ? "22px" : "45px"};
    width: ${(props: { iconSize: iconSize }) =>
      props.iconSize == "s" ? "22px" : "45px"};
  }
  &:hover > svg {
    filter: drop-shadow(2px 3px 1px var(--primary));
    transition: 1s;
  }
`;
