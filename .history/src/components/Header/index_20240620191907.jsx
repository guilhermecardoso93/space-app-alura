import { CampoTexto } from "../CampoTexto";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="/imagens/logo.png" alt="Logo" />
      <CampoTexto />
    </HeaderContainer>
  );
}
