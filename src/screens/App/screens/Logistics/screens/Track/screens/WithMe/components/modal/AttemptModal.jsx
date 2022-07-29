import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setLogisticsInModal,
  toggleAttemptModal,
} from "../../../../../../../../../../redux/Logistics/WithMe/WithMeAction";
import {
  BorderedInput,
  LinedInput,
} from "../../../../../../../../../../shared/Components/input/Inputs";
import { FormButton } from "../../../../../../../../../../shared/Components/button/ButtonBase";

const AttemptModal = () => {
  // redux
  const dispatch = useDispatch();

  // with-me redux states
  const isModalOpen = useSelector((state) => state.WITH_ME.isModalOpen);

  const closeModal = () => {
    batch(() => {
      dispatch(setLogisticsInModal(""));
      dispatch(toggleAttemptModal(false));
    });
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-lg 
                            transform overflow-hidden 
                            rounded-2xl bg-white p-6 
                            text-left align-middle 
                            shadow-xl transition-all"
              >
                <div className="flex items-center justify-between flex-wrap-reverse">
                  <Dialog.Title
                    as="h2"
                    className="grow shrink 
                                text-xl font-serif font-semibold 
                                leading-6 text-slate-900"
                  >
                    Record Failed Attempt
                  </Dialog.Title>

                  <button
                    className="ml-auto justify-self-end p-1.5 text-rose-600"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-base font-medium text-neutral-500 mt-2">
                  <span
                    className="bg-neutral-100 rounded-md px-3 py-1 
                  text-gray-800 break-all"
                  >
                    62d80998f809fd1328fef16f
                  </span>
                </p>

                <div className="mt-6 space-y-5">
                  <BorderedInput
                    type="textarea"
                    name=""
                    value=""
                    onChange={() => {}}
                    placeholder="Elaborate reason"
                    label="Reason"
                    error=""
                  />

                  <BorderedInput
                    type="text"
                    name=""
                    value={new Date()}
                    onChange={() => {}}
                    placeholder=""
                    label="Attempt Date"
                    error=""
                  />

                  <div className="w-max">
                    {/* close button */}
                    <FormButton
                      text="Save Record"
                      uppercase="uppercase"
                      onClick={closeModal}
                      isLoading={false}
                      textColor="text-white"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AttemptModal;

const Content = () => {
  return <></>;
};
