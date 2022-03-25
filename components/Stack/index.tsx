import { useTranslation } from "hooks";
import Caption from "ui/Caption";
import {
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GithubIcon,
  GitIcon,
  HerokuIcon,
  HtmlIcon,
  JavascriptIcon,
  LinuxIcon,
  NextIcon,
  NodeIcon,
  NpmIcon,
  PostgreSqlIcon,
  ReactIcon,
  SequelizeIcon,
  TypescriptIcon,
  WebpackIcon,
  YarnIcon,
} from "ui/icons";
import Subtitle from "ui/Subtitle";
import TechCard from "ui/TechCard";
import { Section, Grid } from "./styled";

const Stack = () => {
  const locale = useTranslation();
  return (
    <Section id='technologies'>
      <div>
        <Caption primary={true}>BACKGROUND</Caption>
        <Subtitle>
          {locale == "en"
            ? "I work with this technologies"
            : "Trabajo con estas tecnologías"}
        </Subtitle>
      </div>
      <Grid>
        <TechCard name='Typescript'>
          <TypescriptIcon />
        </TechCard>

        <TechCard name='Node'>
          <NodeIcon />
        </TechCard>

        <TechCard name='Javascript'>
          <JavascriptIcon />
        </TechCard>

        <TechCard name='React'>
          <ReactIcon />
        </TechCard>

        <TechCard name='Html5'>
          <HtmlIcon />
        </TechCard>

        <TechCard name='CSS3'>
          <CssIcon />
        </TechCard>

        <TechCard name='Express.js'>
          <ExpressIcon />
        </TechCard>
        <TechCard name='Next'>
          <NextIcon />
        </TechCard>
        <TechCard name='Git'>
          <GitIcon />
        </TechCard>
        <TechCard name='Github'>
          <GithubIcon large />
        </TechCard>
        <TechCard name='Firebase'>
          <FirebaseIcon />
        </TechCard>
        <TechCard name='Heroku'>
          <HerokuIcon />
        </TechCard>
        <TechCard name='Postgres'>
          <PostgreSqlIcon />
        </TechCard>
        <TechCard name='Sequelize'>
          <SequelizeIcon />
        </TechCard>
        <TechCard name='Webpack'>
          <WebpackIcon />
        </TechCard>
      </Grid>
    </Section>
  );
};

export default Stack;
