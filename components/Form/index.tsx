import Button from "ui/Button";
import Caption from "ui/Caption";
import Input from "ui/Input";
import Swal from "sweetalert2";
import { sendMail } from "lib";
import { StyledForm } from "./styled";
import { useTranslation } from "hooks";

const Form = () => {
  const locale = useTranslation();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    const mailSended = await sendMail(value);
    if (mailSended.status == 200)
      Swal.fire({
        title:
          "¡Muchas gracias por tu contacto! Muy pronto estaré respondiendo tu consulta.",
        icon: "success",
        timer: 3000,
        background: "#2e2e2e",
        color: "#f1f1f1",
        showConfirmButton: false,
        timerProgressBar: true,
      });
    if (mailSended.status != 200)
      Swal.fire({
        title: "Ouch, algo salió mal. Intentá de nuevo más tarde.",
        icon: "error",
        background: "#2e2e2e",
        color: "#f1f1f1",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
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
