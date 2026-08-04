import React, { ChangeEvent, FormEvent, useState } from "react";

//types for form data
interface FormData {
  name: string;
  email: string;
  age: number;
  vehicleType: string;
  vehicleYear: number;
  coverageType: string;
  drivingExperience: number;
  hasAccidents: boolean;
  mileage: number;
  location: string;
}

interface QuoteResult {
  totalMonthly: number;
  totalAnnually: number;
  breakdown: {
    basePremium: number;
    ageFactor: number;
    vehicleFactor: number;
    coverageFactor: number;
    experienceFactor: number;
    accidentPenalty: number;
    mileageFactor: number;
    locationFactor: number;
  };
}

export default function InsuranceForm() {
  const [step, setStep] = useState(1);
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: 18,
    vehicleType: "sedan",
    vehicleYear: new Date().getFullYear(),
    coverageType: "basic",
    drivingExperience: 5,
    hasAccidents: false,
    mileage: 12000,
    location: "suburban",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
            ? Number(value)
            : value,
    }));
  };

  const calculateQuote = (e: FormEvent) => {
    e.preventDefault();

    //Base premium
    const basePremium = 500;

    //Age Factor
    let ageFactor = 1;
    if (formData.age < 21) ageFactor = 2.5;
    else if (formData.age < 25) ageFactor = 1.8;
    else if (formData.age < 65) ageFactor = 1.0;
    else if (formData.age < 75) ageFactor = 1.3;
    else ageFactor = 1.6;

    //Vehicle type factor
    const vehicleFactors: Record<string, number> = {
      sedan: 1.0,
      suv: 1.2,
      truck: 1.3,
      sports: 1.8,
      luxury: 1.5,
      compact: 0.9,
    };
    const vehicleFactor = vehicleFactors[formData.vehicleType] || 1.0;
    //Vehicle age factor
    const vehicleAge = new Date().getFullYear() - formData.vehicleYear;
    const vehicleAgefactor = vehicleAge < 3 ? 1.1 : vehicleAge < 10 ? 1.0 : 0.8;

    // coverage factor
    const coverageFactors: Record<string, number> = {
      basic: 1.0,
      standard: 1.3,
      comprehensive: 1.8,
      premium: 2.2,
    };
    const coverageFactor = coverageFactors[formData.coverageType] || 1.0;

    // Experience factor
    let experienceFactor = 1;
    if (formData.drivingExperience < 2) experienceFactor = 1.5;
    else if (formData.drivingExperience < 5) experienceFactor = 1.2;
    else if (formData.drivingExperience < 10) experienceFactor = 1.0;
    else experienceFactor = 0.9;

    // Accident penalty
    const accidentPenalty = formData.hasAccidents ? 1.4 : 1.0;

    //Mileage factor
    let mileageFactor = 1;
    if (formData.mileage < 6000) mileageFactor = 0.8;
    else if (formData.mileage < 12000) mileageFactor = 1.0;
    else if (formData.mileage < 20000) mileageFactor = 1.2;
    else mileageFactor = 1.4;

    //Location Factor
    const locatiionFactors: Record<string, number> = {
      rural: 0.8,
      suburban: 1.0,
      urban: 1.3,
      metropolitan: 1.6,
    };
    const locationFactor = locatiionFactors[formData.location] || 1.0;
    // Calculate total
    const totalVehicleFactor = vehicleFactor * vehicleAgefactor;
    const totalAnnually =
      basePremium *
      ageFactor *
      totalVehicleFactor *
      coverageFactor *
      experienceFactor *
      accidentPenalty *
      mileageFactor *
      locationFactor;

    const result: QuoteResult = {
      totalMonthly: Math.round((totalAnnually / 12) * 100) / 100,
      totalAnnually: Math.round(totalAnnually * 100) / 100,
      breakdown: {
        basePremium,
        ageFactor,
        vehicleFactor: totalVehicleFactor,
        coverageFactor,
        experienceFactor,
        accidentPenalty,
        mileageFactor,
        locationFactor,
      },
    };

    setQuoteResult(result);
    setStep(4);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const resetForm = () => {
    setStep(1);
    setQuoteResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {["Personal Info", "Vehicle", "Coverage", "Quote"].map(
            (label, index) => (
              <>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                   ${
                     step > index + 1
                       ? "bg-green-500 text-white"
                       : step === index + 1
                         ? "bg-blue-600 text-white"
                         : "bg-gray-200 text-gray-600"
                   }
                 `}
                >
                  {step > index + 1 ? "✓" : index + 1}
                </div>
                <span className="text-xs mt-1 text-gray-600 hidden sm:block">
                  {label}
                </span>
              </>
            ),
          )}
        </div>
        <div className="mt-4 bg-gray-200 hidden sm:block">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <form onSubmit={calculateQuote}>
          {/* step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800">
                Personal Information
              </h2>
              <p className="text-gray-600">Tell us about yourself</p>
              <div className="grid grid-col-1 md:grid-col-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Driving Experience (years)
                  </label>
                  <input
                    type="number"
                    name="drivingExperience"
                    value={formData.drivingExperience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loction
                  </label>
                  <select
                    name="loction"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="rural">Rural Area</option>
                    <option value="suburban">Suburban</option>
                    <option value="urban">Urban</option>
                    <option value="metropolitan">Metropolitan</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Vehicle Info */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800">
                Vehicle Details
              </h2>
              <p className="text-gray-600"> Information about your </p>
              <div className="grid grid-col-1 md:grid-col-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <select
                    name="loction"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="sedan">Sedan</option>
                    <option value="suv">Suv</option>
                    <option value="truck">Truck</option>
                    <option value="sports">Sports Car</option>
                    <option value="luxury">Luxury</option>
                    <option value="compact">Compact</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Year
                  </label>
                  <input
                    type="number"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    min="1990"
                    max={new Date().getFullYear() + 1}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {" "}
                    Annual Type{" "}
                  </label>
                  <select
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="5000">Less than 6000 miles</option>
                    <option value="10000">6000 - 12000 miles</option>
                    <option value="15000">12,000 - 20,000 miles</option>
                    <option value="20000"> More than 20,000 miles</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasAccident"
                      checked={formData.hasAccidents}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Accident in the past 3 years
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* step 3: Coverage */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800">
                Select Coverage
              </h2>
              <p className="text-gray-600">Choose your protection</p>
              <div className="space-y-4">
                {[
                  {
                    value: "basic",
                    label: "Basic Liability",
                    desc: "Minimum legal coverage",
                    price: "Most Affordable",
                    color: "border-gray-200 hover:border-blue-300",
                  },
                  {
                    value: "comprehensive",
                    label: "Comprehensive",
                    desc: "Full coverage including theft & natural disasters",
                    price: "Better Protection",
                    color: "border-gray-200 hover:border-blue-300",
                  },
                  {
                    value: "premium",
                    label: "Premium",
                    desc: "Maximum protection with extra benefits",
                    price: "Best Coverage",
                    color: "border-gray-200 hover:border-blue-300",
                  },
                ].map((plan) => (
                  <label
                    key={plan.value}
                    className={`
                      flex items-start p-4 border-2 rounded-lg cursor-pointer transtion-all duration-200
                      ${
                        formData.coverageType === plan.value
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : plan.color
                      }
                      `}
                  >
                    <input
                      type="radio"
                      name="coverageType"
                      value={plan.value}
                      checked={formData.coverageType === plan.value}
                      onChange={handleChange}
                      className="mt-0.5 mr-3 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-semibold text-gray-900">
                            {plan.label}
                          </span>
                          <p>{plan.desc}</p>
                        </div>
                        <span className="text-sm font-medium text-blue-600 ml-2">
                          {plan.price}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && quoteResult && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                Your Insurance Quote
              </h2>

              {/* Main Quote Display */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center shadow-lg">
                <p className="text-blue-100 text-sm mb-2">
                  Estimated Monthly Premium
                </p>
                <div className="text-6xl font-bold mb-2">
                  ${quoteResult.totalMonthly}
                  <span className="text-2xl font-normal text-blue-200">
                    /month
                  </span>
                </div>
                <p className="text-blue-200">
                  or ${quoteResult.totalAnnually} paid Annualy
                </p>
              </div>

              {/* Client Info Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Quote for</h3>
                <p className="text-gray-600">{formData.name}</p>
                <p className="text-gray-600">{formData.email}</p>
              </div>

              {/* Breakdown */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Premium Breakdown
                </h3>
                {[
                  {
                    label: "Base Rate",
                    value: `${quoteResult.breakdown.basePremium}`,
                  },
                  {
                    label: "Age Factor",
                    value: `${quoteResult.breakdown.ageFactor}`,
                  },
                  {
                    label: "Vehicle Factor",
                    value: `${quoteResult.breakdown.vehicleFactor}`,
                  },
                  {
                    label: "Coverage Level",
                    value: `${quoteResult.breakdown.coverageFactor}`,
                  },
                  {
                    label: "Eperience Discount",
                    value: `${quoteResult.breakdown.experienceFactor}`,
                  },
                  {
                    label: "Accident History",
                    value: formData.hasAccidents
                      ? "Penalty Applied"
                      : "Clean Record",
                  },
                  {
                    label: "Milege Adjustment",
                    value: `${quoteResult.breakdown.mileageFactor}x`,
                  },
                  {
                    label: "Location Factor",
                    value: `${quoteResult.breakdown.locationFactor}x`,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justiify-between  items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font semi-bold text-gray-800">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  💾 Save / Print Quote
                </button>

                <button
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  type="button"
                  onClick={resetForm}
                >
                  🔄 Get New Quote
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 1 ? (
                <button
                  className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  type="button"
                  onClick={prevStep}
                >
                  ← Previous
                </button>
              ) : (
                <div></div>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Calculate Quote
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
