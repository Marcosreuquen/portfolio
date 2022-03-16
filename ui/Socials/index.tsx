import styled from "styled-components";
import Paragraph from "ui/Paragraph";
import Link from "ui/Link";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  justify-self: center;
`;
const Socials = () => {
  return (
    <Nav>
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
