import React from 'react';
import AuthForm from '../components/AuthForm';
import { register } from '../api/user';

const RegisterPage = () => {
  const handleSubmit = async (formData) => {
    const response = await register(formData);
    console.log(response);
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;