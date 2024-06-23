import { Titulo } from "../Titulo";
import { Imagem } from "./Imagem";
import { SectionPopulares } from "./SectionPopulares";
import { Tags } from "./Tags";

import { GaleriaContainer, SecaoFluida, ImagensContainer } from "./styles";

export function Gallery({ fotos = [], aoFotoSelecionada }) {
  return (
    <div>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto} aoZoomSolicitado={aoFotoSelecionada}/>
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <SectionPopulares />
      </GaleriaContainer>
    </div>
  );
}
