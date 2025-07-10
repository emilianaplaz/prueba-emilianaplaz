import React from "react";

interface FlightInfo {
  destination: string;
  class: { [className: string]: number };
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
  const flight = flightData.find(f => f.destination === formData.destination);
  const price = flight?.class?.[formData.flightType];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Summary</h2>

      <p><strong>Destination:</strong> {formData.destination}</p>
      <p><strong>Flight Class:</strong> {formData.flightType}</p>
      <p><strong>Departure Date:</strong> {formData.departureDate}</p>
      <p><strong>Return Date:</strong> {formData.returnDate}</p>
      <p><strong>Travelers:</strong> {formData.travelers}</p>
      <p><strong>Pets:</strong> {formData.pets ? "Yes" : "No"}</p>
      <p><strong>Extra Luggage:</strong> {formData.extraLuggage ? "Yes" : "No"}</p>
      <p><strong>Insurance:</strong> {formData.insurance ? "Yes" : "No"}</p>
      <p><strong>Disabled Seats:</strong> {formData.disabledSeats ? "Yes" : "No"}</p>
      <p><strong>Special Assistance:</strong> {formData.specialAssistance ? "Yes" : "No"}</p>

      <hr className="my-6" />

      <p className="text-lg font-bold">
        {price !== undefined
          ? `Price: $${price}`
          : "Price not available for this selection."}
      </p>
    </div>
  );
}










