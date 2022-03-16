import styled from "styled-components";
import Form from "components/Form";
import Socials from "ui/Socials";
import Title from "ui/Title";

const Section = styled.section`
  padding: 5%;
  min-height: 80vh;
  background-color: var(--strong-black);
`;
const Grid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const Contact = () => {
  return (
    <Section>
      <Title first='Contact' second=''></Title>
      <Grid>
        <Socials />
        <Form />
      </Grid>
    </Section>
  );
};

export default Contact;
