import { EstilosGlobais } from "./components/EstilosGlobais";
import { Header } from "./components/Header";
import { FundoGradiente } from "./styles";

export function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Header />
    </FundoGradiente>
  );
}
