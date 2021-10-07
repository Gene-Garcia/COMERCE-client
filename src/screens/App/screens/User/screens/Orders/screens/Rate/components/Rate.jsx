import React, { useEffect } from "react";
import { useRate } from "../../../../../../../../../hooks/useRate";
import Container from "../../../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../../../shared/Components/pages/Title";
import ProductLinks from "./ProductLinks";
import SelectedProduct from "./SelectedProduct";
import axios from "../../../../../../../../../shared/caller";
import useAlert from "../../../../../../../../../hooks/useAlert";

function Rate({ history }) {
  // display message
  const { setMessage, setSeverity } = useAlert();
  // rate context
  const { loadProducts, setSelectedProduct, setLoading } = useRate();

  // API Fetch Data
  useEffect(() => {
    async function getProducts() {
      await axios
        .get("/api/rate/unrated")
        .then((res) => {
          setSeverity("success");
          if (res.status === 200) {
            loadProducts(res.data.products);

            // set default selected
            setSelectedProduct(
              res.data.products.length > 0 ? res.data.products[0] : null
            );
            setLoading(false);
          }
        })
        .catch((err) => {
          setSeverity("error");
          if (!err.response)
            setMessage(
              "Something went wrong in fetching the products to rate. Try again."
            );
          else if (err.response.status === 403 || err.response.status === 401) {
            setMessage(err.response.data.error);
            history.push("/user/orders");
          } else setMessage(err.response.data.error);
        });
    }

    getProducts();
  }, []);

  return (
    <>
      <Title title="Rate Orders" />

      <Container>
        <div className="flex flex-row gap-12">
          <div className="w-2/5">
            <div className="rounded-lg shadow-lg p-7">
              <p className="font-medium text-lg text-gray-600 mb-6">
                Products To Rate
              </p>

              <ProductLinks />
            </div>
          </div>

          <div className="w-3/5">
            <div className="rounded-lg shadow-lg p-7">
              <p className="font-medium text-lg text-gray-600 mb-6">
                Selected Product
              </p>

              <SelectedProduct />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Rate;
