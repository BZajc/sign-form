import { useState } from "react";

function LoginInputs() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button className="form__confirm" type="submit">Confirm</button>
      </div>
    </form>
  );
}

export default LoginInputs;
