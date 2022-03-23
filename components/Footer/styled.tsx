import styled from "styled-components";

export const Container = styled.footer`
  height: 163px;
  background-color: var(--strong-black);
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: unset;
  justify-content: unset;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }
`;

export const Name = styled.p`
  color: var(--primary);
  font-weight: bold;
  font-family: var(--font-body);
`;
