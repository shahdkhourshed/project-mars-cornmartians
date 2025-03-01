import { Outlet, Link, useLocation } from "react-router-dom"
import { ModelsDataContext } from "../models/modelsContext";
import { useContext } from "react";

const Plants = () => {
  const modelsData = useContext(ModelsDataContext);
  const categories = modelsData.map((model) => model.category);
  const location = useLocation();

  return (
    <div className="w-full">
      <ul
        className={`
          my-12
          flex
          flex-col
          flex-wrap
          items-center
          text-3xl
          text-center
          text-white 
          font-semibold
          md:justify-evenly
          md:flex-row
          md:text-4xl
          lg:text-5xl
          lg:h-[80vh]
          ${location.pathname.includes("/plants/") ? "hidden" : ""
          }`}
      >
        {categories.map((category) => {
          const currentCategory = modelsData.find((model) => model.category === category);
          return (
            <li key={category}>
              <div
                className="
                  my-6
                  w-[15rem]
                  h-[23rem]
                  md:w-[18rem]
                  md:h-[28rem]
                  lg:w-[25rem]
                  lg:h-[35rem]
                  blur__card
                  parallax
                ">
                <Link
                  to={`/plants/${category}`}
                  className="flex flex-col h-full justify-between py-12">
                  <img
                    src={currentCategory.cover}
                    className="w-[12rem] lg:w-[20rem] self-center"
                    alt={currentCategory.name}
                  />
                  <span className="blink"> {category.toUpperCase()} </span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Plants;
