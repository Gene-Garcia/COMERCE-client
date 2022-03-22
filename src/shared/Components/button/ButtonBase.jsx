import React from "react";
import { Link } from "react-router-dom";

/*
 * all of the cta buttons/link components in here have
 * loading capability
 *
 * unlike the design of input components, some button base components
 * already have styling included in them. other button component could also
 * provide a blank slate template for button for future use.
 */

const baseTheme = `
  w-full
  inline-flex items-center justify-center flex-wrap 
  rounded
  transition duration-250 ease-linear
  `;

// accent base
const accentAnimation = `
  hover:ring-2 hover:ring-my-accent hover:ring-offset-2 hover:ring-opacity-70
  active:bg-my-accent-mono
  active:ring-2 active:ring-my-accent active:ring-opacity-40 active:ring-offset-0`;
const accentBaseBgColor = "bg-my-accent shadow";
const accentLoadingState = "bg-my-accent bg-opacity-50 cursor-not-allowed";

// secondary base - outlined:white bg
const secondaryAnimation = `
  hover:border-gray-400
  active:border-transparent
   active:ring-2 active:ring-gray-400 active:ring-opacity-40 active:ring-offset-2`;
const secondaryBaseBgColor = `bg-transparent border border-transparent`;
const secondaryLoadingState = `bg-gray-200 cursor-not-allowed`;

function ButtonBase({
  type,
  isLoading,
  text,
  Icon,
  onClick,
  rootSpacing,
  rootDesign,
  rootAnimation,
  rootBaseBgColor,
  rootLoadingState,
  textDesign,
  textColor,
}) {
  return (
    <>
      <button
        disabled={isLoading}
        onClick={onClick}
        className={`flex flex-row gap-1.5 items-center 
        ${rootDesign} ${rootSpacing}
        ${!isLoading && rootAnimation}
        ${isLoading ? rootLoadingState : rootBaseBgColor}`}
      >
        {isLoading ? <LoadingUtility textColor={textColor} /> : Icon}
        <span className={`${textDesign} ${textColor}`}>{text}</span>
      </button>
    </>
  );
}

// three size - large, medium, regular
function FormButton({
  size = "REGULAR",
  text,
  uppercase,
  onClick,
  isLoading,
  textColor,
  type = "BUTTON",
  to,
}) {
  const sizeTheme = {
    LARGE: {
      spacing: "py-4 px-10 gap-3",
      text: "font-sans text-lg font-semibold tracking-tight leading-none",
    },
    MEDIUM: {
      spacing: "py-3 px-7 gap-3",
      text: "font-sans text-lg font-semibold tracking-normal leading-none",
    },
    REGULAR: {
      spacing: "py-2.5 px-5 gap-2",
      text: "font-sans text-md font-medium tracking-wide leading-none",
    },
  };

  return (
    <>
      {type.toUpperCase() === "BUTTON" && (
        <button
          disabled={isLoading}
          onClick={onClick}
          className={`${baseTheme} ${!isLoading && accentAnimation} 
          ${isLoading ? accentLoadingState : accentBaseBgColor} 
          ${sizeTheme[size.toUpperCase()].spacing}`}
        >
          {isLoading && <LoadingUtility textColor={textColor} />}
          <span
            className={`${
              sizeTheme[size.toUpperCase()].text
            } ${textColor} ${uppercase}`}
          >
            {text}
          </span>
        </button>
      )}

      {type.toUpperCase() === "LINK" && (
        <Link
          to={isLoading ? "#" : to}
          onClick={onClick}
          className={`${baseTheme} ${!isLoading && accentAnimation} 
          ${isLoading ? accentLoadingState : accentBaseBgColor} 
          ${sizeTheme[size.toUpperCase()].spacing}`}
        >
          <span
            className={`${
              sizeTheme[size.toUpperCase()].text
            } ${textColor} ${uppercase}`}
          >
            {text}
          </span>
        </Link>
      )}
    </>
  );
}

function ProductButton({
  component, //button, link
  hierarchy, //primary/cta, secondary, tertiary
  size = "REGULAR", // regular, medium, large
  text,
  isLoading,
  textColor,
  onClick,
  to,
  Icon,
}) {
  const theme = {
    REGULAR: { spacing: "py-1.5 px-2.5 gap-2", text: "text-sm font-semibold" },
    MEDIUM: { spacing: "", text: "" },
    LARGE: { spacing: "py-3 px-11 gap-2", text: "text-base font-semibold" },
  };

  // configure base styles base on hierarchy
  let animation;
  if (hierarchy.toUpperCase() === "PRIMARY") animation = accentAnimation;
  else if (hierarchy.toUpperCase() === "SECONDARY")
    animation = secondaryAnimation;

  let loadingState;
  if (hierarchy.toUpperCase() === "PRIMARY") loadingState = accentLoadingState;
  else if (hierarchy.toUpperCase() === "SECONDARY")
    loadingState = secondaryLoadingState;

  let baseBgColor;
  if (hierarchy.toUpperCase() === "PRIMARY") baseBgColor = accentBaseBgColor;
  else if (hierarchy.toUpperCase() === "SECONDARY")
    baseBgColor = secondaryBaseBgColor;

  return (
    <>
      {component.toUpperCase() === "BUTTON" && (
        <button
          disabled={isLoading}
          onClick={onClick}
          className={`${!isLoading && animation} ${baseTheme} 
          ${isLoading ? loadingState : baseBgColor} 
          ${theme[size.toUpperCase()].spacing}`}
        >
          {isLoading ? <LoadingUtility textColor={textColor} /> : Icon}
          <span className={`${theme[size.toUpperCase()].text} ${textColor}`}>
            {text}
          </span>
        </button>
      )}

      {component.toUpperCase() === "LINK" && (
        <Link
          to={isLoading ? "" : to}
          className={`${!isLoading && animation} ${baseTheme} 
          ${isLoading ? loadingState : baseBgColor} 
          ${theme[size.toUpperCase()].spacing}`}
        >
          {Icon}
          <span className={`${theme[size.toUpperCase()].text} ${textColor}`}>
            {text}
          </span>
        </Link>
      )}
    </>
  );
}

function LoadingUtility({ textColor }) {
  return (
    <svg className={`animate-spin h-5 w-5 ${textColor}`} viewBox="0 0 24 24">
      <circle
        className="opacity-0"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export default ButtonBase;
export { FormButton, ProductButton };
