import { BotaoIcone } from "../BotaoIcone/index.js";
import { Imagem } from "../Gallery/Imagem";

import { Overlay, DialogEstilizado } from "./styles.js";

export function ModalZoom({ foto, aoFechar, aoAlternarFavorito }) {
  let iconeFavorito = "/icones/favorito.png";
  if (foto.favorita) {
    iconeFavorito = "/icones/favorito-ativo.png";
  }

  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} />
            <form method="dialog">
              <BotaoIcone
                formMethod="dialog"
                onClick={() => aoAlternarFavorito(foto)}
              >
                <img src={iconeFavorito} alt="Icone de favorito" />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
}
