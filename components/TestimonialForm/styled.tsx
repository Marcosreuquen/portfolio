import styled, { css } from "styled-components";
import { StyledP } from "ui/Paragraph/styled";
import { StyledForm } from "components/Form/styled";
import { First } from "ui/Subtitle/styled";

export const Section = styled.section`
  min-height: 90vh;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  padding: 100px 10px;
  gap: 20px;
  align-items: center;
`;

export const StyledDiv = styled.div`
  max-width: 465px;
`;

export const WhiteParagraph = styled(StyledP)`
  color: var(--soft-grey);
`;

export const Form = styled(StyledForm)`
  width: 100%;
`;

export const SubtitleWhite = styled(First)`
  color: var(--strong-white);
`;
