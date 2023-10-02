import { useState, useEffect } from "react";

function RegisterInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="first name"
        onChange={handleInputChange}
      ></input>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="last name"
        onChange={handleInputChange}
      ></input>
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="email"
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="password"
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        placeholder="password"
        onChange={handleInputChange}
      ></input>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default RegisterInputs;
