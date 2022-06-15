import React, { useEffect, useState } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";
import axios from "../../../../../../../../../shared/caller";
import { useHistory } from "react-router-dom";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";

const Pack = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // loading var
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getForPackOrders() {
      await axios
        .get("/api/seller/logistics/for/pack")
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            console.log(res.data.orders);
          }
        })
        .catch((err) => {
          setLoading(false);

          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong. Please refresh your browser and try again."
                )
              );
            });
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    getForPackOrders();
  }, []);

  return (
    <SellerContainer>
      <div className="flex flex-col xs:flex-row gap-4 xs:gap-0 items-center justify-between">
        <SellerTitle title="Pack Orders" />

        <div className="">
          <HeaderButton type="BUTTON" title="Print Selected" />
        </div>
      </div>

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div>
        <table className="bg-my-white-tint w-full rounded">
          <HeaderRow />

          <tbody>
            <OrderPackRow />
            <OrderPackRow />
            <OrderPackRow />
          </tbody>
        </table>
      </div>
    </SellerContainer>
  );
};
export default Pack;

const HeaderRow = () => {
  const headerClass = "py-3 px-2";

  return (
    <thead className="font-semibold text-sm text-gray-400">
      <tr className="text-center">
        <th className={`${headerClass}`}>
          <input type="checkbox" />
        </th>
        <th className={`${headerClass} w-seven`}>Order ID</th>
        {/*  this is for the item name and qty */}
        <th className={`${headerClass}`}>
          <div className="inline-flex gap-2 w-full justify-center items-center">
            <p>Item Name</p>
            <p>Quantity</p>
          </div>
        </th>
        <th className={`${headerClass}`}>Customer Name</th>
        <th className={`${headerClass}`}>Order Date</th>
        <th className={`${headerClass}`}>Standard ETA</th>
        <th className={`${headerClass}`}>Day(s) remaining</th>
        <th className={`${headerClass}`}>Actions</th>
      </tr>
    </thead>
  );
};

const OrderPackRow = () => {
  const dataClass = "p-2";

  return (
    <tr>
      <td className={`text-center ${dataClass}`}>
        <input type="checkbox" />
      </td>
      <td className={`${dataClass} font-light break-all text-sm`}>
        das23zxcv1234adsfsdfDasdf
      </td>
      <td className={`text-center ${dataClass}`}>
        <div className="inline-flex gap-1.5 w-full justify-center items-center">
          <p className="font-medium text-gray-800">Lorem ipsum,</p>
          <p className="font-medium text-my-accent text-lg">5x</p>
        </div>
      </td>
      <td className={`${dataClass} text-gray-900 break-words`}>
        John Andrew Doe
      </td>
      <td className={`${dataClass} text-gray-600 break-words`}>
        November 6, 2022
      </td>
      <td className={`${dataClass} text-gray-600 break-words`}>
        November 10, 2022
      </td>
      <td
        className={`${dataClass} text-gray-700 font-medium text-lg text-center`}
      >
        4 day(s)
      </td>
      <td className={`${dataClass} flex items-center justify-center`}>
        <button
          className="bg-gray-300 text-gray-700 font-semibold text-sm 
        px-4 py-1.5 rounded-full bg-opacity-75
        inline-flex items-center gap-2
        transition duration-200 ease-linear
        hover:ring-2 hover:ring-offset-2 hover:ring-gray-300
        active:ring-offset-0 active:ring active:ring-gray-300 active:ring-opacity-30"
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
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print Bill
        </button>
      </td>
    </tr>
  );
};
