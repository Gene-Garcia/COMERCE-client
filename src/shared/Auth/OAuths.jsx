import React from "react";
import googleLogo from "../images/google.png";
import facebookLogo from "../images/facebook.png";
import twitterLogo from "../images/twitter.png";
import { batch, useDispatch } from "react-redux";
import { setMessage, setSeverity } from "../../redux/Alert/AlertAction";

function Body({ children }) {
  return (
    <div className="w-16 h-16 rounded-full shadow-lg flex justify-center items-center">
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
      className="transition duration-300 transform hover:rotate-12 filter grayscale hover:grayscale-0"
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
    <>
      <Google />
      <Facebook />
      <Twitter />
    </>
  );
}

export default OAuths;
