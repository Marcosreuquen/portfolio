import styled from "styled-components";

export const Grid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  grid-auto-flow: dense;
  gap: 1px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 40px 0;
`;
export const Section = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
