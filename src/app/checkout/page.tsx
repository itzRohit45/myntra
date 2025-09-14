"use client";

import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const subtotal = getCartTotal();
  const deliveryCharge = subtotal > 999 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formState.fullName.trim()) errors.fullName = "Full name is required";
    
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formState.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formState.phone.trim())) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formState.address.trim()) errors.address = "Address is required";
    if (!formState.city.trim()) errors.city = "City is required";
    if (!formState.state.trim()) errors.state = "State is required";
    
    if (!formState.pincode.trim()) {
      errors.pincode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formState.pincode.trim())) {
      errors.pincode = "Please enter a valid 6-digit PIN code";
    }
    
    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit order
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      setIsSubmitting(false);
    }, 1500);
  };

  // If cart is empty, redirect to cart page
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Please add some items to your cart before checkout.
          </p>
          <Link
            href="/products"
            className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Order confirmation screen
  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-green-500 text-6xl" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. Your order has been placed successfully and will be processed soon.
          </p>
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Order Details</p>
            <p className="text-gray-600 text-sm">Order Amount: ₹{total.toFixed(2)}</p>
            <p className="text-gray-600 text-sm">Order Date: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600 text-sm">Payment Method: {formState.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}</p>
          </div>
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/orders"
              className="px-6 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-50 transition-colors"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your 10-digit phone number"
                    maxLength={10}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address*
                  </label>
                  <textarea
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    rows={3}
                    placeholder="Enter your full address"
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formState.city}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.city ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your city"
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formState.state}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.state ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your state"
                  />
                  {formErrors.state && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PIN Code*
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formState.pincode}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.pincode ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your 6-digit PIN code"
                    maxLength={6}
                  />
                  {formErrors.pincode && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.pincode}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formState.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="cod" className="ml-2 text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="online"
                      name="paymentMethod"
                      value="online"
                      checked={formState.paymentMethod === "online"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="online" className="ml-2 text-gray-700">
                      Online Payment (Credit Card / Debit Card / UPI)
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <button
                  type="submit"
                  className={`w-full md:w-auto px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "PLACE ORDER"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">
              Order Summary ({cart.length} items)
            </h2>

            {/* Product List */}
            <div className="max-h-80 overflow-y-auto mb-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex items-start py-2 border-b last:border-0"
                >
                  <div className="w-16 h-20 relative flex-shrink-0">
                    <Image
                      src={item.images[0] || "https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828534/placeholder_ytvkqk.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="text-sm font-medium">{item.brand}</h4>
                    <p className="text-xs text-gray-600">{item.title}</p>
                    {(item.selectedSize || item.selectedColor) && (
                      <div className="text-xs text-gray-500 mt-1">
                        {item.selectedSize && <span className="mr-2">Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      </div>
                    )}
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-medium">₹{item.price}</span>
                      <span className="text-xs text-gray-600">Qty: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>
                  {deliveryCharge === 0 ? (
                    <span className="text-green-500">FREE</span>
                  ) : (
                    `₹${deliveryCharge.toFixed(2)}`
                  )}
                </span>
              </div>
              
              <div className="flex justify-between font-semibold text-base pt-2 border-t mt-2">
                <span>Total Amount</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/cart"
              className="mt-4 text-sm text-pink-500 hover:text-pink-600 flex items-center"
            >
              ← Back to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
