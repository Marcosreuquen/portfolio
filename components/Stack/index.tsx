import styled from "styled-components";
import Caption from "ui/Caption";
import Subtitle from "ui/Subtitle";
import TechCard from "ui/TechCard";

const Grid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  grid-auto-flow: dense;
  gap: 1px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 40px 0;
`;
const Section = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Stack = () => {
  return (
    <Section>
      <div>
        <Caption primary={true}>BACKGROUND</Caption>
        <Subtitle>I work with this technologies</Subtitle>
      </div>
      <Grid>
        <TechCard img='/Typescript.svg' name='Typescript' />
        <TechCard img='/Node.svg' name='Node' />
        <TechCard img='/React.svg' name='React' />
        <TechCard img='/Next.svg' name='Next' />
        <TechCard img='/Git.svg' name='Git' />
        <TechCard img='/Github.svg' name='Github' />
        <TechCard img='/Firebase.svg' name='Firebase' />
        <TechCard img='/Postgres.svg' name='Postgres' />
      </Grid>
    </Section>
  );
};

export default Stack;
