import * as RiIcon from "react-icons/ri";

const Modal = ({ children, title, open, onClose }) => {
  return (
    <div
      className="fixed top-0 z-40 left-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full transition-all duration-300"
    >
      <div className="relative top-20 z-50 mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between">
          <h3 className="m-0 text-xl font-semibold text-[#252525]">{title}</h3>
          <span className="cursor-pointer" onClick={onClose}>
            <RiIcon.RiCloseLine size={25} />
          </span>
        </div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
