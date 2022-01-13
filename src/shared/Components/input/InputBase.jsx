import React from "react";

/*
 * There are three types of components in this file
 * 1. Pure input components
 * 2. Utility components
 * 3. Combination components
 *
 * Pure input components
 *  The input base components have an addon for icons. user components
 *  can either add or not add an icon to an input field
 *
 * Utility components
 *
 *
 * Combination components
 *
 *
 * When it comes to STYLES and CLASSES, the components in this file
 * only contains the global COMERCE layout of forms, labels, errors, and helpers.
 * So that every user components will have consistent layout design
 *
 * When it comes to TYPOGRAPHY and COLORS, these components will contain
 * the default class names (e.g., regular weight input, semibold labels, red errors)
 * These defaults can easily be utilized by user components without adding them
 * as a prop
 *
 * Now, what the user components can do is to personalize the styling of the
 * inputs, utility components, or combination components through
 * creating their own wrapper components.
 */

function InputBase({
  error = "",
  type,
  name,
  value,
  onChange,
  placeholder,

  icon,

  border = "border",
  borderTheme = {
    valid: "border-gray-300",
    invalid: "border-red-400",
  },
  inputStyle,

  focus,
  focusWithin,

  list,
}) {
  return (
    <div
      className={`transition duration-200 ease-linear
        inline-flex items-center
        ${border}
        ${error ? borderTheme.invalid : borderTheme.valid}
        ${focusWithin}`}
    >
      {icon}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`focus:outline-none 
            w-full text-base
            placeholder-opacity-50 placeholder-gray-400
            transition duration-200 ease-linear
            ${inputStyle}
            ${focus}`}
        placeholder={placeholder}
        autoComplete={`new-${name}`}
        list={list}
      />
    </div>
  );
}
export default InputBase;

function TextareaBase({
  rows = 3,
  name,
  value,
  onChange,
  placeholder,
  className,
  border = "border",
  hover,
  focus,
  error = "",
  borderTheme = {
    valid: "border-gray-300",
    invalid: "border-red-400",
  },
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      className={`focus:outline-none
        placeholder-opacity-50 placeholder-gray-400
        text-base 
        ${className} ${border}
        transition duration-200 ease-linear
        ${hover} ${focus} 
        ${error ? borderTheme.invalid : borderTheme.valid}`}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}

function DatalistBase({
  error,
  name,
  value,
  onChange,
  placeholder,

  icon,

  border,
  borderTheme,
  inputStyle,

  hover,
  focus,
  focusWithin,

  listId,
  listData,
}) {
  return (
    <>
      <InputBase
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        icon={icon}
        inputStyle={inputStyle}
        border={border}
        hover={hover}
        focus={focus}
        focusWithin={focusWithin}
        error={error}
        borderTheme={borderTheme}
        list={listId}
      />

      <datalist id={listId}>
        {listData.map((e, i) => (
          <option key={i} value={e.value}>
            {e.text}
          </option>
        ))}
      </datalist>
    </>
  );
}

// label/error preceeds input field
function InputLast({
  type,
  name,
  value,
  onChange,
  placeholder,

  icon,

  inputStyle,
  border,
  borderTheme,

  hover,
  focus,
  focusWithin,

  label,
  error,

  errorObj,
  labelObj,

  width,

  helper,
  helperObj,

  listId,
  listData,
}) {
  return (
    <div className={`flex flex-col ${width}`}>
      <InlineLabelError
        label={label}
        error={error}
        errorObj={errorObj}
        labelObj={labelObj}
      />

      {(type === "email" ||
        type === "number" ||
        type === "text" ||
        type === "password" ||
        type === "date") && (
        <InputBase
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          icon={icon}
          inputStyle={inputStyle}
          border={border}
          hover={hover}
          focus={focus}
          focusWithin={focusWithin}
          error={error}
          borderTheme={borderTheme}
        />
      )}

      {type === "textarea" && (
        <TextareaBase
          rows="3"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputStyle}
          border={border}
          hover={hover}
          focus={focus}
          borderTheme={borderTheme}
          error={error}
        />
      )}

      {type === "datalist" && (
        <DatalistBase
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          icon={icon}
          inputStyle={inputStyle}
          border={border}
          hover={hover}
          focus={focus}
          focusWithin={focusWithin}
          error={error}
          borderTheme={borderTheme}
          listId={listId}
          listData={listData}
        />
      )}

      <Helper helper={helper} {...helperObj} />
    </div>
  );
}

// input field preceeds label/error
function InputFirst({
  type,
  name,
  value,
  onChange,
  placeholder,

  icon,

  inputStyle,
  border,
  borderTheme,

  hover,
  focus,
  focusWithin,

  label,
  error,

  errorObj,
  labelObj,

  width,

  helper,
  helperObj,

  listId,
  listData,
}) {
  return (
    <div className={`flex flex-col ${width}`}>
      <InputBase
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        icon={icon}
        inputStyle={inputStyle}
        border={border}
        borderTheme={borderTheme}
        error={error}
        hover={hover}
        focus={focus}
        focusWithin={focusWithin}
      />

      <InlineLabelError
        label={label}
        error={error}
        errorObj={errorObj}
        labelObj={labelObj}
      />

      <Helper helper={helper} {...helperObj} />
    </div>
  );
}

function Helper({ helper, color = "text-gray-400", size = "text-sm" }) {
  return (
    <i className={`italic text-left break-words ${color} ${size}`}>{helper}</i>
  );
}

function Error({
  error,
  owner = "input",
  size = "text-sm",
  color = "text-red-500",
  weight = "font-regular",
}) {
  return (
    <label
      owner={owner}
      className={`text-right break-words ${size} ${color} ${weight}`}
    >
      {error}
    </label>
  );
}

function Label({
  label,
  owner = "input",
  size = "text-sm",
  color = "text-gray-400",
  weight = "font-semibold",
}) {
  return (
    <label
      owner={owner}
      className={`uppercase text-left break-words ${size} ${color} ${weight}`}
    >
      {label}
    </label>
  );
}

// provides the global layout body of forms
function InputGroup({ children }) {
  return <div className="flex flex-col gap-y-0">{children}</div>;
}

// inline positioning of both Error & Label
function InlineLabelError({ label, labelObj, error, errorObj }) {
  return (
    <div className="inline-flex justify-between gap-1">
      <Label label={label} {...labelObj} />
      <Error error={error} {...errorObj} />
    </div>
  );
}

export {
  TextareaBase,
  Error,
  Label,
  InlineLabelError,
  Helper,
  InputFirst,
  InputLast,
};
