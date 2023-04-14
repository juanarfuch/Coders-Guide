// LoginPage.js
import React from 'react';
import AuthForm from '../components/AuthForm';
import { login } from '../api/user';

const LoginPage = () => {
  const handleSubmit = async (formData) => {
    const response = await login(formData);
    console.log(response);
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleSubmit} isLogin />
    </div>
  );
};

export default LoginPage;
