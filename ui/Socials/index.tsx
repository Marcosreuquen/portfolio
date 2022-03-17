import Link from "ui/Link";
import { Nav } from "./styled";

const Socials = () => {
  return (
    <Nav id='socials'>
      <Link
        icon='m'
        img='/linkedin.svg'
        name='Linkedin'
        url='https://www.linkedin.com/in/marcos-reuquen-diaz'
      />
      <Link
        icon='m'
        img='/github.svg'
        name='Github'
        url='https://github.com/Marcosreuquen'
      />
      <Link
        icon='m'
        img='/mail.svg'
        name='Email'
        url='mailto:marcosreuquendiaz@gmail.com'
      />
      <Link
        icon='m'
        img='/schedule.svg'
        name='Calendly'
        url='https://calendly.com/marcosreuquendiaz'
      />

      <Link
        icon='m'
        img='/discord.svg'
        name='Discord'
        url='https://discord.com/invite/marcosreuquen#6569'
      />
    </Nav>
  );
};

export default Socials;
