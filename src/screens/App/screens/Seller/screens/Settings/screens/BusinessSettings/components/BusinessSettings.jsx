import React from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import AddressCard from "./SettingsCard/CardContents/Forms/AddressCard";
import BusinessInformationCard from "./SettingsCard/CardContents/Forms/BusinessInformationCard";
import OtherInformationCard from "./SettingsCard/CardContents/OtherInformationCard";
import SettingsCard from "./SettingsCard/SettingsCard";

const BusinessSettings = () => {
  return (
    <SellerContainer>
      <SellerTitle title="Business Settings" />

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div className="grid grid-cols-2 gap-6">
        <SettingsCard className="" title="Business Information">
          <BusinessInformationCard />
        </SettingsCard>

        <SettingsCard className="" title="Pick Up Address">
          <AddressCard />
        </SettingsCard>

        <SettingsCard className="" title="Other Information">
          <OtherInformationCard />
        </SettingsCard>
      </div>
    </SellerContainer>
  );
};
export default BusinessSettings;
