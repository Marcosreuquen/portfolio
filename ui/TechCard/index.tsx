import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--strong-white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
const Image = styled.img`
  height: 128px;
  width: 128px;
  filter: grayscale(100%);
  opacity: 0.8;
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transition: 1s;
  }
`;

const TechCard = (props: { img: string; name: string }) => {
  return (
    <Card>
      <Image src={props.img} alt={props.name} />
    </Card>
  );
};

export default TechCard;
