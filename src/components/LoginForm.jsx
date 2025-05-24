import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosInstance from "../api/axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/login", {
        email: data.email,
        password: data.password,
      });

      // Giriş başarılı olduysa token vs. alırsın:
      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData)); // veya sadece token

      // Giriş sonrası yönlendirme
      history.push("/"); // veya anasayfa

    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@mail.com"
              required
            />
            {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
            {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
