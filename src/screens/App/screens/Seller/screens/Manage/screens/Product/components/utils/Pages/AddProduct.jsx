import React from "react";
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

function AddProduct() {
  // api call
  const submitProductAPI = () => {};

  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("productName" in data)
      temp.productName = data.productName ? "" : "Product name is required";

    if ("price" in data) temp.price = data.price ? "" : "Price is required";

    if ("category" in data)
      temp.category = data.category ? "" : "Category is required";

    if ("brand" in data)
      temp.brand = data.brand ? "" : "Brand name is required";

    if ("description" in data)
      temp.description = data.description ? "" : "Description is required";

    if ("keywords" in data)
      temp.keywords = data.keywords ? "" : "Atleast 1 keyword is required";

    if ("images" in data)
      temp.images = data.images ? "" : "Image address is required";

    setErrors(temp);
  };

  const init = {
    productName: "",
    price: "",
    category: "",
    brand: "",
    description: "",
    keywords: "",
    images: "",
  };
  const {
    values,
    errors,
    isLoading,
    setIsLoading,
    handleInput,
    handleFormSubmit,
  } = useForm(init, init, validate, submitProductAPI);

  return (
    <div>
      <div className="flex flex-row gap-20 justify-between">
        <div className="w-1/2 space-y-8">
          <NameInput
            name="productName"
            value={values.productName}
            error={errors.productName}
            onChange={handleInput}
            placeholder="Name of your new product"
          />

          <PriceInput
            name="price"
            value={values.price}
            error={errors.price}
            onChange={handleInput}
            placeholder="Price of the product in peso"
          />

          <DataListInput
            name="category"
            value={values.category}
            error={errors.category}
            onChange={handleInput}
            placeholder="Select a category from the list"
          />

          <DefaultInput
            label="Brand"
            name="brand"
            value={values.brand}
            error={errors.brand}
            onChange={handleInput}
            placeholder="The brand name of your product"
          />

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

        <div className="w-1/2 space-y-6">
          <GalleryInput
            name="images"
            value={values.images}
            error={errors.images}
            onChange={handleInput}
          />

          <div className="border-b border-gray-300 rounded"></div>

          <SubmitCTA onClick={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
