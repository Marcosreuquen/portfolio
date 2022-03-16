import styled, { css } from "styled-components";
import styles from "styles/Header.module.css";
import Caption from "ui/Caption";
import Title from "ui/Title";
import Typed from "react-typed";

const StyledHeader = styled.header`
  height: 100vh;
  background-image: url(/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const Div = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: fit-content;
  position: relative;
  top: 20%;
  left: 10%;
  margin: 0;
  /* weight: 100%; */
`;

const Container = styled.div`
  min-height: 100vh;
`;
const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Div>
          <Caption primary={false}>MARCOS REUQUEN</Caption>
          <Title first='Fullstack' second='Developer'></Title>
        </Div>
      </StyledHeader>
    </Container>
  );
};

export default Header;
