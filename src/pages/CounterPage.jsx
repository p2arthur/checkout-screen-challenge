import { useReducer } from "react";

const INCREASE_COUNT = "increase-count";
const DECREASE_COUNT = "decrease-count";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const ADD_THE_LOT = "add-the-lot";

function reducer(state, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    case CHANGE_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_THE_LOT:
      return (state.count = {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      });
  }
}

function CounterPage({ initialValue }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialValue,
    valueToAdd: 0,
  });

  const increaseCount = () => {
    dispatch({ type: INCREASE_COUNT });
  };

  const decreaseCount = () => {
    dispatch({ type: DECREASE_COUNT });
  };

  const handleChange = (event) => {
    const value = +event.target.value;
    dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value });
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_THE_LOT });
  };

  return (
    <div className="bg-teal-500 w-screen h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col  p-10 rounded-xl shadow-lg">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="text-3xl items-center flex">
            Counter:
            <span className="bg-gray-500 h-10 rounded-lg w-12 text-2xl text-white text-center">
              {state.count}
            </span>
          </h1>
          <div className="flex space-x-10 text-white">
            <div
              onClick={decreaseCount}
              className="p-3 select-none bg-red-600 rounded cursor-pointer"
            >
              Decrease count -
            </div>
            <div
              onClick={increaseCount}
              className="p-3 select-none bg-green-600 rounded cursor-pointer"
            >
              Increase count +
            </div>
          </div>
          <div className="border-b-2 border-gray-200 h-1 w-full"></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <h1 className="text-xl">Add a lot:</h1>
            <input
              onChange={handleChange}
              value={state.valueToAdd || ""}
              className="border-4 rounded-full h-10 p-3"
              type="number"
            />
            <button className="px-10 py-3 border border-black rounded cursor-pointer mt-4 hover:bg-black hover:text-white transition-all">
              Add a lot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
