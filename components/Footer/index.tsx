import styled from "styled-components";
import Paragraph from "ui/Paragraph";

const Container = styled.footer`
  height: 163px;
  background-color: var(--strong-black);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

const Name = styled.p`
  color: var(--primary);
  font-weight: bold;
  font-family: var(--font-body);
`;

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
