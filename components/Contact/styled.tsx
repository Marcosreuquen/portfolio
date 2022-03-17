import styled from "styled-components";
export const Section = styled.section`
  padding: 5%;
  min-height: 80vh;
  background-color: var(--strong-black);
`;
export const Grid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
