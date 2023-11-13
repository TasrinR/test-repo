import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import GlobalDataProvider from "./components/hooks/GlobalContext";

function App() {
  return (
    <GlobalDataProvider>
      <div className="App">
        <Nav />
      </div>
    </GlobalDataProvider>
  );
}

export default App;
