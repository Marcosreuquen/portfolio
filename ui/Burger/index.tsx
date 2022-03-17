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
  return (
    <Menu
      right
      width={"160px"}
      customBurgerIcon={<img src='/menu.svg' />}
      noOverlay>
      <MenuItem href='#home'>Home</MenuItem>
      <MenuItem href='#about'>About</MenuItem>
      <MenuItem href='#services'>Services</MenuItem>
      <MenuItem href='#projects'>Projects</MenuItem>
      <MenuItem href='#testimonials'>Testimonials</MenuItem>
      <MenuItem href='#technologies'>Technologies</MenuItem>
      <MenuItem href='#contact'>Contact</MenuItem>
      <MenuItem href='#socials'>Socials</MenuItem>
    </Menu>
  );
};

export default Burger;
