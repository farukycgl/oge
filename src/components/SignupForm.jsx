"use client"

import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useHistory } from "react-router-dom"
import axiosInstance from "../api/axios"

const SignupForm = () => {
  const [roles, setRoles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm()
  const selectedRole = watch("role_id")

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axiosInstance.get("/roles")
        setRoles(response.data)
      } catch (error) {
        console.error("Error fetching roles:", error)
        setError("Failed to fetch roles. Please try again later.")
      }
    }

    fetchRoles()
  }, [])

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError(null)

    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number.parseInt(data.role_id),
      }

      if (Number.parseInt(data.role_id) === 2) {
        // Assuming 2 is the store role_id
        formData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        }
      }

      await axiosInstance.post("/signup", formData)
      history.goBack() // This replaces navigate(-1)
      alert("You need to click the link in your email to activate your account!")
    } catch (error) {
      console.error("Signup error:", error)
      setError("An error occurred during signup. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && <div className="mb-4 text-red-600">{error}</div>}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true, minLength: 3 })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">This field is required and must be at least 3 characters</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && <span className="text-red-500 text-xs">Please enter a valid email address</span>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  Password must be at least 8 characters and include numbers, lowercase, uppercase, and special
                  characters
                </span>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  validate: (value) => value === watch("password") || "Passwords do not match",
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <Controller
                name="role_id"
                control={control}
                defaultValue="1" // Assuming 1 is the customer role_id
                render={({ field }) => (
                  <select
                    {...field}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {roles.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            {selectedRole === "2" && (
              <>
                <div>
                  <label htmlFor="store_name" className="block text-sm font-medium text-gray-700">
                    Store Name
                  </label>
                  <input
                    id="store_name"
                    type="text"
                    {...register("store_name", { required: true, minLength: 3 })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.store_name && (
                    <span className="text-red-500 text-xs">
                      Store name is required and must be at least 3 characters
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="store_phone" className="block text-sm font-medium text-gray-700">
                    Store Phone
                  </label>
                  <input
                    id="store_phone"
                    type="tel"
                    {...register("store_phone", {
                      required: true,
                      pattern: /^(\+90|0)?[0-9]{10}$/,
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.store_phone && (
                    <span className="text-red-500 text-xs">Please enter a valid Turkish phone number</span>
                  )}
                </div>

                <div>
                  <label htmlFor="store_tax_no" className="block text-sm font-medium text-gray-700">
                    Store Tax ID
                  </label>
                  <input
                    id="store_tax_no"
                    type="text"
                    {...register("store_tax_no", {
                      required: true,
                      pattern: /^T\d{3}V\d{6}$/,
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.store_tax_no && (
                    <span className="text-red-500 text-xs">Please enter a valid Tax ID in the format TXXXVXXXXXX</span>
                  )}
                </div>

                <div>
                  <label htmlFor="store_bank_account" className="block text-sm font-medium text-gray-700">
                    Store Bank Account (IBAN)
                  </label>
                  <input
                    id="store_bank_account"
                    type="text"
                    {...register("store_bank_account", {
                      required: true,
                      pattern: /^TR\d{2}[0-9A-Z]{5}[0-9A-Z]{17}$/,
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.store_bank_account && (
                    <span className="text-red-500 text-xs">Please enter a valid Turkish IBAN</span>
                  )}
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm

