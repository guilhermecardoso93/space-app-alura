import Logo from '../../assets/images/logo.png';
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt='Logo' />
    </HeaderContainer>
  )
}