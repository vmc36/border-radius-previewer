import { useState, React } from "react";
import { Square } from "../Square";
import { ValueChart } from "../ValueChart";

export const Screen = () => {
  const [borderRadius, setBorderRadiusValue] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBorderRadiusValue({ ...borderRadius, [name]: value });
  };

  return (
    <>
      <img className="ocatocat " src="/OctocatCorner.svg" alt="OctocatCorner" />

      <h1 className="mt-9 text-center font-Open-Sans text-7xl font-extrabold text-titleColor">
        [Previewer]
      </h1>
      <h2 className="mb-[72px] text-center font-Open-Sans text-7xl font-bold text-titleColor">
        {" "}
        border-radius:
      </h2>

      <ValueChart borderRadius={borderRadius} />
      <div className="flex w-full flex-col items-center justify-center font-Open-Sans text-sm  ">
        <div className="flex justify-between space-x-24">
          <div className="flex flex-col">
            <span className="font-Open-Sans text-sm text-inputFontColor">
              Top Left
            </span>
            <input
              type="number"
              name="topLeft"
              value={borderRadius.topLeft}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white">Top Right</span>
            <input
              type="number"
              name="topRight"
              value={borderRadius.topRight}
              onChange={handleChange}
            />
          </div>
        </div>
        <Square borderRadius={borderRadius} />
        <div className="flex justify-between space-x-24">
          <div className="flex flex-col">
            <span className="text-white">Bottom Left</span>
            <input
              type="number"
              name="bottomLeft"
              value={borderRadius.bottomLeft}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white">Bottom Right</span>
            <input
              type="number"
              name="bottomRight"
              value={borderRadius.bottomRight}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
