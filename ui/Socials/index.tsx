import {
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ScheduleIcon,
} from "ui/icons";
import Link from "ui/Link";
import { Nav } from "./styled";

const Socials = (props: { burger?: boolean }) => {
  return (
    <Nav id='socials'>
      <Link
        iconSize={props.burger ? "s" : "m"}
        name='Linkedin'
        url='https://www.linkedin.com/in/marcos-reuquen-diaz'>
        <LinkedinIcon />
      </Link>
      <Link
        iconSize={props.burger ? "s" : "m"}
        name='Github'
        url='https://github.com/Marcosreuquen'>
        <GithubIcon small />
      </Link>
      <Link
        iconSize={props.burger ? "s" : "m"}
        name='Email'
        url='mailto:marcosreuquendiaz@gmail.com'>
        <MailIcon />
      </Link>
      <Link
        iconSize={props.burger ? "s" : "m"}
        name='Calendly'
        url='https://calendly.com/marcosreuquendiaz'>
        <ScheduleIcon />
      </Link>

      <Link
        iconSize={props.burger ? "s" : "m"}
        name='Discord'
        url='https://discord.com/invite/marcosreuquen#6569'>
        <DiscordIcon />
      </Link>
    </Nav>
  );
};

export default Socials;
