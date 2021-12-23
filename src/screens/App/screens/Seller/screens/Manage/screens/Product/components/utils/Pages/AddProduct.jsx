import React, { useEffect } from "react";
import { useForm } from "../../../../../../../../../../../hooks/useForm";

import axios from "../../../../../../../../../../../shared/caller";
import useAlert from "../../../../../../../../../../../hooks/useAlert";
import { useHistory } from "react-router-dom";
import { useManageProduct } from "../../../../../../../../../../../hooks/useManage";
import { InputFirst } from "../../../../../../../../../../../shared/Components/input/InputBase";
import { EmbossedInput } from "../../../../../../../../../../../shared/Components/input/Inputs";
import Button from "../../../../../../../../../../../shared/Components/button/Button";

function AddProduct() {
  const history = useHistory();
  const { setMessage, setSeverity } = useAlert();
  const { updateToggled } = useManageProduct();

  // api call
  const submitProductAPI = async () => {
    await axios
      .post("/api/product/upload", { data: values })
      .then((res) => {
        setIsLoading(false);
        setSeverity("success");
        if (res.status === 201) {
          setMessage(res.data.message);
          // return to overview
          updateToggled("OVERVIEW");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setSeverity("error");

        if (!err.response)
          setMessage(
            "Something went wrong. Please refresh your browser and try again"
          );
        else if (err.response.data.status === 403) history.push("/forbidden");
        else if (err.response.data.status == 401) history.push("/unathorized");
        else setMessage(err.response.data.error);
      });
  };

  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("item" in data) temp.item = data.item ? "" : "Product name is required";

    if ("retailPrice" in data) {
      temp.retailPrice = data.retailPrice ? "" : "Retail price is required";

      if (!temp.retailPrice)
        temp.retailPrice = isNaN(data.retailPrice) ? "Numerical value" : "";

      const tempRetailPrice = parseInt(data.retailPrice);
      if (!temp.retailPrice)
        temp.retailPrice = tempRetailPrice > 0 ? "" : "Cannot be 0";
    }

    if ("category" in data)
      temp.category = data.category ? "" : "Category is required";

    if ("brand" in data)
      temp.brand = data.brand ? "" : "Brand name is required";

    if ("description" in data) {
      temp.description = data.description ? "" : "Description is required";

      if (!temp.description)
        temp.description =
          data.description.length >= 30 ? "" : "Atleast 30 characters";
    }

    if ("keywords" in data)
      temp.keywords = data.keywords ? "" : "Atleast 1 keyword is required";

    if ("imageAddress" in data)
      temp.imageAddress = data.imageAddress ? "" : "Image address is required";

    if ("inventory" in data) {
      temp.inventory = data.inventory ? "" : "Atleast 0 inventory";

      if (!temp.inventory)
        temp.inventory = isNaN(data.inventory) ? "Numerical value" : "";

      const tempInventory = parseInt(data.inventory);
      if (!temp.inventory)
        temp.inventory = tempInventory >= 0 ? "" : "Cannot be negative";
    }

    if ("wholesalePrice" in data) {
      temp.wholesalePrice = data.wholesalePrice ? "" : "Wholesale is required";

      if (!temp.wholesalePrice)
        temp.wholesalePrice = data.wholesalePrice > 0 ? "" : "Cannot be 0";

      if (!temp.wholesalePrice)
        temp.wholesalePrice = isNaN(data.wholesalePrice)
          ? "Numerical value"
          : "";

      const tempWholesalePrice = parseInt(data.wholesalePrice);
      const tempRetailPrice = parseInt(values.retailPrice);
      if (!temp.wholesalePrice)
        temp.wholesalePrice =
          tempWholesalePrice < tempRetailPrice ? "" : "Only lower than retail";
    }

    if ("wholesaleCap" in data) {
      temp.wholesaleCap = data.wholesaleCap ? "" : "Cap is required";

      if (!temp.wholesaleCap)
        temp.wholesaleCap = data.wholesaleCap > 0 ? "" : "Cannot be 0";

      if (!temp.wholesaleCap)
        temp.wholesaleCap = isNaN(data.wholesaleCap) ? "Numerical value" : "";
    }

    setErrors(temp);
  };

  const init = {
    item: "",
    retailPrice: "",
    inventory: "",
    wholesalePrice: "",
    wholesaleCap: "",
    category: "",
    brand: "",
    description: "",
    keywords: "",
    imageAddress: "",
  };
  const {
    values,
    errors,
    isLoading,
    setIsLoading,
    handleInput,
    handleFormSubmit,
    resetForms,
  } = useForm(init, init, validate, submitProductAPI);

  // useEffect cleanup
  useEffect(() => {
    return () => resetForms();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 xl:gap-10 2xl:gap-20 justify-between">
      <div className=" w-full xl:w-3/5 lg:w-1/2 space-y-5 lg:space-y-7 xl:space-y-8">
        <InputFirst
          label="Product Name"
          error={errors.item}
          type="text"
          name="item"
          value={values.item}
          onChange={handleInput}
          placeholder="Name of your new product"
          border="py-1.5 border-b-2 rounded-t shadow"
          inputStyle="bg-transparent rounded-t-sm px-2 text-lg"
          focusWithin="focus-within:border-my-accent"
        />

        <div
          className="flex w-full 
          flex-col xs:flex-row gap-4 xl:gap-6 "
        >
          <EmbossedInput
            type="number"
            name="retailPrice"
            value={values.retailPrice}
            onChange={handleInput}
            placeholder="Price in peso"
            label="Retail Price"
            error={errors.retailPrice}
            width="w-4/6 xs:w-1/2 sm:w-5/12 lg:w-3/5 xl:w-5/12"
            icon={
              <span
                className="rounded bg-white px-1
                text-my-accent font-semibold text-md "
              >
                PHP
              </span>
            }
          />

          <EmbossedInput
            type="number"
            label="Onhand"
            name="inventory"
            value={values.inventory}
            error={errors.inventory}
            onChange={handleInput}
            width="w-2/5 xs:w-1/2 sm:w-2/6 lg:w-2/5 xl:w-1/4"
          />
        </div>

        {/* wholesale details */}
        <div
          className="flex w-full 
          flex-col xs:flex-row gap-4 xl:gap-6 "
        >
          <EmbossedInput
            type="number"
            label="Wholesale Price"
            name="wholesalePrice"
            value={values.wholesalePrice}
            error={errors.wholesalePrice}
            onChange={handleInput}
            placeholder="Price in peso"
            width="w-4/6 xs:w-1/2 sm:w-5/12 lg:w-3/5 xl:w-5/12"
            icon={
              <span
                className="rounded bg-white px-2 py-1.5
                text-my-accent font-semibold text-md "
              >
                PHP
              </span>
            }
          />

          <EmbossedInput
            type="number"
            label="Wholesale Cap"
            name="wholesaleCap"
            value={values.wholesaleCap}
            error={errors.wholesaleCap}
            onChange={handleInput}
            width="w-2/5 xs:w-1/2 sm:w-2/6 lg:w-2/5 xl:w-1/4"
          />
        </div>

        <div className="flex flex-col xs:flex-row md:flex-col xl:flex-row gap-4 xl:gap-6 w-full">
          <EmbossedInput
            type="datalist"
            name="category"
            label="Category"
            value={values.category}
            error={errors.category}
            onChange={handleInput}
            placeholder="Category of product"
            width="w-full xs:w-3/5 lg:w-full"
            listId="category-list"
            listData={[{ value: "Some Value", text: "Some value" }]}
          />

          <EmbossedInput
            type="text"
            label="Brand"
            name="brand"
            value={values.brand}
            error={errors.brand}
            onChange={handleInput}
            placeholder="Brand of product"
            width="w-full xs:w-3/5 lg:w-full"
          />
        </div>

        <EmbossedInput
          type="textarea"
          label="Product Description"
          name="description"
          value={values.description}
          error={errors.description}
          onChange={handleInput}
          placeholder="Description of the product"
        />

        <EmbossedInput
          type="text"
          label="Keywords"
          helper="seperate tags using a coma ',' "
          name="keywords"
          value={values.keywords}
          error={errors.keywords}
          onChange={handleInput}
          placeholder="Keywords to easily search your product"
        />
      </div>

      <div className="w-full xl:w-2/5 lg:w-1/2 space-y-6">
        <GalleryInput
          name="imageAddress"
          value={values.imageAddress}
          error={errors.imageAddress}
          onChange={handleInput}
        />

        <div className="border-b border-gray-300 rounded"></div>

        <Button
          isLoading={isLoading}
          onClick={handleFormSubmit}
          buttonClass="bg-my-accent text-white px-8 sm:px-10 md:px-12 py-3 font-semibold text-sm uppercase 
      transition duration-200 ease-linear rounded
      hover:ring-2 hover:ring-my-accent hover:ring-opacity-70 hover:ring-offset-2
      active:ring active:ring-my-accent active:ring-opacity-30 "
          svgClass="text-white"
        >
          Upload Product
        </Button>
      </div>
    </div>
  );
}
export default AddProduct;

function GalleryInput({ name, value, error, onChange }) {
  return (
    <div className="space-y-2">
      {/* preview of image */}
      <div className="h-28 lg:h-36 xl:h-40 bg-my-white-tint bg-opacity-70 rounded flex items-center p-4">
        {!value || value === "" ? (
          <span className="font-medium text-base text-gray-500">
            Preview of the image
          </span>
        ) : (
          <img
            alt="Image preview"
            src={value}
            className="object-contain h-full"
          />
        )}
      </div>

      <div className="flex flex-col xs:flex-row gap-4">
        <label className="h-14 lg:h-16 w-14 lg:w-16 flex items-center justify-center cursor-pointer text-gray-800 bg-my-white-tint transition duration-200 ease-linear hover:bg-gray-200 hover:shadow active:text-my-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 lg:h-8 w-7 lg:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>

          <input
            type="file"
            className="hidden"
            accept="image"
            // name={name}
            // onChange={onChange}
            // value={value}
          />
        </label>

        <EmbossedInput
          type="text"
          label="Temporary"
          name={name}
          value={value}
          error={error}
          onChange={onChange}
          width="w-full"
          placeholder="Image address"
        />
      </div>
    </div>
  );
}
