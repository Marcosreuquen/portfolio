import Paragraph from "ui/Paragraph";
import { Card, Image, Nav, Content } from "./style";
import Link from "ui/Link";

const WorkCard = (props: {
  children: string;
  title: string;
  img: string;
  repo: string;
  web: string;
}) => {
  return (
    <Card>
      <Image className='image' src={props.img} alt='foto' />
      <Content className='content'>
        <Paragraph weight='bold'>{props.title}</Paragraph>
        <Paragraph weight='regular'>{props.children}</Paragraph>
        <Nav>
          {props.repo ? (
            <Link url={props.repo} img='/code.svg' name='Repository' icon='s' />
          ) : null}
          {props.web ? (
            <Link icon='s' img='/web.svg' name='Demo' url={props.web} />
          ) : null}
        </Nav>
      </Content>
    </Card>
  );
};

export default WorkCard;
