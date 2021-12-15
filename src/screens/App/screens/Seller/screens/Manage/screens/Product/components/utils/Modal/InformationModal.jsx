import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAlert from "../../../../../../../../../../../hooks/useAlert";
import { useManageProduct } from "../../../../../../../../../../../hooks/useManage";
import axios from "../../../../../../../../../../../shared/caller";
import Loading from "../../../../../../../../../../../shared/Loading/Loading";
import { formatPrice } from "../../../../../../../../../../../shared/utils/price";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function InformationModal() {
  const { setMessage, setSeverity } = useAlert();
  const history = useHistory();

  const { updateToggledModal, productId } = useManageProduct();
  const closeModal = () => updateToggledModal(false);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProduct(id) {
      await axios
        .get(`/api/seller/product/${id}`)
        .then((res) => {
          console.log(res.data.product);
          if (res.status === 200) setProduct(res.data.product);
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
          else if (err.response.data.status === 403) history.push("/forbidden");
          else if (err.response.data.status === 401)
            history.push("/unauthorized");
          else setMessage(err.response.data.message);
        });
    }

    setLoading(true);
    getProduct(productId);
  }, []);

  return (
    <div className="fixed z-20 inset-0 overflow-auto">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-white shadow-lg rounded-md border border-my-accent border-opacity-30">
          {/* close button */}
          <div className="flex justify-end p-3 ">
            <button
              onClick={closeModal}
              className="py-1 px-1.5 bg-gray-100 rounded 
            inline-flex gap-1 items-center 
            text-sm font-semibold text-black
            transition duration-200 ease-linear
            hover:shadow-md hover:bg-gray-200
            active:bg-red-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CLOSE
            </button>
          </div>

          <>
            {loading || !product ? (
              <Loading />
            ) : (
              <div className="px-8 pb-8 flex flex-row gap-4">
                <div className="flex-shrink space-y-4">
                  <div className="bg-gray-100 rounded-md w-52 h-52 overflow-hidden">
                    <img
                      src={product.imageAddress}
                      className="m-auto object-contain w-min h-min"
                      alt="product-logo"
                    />
                  </div>

                  <div>
                    <Label label="Brand" />
                    <p>{product.brand}</p>
                  </div>

                  <div>
                    <Label label="Category" />
                    <p>{product.category}</p>
                  </div>

                  <div>
                    <Label label="Keywords" />
                    <p>{product.keywords}</p>
                  </div>
                </div>

                <div className="flex-grow space-y-6">
                  <h2 className="font-semibold text-black text-2xl">
                    {product.item}
                  </h2>

                  <div className="inline-flex gap-16">
                    <div>
                      <Label label="Wholesale Price" />
                      <p className="font-medium text-lg text-my-accent">
                        {formatPrice(product.wholesalePrice)}
                      </p>
                      <i className="text-base text-gray-500">
                        Capped at {product.wholesaleCap}
                      </i>
                    </div>

                    <div>
                      <Label label="Retail Price" />
                      <p className="font-medium text-lg text-my-accent">
                        {formatPrice(product.retailPrice)}
                      </p>
                    </div>
                  </div>

                  <div className="w-80">
                    <Label label="Description" />
                    <p className="leading-relaxed">{product.description}</p>
                  </div>

                  <div>
                    <Label label="Inventory" />
                    <p>
                      <span className="text-red-600 text-xl font-medium">
                        569
                      </span>{" "}
                      <span className="text-sm">total inventory</span>
                    </p>

                    <InventoryTable inventory={product._inventory} />
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
export default InformationModal;

function Label({ label }) {
  return (
    <label className="uppercase text-gray-300 text-sm font-medium">
      {label}
    </label>
  );
}

function InventoryTable({ inventory }) {
  return (
    <div className="bg-gray-100 rounded p-1.5">
      <table className="w-full">
        <thead className="">
          <tr className="text-sm font-medium text-gray-400">
            <td>Onhand</td>
            <td>Inventory</td>
            <td>Date</td>
          </tr>
        </thead>

        <tbody>
          {inventory.map((e) => (
            <tr>
              <td>{e.onHand}</td>
              <td>{e.quantity}</td>
              <td>{e.dateStored}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
