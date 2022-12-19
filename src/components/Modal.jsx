import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    const body = document.body;
    body.classList.add("overflow-hidden");

    return () => body.classList.remove("overflow-hidden");
  });

  return ReactDOM.createPortal(
    <div className="">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900 opacity-70"
      ></div>
      <div className="fixed bg-white inset-40 rounded opacity-100 flex flex-col items-center p-6 justify-between">
        {children}
        <div>{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
