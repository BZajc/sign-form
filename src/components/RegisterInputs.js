import { useState } from "react";

function RegisterInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      <div className="form__names">
        <input
          className="form__firstname form__input"
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="first name"
          onChange={handleInputChange}
        ></input>
        <input
          className="form__lastname form__input"
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="last name"
          onChange={handleInputChange}
        ></input>
      </div>
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
        <input
          className="form__password form__input"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="password"
          onChange={handleInputChange}
        ></input>
        <button className="form__confirm" type="submit">Confirm</button>
      </div>
    </form>
  );
}

export default RegisterInputs;
