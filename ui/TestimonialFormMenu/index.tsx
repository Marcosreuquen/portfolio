import { MenuItem } from "ui/mainMenu";
import { useTranslation } from "hooks";

const TestimonialFormMenu = (props: any) => {
  const locale = useTranslation();
  return (
    <>
      <MenuItem {...props} href={"/"}>
        Home
      </MenuItem>
      <MenuItem {...props} href='/#contact'>
        {locale == "en" ? "Contact" : "Contacto"}
      </MenuItem>
    </>
  );
};

export default TestimonialFormMenu;
