import React, { useState } from "react";
import { FaRegAddressCard, FaCreditCard, FaTruck } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { API_URL } from "../components/Variable";
const Pagecheckout = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {
    cartItems: [],
    totalPrice: 0,
  };

  const shippingCharge = totalPrice >= 500 ? 0 : 50;
  const taxAmount = totalPrice * 0.18;
  const grandTotal = totalPrice + shippingCharge + taxAmount;


  return (
    <>
      <div className="max-w-6xl  mx-auto p-6 flex flex-col-reverse md:flex-row gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6 md:w-[800px]">
          {/* Contact Info */}
          <div className="border border-gray-600 p-6 rounded-lg">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <FaRegAddressCard /> CONTACT INFO
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Your phone number"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border p-2 rounded-md w-full border-gray-300"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold border-b pb-2">
              <FaTruck /> SHIPPING ADDRESS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Address line 1"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Apt, Suite"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Address line 2"
                className="border p-2 rounded-md w-full md:col-span-2 border-gray-300"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Country"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="State/Province"
                className="border p-2 rounded-md w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Postal code"
                className="border p-2 rounded-md w-full border-gray-300"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <FaCreditCard /> PAYMENT
            </h3>
            <div className="mt-4 flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  className="accent-black"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  className="accent-black"
                />
                Online / Netbanking
              </label>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="border p-6 rounded-lg shadow-sm bg-gray-50">
          <h3 className="text-lg font-semibold">Order summary</h3>
          <div className="mt-4 space-y-4">
            {/* Product Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-3"
              >
                <img
                  src={`${API_URL}/${JSON.parse(item.product.images)[0]}`}
                  alt={item.product.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">{item.product.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-sm">
                  ₹{(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            {/* Price Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>total</span> <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping estimate</span> <span>₹{shippingCharge}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax estimate</span> <span>₹{taxAmount}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Order total</span> <span>₹{grandTotal}</span>
              </div>
            </div>

            {/* Confirm Order Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-900 transition">
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagecheckout;
