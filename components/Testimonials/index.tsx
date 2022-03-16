import { useTestimonials } from "hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Paragraph from "ui/Paragraph";
import PersonCard from "ui/PersonCard";

const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 40vh;
  background-color: var(--soft-grey);
  @media (max-width: 769px) {
    display: flex;
    height: 40vh;
    flex-direction: column-reverse;
  } ;
`;

const Quote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const Buttons = styled.div`
  background-color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  height: 40vh;
`;
const LeftButton = styled.img`
  cursor: pointer;
  filter: drop-shadow(2px 3px 2px var(--primary));
  position: absolute;
  top: 44%;
  left: 4px;
  padding: 4px;
  &:hover {
    filter: drop-shadow(2px 3px 2px var(--black));
    transition: 1s;
  }
`;
const RightButton = styled.img`
  cursor: pointer;
  filter: drop-shadow(2px 3px 2px var(--primary));
  position: absolute;
  top: 44%;
  right: 4px;
  &:hover {
    filter: drop-shadow(2px 3px 2px var(--black));
    transition: 1s;
  }
`;
const Testimonials = () => {
  const testimonials = useTestimonials();
  const [index, setIndex] = useState(0);
  const [client, setClient] = useState(testimonials[index] || {});

  useEffect(() => {
    setClient(testimonials[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handlePrev = () => {
    if (index - 1 <= 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = (e: any) => {
    if (index + 1 >= testimonials.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <Buttons>
        <LeftButton
          src='/swip_left.svg'
          alt='previous client'
          onClick={handlePrev}
        />
        <RightButton
          src='/swip_right.svg'
          alt='previous client'
          onClick={handleNext}
        />
      </Buttons>
      <Section>
        <Quote>
          <Paragraph weight='italic'>{client?.quote}</Paragraph>
        </Quote>
        <PersonCard img={client?.img}>{client?.name}</PersonCard>
      </Section>
    </>
  );
};

export default Testimonials;
