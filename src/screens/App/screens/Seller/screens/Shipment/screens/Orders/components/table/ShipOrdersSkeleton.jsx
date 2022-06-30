import React from "react";
import {
  Data,
  SkeletonForText,
  SkeletonRow,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";

const ShipOrdersSkeleton = () => {
  const dummy = [0, 0, 0, 0, 0];
  return (
    <>
      {dummy.map((e, i) => (
        <SkeletonRow key={i} grid="grid-cols-12">
          <Data className="col-span-1">
            <SkeletonForText />
          </Data>
          <Data className="col-span-1">
            <SkeletonForText />
          </Data>
          <Data className="col-span-4">
            <SkeletonForText />
          </Data>
          <Data className="col-span-2">
            <SkeletonForText />
          </Data>
          <Data className="col-span-2">
            <SkeletonForText />
          </Data>
          <Data className="col-span-2">
            <SkeletonForText />
          </Data>
        </SkeletonRow>
      ))}
    </>
  );
};
export default ShipOrdersSkeleton;
