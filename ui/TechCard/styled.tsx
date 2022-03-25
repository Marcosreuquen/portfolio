import styled from "styled-components";

export const Card = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--strong-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 20px;
  &::after {
    content: "${({ name }: { name: string }) => name}";
    font-weight: 400;
    font-family: var(--font-body);
    text-align: center;
    opacity: 0;
  }
  &:hover::after {
    transition: 1s;
    opacity: 0.6;
  }
  & > svg {
    height: 128px;
    width: 128px;
    filter: grayscale(100%);
    opacity: 0.8;
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
      transition: 1s;
    }
  }
`;
