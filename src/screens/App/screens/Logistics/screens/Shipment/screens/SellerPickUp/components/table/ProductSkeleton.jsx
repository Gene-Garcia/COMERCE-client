import React from "react";
import {
  Data,
  SkeletonForText,
  SkeletonRow,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";

const ProductSkeleton = () => {
  const dummy = [0, 0, 0, 0, 0];
  return dummy.map((e, i) => (
    <SkeletonRow key={i} grid="grid-cols-14">
      <Data className="col-span-1">
        <SkeletonForText />
      </Data>
      <Data className="col-span-1">
        <SkeletonForText />
      </Data>
      <Data className="col-span-3">
        <SkeletonForText />
      </Data>
      <Data className="col-span-1">
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
      <Data className="col-span-2">
        <SkeletonForText />
      </Data>
    </SkeletonRow>
  ));
};
export default ProductSkeleton;
