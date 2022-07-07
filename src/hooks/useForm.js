/*
 * The useForm is custom function that holds all the functionalities
 * for form validation.
 *
 * To fully utilize the functionality of this form validation, the form component
 * will create their own 'validate' function. There is a template of validate function
 * at this file.
 *
 * The component also needs to create and pass their own 'submitFunction' such as
 * a function that  holds the API request to post the data to the server.
 * The submit function must be an async function
 *
 * These validate and submit function will then be called in this function every
 * key stroke input in a field and the onclick of submit button.
 *
 *
 * const validateTemplate = (fieldData, setErrors) => {
 *  let tempErrs = { ...errors };
 *
 *  if ("name" in fieldData) {
 *    tempErrs["name"] =
 *      fieldData["name"] === "" || fieldData["name"] === null
 *         ? "Titnamele is required"
 *         : "";
 *  }
 *
 *  // repeat if as needed
 *
 *  // update state errors
 *  setErrors({ ...tempErrs });
 * };
 *
 */

import { useState } from "react";

function useForm(
  initialValues,
  initialErros,
  validate,
  submitFunction,
  customFormIsValid = false // false if not function passed
) {
  // Values embedded to form
  const [values, setValues] = useState({ ...initialValues });
  // String messages, holds any error messages of the form
  const [errors, setErrors] = useState({ ...initialErros });

  // Submit loading
  const [isLoading, setIsLoading] = useState(false);

  // The function that handle updating the objet inside values
  // which are embededd to the input fields to be controlled fields
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    // every input will trigger validation, AGGRESSIVE
    // [name] with brackets makes JS understand to use the value inside name, and not 'name' itself
    validate({ [name]: value }, setErrors);
  };

  /*
   * A function that performs checking through all values and errors to determine if the form is valid for submit
   *
   * However, some components would require a different type of determing if form can be submitted or not.
   * Custom formIsValid can be passed as parameters if not the default formIsValid functino will be used
   */
  let formIsValid = customFormIsValid
    ? customFormIsValid
    : (cb) => {
        let isValid = true;

        for (const [, v] of Object.entries(values)) {
          if (v === "" || v === null) {
            isValid = false;
            break;
          }
        }
        // console.log("isValid after checking in value: " + isValid);

        for (const [, v] of Object.entries(errors)) {
          if (v !== "" && v !== null) {
            isValid = false;
            break;
          }
        }

        if (cb) cb(isValid);
      };

  function resetForms() {
    setValues({ ...initialValues });
    setErrors({ ...initialErros });
  }

  // Event handler function of clicking the submit button
  const handleFormSubmit = async (e) => {
    validate(values, setErrors);

    e.preventDefault();

    formIsValid(async (isValid) => {
      if (isValid) {
        setIsLoading(true);
        // await postFormParams
        await submitFunction(); // always make sure that this is async
        // resetForms(); this will raise an error in console, saying that cannot update UNMOUNTED react components.
        //If the form submit was success, it can already be redirected to other pages even before deleting/updating form data
        // setIsLoading(false);
      }
    });
  };

  // return
  return {
    values,
    setValues,
    errors,
    isLoading,
    setIsLoading,
    handleInput,
    formIsValid,
    handleFormSubmit,
    resetForms,
  };
}

export { useForm };
