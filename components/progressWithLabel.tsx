import React from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export default function ProgressWithLabel() {
  return (
    <Field className="w-full ">
      <FieldLabel htmlFor="progress-upload">
        <span className="text-[#1A2739]  sm:text-lg md:text-[16px]">
          Consultation
        </span>
        <span className="ml-auto text-[#1A2739] sm:text-lg md:text-[16px]">
          90%
        </span>
      </FieldLabel>
      <Progress value={90} id="progress-upload" />
    </Field>
  );
}
