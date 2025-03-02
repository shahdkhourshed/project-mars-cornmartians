import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";

const SweetPotatoesPage = () => {
  const sweet_potatoes = useFetchData('sweet potatoes', "", 'sweet potatoes');
  const chars = sweet_potatoes.characteristics;

  if (!sweet_potatoes) {
    return <div>Sweet potatoes not found</div>
  }

  return (
    <div className="flex flex-col w-full">
      <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
      Sweet Potatoes
      </p>
      <div
          className="
            flex
            flex-col
            justify-end
            text-xl
            text-white
            xl:flex-row-reverse
        ">
        <Model3D key={sweet_potatoes.model3d} modelPath={sweet_potatoes.model3d} initialScale={4} cameraPosition={[16, -40, 180]} /> 
        <Characteristics data={chars} />
      </div>
    </div>
  )
}

export default SweetPotatoesPage;

