import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAllLogistics } from "../../../../../../../../../../redux/Logistics/WithMe/WithMeAction";
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

  //#region checkbox configuration
  const dispatch = useDispatch();
  const checkboxChange = (e) => {
    dispatch(checkAllLogistics(e.target.checked));
  };
  //#endregion

  return (
    <SpaciousTable>
      <Head grid="grid-cols-14">
        <Heading className="col-span-1 text-center">
          <input type="checkbox" onChange={checkboxChange} />
        </Heading>
        <Heading className="col-span-1">Logistics ID</Heading>
        <Heading className="col-span-1">Start</Heading>
        {/* <Heading className="col-span-3">Order(s)</Heading> */}
        <Heading className="col-span-3">Address</Heading>
        <Heading className="col-span-2">Name</Heading>
        <Heading className="col-span-1">Contact</Heading>
        <Heading className="col-span-2">Attempt(s)</Heading>
        <Heading className="col-span-3">Actions</Heading>
      </Head>

      <Body>{isLoading ? <LogisticsSkeleton /> : <RenderLogisticsRow />}</Body>
    </SpaciousTable>
  );
};
export default LogisticsTable;

const RenderLogisticsRow = () => {
  // with me redux states
  const logistics = useSelector((state) => state.WITH_ME.logistics);

  return logistics && logistics.length > 0 ? (
    logistics.map((logistics) => (
      <LogisticsRow key={logistics._id} data={logistics} />
    ))
  ) : (
    <Row grid="grid-cols-1">
      <Data className="col-span-1 py-6 text-center font-medium text-gray-700">
        Congratulations! You have no logistics with you now.
      </Data>
    </Row>
  );
};
