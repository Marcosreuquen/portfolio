import styled, { css } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  height: 380px;
  background: #f9f9f9;
  gap: 6px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  box-shadow: 0px 5px 14px rgba(186, 186, 186, 0.15);
  &:hover {
    transition: 1s;
    transform: scale(1.05);
    box-shadow: 0px 5px 14px rgba(186, 186, 186, 0.35);
  }
`;
