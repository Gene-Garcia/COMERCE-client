import React from "react";
import { useSelector } from "react-redux";
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
  // with me redux states
  const isLoading = useSelector((state) => state.WITH_ME.isLoading);

  return (
    <SpaciousTable>
      <Head grid="grid-cols-16">
        <Heading className="col-span-1 text-center">
          <input type="checkbox" />
        </Heading>
        <Heading className="col-span-1">Logistics ID</Heading>
        <Heading className="col-span-1">Start</Heading>
        <Heading className="col-span-4">Order(s)</Heading>
        <Heading className="col-span-2">Address</Heading>
        <Heading className="col-span-1">Name</Heading>
        <Heading className="col-span-2">Contact</Heading>
        <Heading className="col-span-3">Attempt(s)</Heading>
        <Heading className="col-span-1">Actions</Heading>
      </Head>

      <Body>{isLoading ? <LogisticsSkeleton /> : <RenderLogisticsRow />}</Body>
    </SpaciousTable>
  );
};
export default LogisticsTable;

const RenderLogisticsRow = () => {
  // with me redux states
  const logistics = useSelector((state) => state.WITH_ME.logistics);

  return logistics ? (
    logistics.map((logistics) => (
      <LogisticsRow key={logistics._id} data={logistics} />
    ))
  ) : (
    <Row grid="grid-cols-1">
      <Data className="col-span-1 text-center">
        Congratulations! You have no logistics with you now.
      </Data>
    </Row>
  );
};
