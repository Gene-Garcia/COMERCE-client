import React, { useEffect } from "react";
import { useManageProduct } from "../../../../../../../../../../../hooks/useManage";
import axios from "../../../../../../../../../../../shared/caller";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function InformationModal() {
  const { updateToggledModal, productId } = useManageProduct();

  const closeModal = () => updateToggledModal(false);

  useEffect(() => {
    console.log(productId);
  }, []);

  return (
    <div className="fixed z-20 inset-0 overflow-auto">
      <div className="mx-auto w-min h-screen flex items-center">
        {/* conten */}
        <div className="bg-white shadow-lg rounded-md border border-my-accent border-opacity-30">
          {/* close button */}
          <div className="flex justify-end p-2.5 ">
            <button
              onClick={closeModal}
              className="py-1 px-1.5 bg-gray-100 rounded 
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

          <div className="px-10 pb-10 py-2">
            <h2>Product Name</h2>

            <p>asdfhioqwehfionasiodfnawiouefnioawuenfuioqwenfuiqwe</p>
            <p>qwefbiqwehfuiwhfuiwhuioq</p>

            <hr />

            <button className="bg-my-accent rounded px-4 py-2 font-semibold text-sm">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InformationModal;
