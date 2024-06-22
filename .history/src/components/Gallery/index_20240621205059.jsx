import { Titulo } from "../Titulo";
import { SectionPopulares } from "./SectionPopulares";
import { Tags } from "./Tags";
import { GaleriaContainer, SectionMain } from "./styles";

export function Gallery() {
  return (
    <div>
      <Tags />

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto} />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </div>
  );
}
