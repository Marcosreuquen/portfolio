import styled, { css } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 380px;
  width: 400px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    transform: rotateY(180deg);
    transition: 1s;
  }
  &:hover > .content {
    display: flex;
    transition: 0.5s;
    transition-delay: 0.51s;
  }
  &:hover > .image {
    display: none;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  transition: 1s;
  object-fit: cover;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Content = styled.div`
  padding: 4px 10px;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  background: var(--soft-grey);
  transform: rotateY(180deg);
  transition: 1s;
`;
