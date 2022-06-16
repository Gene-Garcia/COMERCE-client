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
import PackOrderTable, { HeaderRow } from "./utils/PackOrderTable";
import Loading from "../../../../../../../../../shared/Loading/Loading";
import { loadOrders } from "../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";

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
            dispatch(loadOrders(res.data.orders));
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
        {loading ? (
          <div>
            <table className="bg-my-white-tint w-full rounded">
              <HeaderRow />

              <tbody>
                <tr>
                  <td className="text-center py-8" colSpan="8">
                    <Loading />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <PackOrderTable />
          </div>
        )}
      </div>
    </SellerContainer>
  );
};
export default Pack;
