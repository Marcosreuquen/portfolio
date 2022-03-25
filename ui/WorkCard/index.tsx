import Paragraph from "ui/Paragraph";
import { Card, Nav, Content } from "./styled";
import Link from "ui/Link";
import { CodeIcon, WebIcon } from "ui/icons";
const Fade = require("react-reveal/Fade");

const WorkCard = (props: {
  children: string;
  title: string;
  img: string;
  repo: string;
  web: string;
}) => {
  return (
    <Fade bottom>
      <Card>
        <Content className='content' img={props.img}>
          <Paragraph weight='bold'>{props.title}</Paragraph>
          <Paragraph weight='regular'>{props.children}</Paragraph>
          <Nav>
            {props.repo ? (
              <Link url={props.repo} name='Repository' iconSize='s'>
                <CodeIcon />
              </Link>
            ) : null}
            {props.web ? (
              <Link iconSize='s' name='Demo' url={props.web}>
                <WebIcon />
              </Link>
            ) : null}
          </Nav>
        </Content>
      </Card>
    </Fade>
  );
};

export default WorkCard;
