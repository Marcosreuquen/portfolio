import { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import styled from "styled-components";

const MenuItem = styled.a`
  color: var(--soft-grey);
  &::after {
    content: "";
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    opacity: 0;
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scaleX(0);
  }
  &:hover::after {
    /* transform: scaleX(1); */
    opacity: 1;
  }
`;

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOnSection = () => {
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
      <MenuItem onClick={handleClickOnSection} href='#home'>
        Home
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#about'>
        About
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#services'>
        Services
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#projects'>
        Projects
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#testimonials'>
        Testimonials
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#technologies'>
        Technologies
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#contact'>
        Contact
      </MenuItem>
      <MenuItem onClick={handleClickOnSection} href='#socials'>
        Socials
      </MenuItem>
    </Menu>
  );
};

export default Burger;
