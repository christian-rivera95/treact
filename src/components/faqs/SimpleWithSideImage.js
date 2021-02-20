import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`,
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion.custom(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

export default ({
  subheading = "",
  heading = "Questions",
  description = "Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null,
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question:
        "¿Qué beneficios me trae el coaching profesional y empresarial?",
      answer: (
        <p>
          1) Potencia el talento individual.
          <br />
          2) Incrementa la creatividad.
          <br />
          3) Reduce estados de estrés y ansiedad laboral.
          <br />
          4) Aumenta la productividad.
          <br />
          5) Favorece el trabajo en equipo.
        </p>
      ),
    },
    {
      question:
        "¿Qué función desempeña la capacitación para entrevista profesional?",
      answer: (
        <p>
          1) Te prepara para ser parte de un proceso de selección laboral.
          <br />
          2) Conocerás todos los elementos que debes practicar y pulir para
          participar en una entrevista de trabajo.
          <br />
          3) Establecerás tu perfil profesional a futuro para tener mayor
          seguridad al ser entrevistado.
          <br />
          4) Identificarás las cosas que debes hacer, y lo que no debes hacer en
          una entrevista ya sea presencial, videollamada o telefónica.
        </p>
      ),
    },
    {
      question: "¿Qué es necesaria una valoración de puesto empresarial?",
      answer:
        "Parte de la base de una empresa es que cada puesto de trabajo tiene su valor individual. Para remunerar con equidad al ocupante de un puesto de trabajo, se requiere conocer el valor de ese puesto con relación a los demás. Por ende,  la valoración de puestos es fundamental pues es un proceso que analiza y compara el contenido de los puestos de trabajo, para organizar un sistema de remuneración óptimo.",
    },
    {
      question:
        "¿Para qué nos sirve el análisis de la gestión de compensación?",
      answer: (
        <p>
          1) Mantener a la empresa competitiva en el mercado laboral.
          <br />
          2) Motivar el desempeño futuro de los empleados.
          <br />
          3) Recompensar el desempeño de los colaboradores para su propia
          satisfacción y la de la organización.
        </p>
      ),
    },
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <div id="FAQs">
      <Container>
        <Content>
          <TwoColumn>
            <Column tw="hidden lg:block w-5/12 flex-shrink-0">
              <Image
                imageContain={imageContain}
                imageShadow={imageShadow}
                imageSrc={imageSrc}
              />
            </Column>
            <Column>
              <FAQContent>
                {subheading ? <Subheading>{subheading}</Subheading> : null}
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <FAQSContainer>
                  {faqs.map((faq, index) => (
                    <FAQ
                      key={index}
                      onClick={() => {
                        toggleQuestion(index);
                      }}
                      className="group"
                    >
                      <Question>
                        <QuestionText>{faq.question}</QuestionText>
                        <QuestionToggleIcon>
                          {activeQuestionIndex === index ? (
                            <MinusIcon />
                          ) : (
                            <PlusIcon />
                          )}
                        </QuestionToggleIcon>
                      </Question>
                      <Answer
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                          },
                          collapsed: {
                            opacity: 0,
                            height: 0,
                            marginTop: "0px",
                          },
                        }}
                        initial="collapsed"
                        animate={
                          activeQuestionIndex === index ? "open" : "collapsed"
                        }
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        {faq.answer}
                      </Answer>
                    </FAQ>
                  ))}
                </FAQSContainer>
              </FAQContent>
            </Column>
          </TwoColumn>
        </Content>
      </Container>
    </div>
  );
};
