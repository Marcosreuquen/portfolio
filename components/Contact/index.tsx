import Form from "components/Form";
import Socials from "ui/Socials";
import Title from "ui/Title";
import { Section, Grid } from "./styled";

const Contact = () => {
  return (
    <Section id='contact'>
      <Title first='Contact' second=''></Title>
      <Grid>
        <Socials />
        <Form />
      </Grid>
    </Section>
  );
};

export default Contact;
