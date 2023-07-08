import React from "react";
import "./styles.css";
import { Step } from "../Step";

interface Steps {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
}
interface SidebarProps {
  activeStep: number;
}

export const Sidebar = ({ activeStep }: SidebarProps) => {
  const steps: Steps[] = [
    {
      step: 1,
      title: "STEP 1",
      description: "YOUR INFO",
      isActive: activeStep === 1,
    },
    {
      step: 2,
      title: "STEP 2",
      description: "SELECT PLAN",
      isActive: activeStep === 2,
    },
    {
      step: 3,
      title: "STEP 3",
      description: "ADD-ONS",
      isActive: activeStep === 3,
    },
    {
      step: 4,
      title: "STEP 4",
      description: "SUMMARY",
      isActive: activeStep === 4,
    },
  ];

  return (
    <div
      className="bg-no-repeat bg-cover rounded-l-2xl sidebar"
      style={{
        minWidth: "274px",
        minHeight: "568px",
      }}
    >
      <div className="flex flex-col gap-6 mt-10 ml-10 ">
        {steps.map((step: Steps) => (
          <Step
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            isActive={step.isActive}
          />
        ))}
      </div>
    </div>
  );
};
