import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";

const CarrotPage = () => {
  const carrot = useFetchData('carrot', "", 'carrot');
  const chars = carrot.characteristics;

  if (!carrot) {
    return <div>Carrots not found</div>
  }

  return (
    <div className="flex flex-col w-full">
      <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
        Carrots
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
        <Model3D key={carrot.model3d} modelPath={carrot.model3d} initialScale={40} cameraPosition={[16, -40, 180]} /> 
        <Characteristics data={chars} />
      </div>
    </div>
  )
}

export default CarrotPage;

