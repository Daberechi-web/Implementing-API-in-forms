

import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      if (!formData.identifier) return alert("Please enter your email or phone");
      if (!formData.password) return alert("Please enter your password");

      const response = await axios.post(
        "https://task-79s6.onrender.com/api/login",
        {
          identifier: formData.identifier,
          password: formData.password,
        }
      );

      console.log("Login Result:", response.data);

      if (response.data?.data?.accessToken) {
        alert("Login successful!");

        sessionStorage.setItem("token", response.data.data.accessToken);

        navigate("/dashboard");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Login failed!");
    }
    finally {
      setLoading(false);
    }
  };



  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <label className="login-label">Email address</label>
        <input
          className="login-input"
          type="text"
          name='identifier'
          placeholder="Email Or PhoneNumber"
          value={formData.identifier}
          onChange={handleChange}
          required
        />

        <label className="login-label">Password</label>
        <div className="password-wrapper">
          <input
            className="login-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className="eye-button">
            <FaEye />
          </button>
        </div>

        <p className="forgot-password">Forgot your password?</p>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>

      </form>
    </div>
  );

};

export default Login