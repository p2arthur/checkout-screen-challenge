import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const panelClassName = classNames(
    className,
    "bg-gray-900 text-white w-full bottom-0 h-10 flex items-center align-middle p-3 cursor-pointer"
  );

  return (
    <div {...rest} className={panelClassName}>
      {children}
    </div>
  );
}

export default Panel;
