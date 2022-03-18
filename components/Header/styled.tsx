import styled, { css } from "styled-components";
export const StyledHeader = styled.header`
  height: 100vh;
  background-image: url(/bg-opt.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

export const Div = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: fit-content;
  position: relative;
  top: 20%;
  left: 10%;
  margin: 0;
`;

export const Container = styled.div`
  min-height: 100vh;
`;
