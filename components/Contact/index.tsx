import Form from "components/Form";
import { useTranslation } from "hooks";
import Socials from "ui/Socials";
import Title from "ui/Title";
import { Section, Grid } from "./styled";

const Contact = () => {
  const locale = useTranslation();
  return (
    <Section id='contact'>
      <Title first={locale == "en" ? "Contact" : "Contacto"} second=''></Title>
      <Grid>
        <Socials />
        <Form />
      </Grid>
    </Section>
  );
};

export default Contact;
