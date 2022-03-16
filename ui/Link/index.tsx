import styled from "styled-components";
import Paragraph from "ui/Paragraph";

export const Icon = styled.img`
  height: ${(props: { iconSize: iconSize }) =>
    props.iconSize == "s" ? "22px" : "50px"};
  width: ${(props: { iconSize: iconSize }) =>
    props.iconSize == "s" ? "22px" : "50px"};
`;

const StyledA = styled.a`
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
  &:hover > img {
    filter: drop-shadow(2px 3px 1px var(--primary));
    transition: 1s;
  }
`;

type iconSize = "s" | "m";
const Link = (props: {
  url: string;
  img: string;
  name: string;
  icon: iconSize;
}) => {
  return (
    <StyledA href={props.url} iconSize={props.icon}>
      <Icon src={props.img} alt={props.name} iconSize={props.icon} />
      <Paragraph weight='regular'>{props.name}</Paragraph>
    </StyledA>
  );
};

export default Link;
