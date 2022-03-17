import Caption from "ui/Caption";
import Title from "ui/Title";
import { Container, StyledHeader, Div } from "./styled";

const Header = () => {
  return (
    <Container id='home'>
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
