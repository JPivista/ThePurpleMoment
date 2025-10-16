"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getNames } from "country-list";

const PurplePledgeForm = ({ onSuccess }) => {
  const [errors, setErrors] = useState({});
  const [institutionType, setInstitutionType] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [representativeDesignation, setRepresentativeDesignation] =
    useState("");
  const [representativeEmail, setRepresentativeEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [motivationStatement, setMotivationStatement] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInstitutionTypeOpen, setIsInstitutionTypeOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const institutionTypeRef = useRef(null);
  const countryRef = useRef(null);

  const institutionTypeOptions = ["Organization", "Educational Institution"];

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
      if (
        institutionTypeRef.current &&
        !institutionTypeRef.current.contains(event.target)
      ) {
        setIsInstitutionTypeOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInstitutionTypeSelect = (value) => {
    setInstitutionType(value);
    setIsInstitutionTypeOpen(false);
    const newErrors = { ...errors };
    if (value === "Institution Type") {
      newErrors.institutionType = "Please select an institution type";
    } else {
      delete newErrors.institutionType;
    }
    setErrors(newErrors);
  };

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

    if (name === "institutionType") {
      setInstitutionType(value);
      if (value === "Institution Type") {
        newErrors[name] = "Please select an institution type";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "institutionName") {
      setInstitutionName(value);
      if (!value) {
        newErrors[name] = "Institution name is required";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "representativeName") {
      setRepresentativeName(value);
      if (!value) {
        newErrors[name] = "Representative name is required";
      } else if (value && !nameRegex.test(value)) {
        newErrors[name] = "Invalid character in name";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "representativeDesignation") {
      setRepresentativeDesignation(value);
      if (!value) {
        newErrors[name] = "Representative designation is required";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "representativeEmail") {
      setRepresentativeEmail(value);
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
      if (value && !numRegex.test(value)) {
        newErrors[name] = "Please enter a valid phone number.";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "website") {
      setWebsite(value);
      // Website is optional, no validation needed
      delete newErrors[name];
    }
    if (name === "country") {
      setCountry(value);
      if (value === "Country") {
        newErrors[name] = "Please select a country";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "motivationStatement") {
      setMotivationStatement(value);
      // Optional field, no validation needed
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const resetForm = () => {
    setInstitutionType("");
    setInstitutionName("");
    setRepresentativeName("");
    setRepresentativeDesignation("");
    setRepresentativeEmail("");
    setContactNumber("");
    setWebsite("");
    setCountry("");
    setMotivationStatement("");
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields before submission
    const newErrors = {};

    if (!institutionType || institutionType === "Institution Type") {
      newErrors.institutionType = "Please select an institution type";
    }

    if (!institutionName) {
      newErrors.institutionName = "Institution name is required";
    }

    if (!representativeName) {
      newErrors.representativeName = "Representative name is required";
    } else if (!nameRegex.test(representativeName)) {
      newErrors.representativeName = "Invalid character in name";
    }

    if (!representativeDesignation) {
      newErrors.representativeDesignation =
        "Representative designation is required";
    }

    if (!representativeEmail) {
      newErrors.representativeEmail = "Email is required";
    } else if (!emailRegex.test(representativeEmail)) {
      newErrors.representativeEmail = "Please enter a valid email address.";
    } else if (!isValidEmail(representativeEmail)) {
      newErrors.representativeEmail = "This email domain is not allowed.";
    }

    if (contactNumber && !numRegex.test(contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number.";
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
    formData.append("institutionType", institutionType);
    formData.append("institutionName", institutionName);
    formData.append("representativeName", representativeName);
    formData.append("representativeDesignation", representativeDesignation);
    formData.append("representativeEmail", representativeEmail);
    formData.append("contactNumber", contactNumber);
    formData.append("website", website);
    formData.append("country", country);
    formData.append("motivationStatement", motivationStatement);

    try {
      const res = await axios.post(
        `https://docs.purplemovement.in/wp-json/contact-form-7/v1/contact-forms/9/feedback`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "mail_sent") {
        resetForm();
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
          {/* Institution Type */}
          <div className="relative" ref={institutionTypeRef}>
            <label
              htmlFor="institutionType"
              className="block text-md font-medium text-gray-700"
            >
              Institution Type *
            </label>
            <div
              className={`mt-1 relative cursor-pointer ${errors.institutionType ? "border-red-500" : "border-gray-300"
                }`}
            >
              <div
                onClick={() => setIsInstitutionTypeOpen(!isInstitutionTypeOpen)}
                className={`w-full border rounded-md p-3 text-sm bg-white flex items-center justify-between ${errors.institutionType ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <span
                  className={
                    institutionType ? "text-gray-900" : "text-gray-500"
                  }
                >
                  {institutionType || "Institution Type"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isInstitutionTypeOpen ? "rotate-180" : ""
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
                {isInstitutionTypeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                  >
                    {institutionTypeOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleInstitutionTypeSelect(option)}
                        className="px-3 py-2 hover:bg-purple-50 cursor-pointer text-sm transition-colors"
                        style={{
                          color: "#374151",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#FBEBFD";
                          e.target.style.color = "#84298E";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#374151";
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {errors.institutionType && (
              <p className="text-red-600 text-md mt-1">
                {errors.institutionType}
              </p>
            )}
          </div>

          {/* Institution Name */}
          <div>
            <label
              htmlFor="institutionName"
              className="block text-md font-medium text-gray-700"
            >
              Institution Name *
            </label>
            <input
              id="institutionName"
              name="institutionName"
              value={institutionName}
              onChange={handleTextChange}
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.institutionName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.institutionName && (
              <p className="text-red-600 text-md mt-1">
                {errors.institutionName}
              </p>
            )}
          </div>

          {/* Representative Name */}
          <div>
            <label
              htmlFor="representativeName"
              className="block text-md font-medium text-gray-700"
            >
              Representative&apos;s Name *
            </label>
            <input
              id="representativeName"
              name="representativeName"
              autoComplete="name"
              value={representativeName}
              onChange={handleTextChange}
              placeholder="Name of the person submitting the pledge on behalf of the institution"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.representativeName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.representativeName && (
              <p className="text-red-600 text-md mt-1">
                {errors.representativeName}
              </p>
            )}
          </div>

          {/* Representative Designation */}
          <div>
            <label
              htmlFor="representativeDesignation"
              className="block text-md font-medium text-gray-700"
            >
              Representative&apos;s Designation *
            </label>

            <input
              id="representativeDesignation"
              name="representativeDesignation"
              value={representativeDesignation}
              onChange={handleTextChange}
              placeholder="Your role or title within the institution"
              required
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.representativeDesignation
                ? "border-red-500"
                : "border-gray-300"
                }`}
            />
            {errors.representativeDesignation && (
              <p className="text-red-600 text-md mt-1">
                {errors.representativeDesignation}
              </p>
            )}
          </div>

          {/* Representative Email */}
          <div>
            <label
              htmlFor="representativeEmail"
              className="block text-md font-medium text-gray-700"
            >
              Representative&apos;s Email *
            </label>

            <input
              id="representativeEmail"
              name="representativeEmail"
              type="email"
              autoComplete="email"
              value={representativeEmail}
              onChange={handleTextChange}
              placeholder="We'll use this to contact you"
              className={`mt-1 block w-full border rounded-md p-3 text-sm ${errors.representativeEmail
                ? "border-red-500"
                : "border-gray-300"
                }`}
            />
            {errors.representativeEmail && (
              <p className="text-red-600 text-md mt-1">
                {errors.representativeEmail}
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-md font-medium text-gray-700"
            >
              Contact Number (Optional)
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
              className={`mt-1 block w-full border rounded p-2 text-sm ${errors.contactNumber ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.contactNumber && (
              <p className="text-red-600 text-md mt-1">
                {errors.contactNumber}
              </p>
            )}
          </div>

          {/* Website */}
          <div>
            <label
              htmlFor="website"
              className="block text-md font-medium text-gray-700"
            >
              Website
            </label>

            <input
              id="website"
              name="website"
              type="url"
              value={website}
              onChange={handleTextChange}
              placeholder="Official website URL of the institution"
              className={`mt-1 block w-full border rounded p-2 text-sm ${errors.website ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.website && (
              <p className="text-red-600 text-md mt-1">{errors.website}</p>
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
                      setErrors(prev => {
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
                  placeholder="Select your country of operation"
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

          {/* Motivation Statement */}
          <div>
            <label
              htmlFor="motivationStatement"
              className="block text-md font-medium text-gray-700"
            >
              Tell us why your institution is taking the Purple Pledge
              (Optional)
            </label>

            <textarea
              id="motivationStatement"
              name="motivationStatement"
              value={motivationStatement}
              onChange={handleTextChange}
              rows={4}
              placeholder="A short statement about your motivation or values"
              className={`mt-1 block w-full border rounded p-2 text-sm ${errors.motivationStatement
                ? "border-red-500"
                : "border-gray-300"
                }`}
            />
            {errors.motivationStatement && (
              <p className="text-red-600 text-md mt-1">
                {errors.motivationStatement}
              </p>
            )}
          </div>
        </div>

        {/* Privacy Policy */}
        <p className="text-md text-gray-600">
          By submitting this form, you confirm that you are authorised to
          represent your institution and that you are taking the Purple Pledge
          with its full knowledge and consent.
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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 text-center shadow-xl max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h3 className="text-lg font-semibold text-green-700">
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

export default PurplePledgeForm;
