import FormStepper from '../components/FormStepper';

const getFlightData = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json');
  return res.json();
};

export default async function Page() {
  const flightData = await getFlightData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] to-[#dceefc] p-10">
      <div className="text-center mb-12">
      </div>

      <FormStepper flightData={flightData} />
    </div>
  );
}

