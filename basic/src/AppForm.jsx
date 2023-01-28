import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit >>>");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}
