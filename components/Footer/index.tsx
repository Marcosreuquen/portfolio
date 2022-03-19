import { useTranslation } from "hooks";
import Paragraph from "ui/Paragraph";
import { Container, Name } from "./styled";

const Footer = () => {
  const locale = useTranslation();
  return (
    <Container>
      <Paragraph weight='regular'>
        {("Copyright © " + new Date(Date.now()).getFullYear()).toString()}
      </Paragraph>
      <Name>Marcos Reuquén</Name>
      <Paragraph weight='regular'>
        {locale == "en"
          ? "| All Right Reserved."
          : "| Todos los derechos reservados."}
      </Paragraph>
    </Container>
  );
};

export default Footer;
