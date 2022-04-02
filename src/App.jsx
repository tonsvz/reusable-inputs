import logo from "./logo.svg";
import "./App.scss";
import Header from "../src/components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>

      <div className="app-main">
        <Main type="text" placeholder="texto" />
      </div>
    </div>
  );
}

export default App;
