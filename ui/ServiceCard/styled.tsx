import styled, { css } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 340px;
  height: 400px;
  background: #f9f9f9;
  justify-content: space-evenly;
  border-radius: 8px;
  box-shadow: 0px 5px 14px rgba(186, 186, 186, 0.15);
  &:hover {
    transition: 1s;
    transform: scale(1.05);
    box-shadow: 0px 5px 14px rgba(186, 186, 186, 0.35);
  }
`;

export const Image = styled.img`
  height: 40%;
  width: 100%;
`;
