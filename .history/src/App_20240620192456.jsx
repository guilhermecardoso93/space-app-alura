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
    </FundoGradiente>
  );
}
