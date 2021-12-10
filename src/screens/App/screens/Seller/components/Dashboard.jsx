import React, { useEffect, useState } from "react";
import hero from "../../../../../shared/images/dashboard-hero.svg";
import axios from "../../../../../shared/caller";
import useAlert from "../../../../../hooks/useAlert";
import Loading from "../../../../../shared/Loading/Loading";
import { getCookieByKey } from "../../../../../shared/Auth/Login";

function Dashboard({ history }) {
  // alert
  const { setMessage, setSeverity } = useAlert();

  // loading state
  const [loading, setLoading] = useState(false);

  // state data for dashboard data
  const [data, setData] = useState({});

  // useEffect to populate dashboard data
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await axios
        .get("/api/seller/dashboard")
        .then((res) => {
          if (res.status === 200) {
            // setData(res.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);

          setSeverity("error");
          if (!err.response) {
            setMessage("Something went wrong. Please try again.");
            history.push("/login/seller");
          } else if (err.response.status === 401) history.push("/unathorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else {
            setMessage(err.response.data.error);
            history.push("/login/seller");
          }
        });
    };

    getData();
  }, []);

  return (
    <div className="px-8 py-6">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full bg-my-off-white space-y-8">
          <div className="flex flex-row justify-between gap-10">
            <Card width="w-1/2" addOns="inline-flex justify-between gap-4">
              <p className="w-full font-medium">
                <span className="text-4xl text-gray-600">Welcome Back, </span>
                <span className="text-3xl text-gray-500">
                  {getCookieByKey(process.env.REACT_APP_LS_USERNAME_KEY)}!
                </span>
              </p>

              <img
                alt="hero"
                className="w-2/6 ml-auto drop-shadow-xl"
                src={hero}
              />
            </Card>

            <Card width="w-1/2">
              <CardTitle>Sales</CardTitle>
            </Card>
          </div>

          <div className="flex flex-row justify-between gap-10">
            <Card width="w-2/5">
              <CardTitle>Notice</CardTitle>
            </Card>

            <Card width="w-3/5">
              <CardTitle>Famous Products</CardTitle>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
export default Dashboard;

function Card({ children, width, addOns }) {
  return (
    <div className={`${width} p-9 shadow-lg rounded-lg bg-white ${addOns}`}>
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return <p className="text-xl font-regular text-black">{children}</p>;
}
