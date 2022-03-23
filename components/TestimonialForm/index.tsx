import {
  Section,
  WhiteParagraph,
  Form,
  StyledDiv,
  SubtitleWhite,
} from "./styled";
import Caption from "ui/Caption";
import Input from "ui/Input";
import { useTranslation } from "hooks";
import Button from "ui/Button";
import { fire, uploadTestimonial } from "lib";
import { useRouter } from "next/router";

function TestimonialForm() {
  const locale = useTranslation();
  const router = useRouter();

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
      const testimonialSended = await uploadTestimonial(value);
      if (testimonialSended.status == 200) {
        await fire("¡Muchas gracias por tu feedback!", "success");
        router.push("/", "/", { locale });
      }
      if (testimonialSended.status != 200)
        fire("Ouch, algo salió mal. Intentá de nuevo más tarde.", "error");
    }
  };
  return (
    <Section>
      <StyledDiv>
        <SubtitleWhite>
          {locale == "en"
            ? "Thank you for your support"
            : "Gracias por tu apoyo"}
        </SubtitleWhite>
        <WhiteParagraph weight={false}>
          {locale == "en"
            ? "Thank you for leaving your comments about my work. It really helps me a lot to keep growing day by day. I also invite you to leave a comment or recommendation on my linkedin profile if you like it. Thank you very much!"
            : "Gracias por dejar tus comentarios sobre mi trabajo. Realmente me ayuda mucho a seguir creciendo día a día. Te invito también a dejarme un comentario o recomendación en mi perfil de linkedin si es de tu agrado. Muchas gracias!"}
        </WhiteParagraph>
      </StyledDiv>
      <Form onSubmit={handleSubmit}>
        <Caption primary={true}>
          {locale == "en" ? "Give your feedback." : "Da tu opinión."}
        </Caption>
        <Input
          type='text'
          placeholder={locale == "en" ? "Name" : "Nombre"}
          name='name'
        />
        <Input
          type='text'
          placeholder='Linkedin'
          name='linkedin'
          defaultValue='https://linkedin.com/in/'
        />
        <Input
          type='textarea'
          placeholder={locale == "en" ? "Comments" : "Comentarios"}
          name='comments'
        />
        <Button>Enviar</Button>
      </Form>
    </Section>
  );
}

export { TestimonialForm };
