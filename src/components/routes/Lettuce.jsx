import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";

const LettucePage = () => {
  const lettuce = useFetchData('lettuce', "", 'lettuce');
  const chars = lettuce.characteristics;

  if (!lettuce) {
    return <div>Lettuce not found</div>
  }

  return (
    <div className="flex flex-col w-full">
      <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
        Lettuce
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
        <Model3D key={lettuce.model3d} modelPath={lettuce.model3d} initialScale={40} cameraPosition={[16, -40, 180]} /> 
        <Characteristics data={chars} />
      </div>
    </div>
  )
}

export default LettucePage;

