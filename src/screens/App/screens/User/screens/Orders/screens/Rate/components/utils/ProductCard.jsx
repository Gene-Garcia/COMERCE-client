import React from "react";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import { Link } from "react-router-dom";

function ProductCardLink() {
  return (
    <div className="shadow rounded-md flex flex-row">
      <img
        src="https://asset1.ee.co.uk/medias/samsung-galaxy-z-fold3-5g-256gb-black-desktop-detail-1-Format-976?context=bWFzdGVyfHJvb3R8OTE4NjE0fGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaDI0L2hlZS85NzAzMjk0NDY4MTI2L3NhbXN1bmctZ2FsYXh5LXotZm9sZDMtNWctMjU2Z2ItYmxhY2stZGVza3RvcC1kZXRhaWwtMV9Gb3JtYXQtOTc2fDNmZDkyNjAyYWNjNmY4ZjcwNjA1MTVmMTcwZTIxMDUyOWNjZmZhYWMyMjc1ZDcwNmI4ZmE1M2FmMmZjYjFjYzk"
        alt="product-image"
        className="object-contain w-24 flex-shrink-0"
      />

      <div className="flex flex-row justify-between flex-grow flex-shrink px-4 py-2">
        <div className="flex flex-col justify-between">
          <p className="text-xl font-medium text-gray-600">Smartphone</p>
          <p className="text-my-accent text-lg font-medium">{`₱${formatPrice(
            69999
          )}`}</p>
        </div>

        <div className="space-y-0 text-right">
          <p className="text-gray-400">Order ID</p>
          <Link
            to="/users/orders?p=dsasdfasfas"
            className="transition duration-200 font-medium text-md text-gray-400 hover:text-gray-900"
          >
            xsdf51231234szxcv8g213
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCardDisplay() {
  return (
    <>
      <div className="flex flex-row">
        <img
          src="https://asset1.ee.co.uk/medias/samsung-galaxy-z-fold3-5g-256gb-black-desktop-detail-1-Format-976?context=bWFzdGVyfHJvb3R8OTE4NjE0fGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaDI0L2hlZS85NzAzMjk0NDY4MTI2L3NhbXN1bmctZ2FsYXh5LXotZm9sZDMtNWctMjU2Z2ItYmxhY2stZGVza3RvcC1kZXRhaWwtMV9Gb3JtYXQtOTc2fDNmZDkyNjAyYWNjNmY4ZjcwNjA1MTVmMTcwZTIxMDUyOWNjZmZhYWMyMjc1ZDcwNmI4ZmE1M2FmMmZjYjFjYzk"
          alt="product"
          className="w-1/4"
        />

        <div className="flex flex-col justify-between px-4 py-1.5">
          <p className="font-medium text-2xl text-gray-600">Smart Watch</p>

          <div>
            <p className="text-gray-400">Order ID</p>
            <Link
              to="/users/orders?p=dsasdfasfas"
              className="transition duration-200 font-medium text-md text-gray-400 hover:text-gray-900"
            >
              xsdf51231234szxcv8g213
            </Link>
          </div>

          <div className="flex flex-row gap-10">
            <div>
              <p className="text-gray-400">Date Ordered</p>
              <p className="font-medium text-md text-gray-500">
                September 16, 2020
              </p>
            </div>

            <div>
              <p className="text-gray-400">Date Ordered</p>
              <p className="font-medium text-md text-gray-500">
                September 16, 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductCardLink, ProductCardDisplay };
