import Paragraph from "ui/Paragraph";
import { StyledA } from "./styled";

export type iconSize = "s" | "m";

const Link = (props: {
  url: string;
  name: string;
  iconSize: iconSize;
  children: any;
}) => {
  return (
    <StyledA href={props.url} iconSize={props.iconSize} target='_blank'>
      {props.children}
      <Paragraph weight='regular'>{props.name}</Paragraph>
    </StyledA>
  );
};

export default Link;
