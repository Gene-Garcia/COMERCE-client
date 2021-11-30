import React from "react";

function Dashboard() {
  return (
    <div className="w-full h-screen bg-my-off-white px-10 py-8">
      <Card addOns="flex items-center justify-between">
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
      </Card>
    </div>
  );
}
export default Dashboard;

function Card({ children, width, addOns }) {
  return (
    <div
      className={`${width} ${addOns} p-4 border border-gray-100 shadow rounded-lg bg-white`}
    >
      {children}
    </div>
  );
}
