'use client';

import React, { useState } from 'react';
import FormPart from './FormPart';
import Summary from './Summary';

interface FlightInfo {
  destination: string;
  class: string;
  priceUSD: number;
}

interface TravelerInfo {
  name: string;
  birthdate: string;
  id: string;
}

interface FormData {
  destination: string;
  departureDate: string;
  returnDate: string;
  flightType: string;
  travelers: number;
  pets: boolean;
  petsCount: number;
  extraLuggage: boolean;
  extraLuggageCount: number;
  insurance: boolean;
  disabledSeats: boolean;
  specialAssistance: boolean;
  specialAssistanceDescription: string;
  travelersInfo: TravelerInfo[];
}

interface FormStepperProps {
  flightData: FlightInfo[];
}

const FormStepper = ({ flightData }: FormStepperProps) => {
  const [formData, setFormData] = useState<FormData>({
    destination: '',
    departureDate: '',
    returnDate: '',
    flightType: '',
    travelers: 1,
    pets: false,
    petsCount: 1,
    extraLuggage: false,
    extraLuggageCount: 1,
    insurance: false,
    disabledSeats: false,
    specialAssistance: false,
    specialAssistanceDescription: '',
    travelersInfo: [{ name: '', birthdate: '', id: '' }],
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [expandedTravelers, setExpandedTravelers] = useState<boolean[]>([true]);

  const flightClasses = Array.from(new Set(flightData.map((f) => f.class)));
  const destinationOptions = Array.from(new Set(flightData.map((f) => f.destination)));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.checked,
        ...(target.name === 'pets' && !target.checked ? { petsCount: 1 } : {}),
        ...(target.name === 'extraLuggage' && !target.checked ? { extraLuggageCount: 1 } : {}),
      }));
    } else {
      const value = target.type === 'number' ? Number(target.value) : target.value;
      setFormData((prev) => ({
        ...prev,
        [target.name]: value,
        ...(target.name === 'destination' ? { flightType: '' } : {}),
      }));
    }
  };

  const handleTravelerInfoChange = (
    index: number,
    field: keyof TravelerInfo,
    value: string
  ) => {
    const updatedTravelers = [...formData.travelersInfo];
    updatedTravelers[index][field] = value;
    setFormData((prev) => ({ ...prev, travelersInfo: updatedTravelers }));
  };

  const incrementTravelers = () => {
    if (formData.travelers < 10) {
      setFormData((prev) => ({
        ...prev,
        travelers: prev.travelers + 1,
        travelersInfo: [...prev.travelersInfo, { name: '', birthdate: '', id: '' }],
      }));
      setExpandedTravelers((prev) => [...prev, true]);
    }
  };

  const decrementTravelers = () => {
    if (formData.travelers > 1) {
      setFormData((prev) => ({
        ...prev,
        travelers: prev.travelers - 1,
        travelersInfo: prev.travelersInfo.slice(0, -1),
      }));
      setExpandedTravelers((prev) => prev.slice(0, -1));
    }
  };

  const toggleTravelerExpand = (index: number) => {
    setExpandedTravelers((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const step1Fields = [
    {
      label: 'Destino',
      name: 'destination',
      type: 'select',
      options: destinationOptions,
    },
    { label: 'Fecha de salida', name: 'departureDate', type: 'date' },
    { label: 'Fecha de regreso', name: 'returnDate', type: 'date' },
    {
      label: 'Clase de vuelo',
      name: 'flightType',
      type: 'select',
      options: flightClasses,
    },
  ];

  const steps = [
    {
      title: 'Detalles del destino',
      fields: step1Fields,
    },
    {
      title: 'Información de viajeros',
      fields: [
        { label: 'Número de viajeros', name: 'travelers', type: 'stepper' },
        { label: 'Mascotas', name: 'pets', type: 'checkbox' },
        {
          label: 'Número de mascotas',
          name: 'petsCount',
          type: 'number',
          min: 1,
          max: 99,
          dependsOn: 'pets',
        },
        { label: 'Equipaje extra', name: 'extraLuggage', type: 'checkbox' },
        {
          label: 'Número de equipajes extra',
          name: 'extraLuggageCount',
          type: 'number',
          min: 1,
          max: 99,
          dependsOn: 'extraLuggage',
        },
      ],
    },
    {
      title: 'Asistencia y servicios especiales',
      fields: [
        { label: 'Seguro', name: 'insurance', type: 'checkbox' },
        { label: 'Seleccionar asientos para discapacitados', name: 'disabledSeats', type: 'checkbox' },
        { label: 'Asistencia especial', name: 'specialAssistance', type: 'checkbox' },
        {
          label: 'Explique la asistencia especial (máx. 200 caracteres)',
          name: 'specialAssistanceDescription',
          type: 'text',
          dependsOn: 'specialAssistance',
        },
      ],
    },
    {
      title: 'Resumen',
      fields: [],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-10 bg-white rounded-2xl shadow-xl">
      {currentStep < steps.length ? (
        <>
          <FormPart
            title={steps[currentStep - 1].title}
            fields={steps[currentStep - 1].fields}
            formData={formData}
            handleChange={handleChange}
            incrementTravelers={incrementTravelers}
            decrementTravelers={decrementTravelers}
          />

          {/* Mostrar subformularios para cada viajero */}
          {currentStep === 2 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Información de cada viajero</h3>
              {formData.travelersInfo.map((traveler, i) => (
                <div
                  key={i}
                  className="mb-4 border rounded-md p-4 shadow-sm bg-gray-50"
                >
                  <button
                    type="button"
                    onClick={() => toggleTravelerExpand(i)}
                    className="mb-3 text-left w-full font-semibold text-[#6698CC]"
                  >
                    {`Viajero #${i + 1} `}
                    <span>{expandedTravelers[i] ? '▲' : '▼'}</span>
                  </button>
                  {expandedTravelers[i] && (
                    <div className="space-y-4">
                      <label className="block">
                        <span className="block mb-1 font-medium">Nombre completo</span>
                        <input
                          type="text"
                          value={traveler.name}
                          onChange={(e) =>
                            handleTravelerInfoChange(i, 'name', e.target.value)
                          }
                          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC]"
                        />
                      </label>
                      <label className="block">
                        <span className="block mb-1 font-medium">Fecha de nacimiento</span>
                        <input
                          type="date"
                          value={traveler.birthdate}
                          onChange={(e) =>
                            handleTravelerInfoChange(i, 'birthdate', e.target.value)
                          }
                          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC]"
                        />
                      </label>
                      <label className="block">
                        <span className="block mb-1 font-medium">Cédula o ID</span>
                        <input
                          type="text"
                          value={traveler.id}
                          onChange={(e) =>
                            handleTravelerInfoChange(i, 'id', e.target.value)
                          }
                          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC]"
                        />
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
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
            Anterior
          </button>
        )}
        {currentStep < steps.length ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={
              currentStep === 1 &&
              (
                !formData.destination ||
                !formData.flightType ||
                !formData.departureDate ||
                !formData.returnDate ||
                new Date(formData.departureDate) < new Date(new Date().toDateString()) || // salida mínima hoy
                new Date(formData.returnDate) <= new Date(formData.departureDate)
              )
            }
            className="px-6 py-3 rounded-xl bg-[#6698CC] text-white font-semibold shadow-md hover:bg-[#5a8ac1] transition"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#6698CC] text-white font-semibold shadow-md hover:bg-[#5a8ac1] transition"
          >
            Enviar
          </button>
        )}
      </div>
    </div>
  );
};

export default FormStepper;


















