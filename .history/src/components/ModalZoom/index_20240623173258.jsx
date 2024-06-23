import { Imagem } from "../Gallery/Imagem";
import {BotaoIcone } from '../../BotaoIcone';

import { OverLay,DialogEstilizado } from './styles.js'

export function ModalZoom({foto, aoFechar }) {  
  return (
    <>
       {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <BotaoIcon formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
    </>
  );
}
