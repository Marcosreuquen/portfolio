import styled from "styled-components";

export const StyledNav = styled.nav`
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
  background: rgba(0, 0, 0, 0.5);
`;

export const Item = styled.span`
  cursor: pointer;
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
  & > svg {
    height: 25px;
    width: 25px;
  }
`;
