// Summary.tsx
'use client';

import React from 'react';

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

interface SummaryProps {
  formData: FormData;
  flightData: FlightInfo[];
}

const Summary = ({ formData, flightData }: SummaryProps) => {
  const flight = flightData.find(
    (f) => f.destination === formData.destination && f.class === formData.flightType
  );

  const basePrice = flight ? flight.priceUSD : 0;

  let totalPrice =
    basePrice * formData.travelers +
    (formData.pets ? formData.petsCount * 100 : 0) + // 100$ por mascota
    (formData.extraLuggage ? formData.extraLuggageCount * 50 : 0) + // 50$ por equipaje extra
    (formData.insurance ? 50 : 0); // Seguro $50 si aplica

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Resumen de la Reserva</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Detalles del vuelo</h3>
        <p>
          <strong>Destino:</strong> {formData.destination}
        </p>
        <p>
          <strong>Fecha de salida:</strong> {formData.departureDate}
        </p>
        <p>
          <strong>Fecha de regreso:</strong> {formData.returnDate}
        </p>
        <p>
          <strong>Clase:</strong> {formData.flightType}
        </p>
        <p>
          <strong>Viajeros:</strong> {formData.travelers}
        </p>

        <p>
          <strong>Precio por viajero:</strong> ${basePrice.toFixed(2)}
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Información de viajeros</h3>
        {formData.travelersInfo.map((traveler, i) => (
          <div key={i} className="mb-3 p-3 bg-gray-50 rounded-md border border-gray-200">
            <p>
              <strong>Viajero #{i + 1}:</strong> {traveler.name || 'Sin nombre'}
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong> {traveler.birthdate || 'No especificado'}
            </p>
            <p>
              <strong>Cédula / ID:</strong> {traveler.id || 'No especificado'}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Extras y servicios</h3>
        <p>
          <strong>Mascotas:</strong> {formData.pets ? `${formData.petsCount} mascota(s)` : 'No'}
        </p>
        <p>
          <strong>Equipaje extra:</strong>{' '}
          {formData.extraLuggage ? `${formData.extraLuggageCount} unidad(es)` : 'No'}
        </p>
        <p>
          <strong>Seguro:</strong> {formData.insurance ? 'Sí' : 'No'}
        </p>
        <p>
          <strong>Asientos para discapacitados:</strong> {formData.disabledSeats ? 'Sí' : 'No'}
        </p>
        <p>
          <strong>Asistencia especial:</strong>{' '}
          {formData.specialAssistance
            ? formData.specialAssistanceDescription || 'Sí, sin descripción'
            : 'No'}
        </p>
      </section>

      <section className="mt-8 p-4 bg-[#6698CC] text-white rounded-md text-center font-semibold text-xl">
        Precio total: ${totalPrice.toFixed(2)}
      </section>
    </div>
  );
};

export default Summary;

















