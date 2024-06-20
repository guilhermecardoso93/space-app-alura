import { Banner } from "./components/Banner";
import { EstilosGlobais } from "./components/EstilosGlobais";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { FundoGradiente } from "./styles";

export function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Header />
      <SideBar />
      <Banner
        texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerBackground}
      />
    </FundoGradiente>
  );
}
