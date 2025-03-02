import React, { useContext } from "react";
import { ModelsDataContext } from "../models/modelsContext";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";
import BackToTop from "../BackToTop";

const CarrotsPage = () => {
  const data = useContext(ModelsDataContext);
  const carrotsData = data.find((model) => model.category === 'carrots');
  const details = carrotsData.details;

  const carrots = useFetchData('carrots', "", 'carrots');

  if (!carrots) {
    return <div>Carrots not found</div>;
  }

  const CarrotsDetails = () => (
    <div className="text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Carrots Details</h2>
      <ul className="list-disc list-inside">
        <li><strong>Scientific Name:</strong> {details.scientificName}</li>
        <li><strong>Family:</strong> {details.family}</li>
        <li><strong>Type:</strong> {details.type}</li>
        <li><strong>Color Varieties:</strong> {details.colorVarieties.join(', ')}</li>
        <li><strong>Taste:</strong> {details.taste}</li>
        <li><strong>Nutritional Value:</strong> {details.nutritionalValue}</li>
        <li><strong>Health Benefits:</strong> {details.healthBenefits.join(', ')}</li>
        <li><strong>Storage:</strong> {details.storage}</li>
        <li><strong>Fun Fact:</strong> {details.funFact}</li>
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
        Carrots
      </p>
      <div className="flex flex-col xl:flex-row justify-between items-center text-xl text-white">
        <div className="w-full xl:w-1/2 p-4">
          <Model3D key={carrotsData.model3d} modelPath={carrotsData.model3d} initialScale={4} cameraPosition={[16, -40, 180]} />
        </div>
        <div className="w-full xl:w-1/2 p-4">
          <CarrotsDetails />
        </div>
      </div>
      <BackToTop />
    </div>
  )
}

export default CarrotsPage;