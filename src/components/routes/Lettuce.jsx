import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ModelsDataContext } from "../models/modelsContext";

const Lettuce = () => {
  const modelsData = useContext(ModelsDataContext);
  const lettuceCategory = modelsData.find(model => model.category === 'lettuce');
  const location = useLocation();

  return (
    <div className="w-full text-center">
      <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
        Lettuce
      </p>
    </div>
  );
};
export default Lettuce;

