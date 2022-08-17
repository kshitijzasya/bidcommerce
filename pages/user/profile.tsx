import type { NextPage } from "next";

const Profile: NextPage = (_) => {
  return (
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
                href="pages/shop.html"
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
            <a href="#" className="text-gray-200 hover:text-white transition">
              Login/Register
            </a>
          </div>
        </div>
      </nav>
      {/* ./navbar */}
      {/* breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house" />
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right" />
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      {/* ./breadcrumb */}
      {/* wrapper */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* sidebar */}
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="../assets/images/avatar.png"
                alt="profile"
                className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 font-medium">John Doe</h4>
            </div>
          </div>
          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div className="space-y-1 pl-8">
              <a
                href="#"
                className="relative text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-address-card" />
                </span>
                Manage account
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Profile information
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Manage addresses
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Change password
              </a>
            </div>
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-box-archive" />
                </span>
                My order history
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My returns
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My Cancellations
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My reviews
              </a>
            </div>
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-credit-card" />
                </span>
                Payment methods
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                voucher
              </a>
            </div>
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-heart" />
                </span>
                My wishlist
              </a>
            </div>
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-right-from-bracket" />
                </span>
                Logout
              </a>
            </div>
          </div>
        </div>
        {/* ./sidebar */}
        {/* info */}
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            Profile information
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first">First name</label>
                <input
                  type="text"
                  name="first"
                  id="first"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="last">Last name</label>
                <input
                  type="text"
                  name="last"
                  id="last"
                  className="input-box"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" className="input-box">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input-box"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
            >
              save changes
            </button>
          </div>
        </div>
        {/* ./info */}
      </div>
      {/* ./wrapper */}
      {/* footer */}
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
          <div className="col-span-1 space-y-8 mr-2">
            <img src="../assets/images/logo.svg" alt="logo" className="w-30" />
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
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
            <img
              src="../assets/images/methods.png"
              alt="methods"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
