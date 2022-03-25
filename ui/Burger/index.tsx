import { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { CrossIcon, MenuIcon } from "ui/icons";
import SelectLocale from "ui/SelectLocale";

const Burger = ({ ListItem }: any) => {
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
      customBurgerIcon={<MenuIcon />}
      customCrossIcon={<CrossIcon />}
      noOverlay>
      <ListItem onClick={handleClickOnSection} />
      <SelectLocale />
    </Menu>
  );
};

export default Burger;
