import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{height:"100vh"}} className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl rounded-lg p-3">
      <div className="mb-5">
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Fullname
          </label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
          />
          {errors.fullname && <span className="text-red-500 text-xs">Fullname is required</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="tel"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Phone
          </label>
          <input
            type="tel"
            id="tel"
            {...register("tel", { required: true, pattern: /^\d{10}$/ })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="0600000000"
          />
          {errors.tel && errors.tel.type === "required" && <span className="text-red-500 text-xs">Phone number is required</span>}
          {errors.tel && errors.tel.type === "pattern" && <span className="text-red-500 text-xs">Invalid phone number</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@gmail.com"
          />
          {errors.email && errors.email.type === "required" && <span className="text-red-500 text-xs">Email is required</span>}
          {errors.email && errors.email.type === "pattern" && <span className="text-red-500 text-xs">Invalid email address</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 6 })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
          {errors.password && errors.password.type === "required" && <span className="text-red-500 text-xs">Password is required</span>}
          {errors.password && errors.password.type === "minLength" && <span className="text-red-500 text-xs">Password must be at least 6 characters</span>}
        </div>
        
        <button
          type="submit"
          className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            you have already account <Link to="/login" className="underline text-blue-600">Sign in here</Link> 
          </label>
      </form>
    </div>
  );
}

export default Register;
