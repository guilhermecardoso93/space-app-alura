import { BotaoIcone } from "../BotaoIcone/index.js";
import { Imagem } from "../Gallery/Imagem";

import { Overlay, DialogEstilizado } from "./styles.js";

export function ModalZoom({  foto, aoFechar, aoAlternarFavorito }) {

  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <BotaoIcone formMethod="dialog">
                <img src="/icones/fechar.png" alt="Icone de fechar" />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
}
