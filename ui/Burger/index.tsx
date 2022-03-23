import { useTranslation } from "hooks";
import { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import styled from "styled-components";
import SelectLocale from "ui/SelectLocale";

const MenuItem = styled.a`
  color: var(--soft-grey);
  &:hover {
    color: var(--primary);
    transition: 1s;
  }
`;

const Burger = () => {
  const locale = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOnSection = (e: any) => {
    setMenuOpen(false);
  };
  return (
    <Menu
      disableOverlayClick
      isOpen={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => setMenuOpen(false)}
      right
      width={"160px"}
      customBurgerIcon={<img src='/menu.svg' />}
      customCrossIcon={<img src='/cross.svg' />}
      noOverlay>
      <MenuItem onClick={handleClickOnSection} href={"#home"}>
        Home
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#about'>
        {locale == "en" ? "About me" : "Sobre mi"}
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#services'>
        {locale == "en" ? "Services" : "Servicios"}
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#projects'>
        {locale == "en" ? "Projects" : "Proyectos"}
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#testimonials'>
        {locale == "en" ? "Testimonials" : "Opiniones"}
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#technologies'>
        {locale == "en" ? "Technologies" : "Tecnologías"}
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#contact'>
        {locale == "en" ? "Contact" : "Contacto"}
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#socials'>
        {locale == "en" ? "Socials" : "Sociales"}
      </MenuItem>
      <SelectLocale />
    </Menu>
  );
};

export default Burger;
