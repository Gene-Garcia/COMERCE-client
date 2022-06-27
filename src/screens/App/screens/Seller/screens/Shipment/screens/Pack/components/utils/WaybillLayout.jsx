import React from "react";
import { useSelector } from "react-redux";
import comerceLogoBlue from "../../../../../../../../../../shared/images/comerce-logo-blue.webp";
import barcode from "../../../../../../../../../../shared/images/barcode.png";
import qrcode from "../../../../../../../../../../shared/images/qrcode.webp";
import signature from "../../../../../../../../../../shared/images/logistics-manager-signature.png";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const WaybillLayout = ({ order, business }) => {
  const { shipmentDetails } = order;

  return (
    <>
      {/* comerce logo */}
      <div
        className="col-span-2 
            flex flex-row items-center justify-center gap-3
            border-l border-t border-gray-400"
      >
        <img src={comerceLogoBlue} className="w-12 h-auto" />
        <p className="font-mono tracking-wider text-lg text-black">COMERCE</p>
      </div>

      {/* logistics address */}
      <div
        className="flex flex-col justify-center
            text-center text-sm font-medium text-gray-500"
      >
        <p>San Pedro Laguna, Central Hub</p>
      </div>

      {/* barcode logistics id */}
      <div className="col-span-3 p-1 flex items-center justify-center">
        <img src={barcode} className="h-auto w-60" />
      </div>

      {/* customer Receiver */}
      <div className="col-span-2 flex flex-col gap-1">
        <div className="w-full inline-flex justify-between items-center gap-2">
          <Label label="Receiver" />

          <Text text={`+63 ${shipmentDetails.cellphoneNumber}`} />
        </div>

        <Text
          text={`${shipmentDetails.firstName} ${shipmentDetails.lastName}`}
        />

        <div className="max-h-16 break-all overflow-ellipsis overflow-hidden">
          <Text
            text={`${shipmentDetails.streetAddress}, ${shipmentDetails.barangay}, ${shipmentDetails.cityMunicipality}, ${shipmentDetails.province}`}
          />
        </div>
      </div>

      {/* qrcode order id and data */}
      <div className="row-span-2 flex items-center justify-center">
        <img src={qrcode} className="w-28 h-28" />
      </div>

      {/* seller */}
      <div className="col-span-2 flex flex-col gap-1">
        <div className="w-full inline-flex justify-between items-center gap-2">
          <Label label="Seller" />

          <Text text={`+63 ${business.contactNumber}`} />
        </div>

        <Text text={business.businessName} />

        <div className="max-h-12 break-all overflow-ellipsis overflow-hidden">
          <Text
            text={`${business.pickUpAddress.street}, ${business.pickUpAddress.barangay}, ${business.pickUpAddress.cityMunicipality}, ${business.pickUpAddress.province}`}
          />
        </div>
      </div>
      {/* name of goods */}
      <div className="col-span-3 flex flex-col gap-2">
        <Label label="Goods" />

        <div className="max-h-12 break-all overflow-ellipsis overflow-hidden">
          <Text
            size="text-xs"
            text={order.orderedProducts
              .map((product) => product._product.item)
              .join(", ")}
          />
        </div>
      </div>
      <div className="col-span-3 inline-flex justify-evenly items-center">
        <div>
          <Label label="Payment" />
          <Text text={methods[order.paymentMethod]} />
        </div>

        <div>
          <Label label="Amount" />
          <Text
            text={`₱${formatPrice(
              order.orderedProducts.reduce(
                (accumulator, product) => accumulator + product.priceAtPoint,
                0
              )
            )}`}
          />
        </div>

        <div className="">
          <Label label="# of Goods" />
          <Text
            text={order.orderedProducts.reduce(
              (accumulator, product) => accumulator + product.quantity,
              0
            )}
          />
        </div>
      </div>
      {/* logistics manager signature */}
      <div className="flex items-center justify-center">
        <img src={signature} className="h-16 object-contain" />
      </div>
      {/* main office address */}
      <div className="col-span-2 flex items-center justify-center">
        <p className="text-sm font-medium text-gray-800">
          35th Floor, G.T. International Tower, 6813 Ayala Avenue, H.V. Dela
          Costa, Makati
        </p>
      </div>
    </>
  );
};
export default WaybillLayout;

const Label = ({ label }) => {
  return <p className="font-semibold text-gray-700 text-sm">{label}</p>;
};

const Text = ({ text, size = "text-sm" }) => {
  return <p className={`text-black ${size}`}>{text}</p>;
};
