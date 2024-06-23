import { useState } from "react";

export function ModalZoom({foto}) {
  return (
    <>
      <dialog open={foto}>
        <p>Exemplo do Mozilla</p>
        <form method="dialog">
          <button type="submit">ok</button>
        </form>
      </dialog>
    </>
  );
}
