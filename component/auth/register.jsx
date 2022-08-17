
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function RegisterPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleSubmit(event) {
    event.preventDefault();
console.log('submit', inputs);
    // console.log(values, 'values');
    setLoading(true);
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(inputs),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          // setRegisterToggle(false);
          router.push("/auth/login");
        } else {
          console.log('error on register');
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

    return (
      <div className="container flex items-center justify-between">
      <div className="w-full py-8 md:mb-0 px-8 flex flex-col justify-center md:px-20  ">
      <div className="contain py-16">
    <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
      <p className="text-gray-600 mb-6 text-sm">Register for new cosutumer</p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Full Name
            </label>
            <input
              value={inputs.name || ""} 
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="fulan fulana"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={inputs.email || ""} 
              onChange={handleChange}
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={inputs.password || ""} 
              onChange={handleChange}
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
          <div>
            <label htmlFor="confirm" className="text-gray-600 mb-2 block">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              I have read and agree to the{" "}
              <a href="#" className="text-primary">
                terms &amp; conditions
              </a>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            create account
          </button>
        </div>
      </form>
      {/* login with */}
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or signup with
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
      </div>
      <div className="mt-4 flex gap-4">
        <a
          href="#"
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
        >
          facebook
        </a>
        <a
          href="#"
          className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
        >
          google
        </a>
      </div>
      {/* ./login with */}
      <p className="mt-4 text-center text-gray-600">
        Already have account?{" "}
        <Link href="/auth/login">
            <span className="primary-color-blue  font-semibold transition duration-200 ease-in-out cursor-pointer underline">
            Login now
            </span>
          </Link>
      </p>
    </div>
  </div>
  </div>
  </div>
    );
}

export default RegisterPage;
