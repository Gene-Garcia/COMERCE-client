import React from "react";
import { FormButton } from "../../../../../shared/Components/button/ButtonBase";

function Home() {
  return (
    <>
      <h1>Home</h1>

      <div className="flex flex-col gap-6 items-center">
        <div className="inline-flex gap-4">
          <FormButton
            type="button"
            size="regular"
            text="Sample"
            uppercase="uppercase"
            onClick={() => alert("Holas")}
            to=""
            isLoading={true}
            textColor="text-white"
          />

          <FormButton
            type="button"
            size="regular"
            text="Sample"
            uppercase="uppercase"
            onClick={() => alert("Holas")}
            to=""
            isLoading={false}
            textColor="text-white"
          />
        </div>

        <div className="inline-flex gap-4">
          <FormButton
            type="button"
            size="medium"
            text="Sample"
            uppercase="uppercase"
            onClick={() => alert("Holas")}
            to=""
            isLoading={true}
            textColor="text-white"
          />
          <FormButton
            type="button"
            size="medium"
            text="Sample"
            uppercase="uppercase"
            onClick={() => alert("Holas")}
            to=""
            isLoading={false}
            textColor="text-white"
          />
        </div>

        <div className="inline-flex gap-4">
          <FormButton
            type="button"
            size="large"
            text="Sample"
            uppercase="uppercase"
            onClick={() => alert("Holas")}
            to=""
            isLoading={true}
            textColor="text-white"
          />

          <FormButton
            type="button"
            size="large"
            text="Sample"
            uppercase="uppercase"
            onClick={() => alert("Holas")}
            to=""
            isLoading={false}
            textColor="text-white"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
