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
  loction: string;
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 18,
    vehicleType: "sedan",
    vehicleyear: new Date().getFullYear(),
    coverageType: "basic",
    drivingExperience: 5,
    hasAccident: false,
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
    const vehicleAge = new Date().getFullYear() - formData.vehicleyear;
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
    const accidentPenalty = formData.hasAccident ? 1.4 : 1.0;

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

  return <div>InsuranceForm</div>;
}
