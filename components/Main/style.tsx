import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  background-color: var(--soft-grey);
  min-height: 100vh;
  padding: 5%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 0.3fr 1fr;
  grid-template-areas:
    "titles about"
    "services services";
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.15fr 0.15fr 1fr;
    grid-template-areas:
      "titles"
      "about"
      "services";
  }
`;

export const TitlesContainer = styled.article`
  grid-area: titles;
  width: 80%;
`;

export const AboutMeContainer = styled.aside`
  grid-area: about;
  width: 80%;
`;

export const ServicesContainer = styled.section`
  grid-area: services;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;
