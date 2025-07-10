'use client';

import React, { useState } from 'react';
import FormPart from './FormPart';
import Summary from './Summary';

interface FlightInfo {
  destination: string;
  classes: { [className: string]: number };
}

interface FormStepperProps {
  flightData: FlightInfo[];
}

const FormStepper = ({ flightData }: FormStepperProps) => {
  const [formData, setFormData] = useState({
    destination: '',
    departureDate: '',
    returnDate: '',
    flightType: '',
    travelers: 0,
    pets: false,
    extraLuggage: false,
    insurance: false,
    disabledSeats: false,
    specialAssistance: false,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.value,
        ...(target.name === 'destination' ? { flightType: '' } : {}),
      }));
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const destinationOptions = flightData.map(f => f.destination);
  const selectedDestination = flightData.find(f => f.destination === formData.destination);
  const flightClassOptions = selectedDestination ? Object.keys(selectedDestination.classes) : [];

  const steps = [
    {
      title: 'Destination Details',
      fields: [
        { label: 'Destination', name: 'destination', type: 'select', options: destinationOptions },
        { label: 'Departure Date', name: 'departureDate', type: 'date' },
        { label: 'Return Date', name: 'returnDate', type: 'date' },
        { label: 'Type of Flight', name: 'flightType', type: 'select', options: flightClassOptions },
      ],
    },
    {
      title: 'Travelers Information',
      fields: [
        { label: 'Amount of Travelers', name: 'travelers', type: 'number' },
        { label: 'Pets', name: 'pets', type: 'checkbox' },
        { label: 'Extra Luggage', name: 'extraLuggage', type: 'checkbox' },
      ],
    },
    {
      title: 'Accessibility and Special Assistance',
      fields: [
        { label: 'Insurance', name: 'insurance', type: 'checkbox' },
        { label: 'Pick Disabled Seats', name: 'disabledSeats', type: 'checkbox' },
        { label: 'Special Assistance', name: 'specialAssistance', type: 'checkbox' },
      ],
    },
    {
      title: 'Summary',
      fields: [],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-10 bg-white rounded-2xl shadow-xl">
      {currentStep < steps.length ? (
        <FormPart
          title={steps[currentStep - 1].title}
          fields={steps[currentStep - 1].fields}
          formData={formData}
          handleChange={handleChange}
        />
      ) : (
        <Summary formData={formData} flightData={flightData} />
      )}

      <div className="mt-12 flex justify-center gap-6">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-3 rounded-xl bg-white border border-[#6698CC] text-[#6698CC] font-medium shadow-sm hover:bg-[#f0f7ff] transition"
          >
            Previous
          </button>
        )}
        {currentStep < steps.length ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-6 py-3 rounded-xl bg-[#6698CC] text-white font-semibold shadow-md hover:bg-[#5a8ac1] transition"
            disabled={currentStep === 1 && (!formData.destination || !formData.flightType)}
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#6698CC] text-white font-semibold shadow-md hover:bg-[#5a8ac1] transition"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormStepper;






