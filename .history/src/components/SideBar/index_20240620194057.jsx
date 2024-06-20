import { SideBarContainer, SidebarLista } from "./styles";
import { ItemLista } from "./ItemLista";

export function SideBar() {
  return (
    <SideBarContainer>
      <nav>
        <SidebarLista>
          <a href>
            <ItemLista
              iconeAtivo="/icones/home-ativo.png"
              iconeInativo="/icones/home-inativo.png"
              ativo={true}
            >
              Início
            </ItemLista>
          </a>
          <ItemLista
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemLista>
          <ItemLista
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemLista>
          <ItemLista
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
          >
            Novas
          </ItemLista>
          <ItemLista
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemLista>
        </SidebarLista>
      </nav>
    </SideBarContainer>
  );
}
