import { StyledNav, Item, Image } from "./styled";
import Burger from "ui/Burger";

const Nav = () => {
  return (
    <StyledNav>
      <Item>
        <Image src='/terminal.svg' alt='logo' />
        <span>Marcos Reuquén</span>
      </Item>
      <Item>
        <Burger />
        <span>Menu</span>
      </Item>
    </StyledNav>
  );
};

export default Nav;
