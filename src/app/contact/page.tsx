"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    
    if (!formState.name.trim()) errors.name = "Name is required";
    
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (formState.phone && !/^\d{10}$/.test(formState.phone.trim())) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formState.subject.trim()) errors.subject = "Subject is required";
    if (!formState.message.trim()) errors.message = "Message is required";
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or need assistance? Our team is here to help.
          Reach out to us using the form below or through any of our contact channels.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            
            {submitSuccess && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                <p className="font-medium">Thank you for contacting us!</p>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Return/Exchange">Return/Exchange</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.subject && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    rows={6}
                    placeholder="Type your message here..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className={`px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="h-6 w-6 text-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    Myntra Designs Pvt. Ltd.<br />
                    Buildings Alyssa, Begonia &<br />
                    Clove Embassy Tech Village,<br />
                    Outer Ring Road, Devarabeesanahalli Village,<br />
                    Bengaluru, 560103, Karnataka, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaEnvelope className="h-6 w-6 text-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:support@myntra.com" className="hover:text-pink-500">support@myntra.com</a><br />
                    <a href="mailto:feedback@myntra.com" className="hover:text-pink-500">feedback@myntra.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaPhone className="h-6 w-6 text-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+91-80-61561999" className="hover:text-pink-500">+91-80-61561999</a><br />
                    Monday to Saturday, 10 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Quick Links */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Help</h2>
            <p className="text-gray-600 mb-4">
              Find instant answers to the most common questions:
            </p>
            <ul className="space-y-2 text-pink-500">
              <li>
                <a href="#" className="hover:text-pink-600">How to track my order?</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">How to return a product?</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">How to request a refund?</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">Delivery timeframes</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">Payment options</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Location</h2>
        <div className="rounded-lg overflow-hidden h-96 bg-gray-200">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            {/* Placeholder for an actual map integration */}
            <div className="text-center p-8">
              <p className="text-xl font-medium mb-2">Google Maps Integration</p>
              <p>A Google Map would be displayed here showing our office location.</p>
              <p className="text-sm mt-4">
                (For a real implementation, you would need to integrate the Google Maps API)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
