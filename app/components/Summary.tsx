import React from "react";

interface FlightInfo {
  destination: string;
  class: string;
  priceUSD: number;
}

interface FormData {
  destination: string;
  flightType: string;
  travelers: number;
  pets: boolean;
  extraLuggage: boolean;
  insurance: boolean;
  disabledSeats: boolean;
  specialAssistance: boolean;
  departureDate: string;
  returnDate: string;
}

interface SummaryProps {
  formData: FormData;
  flightData: FlightInfo[];
}

export default function Summary({ formData, flightData }: SummaryProps) {
  const match = flightData.find(
    (f) =>
      f.destination === formData.destination &&
      f.class === formData.flightType
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Summary</h2>

      <p><strong>Destination:</strong> {formData.destination || "Not selected"}</p>
      <p><strong>Flight Class:</strong> {formData.flightType || "Not selected"}</p>
      <p><strong>Departure Date:</strong> {formData.departureDate || "Not selected"}</p>
      <p><strong>Return Date:</strong> {formData.returnDate || "Not selected"}</p>
      <p><strong>Travelers:</strong> {formData.travelers}</p>
      <p><strong>Pets:</strong> {formData.pets ? "Yes" : "No"}</p>
      <p><strong>Extra Luggage:</strong> {formData.extraLuggage ? "Yes" : "No"}</p>
      <p><strong>Insurance:</strong> {formData.insurance ? "Yes" : "No"}</p>
      <p><strong>Disabled Seats:</strong> {formData.disabledSeats ? "Yes" : "No"}</p>
      <p><strong>Special Assistance:</strong> {formData.specialAssistance ? "Yes" : "No"}</p>

      <hr className="my-6" />

      {match ? (
        <p className="text-lg font-bold">Price: ${match.priceUSD}</p>
      ) : (
        <p className="text-red-600">Price not available for the selected flight.</p>
      )}
    </div>
  );
}











