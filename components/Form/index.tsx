import Button from "ui/Button";
import Caption from "ui/Caption";
import Input from "ui/Input";
import Swal from "sweetalert2";
import { sendMail } from "lib";
import { StyledForm } from "./styled";
import { useTranslation } from "hooks";
import { fire } from "lib";

const Form = () => {
  const locale = useTranslation();
  const handleSubmit = async (e: any) => {
    let valueEmpy: boolean = false;
    e.preventDefault();
    const data = new FormData(e.target);
    data.forEach((value, key) => {
      if (!value) {
        fire(`El campo ${key} no puede estar incompleto.`, "error");
        valueEmpy = true;
      }
    });
    if (!valueEmpy) {
      const value = Object.fromEntries(data.entries());
      const mailSended = await sendMail(value);
      if (mailSended.status == 200)
        fire(
          "¡Muchas gracias por tu contacto! Muy pronto estaré respondiendo tu consulta.",
          "success"
        );
      if (mailSended.status != 200)
        fire("Ouch, algo salió mal. Intentá de nuevo más tarde.", "error");
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Caption primary={true}>
        {locale == "en" ? "Get in touch." : "Ponte en contacto."}
      </Caption>
      <Input
        type='text'
        placeholder={locale == "en" ? "Name" : "Nombre"}
        name='name'
      />
      <Input type='email' placeholder='Email' name='email' />
      <Input
        type='textarea'
        placeholder={locale == "en" ? "Comments" : "Comentarios"}
        name='comments'
      />
      <Button>Enviar</Button>
    </StyledForm>
  );
};

export default Form;
