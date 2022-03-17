import styled from "styled-components";
export const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 40vh;
  background-color: var(--soft-grey);
  @media (max-width: 769px) {
    display: flex;
    height: 40vh;
    flex-direction: column-reverse;
  } ;
`;

export const Quote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

export const Buttons = styled.div`
  background-color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  height: 40vh;
  z-index: 10;
`;
export const LeftButton = styled.img`
  cursor: pointer;
  filter: drop-shadow(2px 3px 2px var(--primary));
  position: absolute;
  top: 44%;
  left: 4px;
  padding: 4px;
  &:hover {
    filter: drop-shadow(2px 3px 2px var(--black));
    transition: 1s;
  }
`;
export const RightButton = styled.img`
  cursor: pointer;
  filter: drop-shadow(2px 3px 2px var(--primary));
  position: absolute;
  top: 44%;
  right: 4px;
  &:hover {
    filter: drop-shadow(2px 3px 2px var(--black));
    transition: 1s;
  }
`;
