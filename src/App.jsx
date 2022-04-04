import logo from "./logo.svg";
import "./App.scss";
import Header from "../src/components/Header";
import Input from "./components/Input";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneLock } from "react-icons/ai";

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
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>

        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="&:hover"
            classType="input-label"
            inputClasses="hover"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="&:focus"
            classType="input-label focus-label"
            inputClasses="focus"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input disabled />"
            classType="input-label"
            inputClasses="disabled"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="📞 Placeholder"
            label="<Input startIcon />"
            classType="input-label"
            inputClasses="startIcon"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder                     🔒"
            label="<Input endIcon />"
            classType="input-label"
            inputClasses="endIcon"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input size=”sm” />"
            classType="input-label "
            inputClasses="sm"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input size=”md” />"
            classType="input-label"
            inputClasses="md"
            labelClass="label-text-style"
            labelText="Label"
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Placeholder"
            label="<Input fullWidth />"
            classType="input-label fw-label"
            inputClasses="fw"
            labelClass="label-text-style label-fw"
            labelText="Label"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
