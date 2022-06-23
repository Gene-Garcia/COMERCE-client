import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import comerceLogoBlue from "../../../../../../../../../../shared/images/comerce-logo-blue.webp";
import barcode from "../../../../../../../../../../shared/images/barcode.png";
import qrcode from "../../../../../../../../../../shared/images/qrcode.webp";
import signature from "../../../../../../../../../../shared/images/logistics-manager-signature.png";
import Loading from "../../../../../../../../../../shared/Loading/Loading";
import {
  setWaybill,
  toggleModal,
} from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function WaybillModal() {
  // redux pack orders state
  const waybill = useSelector((s) => s.PACK_ORDERS.waybill);

  return (
    <div className="fixed z-20 inset-0 overflow-auto bg-gray-500 bg-opacity-30">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-my-white-tint shadow-lg rounded-lg border border-my-accent border-opacity-30">
          <div className="inline-flex justify-between w-full">
            <PrintModal />
            <CloseModal />
          </div>

          <div className="h-waybill-height w-waybill-width mx-3 mb-3 rounded">
            {waybill ? (
              <WaybillContent />
            ) : (
              <div className="flex w-full h-full justify-center items-center">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default WaybillModal;

const WaybillContent = () => {
  // redux pack orders state
  const { order, business } = useSelector((s) => s.PACK_ORDERS.waybill);
  const { shipmentDetails } = order;

  return (
    <div
      className="w-full h-full grid grid-cols-3 auto-rows-auto 
                divide-y divide-x divide-gray-400
                border-r border-b border-gray-400 rounded"
    >
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
        <img src={qrcode} className="w-max h-max" />
      </div>

      {/* seller */}
      <div className="col-span-2 flex flex-col gap-1">
        <div className="w-full inline-flex justify-between items-center gap-2">
          <Label label="Seller" />

          <Text text={"TO BE IMPLEMENTED"} />
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
    </div>
  );
};

const Label = ({ label }) => {
  return <p className="font-semibold text-gray-700 text-sm">{label}</p>;
};

const Text = ({ text, size = "text-sm" }) => {
  return <p className={`text-black ${size}`}>{text}</p>;
};

function CloseModal() {
  // redux
  const dispatch = useDispatch();

  const close = () => {
    batch(() => {
      dispatch(toggleModal(false));
      dispatch(setWaybill(null));
    });
  };

  return (
    <div className=" p-3">
      <button
        onClick={close}
        className="py-1 px-1.5 bg-my-white-tone rounded 
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
  );
}

const PrintModal = () => {
  return (
    <div className=" p-3 ">
      <button
        className="py-1 px-1.5 bg-my-white-tone rounded 
              inline-flex gap-1 items-center 
              text-sm font-semibold text-black
              transition duration-200 ease-linear
              hover:shadow-md hover:bg-gray-200
              active:bg-blue-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-my-accent"
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
        PRINT
      </button>
    </div>
  );
};
