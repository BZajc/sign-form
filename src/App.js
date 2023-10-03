import { useState } from "react";
import RegisterInputs from "./components/RegisterInputs";
import LoginInputs from "./components/LoginInputs";
import RegisterButton from "./components/RegisterButton";
import LoginButton from "./components/LoginButton";

function App() {
  const [registerVisible, setRegisterVisible] = useState(true);

  const toggleForm = () => {
    setRegisterVisible(!registerVisible);
  };

  return (
    <div className="form">
      <div className="form__buttons">
        <RegisterButton onClick={toggleForm} disabled={registerVisible} />
        <LoginButton onClick={toggleForm} disabled={!registerVisible} />
      </div>
      <div>
        {registerVisible ? <RegisterInputs /> : <LoginInputs />}
      </div>
    </div>
  );
}

export default App;
