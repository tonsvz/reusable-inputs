import logo from "./logo.svg";
import "./App.scss";
import Header from "../src/components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>

      <div className="app-main">
        <div className="input-title">
          <h1>Inputs</h1>
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input />"
            classType="input-label"
          />
        </div>

        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="&:hover"
            classType="input-label hover"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="&:focus"
            classType="input-label focus"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input disabled />"
            classType="input-label disabled"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input startIcon />"
            classType="input-label startIcon"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input endIcon />"
            classType="input-label endIcon"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input size=”sm” />"
            classType="input-label sm"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input size=”md” />"
            classType="input-label md"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input fullWidth />"
            classType="input-label fw"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
