import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { SellerContainer } from "../pages/Container";

/*
 * this component will be rendered through every authenticated pages, along with the
 * the seller sidebar.
 *
 * This will be using the cookies information (business name, and logo address) after
 * the seller succesfully authenticates and login.
 */
function BusinessHeader() {
  const [loading, setLoading] = useState(true);
  const [businessName, setBusinessName] = useState("");
  const [businessLogo, setBusinessLogo] = useState("");

  // usage of useEffect to acces cookies and update display information
  useEffect(() => {
    const cookies = new Cookies();

    setBusinessName(cookies.get(process.env.REACT_APP_BS_NAME));
    setBusinessLogo(cookies.get(process.env.REACT_APP_BS_LOGO));
  }, []);

  return (
    <SellerContainer>
      <div className="w-full flex items-center justify-between p-3 rounded-md bg-my-white-tint">
        {loading ? (
          <>
            <div className="inline-flex gap-2.5 items-center">
              <div className="w-11 h-11 rounded-full border border-gray-200">
                <img
                  alt="Avatar"
                  src={businessLogo}
                  className="p-1.5 object-contain w-full h-full rounded-full filter drop-shadow"
                />
              </div>

              <h3 className="font-serif text-xl text-black font-semibold">
                {businessName}
              </h3>
            </div>

            <p className="text-sm font-regular text-black">
              28 MONDAY | 9:37 PM
            </p>
          </>
        ) : (
          <p>:Loading</p>
        )}
      </div>
    </SellerContainer>
  );
}
export default BusinessHeader;
