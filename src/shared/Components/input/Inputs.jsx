import React from "react";
import { InputLast } from "./InputBase";

// basically, white form with shadows
function EmbossedInput({
  type,
  name,
  value,
  onChange,
  placeholder,

  background,
  shadow = "shadow",

  label,
  error,

  width,

  helper,

  icon,

  listId,
  listData,
}) {
  return (
    <InputLast
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      icon={icon}
      inputStyle={`rounded p-1.5 text-base ${background}`}
      border={`border rounded ${shadow} ${background}`}
      borderTheme={{
        valid: "border-transparent",
        invalid: "border-red-400",
      }}
      focusWithin="focus-within:border-my-accent"
      focus="focus:border-my-accent"
      label={label}
      error={error}
      width={width}
      helper={helper}
      listId={listId}
      listData={listData}
    />
  );
}

// an input that visible border, flat look
function BorderedInput({
  type,
  name,
  value,
  onChange,
  placeholder,

  label,
  error,

  width,

  helper,

  icon,

  listId,
  listData,
}) {
  return (
    <InputLast
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      icon={icon}
      inputStyle="py-1.5 px-2 rounded text-base"
      border="rounded border"
      focusWithin="focus-within:border-my-accent"
      focus="focus:border-my-accent" // only affects text-area input
      label={label}
      labelObj={{ color: "text-gray-400 text-opacity-80" }}
      error={error}
      errorObj={{ color: "text-red-400" }}
      width={width}
      helper={helper}
      listId={listId}
      listData={listData}
    />
  );
}

// an input that only has a bottom border
function LinedInput({
  type,
  name,
  value,
  onChange,
  placeholder,

  label,
  error,

  width,

  helper,

  icon,

  listId,
  listData,
}) {
  return (
    <InputLast
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      icon={icon}
      inputStyle=""
      border="border-b-2 p-0.5"
      focus="focus:border-my-accent"
      focusWithin="focus-within:border-my-accent"
      label={label}
      error={error}
      errorObj={{}}
      labelObj={{}}
      width={width}
      helper={helper}
      helperObj={{}}
      listId={listId}
      listData={listData}
    />
  );
}

// ---- Exports

export { EmbossedInput, BorderedInput, LinedInput };
