

import React, { useState } from 'react';
import './SignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Signup = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const ConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {

      console.log("Submitting signup data:", {
        email: formData.email,
        phoneNumber: formData.phone,
        password: formData.password,
      });
      const response = await axios.post(
        "https://task-79s6.onrender.com/api/register",
        {
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phone,
        }
      );
      console.log("Registration successful:", response.data);
      alert(response.data.message || "Registration successful!");

      if (response?.status === true) {
        alert("Registration successful!");
        navigate("/dashboard"); // ✅ redirect to dashboard page
      } else {
        alert(response?.message || "Registration failed!");
      }

    } catch (error) {
      console.error("Full errror response:", error?.response?.data);
      alert(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Create Your Account</h2>

        <label className="form-label">Full Name</label>
        <input
          className="form-input"
          type="text"
          name="fullName"
          placeholder="Enter your Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label className="form-label">Email address</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Valid email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="form-label">PhoneNumber</label>
        <input
          className="form-input"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label className="form-label">Password</label>
        <div className="password-wrapper">
          <input
            className="form-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={PasswordVisibility} className="eye-button">
            <FaEye />
          </button>
        </div>
        <div className="password-strength-bar"></div>

        <label className="form-label">Confirm Password</label>
        <div className="password-wrapper">
          <input
            className="form-input"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="button" onClick={ConfirmPasswordVisibility} className="eye-button">
            <FaEye />
          </button>
        </div>

        

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Signup;



