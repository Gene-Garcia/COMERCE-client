import React, { Fragment } from "react";

import { useHistory } from "react-router-dom";

import { batch, useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../../../../../../../../../redux/Alert/AlertAction";

import {
  setLogisticsInModal,
  toggleAttemptModal,
  toggleLoading,
  toggleReload,
} from "../../../../../../../../../../redux/Logistics/WithMe/WithMeAction";

import { Dialog, Transition } from "@headlessui/react";

import { useForm } from "../../../../../../../../../../hooks/useForm";
import axios from "../../../../../../../../../../shared/axios";

import { BorderedInput } from "../../../../../../../../../../shared/Components/input/Inputs";
import { FormButton } from "../../../../../../../../../../shared/Components/button/ButtonBase";

const AttemptModal = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // with-me redux states
  const isModalOpen = useSelector((state) => state.WITH_ME.isModalOpen);
  const logisticsInModal = useSelector(
    (state) => state.WITH_ME.logisticsInModal
  );

  const closeModal = () => {
    resetForms();
    setIsLoading(false);
    batch(() => {
      dispatch(setLogisticsInModal(""));
      dispatch(toggleAttemptModal(false));
    });
  };

  const APISaveAttempt = async () => {
    await axios
      .patch("/api/logistics/delivery/attempt", {
        logisticsId: logisticsInModal,
        reason: values.reason,
      })
      .then((res) => {
        if (res.status === 201) {
          setIsLoading(false);
          resetForms();
          batch(() => {
            dispatch(setLogisticsInModal(""));
            dispatch(toggleAttemptModal(false));
            dispatch(toggleLoading(true));
            dispatch(toggleReload());
            dispatch(
              setMessages([
                {
                  message: res.data.message,
                  severity: "success",
                },
              ])
            );
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(
              setMessages([
                {
                  message:
                    "Something went wrong in retrieving your orders. Refresh your browser or try again later.",
                  severity: "error",
                },
              ])
            );
          });
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("unathorized");
        else
          batch(() => {
            dispatch(
              setMessages([
                {
                  message: err.response.data.message,
                  severity: "error",
                },
              ])
            );
          });
      });
  };

  //#region use form configuration
  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("reason" in data)
      temp["reason"] = data["reason"] ? "" : "Reason is required";

    setErrors({ ...temp });
  };

  const init = { reason: "" };
  const {
    values,
    errors,
    isLoading,
    setIsLoading,
    handleFormSubmit,
    handleInput,
    resetForms,
  } = useForm(init, init, validate, APISaveAttempt);
  //#endregion

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
                                leading-6 text-neutral-800"
                  >
                    Record Failed Attempt
                  </Dialog.Title>

                  <button
                    className="ml-auto justify-self-end p-1 text-rose-600
                              bg-rose-50 rounded-md
                              transition duration-150 ease-linear
                              hover:bg-rose-100"
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

                <p className="text-sm font-medium text-neutral-500 mt-2">
                  <span
                    className="bg-neutral-100 rounded-md px-3 py-1 
                  text-gray-700 break-all"
                  >
                    {logisticsInModal}
                  </span>
                </p>

                <div className="mt-6 space-y-5">
                  <BorderedInput
                    type="textarea"
                    name="reason"
                    value={values.reason}
                    onChange={handleInput}
                    placeholder="Summarize reason"
                    label="Reason"
                    error={errors.reason}
                  />

                  <BorderedInput
                    type="text"
                    value={new Date()}
                    onChange={() => {}}
                    label="Attempt Date"
                  />

                  <div className="w-max">
                    {/* close button */}
                    <FormButton
                      text="Save Record"
                      uppercase="uppercase"
                      onClick={handleFormSubmit}
                      isLoading={isLoading}
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
