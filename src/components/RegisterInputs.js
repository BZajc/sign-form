import { useState } from "react";
import Validation from "./Validation";

function RegisterInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("Enter data")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if(response.ok) {
        setMessage("User has been registered");
      } else {
        setMessage("Error occured while creating an account");
      }
    } catch(err) {
      setMessage("Error:", err);
    }
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
        <Validation message={message}/>
        <button className="form__confirm" type="submit">Register</button>
      </div>
    </form>
  );
}

export default RegisterInputs;
