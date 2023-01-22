/*
 * This modal is only a container.
 * A container that is shared and separated because it will use a dedicated
 * logc and redux for loading the data and show the modal
 *
 * Or the implementation can be easily a reusable component. and the redux
 * logic can be separated. Although redundant
 */

const ModalContainer = ({ children, close }) => {
  return (
    <div className="fixed z-20 inset-0 overflow-auto bg-gray-500 bg-opacity-30">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-white-tint shadow-lg rounded-md border border-accent border-opacity-30">
          {/* close button */}
          <CloseButton onClick={close} />

          <>{children}</>
        </div>
      </div>
    </div>
  );
};

const CloseButton = ({ onClick }) => {
  return (
    <div className="flex justify-end p-3 ">
      <button
        onClick={onClick}
        className="py-1 px-1.5 bg-white-tone rounded 
inline-flex gap-1 items-center 
text-sm font-semibold text-black
transition duration-200 ease-linear
hover:shadow-md hover:bg-gray-200
active:bg-red-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        CLOSE
      </button>
    </div>
  );
};

export default ModalContainer;
