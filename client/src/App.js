import MachineList from "./components/MachineList";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <MachineList />
      </div>
    </GlobalProvider>
  );
}

export default App;
