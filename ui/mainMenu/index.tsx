import { useTranslation } from "hooks";
import styled from "styled-components";

export const MenuItem = styled.a`
  color: var(--soft-grey);
  &:hover {
    color: var(--primary);
    transition: 1s;
  }
`;

const MainMenu = (props: any) => {
  const locale = useTranslation();
  return (
    <>
      <MenuItem {...props} href={"#home"}>
        Home
      </MenuItem>
      <MenuItem {...props} href='#about'>
        {locale == "en" ? "About me" : "Sobre mi"}
      </MenuItem>
      <MenuItem {...props} href='#services'>
        {locale == "en" ? "Services" : "Servicios"}
      </MenuItem>
      <MenuItem {...props} href='#projects'>
        {locale == "en" ? "Projects" : "Proyectos"}
      </MenuItem>
      {/* <MenuItem {...props} href='#testimonials'>
        {locale == "en" ? "Testimonials" : "Opiniones"}
      </MenuItem> */}
      <MenuItem {...props} href='#technologies'>
        {locale == "en" ? "Technologies" : "Tecnologías"}
      </MenuItem>
      <MenuItem {...props} href='#contact'>
        {locale == "en" ? "Contact" : "Contacto"}
      </MenuItem>
      <MenuItem {...props} href='#socials'>
        {locale == "en" ? "Socials" : "Sociales"}
      </MenuItem>
    </>
  );
};

export default MainMenu;
