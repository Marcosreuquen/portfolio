import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 9px 24px;
  width: 105px;
  height: 42px;
  background-color: var(--primary);
  border-radius: 30px;
  color: var(--strong-white);
  font-family: var(--font-body);
  border: none;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    background-color: #6c5ccc99;
  }
`;
