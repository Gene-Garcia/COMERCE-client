import React from "react";
import googleLogo from "../images/google.png";
import facebookLogo from "../images/facebook.png";
import twitterLogo from "../images/twitter.png";
import { batch, useDispatch } from "react-redux";
import { setMessage, setSeverity } from "../../redux/Alert/AlertAction";

function Body({ children }) {
  return (
    <div
      className="bg-gray-200 p-1.5 sm:p-3 lg:p-5 rounded-lg shadow-lg 
                 flex justify-center items-center
                 transition duration-200 ease-linear
                 border border-transparent
                 hover:border-gray-300"
    >
      {children}
    </div>
  );
}

function Image({ alt, src }) {
  // redux
  const dispatch = useDispatch();

  return (
    <img
      alt={alt}
      src={src}
      // className="transition duration-300 transform hover:rotate-12 filter grayscale hover:grayscale-0"
      className="w-7 lg:w-9 h-7 lg:h-9 object-contain"
      onClick={() => {
        batch(() => {
          dispatch(setSeverity("error"));
          dispatch(
            setMessage("OAuth not yet implemented. We'll keep you updated. ")
          );
        });
      }}
    />
  );
}

function Google() {
  return (
    <Body>
      <Image alt="google" src={googleLogo} />
    </Body>
  );
}

function Facebook() {
  return (
    <Body>
      <Image alt="facebook" src={facebookLogo} />
    </Body>
  );
}

function Twitter() {
  return (
    <Body>
      <Image alt="twitter" src={twitterLogo} />
    </Body>
  );
}

function OAuths() {
  return (
    <div className="flex flex-row items-center justify-center gap-12 lg:gap-14">
      <Google />
      <Facebook />
      <Twitter />
    </div>
  );
}

export default OAuths;
