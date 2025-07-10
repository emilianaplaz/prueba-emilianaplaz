import FormStepper from '../components/FormStepper';

const getFlightData = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json');
  return res.json();
};

export default async function Page() {
  const flightData = await getFlightData();

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <FormStepper flightData={flightData} />
    </div>
  );
}
