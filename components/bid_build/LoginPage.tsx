"use client";
import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { useForm } from "react-hook-form"; // React Hook Form
import { yupResolver } from "@hookform/resolvers/yup"; // Yup Resolver for React Hook Form
import * as Yup from "yup"; // Import Yup for validation
import "../../styles/loginPage.css"

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

const LoginPage: React.FC = () => {
  const [error, setError] = useState(""); // For showing error messages
  const [loading, setLoading] = useState(false); // For handling loading state

  // Use React Hook Form with Yup resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Handle form submission
  const onSubmit = async (data: { username: string; password: string }) => {
    setLoading(true); // Set loading to true when the form is being submitted
    setError(""); // Reset error message

    try {
      // Make the POST request to your backend API
      const response = await axios.post("/api/login", data); // Replace with your API endpoint

      // Handle success (redirect or show success message)
      console.log("Login successful", response.data);
    } catch (err: any) {
      // Handle error (e.g., incorrect login credentials)
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Input */}
        <div className="form-group">
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="Username"
            autoComplete="off"
          />
          {errors.username && <p className="error-text">{errors.username.message}</p>}
        </div>

        {/* Password Input */}
        <div className="form-group">
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Password"
            autoComplete="off"
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button
            type="submit"
            disabled={loading}
            className="submit-button"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
