import Paragraph from "ui/Paragraph";
import { Container, Name } from "./styled";

const Footer = () => {
  return (
    <Container>
      <Paragraph weight='regular'>
        {("Copyright © " + new Date(Date.now()).getFullYear()).toString()}
      </Paragraph>
      <Name>Marcos Reuquén</Name>
      <Paragraph weight='regular'>| All Right Reserved</Paragraph>
    </Container>
  );
};

export default Footer;
