import FormStepper from '../components/FormStepper';
import '../globals.css';

const getFlightData = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json'
  );
  return res.json();
};

export default async function Page() {
  const flightData = await getFlightData();

  return (
    <div className="relative p-10 bg-gradient-to-br from-[#f0f7ff] to-[#dceefc]">
       {/* Video de fondo */}
      <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-0"
    >
      <source
        src="./img/airplane.mp4"
        type="video/mp4"
      />
    </video>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-lg p-8 shadow-lg text-black mb-20">
        <FormStepper flightData={flightData} />
      </div>
    </div>
  );
}



