import React from "react";

const CollapseRow = () => {
  const cellPadding = "px-4 py-2";

  return (
    <td className="" colSpan={6}>
      <div className="flex flex-row justify-start gap-6 px-6 py-4">
        {/* table */}
        <table className="w-4/5 table-fixed rounded shadow h-max">
          <thead className="border-b border-opacity-75 border-my-accent">
            <TableHeadings cellPadding={cellPadding} />
          </thead>

          <tbody>
            <RenderCollapseRow cellPadding={cellPadding} />
          </tbody>
        </table>

        {/* pricing */}
        <div className="w-1/5 flex-shrink-0 text-left place-self-end">
          <Pricings />
        </div>
      </div>
    </td>
  );
};
export default CollapseRow;

const TableHeadings = ({ cellPadding }) => {
  return (
    <>
      <tr className="text-left text-gray-400 font-medium text-sm">
        <th className={`${cellPadding}`}>Product</th>
        <th className={`${cellPadding}`}>Status</th>
        <th className={`${cellPadding}`}>Price</th>
        <th className={`${cellPadding}`}>Quantity</th>
        <th className={`${cellPadding}`}>Subtotal</th>
      </tr>
    </>
  );
};

const RenderCollapseRow = ({ cellPadding }) => {
  return (
    <>
      <tr className="text-left ">
        <td className={`${cellPadding}`}>iPhone XS MAX 256GB Black</td>
        <td className={`${cellPadding}`}>
          <span className=" px-4 rounded-full py-1 bg-my-accent text-white font-medium text-xs">
            Placed
          </span>
        </td>
        <td className={`${cellPadding}`}>P65,099.00</td>
        <td className={`${cellPadding}`}>5 pieces</td>
        <td className={`${cellPadding}`}>P250,000.99</td>
      </tr>
      <tr className="text-left">
        <td className={`${cellPadding}`}>iPhone XS MAX 256GB Black</td>
        <td className={`${cellPadding}`}>
          <span className=" px-4 rounded-full py-1 bg-my-accent text-white font-medium text-xs">
            Placed
          </span>
        </td>
        <td className={`${cellPadding}`}>P65,099.00</td>
        <td className={`${cellPadding}`}>5 pieces</td>
        <td className={`${cellPadding}`}>P250,000.99</td>
      </tr>
    </>
  );
};

const Pricings = () => {
  return (
    <>
      <div className="flex flex-row justify-between gap-2">
        <p className="font-medium text-gray-400 text-opacity-80">Subtotal</p>
        <p className="text-gray-400 font-medium">P250.000.09</p>
      </div>

      <div className="flex flex-row justify-between gap-2">
        <p className="font-medium text-gray-400 text-opacity-80">Shipping</p>
        <p className="text-gray-400 font-medium">P70.00</p>
      </div>

      <div className="mt-4 flex flex-row justify-between gap-2">
        <p className="font-semibold text-gray-400 text-lg">Total</p>
        <p className="text-my-accent text-lg font-medium">P250,070.09</p>
      </div>
    </>
  );
};
