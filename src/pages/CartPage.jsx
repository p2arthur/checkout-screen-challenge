import { useState } from "react";

import CartCard from "../components/CartCard";
import CardImage from "../components/Image";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import UseNavigationContext from "../hooks/use-navigation-context";
import Modal from "../components/Modal";

const itemQuantity = [
  { label: 0, value: 0 },
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
];

const itemSize = [
  { label: 39, value: 39 },
  { label: 40, value: 30 },
  { label: 41, value: 41 },
  { label: 42, value: 42 },
  { label: 43, value: 43 },
  { label: 44, value: 44 },
];

function Cart() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { navigate } = UseNavigationContext();

  const handleClick = () => navigate("/resumepage");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  const actionBar = (
    <div>
      <Button className="w-full" onClick={handleClick} success>
        Confirm and go to payment
      </Button>
    </div>
  );

  const modalElement = (
    <Modal actionBar={actionBar} onClose={handleCloseModal}>
      <p className="text-2xl">Here's a resume of your purchase</p>
      <p>Nike Dunk Low </p>
    </Modal>
  );

  return (
    <div className="bg-gray-900  w-full p-10 flex justify-center items-center mt-16">
      {showModal ? modalElement : null}
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
        <Button onClick={handleOpenModal} primary>
          Buy now
        </Button>
      </CartCard>
    </div>
  );
}

export default Cart;
