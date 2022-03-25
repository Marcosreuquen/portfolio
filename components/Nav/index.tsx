import { StyledNav, Item } from "./styled";
import Burger from "ui/Burger";
import { useRouter } from "next/router";
import { TerminalIcon } from "ui/icons";

const Nav = ({ ListItem }: any) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/#home");
  };
  return (
    <StyledNav>
      <Item onClick={handleLogoClick}>
        <TerminalIcon />
        <span>Marcos Reuquén</span>
      </Item>
      <Item>
        <Burger ListItem={ListItem} />
        <span>Menu</span>
      </Item>
    </StyledNav>
  );
};

export default Nav;
