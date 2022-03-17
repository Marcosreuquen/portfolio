import Caption from "ui/Caption";
import Subtitle from "ui/Subtitle";
import TechCard from "ui/TechCard";
import { Section, Grid } from "./styled";

const Stack = () => {
  return (
    <Section id='technologies'>
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
