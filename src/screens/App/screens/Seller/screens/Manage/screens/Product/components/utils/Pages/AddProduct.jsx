import React, { useEffect } from "react";
import { useForm } from "../../../../../../../../../../../hooks/useForm";
import {
  AreaInput,
  DataListInput,
  DefaultInput,
  GalleryInput,
  NameInput,
  PriceInput,
  SubmitCTA,
} from "../ProductForm";
import axios from "../../../../../../../../../../../shared/caller";
import useAlert from "../../../../../../../../../../../hooks/useAlert";
import { useHistory } from "react-router-dom";
import { useManageProduct } from "../../../../../../../../../../../hooks/useManage";

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
        <NameInput
          name="item"
          value={values.item}
          error={errors.item}
          onChange={handleInput}
          placeholder="Name of your new product"
        />

        <div
          className="flex w-full 
          flex-col xs:flex-row gap-4 xl:gap-6 "
        >
          <PriceInput
            label="Retail Price"
            name="retailPrice"
            value={values.retailPrice}
            error={errors.retailPrice}
            onChange={handleInput}
            placeholder="Price in peso"
            width="w-4/6 xs:w-1/2 sm:w-5/12 lg:w-3/5 xl:w-5/12"
          />

          <DefaultInput
            type="number"
            label="Stock Onhand"
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
          <PriceInput
            label="Wholesale Price"
            name="wholesalePrice"
            value={values.wholesalePrice}
            error={errors.wholesalePrice}
            onChange={handleInput}
            placeholder="Price in peso"
            width="w-4/6 xs:w-1/2 sm:w-5/12 lg:w-3/5 xl:w-5/12"
          />

          <DefaultInput
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
          <DataListInput
            name="category"
            value={values.category}
            error={errors.category}
            onChange={handleInput}
            placeholder="Category of product"
            width="w-full xs:w-3/5 lg:w-full"
          />

          <DefaultInput
            label="Brand"
            name="brand"
            value={values.brand}
            error={errors.brand}
            onChange={handleInput}
            placeholder="Brand of product"
            width="w-full xs:w-3/5 lg:w-full"
          />
        </div>

        <AreaInput
          label="Product Description"
          name="description"
          value={values.description}
          error={errors.description}
          onChange={handleInput}
          placeholder="Description of the product"
        />

        <DefaultInput
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

        <SubmitCTA isLoading={isLoading} onClick={handleFormSubmit} />
      </div>
    </div>
  );
}
export default AddProduct;
