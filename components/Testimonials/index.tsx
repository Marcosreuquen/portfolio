import { useTestimonials } from "hooks";
import { useEffect, useState } from "react";
import Paragraph from "ui/Paragraph";
import PersonCard from "ui/PersonCard";
import { Buttons, LeftButton, RightButton, Quote, Section } from "./styled";
const Flip = require("react-reveal/Flip");

const Testimonials = () => {
  const testimonials = useTestimonials() || [];
  const [index, setIndex] = useState(0);
  const [client, setClient] = useState(testimonials[index] || {});
  const [change, setChange] = useState(true);

  useEffect(() => {
    console.log(testimonials);
    setTimeout(() => {
      setIndex(1);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setChange(true);
    setClient(testimonials[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handlePrev = () => {
    setChange(false);
    if (index - 1 <= 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    setChange(false);
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
      <Section id='testimonials'>
        <Flip right when={change}>
          <Quote>
            <Paragraph weight='italic'>{client?.quote}</Paragraph>
          </Quote>
          <PersonCard img={client?.img}>{client?.name}</PersonCard>
        </Flip>
      </Section>
    </>
  );
};

export default Testimonials;
