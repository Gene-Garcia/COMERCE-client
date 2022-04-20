import React, { useEffect, useState } from "react";
import axios from "../../../../../../../../../../../shared/caller";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../../redux/Alert/AlertAction";
import { formatDate } from "../../../../../../../../../../../shared/utils/date";

const OtherInformationCard = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // data
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [established, setEstablished] = useState("");
  const [created, setCreated] = useState("");

  // retrieve business information
  useEffect(() => {
    async function getOtherBusinessInformation() {
      await axios
        .get("/api/seller/business/other-information")
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setEmail(res.data.businessEmail);
            setEstablished(res.data.established);
            setCreated(res.data.dateCreated);

            setLoading(false);
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong. Refresh the page or try again later."
                )
              );
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("/unauthorized");
          else {
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
          }
        });
    }

    getOtherBusinessInformation();
  }, []);

  // clean up
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="space-y-4">
      {loading ? (
        <>
          <p>Loading</p>
        </>
      ) : (
        <>
          <UneditableInput width="w-3/4" text={email} label="Business Email" />
          <UneditableInput
            width="w-1/2"
            text={formatDate(established, 1)}
            label="ESTABLISHED"
          />
          <UneditableInput
            width="w-1/2"
            text={formatDate(created, 1)}
            label="DATE CREATED"
          />
        </>
      )}
    </div>
  );
};
export default OtherInformationCard;

const UneditableInput = ({ width, text, label }) => {
  return (
    <div className={`${width}`}>
      <label className="uppercase text-gray-400 font-semibold text-sm">
        {label}
      </label>

      <p className="shadow-md rounde-dm px-2 py-1.5">{text}</p>
    </div>
  );
};
