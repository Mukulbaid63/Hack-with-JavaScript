import "./App.css";
import Forecast from "./Components/Forecast/Forecast";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1> Weather Forecast App</h1>
        </header>
        <main>
          <Forecast />
        </main>
      </div>
    </>
  );
}

export default App;
