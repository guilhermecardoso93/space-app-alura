import { useState } from "react";

export function ModalZoom(props) {
  return (
    <>
      <dialog open={!!props.foto}>
        <p>Exemplo do Mozilla</p>
        <form method="dialog">
          <button type="submit">ok</button>
        </form>
      </dialog>
    </>
  );
}
