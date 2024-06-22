import { Titulo } from "../Titulo";
import { SectionPopularesDiv } from "./SectionPopulares";
import { Tags } from "./Tags";
import { GaleriaContainer } from "./styles";

export function Gallery() {
  return (
    <div>
      
      <Tags />

      <GaleriaContainer>
        <SectionMain>
        <Titulo>Navegue pela Galeria</Titulo>
        </SectionMain>
        <SectionPopularesDiv>

        </SectionPopularesDiv>

      </GaleriaContainer>
    </div>
  )
}