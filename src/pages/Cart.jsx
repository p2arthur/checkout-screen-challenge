import { useState } from "react";

import CartCard from "../components/CartCard";
import CardImage from "../components/Image";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Panel from "../components/Panel";

const itemQuantity = [
  { label: 0, value: 0 },
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
];

function Cart() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  const buttonType = selectedOption ? "primary" : "inactive";

  const handleClick = () => console.log(buttonType);

  return (
    <div className="bg-gray-900  w-screen p-10 flex justify-center items-center ">
      <CartCard>
        <CardImage />
        <div className="flex-col justify-between my-10">
          <h2 className="text-white text-4xl text-center">
            Everything is ready!
          </h2>
          <h3 className="text-center text-white text-lg font-light mt-2">
            Select quantity to continue
          </h3>
        </div>
        <div className=" flex justify-between items-center text-white weigth my-5">
          <Dropdown
            onChange={handleSelect}
            value={selectedOption}
            options={itemQuantity}
          />
          <h2 className="text-2xl">{selectedOption || 0} x $67</h2>
        </div>
        <div className="flex justify-center align-middle mt-10">
          <h3 className="text-white text-3xl font-light">Total: </h3>
          <h3 className="text-white text-3xl ml-2 font-light">
            ${selectedOption * 67}{" "}
          </h3>
        </div>
        <Button onClick={handleClick} primary />
      </CartCard>
    </div>
  );
}

export default Cart;
