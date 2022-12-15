import classNames from "classnames";

function Button({ primary, inactive, ...rest }) {
  const buttonClass = classNames(
    "w-10/12 border-2 transition hover:ease-in duration-150 ease-out mt-5 p-2 rounded-full",
    {
      "text-white/50 border-2 border-gray-800 hover:bg-gray-300/50": inactive,
      "text-white hover:bg-white hover:text-black  hover:shadow-xl": primary,
    }
  );

  return (
    <div className="flex justify-center w-full">
      <button {...rest} className={buttonClass}>
        Buy now
      </button>
    </div>
  );
}

export default Button;
