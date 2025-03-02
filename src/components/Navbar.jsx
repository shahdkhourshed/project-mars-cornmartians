import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import '../index.css';
import routes from "./routes/routes";

const Navbar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleItemClick = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuIsOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  })

  const navLinks = routes.flatMap((route) => {
    if (route.children) {
      return route.children.map((childRoute) => (
        <li
          className={`text-white
            blink 
            cursor-pointer     
            font-bold
            py-2
            md:py-0
            text-[32px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[32px]
            4k:text-[46px]`}
          key={childRoute.path}
          onClick={handleItemClick}>
          <NavLink
            to={childRoute.path}
            onClick={handleItemClick}
          >
            {childRoute.text}
          </NavLink>
        </li>
      ));
    }
    return null;
  });

  return (
    <div className="navbar select-none">

      {/* Navbar */}
      <nav
        className="
                   mx-6
                   h-24
                   flex
                   justify-between
                   md:mx-16
                   md:h-14
                   lg:h-16
                   xl:h-20
                   2xl:h-24
        ">

        {/* Logo */}
        <div
          className="
                        mt-3 
                        h-auto
                        max-w-[6rem]
                        md:max-w-[4.5rem]
                        lg:max-w-[6rem]
                        lg:mt-2
                        xl:ml-[4rem]
                        xl:max-w-[8rem]
                        2xl:mt-0
                        2xl:ml-[8rem]
                        2xl:max-w-[10rem]
                        4k:ml-[12rem]
         ">
          <Link to="/" aria-label="Go to Home">
            <img src="/assets/logos/corn_martian.webp"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Menu */}
        <ul
          className={`
                        hidden
                        justify-between
                        items-center
                        md:flex
                        md:w-[75%]
                        lg:w-[70%]
                        2xl:justify-around
                    `}>
          {navLinks}
        </ul>

        {/* Hamburger Menu */}
        <div
          className="
                     flex
                     flex-1
                     justify-end
                     items-center
                     md:hidden
                     ">
          
          {/* Close Menu */}
          {menuIsOpen && (
            <button
              className='h-12 w-12'
              onClick={() => setMenuIsOpen(false)}>
            <img
              src="/assets/close.webp"
              alt="Menu"
              className="w-full h-full"
            />
          </button>)}

          {/* Open Menu */}
          {!menuIsOpen && (
            <button
              className='h-12 w-12'
              onClick={() => setMenuIsOpen(true)}>
              <img
                src="/assets/menu.webp"
                alt="Open Menu"
                className="w-full h-full" />
            </button>)}

          {/* Dropdown Menu */}
          <div
            className={`${menuIsOpen ? 'flex' : 'hidden'} 
                        px-8
                        py-8
                        top-40
                        right-10
                        flex-col
                        absolute
                        rounded-xl
                        min-w-[15rem]
                      bg-slate-900
                        sidebar
                           `}
            ref={dropdownRef}>
            {menuIsOpen && (
              <ul className="flex flex-col  items-center">
                {navLinks}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar