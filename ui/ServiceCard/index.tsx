import Paragraph from "ui/Paragraph";
import { Card } from "./styled";
const Fade = require("react-reveal/Fade");
import Image from "next/image";

const Service = (props: { children: string; title: string; img: string }) => {
  console.log(props.img);

  return (
    <Fade bottom>
      <Card>
        <Image src={props.img} alt='foto' height='100px' width='200px' />
        <Paragraph weight='bold'>{props.title}</Paragraph>
        <Paragraph weight='regular'>{props.children}</Paragraph>
      </Card>
    </Fade>
  );
};

export default Service;
