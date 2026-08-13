import React from "react";
import InsuranceForm from "./InsuranceForm";

export default function InsuranceFormPage() {
  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] lg:min-h-screen  bg-gradient-to-br from gray-50 to-blue-50 py-8 px-4"
      id="insurance"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 mt-10">
            🚗 Auto Insurance Quote Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Get an instant estimate. No registration required.
          </p>
        </div>

        <InsuranceForm />
        <p className="text-center text-sm text-gray-500 mt-6">
          This is an estimate only. Final rates may vary based on additional
          factors.
        </p>
      </div>
    </section>
  );
}
