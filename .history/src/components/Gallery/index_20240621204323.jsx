import { Titulo } from "../Titulo";
import { SectionPopulares } from "./SectionPopulares";
import { Tags } from "./Tags";

export function Gallery() {
  return (
    <div>
      
      <Tags />

      <GaleriaContainer>
        <SectionMain>
        <Titulo>Navegue pela Galeria</Titulo>
        </SectionMain>
        <SectionPopulares>

        </SectionPopulares>

      </GaleriaContainer>
    </div>
  )
}