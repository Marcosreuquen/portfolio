import { StyledNav, Item, Image } from "./styled";
import Burger from "ui/Burger";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/#home");
  };
  return (
    <StyledNav>
      <Item onClick={handleLogoClick}>
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
