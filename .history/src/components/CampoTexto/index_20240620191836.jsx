import { ContainerEstilizado, IconeLupa, CampoTextoEstilizado} from './styles'
import search from './search.png'

export function CampoTexto(props) {
  return (
    <ContainerEstilizado>
        <CampoTextoEstilizado {...props} />
        <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
)
}