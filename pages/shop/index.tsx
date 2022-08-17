import type { NextPage } from "next";

const Shop: NextPage = () => {
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
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      {/* ./breadcrumb */}
      {/* shop wrapper */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* sidebar */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-1"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-2"
                    id="cat-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Sofa
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-3"
                    id="cat-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(21)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-4"
                    id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Outdoor
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-1"
                    id="brand-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="brand-1"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Cooking Color
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-2"
                    id="brand-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="brand-2"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Magniflex
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-3"
                    id="brand-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="brand-3"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Ashley
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(21)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-4"
                    id="brand-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="brand-4"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    M&amp;D
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-5"
                    id="brand-5"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="brand-5"
                    className="text-gray-600 ml-3 cusror-pointer"
                  >
                    Olympic
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="min"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="max"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                />
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xs"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-sm"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-sm"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-m"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-l"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xl"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="hidden"
                  />
                  <label
                    htmlFor="red"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#fc3d57" }}
                  />
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="black"
                    className="hidden"
                  />
                  <label
                    htmlFor="black"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#000" }}
                  />
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="white"
                    className="hidden"
                  />
                  <label
                    htmlFor="white"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ./sidebar */}
        {/* products */}
        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select
              name="sort"
              id="sort"
              className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option value="">Default sorting</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
              <option value="latest">Latest product</option>
            </select>
            <div className="flex gap-2 ml-auto">
              <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <i className="fa-solid fa-grip-vertical" />
              </div>
              <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i className="fa-solid fa-list" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <img
                  src="../assets/images/products/product1.jpg"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <img
                  src="../assets/images/products/product2.jpg"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <img
                  src="../assets/images/products/product3.jpg"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <img
                  src="../assets/images/products/product4.jpg"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <img
                  src="../assets/images/products/product5.jpg"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <img
                  src="../assets/images/products/product6.jpg"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
        {/* ./products */}
      </div>
      {/* ./shop wrapper */}
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

export default Shop;
