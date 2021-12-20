import React, { useEffect } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import axios from "../../../../../../../../../shared/caller";
import { useManageInventory } from "../../../../../../../../../hooks/useManage";
import useAlert from "../../../../../../../../../hooks/useAlert";

function Inventory({ history }) {
  const { setMessage, setSeverity } = useAlert();
  const { updateProducts, setLoading } = useManageInventory();

  useEffect(() => {
    async function getProductsInventories() {
      axios
        .get("/api/seller/inventories")
        .then((res) => {
          setLoading(false);
          if (res.status === 200) updateProducts(res.data.products);

          console.log(res.data.products);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setSeverity("error");

          if (!err.response)
            setMessage(
              "Something went wrong. Please refresh your browser and try again."
            );
          else if (err.response.status === 401) history.push("/unathorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else setMessage(err.response.data.error);
        });
    }

    setLoading(true);
    getProductsInventories();
  }, []);

  return (
    <SellerContainer>
      <SellerTitle title="Inventory" />

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>
    </SellerContainer>
  );
}
export default Inventory;
