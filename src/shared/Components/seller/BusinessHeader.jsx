import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

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

  // usage of useEffect to acces cookies and update display information
  useEffect(() => {
    const cookies = new Cookies();

    setBusinessName(cookies.get(REACT_APP_BS_NAME));
  }, []);

  return (
    <div className="w-full flex items-center justify-between mb-12 p-4 border border-gray-100 shadow rounded-lg bg-white">
      {loading ? (
        <>
          <div className="inline-flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full border border-gray-200">
              <img
                alt="Avatar"
                src="https://i.ytimg.com/vi/5AwdkGKmZ0I/maxresdefault.jpg"
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <h3 className="font-serif text-2xl text-black font-semibold">
              {businessName}
            </h3>
          </div>

          <p className="text-base font-light">28 MONDAY | 9:37 PM</p>
        </>
      ) : (
        <p>:Loading</p>
      )}
    </div>
  );
}
export default BusinessHeader;
