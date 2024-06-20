import { EstilosGlobais } from "./components/EstilosGlobais";
import { FundoGradiente } from "./styles";

export function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <h1>Oi</h1>
    </FundoGradiente>
  );
}
