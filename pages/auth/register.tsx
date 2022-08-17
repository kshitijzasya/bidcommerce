import { NextPage } from "next";

const Register: NextPage = _ => {
    return  (
        <>
        <header className="py-4 shadow-sm bg-white">
    <div className="container flex items-center justify-between">
      <a href="index.html">
        <img src="../assets/images/logo.svg" alt="Logo" className="w-32" />
      </a>
      <div className="w-full max-w-xl relative flex">
        <span className="absolute left-4 top-3 text-lg text-gray-400">
          <i className="fa-solid fa-magnifying-glass" />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
          placeholder="search"
        />
        <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
          Search
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fa-regular fa-heart" />
          </div>
          <div className="text-xs leading-3">Wishlist</div>
          <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            8
          </div>
        </a>
        <a
          href="#"
          className="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fa-solid fa-bag-shopping" />
          </div>
          <div className="text-xs leading-3">Cart</div>
          <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            2
          </div>
        </a>
        <a
          href="#"
          className="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fa-regular fa-user" />
          </div>
          <div className="text-xs leading-3">Account</div>
        </a>
      </div>
    </div>
  </header>
  {/* ./header */}
  {/* navbar */}
  <nav className="bg-gray-800">
    <div className="container flex">
      <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
        <span className="text-white">
          <i className="fa-solid fa-bars" />
        </span>
        <span className="capitalize ml-2 text-white">All Categories</span>
        {/* dropdown */}
        <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../assets/images/icons/sofa.svg"
              alt="sofa"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../assets/images/icons/terrace.svg"
              alt="terrace"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">Terarce</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../assets/images/icons/bed.svg"
              alt="bed"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">Bed</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../assets/images/icons/office.svg"
              alt="office"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">office</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../assets/images/icons/outdoor-cafe.svg"
              alt="outdoor"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../assets/images/icons/bed-2.svg"
              alt="Mattress"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">Mattress</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between flex-grow pl-12">
        <div className="flex items-center space-x-6 capitalize">
          <a
            href="../index.html"
            className="text-gray-200 hover:text-white transition"
          >
            Home
          </a>
          <a
            href="shop.html"
            className="text-gray-200 hover:text-white transition"
          >
            Shop
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition">
            About us
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition">
            Contact us
          </a>
        </div>
        <a
          href="login.html"
          className="text-gray-200 hover:text-white transition"
        >
          Login
        </a>
      </div>
    </div>
  </nav>
  {/* ./navbar */}
  {/* login */}
  <div className="contain py-16">
    <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
      <p className="text-gray-600 mb-6 text-sm">Register for new cosutumer</p>
      <form action="#" method="post" autoComplete="off">
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Full Name
            </label>
            <input
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
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
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
        <a href="login.html" className="text-primary">
          Login now
        </a>
      </p>
    </div>
  </div>
  {/* ./login */}
  {/* footer */}
  <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
    <div className="container grid grid-cols-3">
      <div className="col-span-1 space-y-8 mr-2">
        <img src="../assets/images/logo.svg" alt="logo" className="w-30" />
        <div className="mr-2">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-twitter-square" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-github-square" />
          </a>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Solutions
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Marketing
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Analitycs
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Commerce
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Insights
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Support
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Guides
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                API Status
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Solutions
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Marketing
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Analitycs
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Commerce
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Insights
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Support
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                Guides
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 block"
              >
                API Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ./footer */}
  {/* copyright */}
  <div className="bg-gray-800 py-4">
    <div className="container flex items-center justify-between">
      <p className="text-white">© TailCommerce - All Right Reserved</p>
      <div>
        <img src="../assets/images/methods.png" alt="methods" className="h-5" />
      </div>
    </div>
  </div>
        </>
    )
}

export default Register;