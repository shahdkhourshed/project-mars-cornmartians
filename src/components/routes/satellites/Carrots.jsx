import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";



const Carrots = () => {
  const modelsData = useContext(ModelsDataContext);
  const carrots = modelsData.find(model => model.category === 'carrots');
  const location = useLocation();

  return (
    <div className="text-center">
      <ul
        className={`
          my-12
          flex
          flex-wrap
          flex-col
          items-center
          text-3xl
          text-white
          text-center
          font-semibold
          md:text-4xl
          md:justify-evenly
          md:flex-row
          lg:text-5xl
          lg:h-[80vh]
          ${location.pathname.includes("/about/carrots/") ? "hidden" : ""}
        `}>
        {carrots.children.map(subcategory => (
          <li key={subcategory.subcategory}>
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
                to={`/about/satellites/${subcategory.subcategory}`}
                className="flex flex-col h-full justify-between py-12"
              >
                <img
                  src={subcategory.cover}
                  className="
                    w-[12rem]
                    md:w-[15rem]
                    lg:w-[20rem]
                    self-center
                    mb-4"
                  alt={subcategory.name}
                  loading="lazy" />
                <span className="blink">{subcategory.name}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};


export default Carrots;