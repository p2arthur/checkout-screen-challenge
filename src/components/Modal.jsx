import ReactDOM from "react-dom";

function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900 opacity-70"
      ></div>
      <div className="absolute bg-white inset-28 rounded opacity-100 flex flex-col items-center p-6 justify-between">
        {children}
        <div>{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
