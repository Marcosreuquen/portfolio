import Paragraph from "ui/Paragraph";
import { Icon, StyledA } from "./styled";

export type iconSize = "s" | "m";

const Link = (props: {
  url: string;
  img: string;
  name: string;
  icon: iconSize;
}) => {
  return (
    <StyledA href={props.url} iconSize={props.icon} target='_blank'>
      <Icon src={props.img} alt={props.name} iconSize={props.icon} />
      <Paragraph weight='regular'>{props.name}</Paragraph>
    </StyledA>
  );
};

export default Link;
