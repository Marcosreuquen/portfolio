import Paragraph from "ui/Paragraph";
import { Card, Image } from "./styled";
const Fade = require("react-reveal/Fade");

const Service = (props: { children: string; title: string; img: string }) => {
  return (
    <Fade bottom>
      <Card>
        <Image src={props.img} alt='foto' />
        <Paragraph weight='bold'>{props.title}</Paragraph>
        <Paragraph weight='regular'>{props.children}</Paragraph>
      </Card>
    </Fade>
  );
};

export default Service;
