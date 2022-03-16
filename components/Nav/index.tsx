import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 20;
  background: rgb(2, 0, 38);
  background: -moz-linear-gradient(
    172deg,
    rgba(2, 0, 38, 0.3) 0%,
    rgba(108, 92, 204, 0.1) 50%,
    rgba(5, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    172deg,
    rgba(2, 0, 38, 0.3) 0%,
    rgba(108, 92, 204, 0.1) 50%,
    rgba(5, 0, 0, 0) 100%
  );
  background: linear-gradient(
    172deg,
    rgba(2, 0, 38, 0.3) 0%,
    rgba(108, 92, 204, 0.1) 50%,
    rgba(5, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020026",endColorstr="#050000",GradientType=1);
`;

const Item = styled.span`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: var(--strong-white);
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
`;

const Image = styled.img`
  height: 25px;
  width: 25px;
`;

const Nav = () => {
  return (
    <StyledNav>
      <Item>
        {/* <Image src='/terminal.svg' alt='logo' /> */}
        <span>Marcos Reuquén</span>
      </Item>
      <Item>
        {/* <Image src='/menu.svg' alt='logo' /> */}
        <span>Menu</span>
      </Item>
    </StyledNav>
  );
};

export default Nav;
