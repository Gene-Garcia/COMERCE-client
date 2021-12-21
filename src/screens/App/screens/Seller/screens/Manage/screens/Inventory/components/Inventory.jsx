import React, { useEffect } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import axios from "../../../../../../../../../shared/caller";
import { useManageInventory } from "../../../../../../../../../hooks/useManage";
import useAlert from "../../../../../../../../../hooks/useAlert";
import InventoryTable from "./ProductTable/InventoryTable";
import ProductInventories from "./SelectedProduct/ProductInventories";
import AddInventoryForm from "./SelectedProduct/AddInventoryForm";

function Inventory({ history }) {
  const { setMessage, setSeverity } = useAlert();
  const { updateProducts, setLoading } = useManageInventory();

  useEffect(() => {
    async function getProductsInventories() {
      axios
        .get("/api/seller/inventories")
        .then((res) => {
          if (res.status === 200) updateProducts(res.data.products);

          setLoading(false);
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

      <div className="flex flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
        <div className="w-3/5 bg-my-white-tint rounded-lg p-2">
          <InventoryTable />
        </div>

        <div className="w-2/5 h-72 space-y-6">
          <ProductInventories />

          <div className="border-b border-gray-300"></div>

          <AddInventoryForm />
        </div>
      </div>
    </SellerContainer>
  );
}
export default Inventory;
