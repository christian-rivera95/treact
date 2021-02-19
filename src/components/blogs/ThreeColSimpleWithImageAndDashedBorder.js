import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading as HeadingTitle,
  Subheading,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  heading = (
    <>
      Artículos de <span tw="text-primary-500">Interés.</span>
    </>
  ),
  description = "Algunas publicaciones de blog increíbles escritas por personas aún más increíbles.",
}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "Orientación Universitarias",
      authorUrl: "https://orientacion.universia.net.co/index.html",
      category: "Tips y consejos",
      title: "Consejos prácticos para mejorar tu perfil profesional",
      description:
        "El perfil es un espacio en el que describes tus habilidades y las tareas que estás en capacidad de asumir y liderar en una organización, además de tu formación académica, trayectoria y logros obtenidos en tus anteriores cargos.",
      url:
        "https://orientacion.universia.net.co/infodetail/orientacion/consejos/consejos-practicos-para-mejorar-tu-perfil-profesional--3976.html",
    },
    {
      imageSrc:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e33ab078b6cf300071d7cd7%2F0x0.jpg",
      author: "Rodrigo Ricardo",
      authorUrl: "/",
      category: "Informativo",
      title: "Las habilidades profesionales más valiosas de 2021 / 2024",
      description:
        "El mercado laboral está en constante evolución y, a medida que algunas profesiones pierden popularidad, otras obtienen una ventaja.",
      url:
        "https://exonegocios.com/las-habilidades-profesionales-mas-valiosas-de-2021-2024/",
    },
    {
      imageSrc:
        "https://destinonegocio.com/wp-content/uploads/2015/07/ico-destinonegocio-coaching-profesional-istock-getty-images-849x430.jpg",
      author: "Destinonegocio",
      authorUrl: "https://destinonegocio.com/pe/",
      category: "Gestión",
      title: "Entiende por qué es importante buscar coaching profesional",
      description:
        "Explore sus capacidades de alcanzar resultados positivos en el ámbito profesional.",
      url:
        "https://destinonegocio.com/pe/gestion-pe/entiende-por-que-es-importante-buscar-coaching-profesional/",
    },
  ];
  return (
    <div id="Blog">
      <Container>
        <Content>
          <HeadingInfoContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <HeadingTitle>{heading}</HeadingTitle>
            <HeadingDescription>{description}</HeadingDescription>
          </HeadingInfoContainer>
          <ThreeColumn>
            {blogPosts.map((post, index) => (
              <Column key={index}>
                <Card>
                  <Image imageSrc={post.imageSrc} />
                  <Details>
                    <MetaContainer>
                      <Meta>
                        <UserIcon />

                        <div>
                          <a href={post.authorUrl}>{post.author}</a>
                        </div>
                      </Meta>
                      <Meta>
                        <TagIcon />
                        <div>{post.category}</div>
                      </Meta>
                    </MetaContainer>
                    <Title>{post.title}</Title>
                    <Description>{post.description}</Description>
                    <Link href={post.url}>Leer Artículo</Link>
                  </Details>
                </Card>
              </Column>
            ))}
          </ThreeColumn>
        </Content>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
    </div>
  );
};
