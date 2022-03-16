import Paragraph from "ui/Paragraph";
import { Card, Image } from "./style";

const Service = (props: { children: string; title: string; img: string }) => {
  return (
    <Card>
      <Image src={props.img} alt='foto' />
      <Paragraph weight='bold'>{props.title}</Paragraph>
      <Paragraph weight='regular'>{props.children}</Paragraph>
    </Card>
  );
};

export default Service;
