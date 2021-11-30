import React from "react";
import hero from "../../../../../shared/images/dashboard-hero.svg";

function Dashboard() {
  return (
    <div className="w-full h-screen bg-my-off-white px-10 py-8 space-y-8">
      <div className="w-full flex items-center justify-between mb-12 p-4 border border-gray-100 shadow rounded-lg bg-white">
        <div className="inline-flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full border border-gray-200">
            <img
              alt="Avatar"
              src="https://i.ytimg.com/vi/5AwdkGKmZ0I/maxresdefault.jpg"
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <h3 className="font-serif text-2xl text-black font-semibold">
            Business Name
          </h3>
        </div>

        <p className="text-base font-light">28 MONDAY | 9:37 PM</p>
      </div>

      <div className="flex flex-row justify-between gap-10">
        <Card width="w-1/2" addOns="inline-flex justify-between gap-4">
          <p className="w-full font-medium">
            <span className="text-4xl text-gray-600">Welcome Back, </span>
            <span className="text-3xl text-gray-500">John Doe!</span>
          </p>

          <img alt="hero" className="w-2/6 ml-auto drop-shadow-xl" src={hero} />
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
