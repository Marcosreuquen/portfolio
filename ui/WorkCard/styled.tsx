import styled, { css } from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  width: 380px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.05);
    box-shadow: rgb(0 0 / 80%) 0px 40px 58px -16px;
    border-color: rgba(249, 249, 249, 0.8);
    transition: 1s;
  }
  &:hover > div::before {
    transform: translatex(-360px);
    opacity: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Content = styled.div`
  display: flex;
  padding: 4px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  background: var(--soft-grey);
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: ${(props: { img: string }) => `url(${props.img}) black`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 1s;
  }
`;
