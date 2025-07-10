import React from 'react';

interface FlightInfo {
  destination: string;
  classes: { [className: string]: number };
}

const Summary = ({
  formData,
  flightData,
}: {
  formData: any;
  flightData: FlightInfo[];
}) => {
  // Find price for selected destination and flightType
  const selectedFlight = flightData.find(f => f.destination === formData.destination);
  const pricePerTraveler =
    selectedFlight && formData.flightType
      ? selectedFlight.classes[formData.flightType] || 0
      : 0;

  const totalPrice = pricePerTraveler * (Number(formData.travelers) || 0);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>

      <div className="space-y-4 text-gray-700">
        {/* Destination Details */}
        <div>
          <h3 className="text-lg font-medium text-[#6698CC] mb-2">Destination Details</h3>
          <p>
            <span className="font-medium">Destination:</span> {formData.destination}
          </p>
          <p>
            <span className="font-medium">Departure Date:</span> {formData.departureDate}
          </p>
          <p>
            <span className="font-medium">Return Date:</span> {formData.returnDate}
          </p>
          <p>
            <span className="font-medium">Type of Flight:</span> {formData.flightType}
          </p>
          <p>
            <span className="font-medium">Price per Traveler:</span> ${pricePerTraveler.toFixed(2)}
          </p>
          <p>
            <span className="font-medium">Total Price:</span> ${totalPrice.toFixed(2)}
          </p>
        </div>

        {/* Travelers Info */}
        <div>
          <h3 className="text-lg font-medium text-[#6698CC] mb-2">Travelers Information</h3>
          <p>
            <span className="font-medium">Amount of Travelers:</span> {formData.travelers}
          </p>
          <p>
            <span className="font-medium">Pets:</span> {formData.pets ? 'Yes' : 'No'}
          </p>
          <p>
            <span className="font-medium">Extra Luggage:</span> {formData.extraLuggage ? 'Yes' : 'No'}
          </p>
        </div>

        {/* Accessibility Info */}
        <div>
          <h3 className="text-lg font-medium text-[#6698CC] mb-2">Accessibility and Special Assistance</h3>
          <p>
            <span className="font-medium">Insurance:</span> {formData.insurance ? 'Yes' : 'No'}
          </p>
          <p>
            <span className="font-medium">Pick Disabled Seats:</span> {formData.disabledSeats ? 'Yes' : 'No'}
          </p>
          <p>
            <span className="font-medium">Special Assistance:</span> {formData.specialAssistance ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
