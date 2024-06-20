import search from './search.png'

export function CampoTexto() {
  return (
    <ContainerEstilizado>
        <CampoTextoEstilizado {...props} />
        <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
)
}