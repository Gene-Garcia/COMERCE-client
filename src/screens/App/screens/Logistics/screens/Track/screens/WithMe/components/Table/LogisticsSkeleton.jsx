import React from "react";
import {
  Data,
  Row,
  SkeletonForText,
  SkeletonRow,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";

const LogisticsSkeleton = () => {
  const dummy = [0, 0, 0, 0, 0];
  return dummy.map((e, i) => (
    <SkeletonRow key={i} grid="grid-cols-15">
      <Data className="col-span-1">
        <SkeletonForText />
      </Data>

      <Data className="col-span-1">
        <SkeletonForText />
      </Data>

      <Data className="col-span-2">
        <SkeletonForText />
      </Data>

      <Data className="col-span-3">
        <SkeletonForText />
      </Data>

      <Data className="col-span-2">
        <SkeletonForText />
      </Data>

      <Data className="col-span-1">
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
    </SkeletonRow>
  ));
};
export default LogisticsSkeleton;
