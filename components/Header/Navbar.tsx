"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
// import GoogleTranslate from "../Google/googleTranslate";
const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0  right-0 z-40 flex  items-center ${
          sticky
            ? "fixed z-[9999] top-0 bg-[#006401]  shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-[#006401]"
        }`}
      >
        <div className=" w-full ">
          <div className=" bg-white">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={900}
              height={100}
              className={`mx-auto ${sticky ? "lg:w-1/3 transition-all duration-300 ease-in-out" : ""}`}
            />
          </div>
          <div className="relative flex items-center justify-center">
            {/* <div className="w-20 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py- lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/2.svg"
                  alt="logo"
                  width={100}
                  height={10}
                  className=" w-half hidden"
                />
                <Image
                  src="/images/logo/1.svg"
                  alt="logo"
                  width={100}
                  height={10}
                  className="w-half hidden block"
                />
              </Link>
            </div> */}
            <div className="flex w-full items-center text-sm justify-center ">
              <div className="flex h-12 items-center font-bold"></div>
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  x-data="{open:false}"
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-full pl-28 transition-all duration-300 rounded border-[.5px] border-body-color/50 bg-[#006401] px-6 py-4  dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block font-semibold lg:flex lg:space-x-6">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2   lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2   text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-b-xl bg-[#006401] transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path || ""}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    <li>
                      {/* <div>
                        <GoogleTranslate />
                      </div> */}
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-end space-x-4 pr-16 lg:pr-0">
                {/* <Link
                  href="/signin"
                  className="hidden px-7 py-3  rounded-lg bg-slate-300   font-medium text-dark hover:opacity-70 dark:text-dark md:block"
                >
                  Sign In
                </Link>
                
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-lg bg-primary px-8 py-3   font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
