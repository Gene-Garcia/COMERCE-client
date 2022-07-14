import React from "react";
import { LogisticsContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { LogisticsTitle } from "../../../../../../../../../shared/Components/pages/Title";
import LogisticsTable from "./Table/LogisticsTable";

const WithMe = () => {
  return (
    <LogisticsContainer>
      <LogisticsTitle title="With Me" />
      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div>
        <div>
          <LogisticsTable />
        </div>
      </div>
    </LogisticsContainer>
  );
};

export default WithMe;
