//Reusable component for registration and login

import React, { useState } from 'react';

const AuthForm = ({ onSubmit, isLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
//Esta función se utiliza para manejar los cambios en los datos del formulario y actualiza el estado con los nuevos valores.

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
