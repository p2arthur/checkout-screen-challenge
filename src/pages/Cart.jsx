import { useState } from "react";

import CartCard from "../components/CartCard";
import CardImage from "../components/Image";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Panel from "../components/Panel";

const itemQuantity = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
];

function Cart() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <div className="bg-gray-900 h-screen w-screen p-10 flex justify-center items-center ">
      <CartCard className="flex-col justify-between">
        <CardImage />
        <div className="flex justify-between items-center text-white">
          <Dropdown
            onChange={handleSelect}
            value={selectedOption}
            options={itemQuantity}
          />
          {selectedOption} x $67
        </div>
        <Button primary />
      </CartCard>
    </div>
  );
}

export default Cart;
