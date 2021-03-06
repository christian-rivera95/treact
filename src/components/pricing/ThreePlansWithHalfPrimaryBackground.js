import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl as ContentBase,
} from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "images/checkbox-circle.svg";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 px-8`;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-gray-300 text-center`;

const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;
const Plan = styled.div`
  ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised`}
`;

const PlanHeader = styled.div`
  .nameAndFeaturedContainer {
    ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
  }
  .name {
    ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
  }
  .featuredText {
    ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
  }
  .pricingContainer {
    ${tw`mt-6 flex items-end justify-between`}
    .currentPrice {
      ${tw`text-lg font-bold leading-none`}
      .bigText {
        ${tw`text-3xl font-bold`}
      }
    }
    .oldPrice {
      ${tw`text-gray-500 text-lg line-through hidden sm:block`}
    }
  }
  .description {
    ${tw`mt-8 font-medium text-gray-700 lg:text-sm xl:text-base`}
  }
`;
const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
    }
  }
`;

const WhiteBackgroundOverlay = tw.div`absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 bg-white z-0`;

export default ({
  subheading = "",
  heading = "Precios asequibles",
  description = "",
  plans = null,
  primaryButtonText = "Create Server",
}) => {
  const defaultPlans = [
    {
      name: "Capacitación para Entrevista",
      price: ["$39", ".99/month"],
      oldPrice: "$69.99",
      description:
        "Perfecto para desarrollar confianza en tus futuras entrevistas.",
      features: [
        "Manejo de preguntas difíciles.",
        "Asesoría profesional del currículum vitae.",
        "Desarrollo personal de habilidades y capacidades comunicativas.",
        "1 Sesión personalizada de 1 hora.",
      ],
      url: "https://google.com",
    },
    {
      name: "Coaching Profesional",
      price: ["$39", ".99/month"],
      oldPrice: "$69.99",
      description:
        "El profesional de coaching busca analizar a dónde quiere llegar el cliente y lo orienta para recorrer este camino",
      features: [
        "Fortalecer las características clave de un  líder.",
        "Aumentar el rendimiento personal y la capacidad de trabajo en equipo.",
        "Coaching tipo láser sobre temas específicos.",
        "Análisis personalizado a través de encuestas 360 y psicométricas.",
        "1 Sesión personalizada de 1 hora.",
      ],
      url: "https://google.com",
    },
    {
      name: "Cotización de Proyectos",
      price: ["$39", ".99/month"],
      oldPrice: "$69.99",
      description:
        "Te ayudamos a definir la estructura y elaboración de un proyecto pagado por hora",
      features: [
        "Organización de cifras monetarias.",
        "Soporte de lo acordado en acuerdos comerciales.",
        "Soporte para concretar negociación para cierre de la misma.",
        "Esquema de negociación de descuentos.",
        "1 Sesión personalizada de 1 hora.",
      ],
      url: "https://google.com",
      featured: "Most Popular",
    },
    {
      name: "Premium",
      price: ["$119", ".99/month"],
      oldPrice: "$139.99",
      description: "Aprovecha todos los beneficios simultáneamente",
      features: [
        "Asesoría para entrevistas, cotización de proyecto y coaching profesional.",
        "Definición de personalidad y manejo de presión.",
        "Coaching intensivo.",
        "Poder de Negociación.",
        "4 Sesiones personalizadas de 1 hora.",
      ],
      url: "https://google.com",
    },
  ];

  if (!plans) plans = defaultPlans;

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                <span className="nameAndFeaturedContainer">
                  <span className="name">{plan.name}</span>
                  {plan.featured && (
                    <span className="featuredText">{plan.featured}</span>
                  )}
                </span>
                <div className="pricingContainer">
                  <span className="currentPrice">
                    <span className="bigText">{plan.price[0]}</span>
                    {plan.price[1]}{" "}
                  </span>
                  {plan.oldPrice && (
                    <span className="oldPrice">{plan.oldPrice}</span>
                  )}
                </div>
                <p className="description">{plan.description}</p>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <li className="feature" key={index}>
                    <CheckboxIcon className="icon" />
                    <span className="text">{feature}</span>
                  </li>
                ))}
              </PlanFeatures>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
      <WhiteBackgroundOverlay />
    </Container>
  );
};
