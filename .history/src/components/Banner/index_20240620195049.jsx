import { styled } from "styled-components";

export function Banner(props) {
  return (
    <FigureEstilizada $backgroundImage={props.backgroundImage}>
      <TituloEstilizado>{props.texto}</TituloEstilizado>
    </FigureEstilizada>
  );
}

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;
