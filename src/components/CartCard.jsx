import classNames from "classnames";
import Dropdown from "./Dropdown";

function Panel({ children, className }) {
  return (
    <div className=" flex-col bg-sky-900 w-1/2  align-middle rounded-3xl shadow-lg flex justify-center items-center">
      <div className=" border border-sky-800 m-8 p-10 rounded-2xl w-[91%]  shadow-xl">
        <div className="flex-col ">{children}</div>
      </div>
    </div>
  );
}

export default Panel;
