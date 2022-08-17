import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: inputs.email,
        password: inputs.password,
      });
      if (result?.error) {
        setLoading(false);
        setErrorMessages({ name: "email", message: 'invalid email' });
        setErrorMessages({ name: "pass", message: 'invalid password' });
        return;
      }
      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      setLoading(false);
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    return (
      <div className="container flex items-center justify-between">
      <div className="w-full py-8 md:mb-0 px-8 flex flex-col justify-center md:px-20  ">
      <div className="contain py-16">
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email address
            </label>
            <input
              type="text"
              name="email"
              autoFocus="autoFocus"
              value={inputs.email || ""} 
              onChange={handleChange}
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
            {renderErrorMessage("email")}
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              autoFocus="autoFocus"
              value={inputs.password || ""} 
              onChange={handleChange}
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
             {renderErrorMessage("pass")}
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-primary">
            Forgot password
          </a>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
      <Link href="/auth/register">
            <span className="primary-color-blue  font-semibold transition duration-200 ease-in-out cursor-pointer underline">
              Register
            </span>
          </Link>
    </div>
    </div>
    </div>
    );
}

export default LoginPage;
