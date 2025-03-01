import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ModelsDataContext } from "../../models/modelsContext";

const Lettuce = () => {
  const modelsData = useContext(ModelsDataContext);
  const lettuceCategory = modelsData.find(model => model.category === 'lettuce');
  const location = useLocation();

  return (
    <div className="w-full text-center">
      <ul className={`
            my-12
            flex
            flex-col
            flex-wrap
            items-center
            text-3xl
            text-white
            text-center
            font-semibold
            md:text-4xl
            md:flex-row
            md:justify-evenly
            lg:text-5xl
            lg:h-[80vh]
            ${location.pathname.includes("/about/lettuce/") ? "hidden" : ""}
      `}>
        {lettuceCategory.children.map(lettuce => (
          <li key={lettuce.id}>
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
                to={`/about/lettuce/${lettuce.id}`}
                className="flex flex-col h-full justify-between py-12
                ">
                <img
                  src={lettuce.cover}
                  className={`${lettuce.id === "phobos" ? "lg:w-[13rem]" : "lg:w-[12.5rem] md:p-1 md:mb-0"} self-center w-[8rem] mb-2`}
                  loading="lazy"
                  alt={lettuce.name} 
                  />
                <span className="blink">{lettuce.name}</span>
            </Link>
            </div>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default Lettuce;

