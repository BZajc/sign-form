import { useState } from "react";
import Validation from "./Validation";

function LoginInputs() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [ message, setMessage ] = useState("Enter data")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/users");
      const users = await response.json();
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        setMessage("User has been logged in");
      } else {
        setMessage("Wrong email or password");
      }
    } catch (err) {
      setMessage("An error occured while trying to log in", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__main">
        <input
          className="form__email form__input"
          type="email"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={handleInputChange}
        ></input>
        <input
          className="form__password form__input"
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleInputChange}
        ></input>
        <Validation message={message} />
        <button className="form__confirm" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginInputs;
