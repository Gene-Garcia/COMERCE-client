import React from "react";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import LogisticsRow from "./LogisticsRow";
import LogisticsSkeleton from "./LogisticsSkeleton";

const LogisticsTable = () => {
  return (
    <SpaciousTable>
      <Head grid="grid-cols-15">
        <Heading className="col-span-1 text-center">
          <input type="checkbox" />
        </Heading>
        <Heading className="col-span-1">Logistics ID</Heading>
        <Heading className="col-span-2">Order(s)</Heading>
        <Heading className="col-span-3">Address</Heading>
        <Heading className="col-span-2">Name</Heading>
        <Heading className="col-span-1">Date Started</Heading>
        <Heading className="col-span-1">Order ETA</Heading>
        <Heading className="col-span-2">Attempt(s)</Heading>
        <Heading className="col-span-2">Actions</Heading>
      </Head>

      <Body>{!true ? <LogisticsSkeleton /> : <RenderLogisticsRow />}</Body>
    </SpaciousTable>
  );
};
export default LogisticsTable;

const RenderLogisticsRow = () => {
  return <LogisticsRow />;
};
