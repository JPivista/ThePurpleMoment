"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getNames } from "country-list";

const IndividualPledgeForm = ({ onSuccess }) => {
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [motivationStatement, setMotivationStatement] = useState("");
  const [website, setWebsite] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const countryRef = useRef(null);
  const [isshow, setIsShow] = useState(false);
  // Get all countries from the library
  const allCountries = getNames().sort();

  // Filter countries based on search term
  const filteredCountries = countrySearchTerm
    ? allCountries.filter((country) =>
      country.toLowerCase().includes(countrySearchTerm.toLowerCase())
    )
    : allCountries;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const nameRegex = /^[a-zA-Z\s]*$/;
  const numRegex = /^[0-9]+$/;
  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
    "gmail.co",
    "gmail.c",
    "gmail.",
    "gmai.com",
    "gaim.com",
    "gmial.com",
    "gmail.co",
    "gmail.c",
    "gmail.",
    "gmai.com",
    "gmai.co",
    "gaim.com",
    "gmial.com",
    "giam.com",
  ];

  const isValidEmail = (email) => {
    const [, domain] = email.split("@");
    return !notAllowedDomains.includes(domain);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (value) => {
    setCountry(value);
    setCountrySearchTerm(value); // Set search term to match selected value
    setIsCountryOpen(false);
    const newErrors = { ...errors };
    if (value === "Country") {
      newErrors.country = "Please select a country";
    } else {
      delete newErrors.country;
    }
    setErrors(newErrors);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "fullName") {
      setFullName(value);
      if (!value) {
        newErrors[name] = "Full name is required";
      } else if (value && !nameRegex.test(value)) {
        newErrors[name] = "Invalid character in name";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "email") {
      setEmail(value);
      if (!value) {
        newErrors[name] = "Email is required";
      } else if (value && !emailRegex.test(value)) {
        newErrors[name] = "Please enter a valid email address.";
      } else if (value && !isValidEmail(value)) {
        newErrors[name] = "This email domain is not allowed.";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "contactNumber") {
      setContactNumber(value);
      if (!value) {
        newErrors[name] = "Contact number is required";
      } else if (value && !numRegex.test(value)) {
        newErrors[name] = "Please enter a valid phone number.";
      } else if (value && value.length < 10) {
        newErrors[name] = "Contact number must be 10 digits.";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "occupation") {
      setOccupation(value);
      if (!value) {
        newErrors[name] = "Occupation is required";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "city") {
      setCity(value);
      if (!value) {
        newErrors[name] = "City is required";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "organisation") {
      setOrganisation(value);
      // Optional field, no validation needed
      delete newErrors[name];
    }
    if (name === "website") {
      setWebsite(value);
      // Optional field, no validation needed
      delete newErrors[name];
    }
    if (name === "motivationStatement") {
      setMotivationStatement(value);
      // Optional field, no validation needed
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setContactNumber("");
    setOccupation("");
    setCity("");
    setCountry("");
    setOrganisation("");
    setMotivationStatement("");
    setWebsite("");
    setErrors({});
    setIsShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields before submission
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full name is required";
    } else if (!nameRegex.test(fullName)) {
      newErrors.fullName = "Invalid character in name";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "This email domain is not allowed.";
    }

    if (!contactNumber) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!numRegex.test(contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number.";
    } else if (contactNumber.length < 10) {
      newErrors.contactNumber = "Contact number must be 10 digits.";
    }

    if (!occupation) {
      newErrors.occupation = "Occupation is required";
    }

    if (!city) {
      newErrors.city = "City is required";
    }

    if (!country || country === "Country") {
      newErrors.country = "Please select a country";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true); // Start loading

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("contactNumber", contactNumber);
    formData.append("occupation", occupation);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("organisation", organisation);
    formData.append("motivationStatement", motivationStatement);
    formData.append("website", website);

    try {
      const res = await axios.post(
        `https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/1198/feedback`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "mail_sent") {
        resetForm();
        setIsShow(true);
        setShowSuccessModal(true);
      } else if (res.data.status === "validation_failed") {
        const newErrors = {};
        res.data.invalid_fields.forEach((f) => {
          newErrors[f.field] = f.message;
        });
        setErrors(newErrors);
      }
    } catch (err) {
      console.error("Form submission error", err);
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  return (
    <div className="max-w-6xl pt-5 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-md font-medium text-gray-700"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              autoComplete="name"
              value={fullName}
              onChange={handleTextChange}
              placeholder="Your first and last name"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.fullName && (
              <p className="text-red-600 text-md mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={handleTextChange}
              placeholder="We'll use this to contact you"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.email && (
              <p className="text-red-600 text-md mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-md font-medium text-gray-700"
            >
              Contact Number *
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              autoComplete="tel"
              maxLength={10}
              value={contactNumber}
              onChange={handleTextChange}
              placeholder="In case we need to verify details or share updates"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.contactNumber ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.contactNumber && (
              <p className="text-red-600 text-md mt-1">
                {errors.contactNumber}
              </p>
            )}
          </div>

          {/* Occupation / Profession */}
          <div>
            <label
              htmlFor="occupation"
              className="block text-md font-medium text-gray-700"
            >
              Occupation / Profession *
            </label>
            <input
              id="occupation"
              name="occupation"
              value={occupation}
              onChange={handleTextChange}
              placeholder="Tell us what you do — student, educator, entrepreneur, artist, etc"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.occupation ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.occupation && (
              <p className="text-red-600 text-md mt-1">{errors.occupation}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-md font-medium text-gray-700"
            >
              City *
            </label>
            <input
              id="city"
              name="city"
              autoComplete="address-level2"
              value={city}
              onChange={handleTextChange}
              placeholder="The city where you currently live or work"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.city ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.city && (
              <p className="text-red-600 text-md mt-1">{errors.city}</p>
            )}
          </div>

          {/* Country */}
          <div className="relative" ref={countryRef}>
            <label
              htmlFor="country"
              className="block text-md font-medium text-gray-700"
            >
              Country *
            </label>
            <div
              className={`mt-1 relative cursor-pointer ${errors.country ? "border-red-500" : "border-gray-300"
                }`}
            >
              <div
                className={`w-full border rounded-md p-3 text-sm bg-white flex items-center justify-between ${errors.country ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <input
                  type="text"
                  id="country"
                  name="country"
                  autoComplete="country"
                  value={countrySearchTerm || country}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCountrySearchTerm(value);
                    setCountry(value); // Set country directly for autofill compatibility
                    if (!isCountryOpen) {
                      setIsCountryOpen(true);
                    }
                    // Clear errors when user types
                    if (errors.country) {
                      setErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors.country;
                        return newErrors;
                      });
                    }
                  }}
                  onFocus={() => setIsCountryOpen(true)}
                  onBlur={() => {
                    // Keep dropdown open briefly to allow clicking on options
                    setTimeout(() => setIsCountryOpen(false), 150);
                  }}
                  placeholder="Select your country of residence"
                  className="flex-1 bg-transparent outline-none text-sm"
                  style={{ color: country ? "#111827" : "#6b7280" }}
                  list="country-suggestions"
                />
                {/* <datalist id="country-suggestions">
                  {allCountries.map((countryOption) => (
                    <option key={countryOption} value={countryOption} />
                  ))}
                </datalist> */}
                <svg
                  className={`w-4 h-4 transition-transform ${isCountryOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <AnimatePresence>
                {isCountryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
                  >
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((option) => (
                        <div
                          key={option}
                          onClick={() => handleCountrySelect(option)}
                          className="px-3 py-2 hover:bg-purple-50 cursor-pointer text-sm transition-colors"
                          style={{
                            color: "#374151",
                            backgroundColor: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f3e8ff";
                            e.target.style.color = "#7c3aed";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#374151";
                          }}
                        >
                          {option}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500 text-center">
                        No countries found
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {errors.country && (
              <p className="text-red-600 text-md mt-1">{errors.country}</p>
            )}
          </div>

          {/* Organisation / Institution (Optional) */}
          <div>
            <label
              htmlFor="organisation"
              className="block text-md font-medium text-gray-700"
            >
              Organisation / Institution (Optional)
            </label>
            <input
              id="organisation"
              name="organisation"
              value={organisation}
              onChange={handleTextChange}
              placeholder="If you're associated with any organisation, institution, or community group"
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.organisation ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.organisation && (
              <p className="text-red-600 text-md mt-1">{errors.organisation}</p>
            )}
          </div>

          {/* Website or Social Handle (Optional) */}
          <div>
            <label
              htmlFor="website"
              className="block text-md font-medium text-gray-700"
            >
              Website or Social Handle (Optional)
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={website}
              onChange={handleTextChange}
              placeholder="If you'd like us to connect with your work or initiatives"
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.website ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.website && (
              <p className="text-red-600 text-md mt-1">{errors.website}</p>
            )}
          </div>
        </div>

        {/* Why are you taking the Purple Pledge? (Optional) */}
        <div>
          <label
            htmlFor="motivationStatement"
            className="block text-md font-medium text-gray-700"
          >
            Why are you taking the Purple Pledge? (Optional)
          </label>
          <textarea
            id="motivationStatement"
            name="motivationStatement"
            value={motivationStatement}
            onChange={handleTextChange}
            rows={4}
            placeholder="A short statement about your motivation or values"
            className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.motivationStatement ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.motivationStatement && (
            <p className="text-red-600 text-md mt-1">
              {errors.motivationStatement}
            </p>
          )}
        </div>

        {/* Privacy Policy */}
        <p className="text-md text-gray-600">
          By submitting this form, you confirm that you are taking the Purple
          Pledge as an individual and agree to our terms and conditions.
        </p>

        {/* Submit Button */}
        <div className="text-center flex justify-center">
          <button
            type="submit"
            className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
            disabled={isSubmitting}
            style={{
              background: "linear-gradient(135deg, #84298E 0%, #B454BF 100%)",
              fontFamily: "var(--font-poppins)",
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 lg:p-0 p-5`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg-white rounded-lg p-6 text-center shadow-xl`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h3
                className={`text-lg font-semibold text-green-700 max-w-md mx-auto`}
              >
                Thank you for taking the Purple Pledge. Your commitment brings
                us one step closer to a more accessible and inclusive world.
              </h3>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  if (typeof onSuccess === 'function') {
                    onSuccess();
                  }
                }}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndividualPledgeForm;
