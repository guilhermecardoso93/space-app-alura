import { useState } from "react"
import { Banner } from "./components/Banner";
import { EstilosGlobais } from "./components/EstilosGlobais";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Gallery } from "./components/Gallery";

import fotos from './json/fotos.json'

import bannerBackground from "./assets/banner.png";
import {
  AppContainer,
  ConteudoGaleria,
  FundoGradiente,
  MainContainer,
} from "./styles";


export function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)

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
            <Gallery fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}
