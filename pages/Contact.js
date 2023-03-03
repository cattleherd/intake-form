import Image from "next/image";
import React, { useMemo, useState } from "react";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

import { motion } from "framer-motion";

const ContactForm = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postalCode: "",
    status: "",
    service: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAgreement = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      console.log(formData);
    } else {
      console.log("You must agree to the privacy policy.");
    }
    let data = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      postalCode: formData.postalCode,
      status: formData.status,
      service: formData.service,
      message: formData.message,
    };

    fetch("/api/Contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Email has been sent!");
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          postalCode: "",
          status: "",
          service: "",
          message: "",
        });
      }
    });
  };

  return (
    <div
      id="contact"
      className="mx-auto rounded-md py-10 mb-10 w-[80%] sm:w-[60%] md:w-[50%]"
    >
      <div className="w-[85%] mx-auto" variants={scrollAnimation}>
        <div className="container m-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto my-4 p-4 rounded-md bg-gray-100 shadow-lg"
          >
            <div className="px-4">
              <h1 className="text-green-300 font-medium text-3xl pb-10 text-center">
                Contact Us
              </h1>
            </div>
            <div className="my-2">
              <label htmlFor="name" className="block">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="phone" className="block">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="email" className="block">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="postalCode" className="block">
                Postal code:
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="status" className="block">
                Status in Canada:
              </label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="service" className="block">
                Service:
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              >
                <option value="">Select a service</option>
                <option value="General">General</option>
                <option value="Language Services">Language Services</option>
                <option value="Shelter and Housing Assistance">
                  Shelter and Housing Assistance
                </option>
                <option value="Newcomer Assistance">Newcomer Assistance</option>
                <option value="Immigration Services">
                  Immigration Services
                </option>
                <option value="Employment Services">Employment Services</option>
                <option value="Financial Support Assistance">
                  Financial Support Assistance
                </option>
                <option value="Health/Medical Care">Health/Medical Care</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="message" className="block">
                Your Message in detail:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="my-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="postalCode">Postal code:</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="status">Status in Canada:</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="service">Service:</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              >
                <option value="">Select a service</option>
                <option value="General">General</option>
                <option value="Language Services">Language Services</option>
                <option value="Shelter and Housing Assistance">
                  Shelter and Housing Assistance
                </option>
                <option value="Newcomer Assistance">Newcomer Assistance</option>
                <option value="Immigration Services">
                  Immigration Services
                </option>
                <option value="Employment Services">Employment Services</option>
                <option value="Financial Support Assistance">
                  Financial Support Assistance
                </option>
                <option value="Health/Medical Care">Health/Medical Care</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="message">Your Message in detail:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 my-2 ring-1 ring-green-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="my-2 text-sm">
              <label>
                <input
                  type="checkbox"
                  name="agreement"
                  checked={agreed}
                  onChange={handleAgreement}
                  className="my-2 mr-2"
                />
                In submitting my contact information, I agree with Reset’s
                Privacy Policies
              </label>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="bg-green-300 p-2 h-12 w-full text-tan-100 rounded-md mt-12"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
