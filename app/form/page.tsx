'use client';
import FormStepper from '../components/FormStepper'; // update path if needed

const getFlightData = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json');
  return res.json();
};

export default async function FormPage() {
  const flightData = await getFlightData();

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <FormStepper flightData={flightData} />
    </div>
  );
}
