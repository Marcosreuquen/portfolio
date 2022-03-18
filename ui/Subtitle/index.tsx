import { First } from "./styled";
const Slide = require("react-reveal/Slide");
const Subtitle = (props: { children: string }) => {
  return (
    <Slide bottom>
      <First>{props.children}</First>
    </Slide>
  );
};

export default Subtitle;
