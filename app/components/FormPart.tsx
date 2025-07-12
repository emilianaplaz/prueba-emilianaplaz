'use client';

import React from 'react';

export interface Field {
  label: string;
  name: keyof FormData;
  type: 'text' | 'select' | 'checkbox' | 'number' | 'date' | 'stepper';
  options?: string[];
  min?: number;
  max?: number;
  dependsOn?: keyof FormData;
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

interface TravelerInfo {
  name: string;
  birthdate: string;
  idType: 'pasaporte' | 'cedula' | '';
  idNumber: string;
  id: string;
}

interface FormPartProps {
  title: string;
  fields: Field[];
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  incrementTravelers?: () => void;
  decrementTravelers?: () => void;
  isStep1FieldValid?: (fieldName: keyof FormData) => boolean;
}

const FormPart = ({
  title,
  fields,
  formData,
  handleChange,
  incrementTravelers,
  decrementTravelers,
  isStep1FieldValid,
}: FormPartProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">{title}</h2>

      <form>
        {fields.map(({ label, name, type, options, min, max, dependsOn }) => {
          if (dependsOn && !formData[dependsOn]) return null;

          const isValid = isStep1FieldValid ? isStep1FieldValid(name) : true;

          if (type === 'checkbox') {
            return (
              <label
                key={name}
                className="flex items-center mb-6 space-x-3 select-none"
                style={{ minHeight: '2.5rem' }}
              >
                <input
                  type="checkbox"
                  name={name}
                  checked={!!formData[name]}
                  onChange={handleChange}
                  className="relative w-10 h-5 appearance-none bg-gray-300 rounded-full
                             checked:bg-[#6698CC] transition-colors duration-300
                             cursor-pointer before:content-[''] before:absolute before:left-0.5 before:top-0.5
                             before:bg-white before:border before:rounded-full before:h-4 before:w-4 before:transition-transform
                             checked:before:translate-x-5"
                />
                <span className="text-base font-medium">{label}</span>
              </label>
            );
          }

          if (type === 'select' && options) {
            return (
              <label key={name} className="block mb-6">
                <span className="block mb-1 font-medium">{label}</span>
                <select
                  name={name}
                  value={formData[name] as string}
                  onChange={handleChange}
                  className={`block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC] ${
                    isValid ? 'border-gray-300' : 'border-red-500'
                  }`}
                >
                  <option value="">Seleccione</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            );
          }

          if (type === 'date') {
            const today = new Date().toISOString().split('T')[0];
            const minValue =
              name === 'departureDate'
                ? today
                : name === 'returnDate' && formData.departureDate
                ? formData.departureDate
                : today;

            return (
              <label key={name} className="block mb-6">
                <span className="block mb-1 font-medium">{label}</span>
                <input
                  type="date"
                  name={name}
                  value={formData[name] as string}
                  onChange={handleChange}
                  min={minValue}
                  className={`block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC] ${
                    isValid ? 'border-gray-300' : 'border-red-500'
                  }`}
                />
              </label>
            );
          }

          if (type === 'number') {
            return (
              <label key={name} className="block mb-6">
                <span className="block mb-1 font-medium">{label}</span>
                <input
                  type="number"
                  name={name}
                  value={formData[name] as number}
                  onChange={handleChange}
                  min={min}
                  max={max}
                  className="block w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC]"
                />
              </label>
            );
          }

          if (type === 'stepper') {
            return (
              <div key={name} className="mb-6">
                <span className="block mb-1 font-medium">{label}</span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={decrementTravelers}
                    className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    disabled={(formData[name] as number) <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg select-none">{formData[name] as number}</span>
                  <button
                    type="button"
                    onClick={incrementTravelers}
                    className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    disabled={(formData[name] as number) >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          }

          // Default text input
          return (
            <label key={name} className="block mb-6">
              <span className="block mb-1 font-medium">{label}</span>
              <input
                type="text"
                name={name}
                value={formData[name] as string}
                onChange={handleChange}
                maxLength={name === 'specialAssistanceDescription' ? 200 : undefined}
                className={`block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC] ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                }`}
              />
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default FormPart;


















