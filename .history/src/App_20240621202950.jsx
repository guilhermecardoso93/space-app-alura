import { Banner } from "./components/Banner";
import { EstilosGlobais } from "./components/EstilosGlobais";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import bannerBackground from "./assets/banner.png";
import {
  AppContainer,
  ConteudoGaleria,
  FundoGradiente,
  MainContainer,
} from "./styles";
import { Gallery } from "./components/Gallery";

export function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}
