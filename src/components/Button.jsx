import classNames from "classnames";

function Button({ children, primary, inactive, success, className, ...rest }) {
  const buttonClass = classNames(
    "w-10/12 border-2 transition hover:ease-in duration-150 ease-out mt-5 p-2 rounded-full",
    {
      "text-white/50 border-2 border-gray-800 hover:bg-gray-300/50": inactive,
      "text-white hover:bg-white hover:text-black  hover:shadow-xl": primary,
      "bg-green-500 text-white hover:bg-green-600": success,
    },
    className
  );

  return (
    <div className="flex justify-center w-full">
      <button {...rest} className={buttonClass}>
        {children}
      </button>
    </div>
  );
}

export default Button;
