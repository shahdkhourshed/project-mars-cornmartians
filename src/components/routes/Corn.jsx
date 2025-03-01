import BackToTop from "../BackToTop";
import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";


const CornPage = () => {
  const corn = useFetchData('corn', "", 'corn');
  const chars = corn.characteristics;

  if (!corn) {
    return <div>Corn not found</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div
        className="
          flex
          flex-col
          justify-end
          text-xl
        text-white
          xl:flex-row-reverse
      ">
      <Model3D key={corn.model3d} modelPath={corn.model3d} initialScale={0.1} cameraPosition={[0, 0, 180]} /> 
      <Characteristics data={chars} />
      </div>
      <BackToTop />
      </div>
      
  )
}


export default CornPage;
