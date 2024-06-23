import { Titulo } from "../../Titulo";
import { Botao, ColunaFotos, Imagem } from "./styles";

import fotos from './fotos-populares.json'

export function SectionPopulares() {
  return (
    <div style={{ minWidth: 212 }}>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </div>
  );
}
