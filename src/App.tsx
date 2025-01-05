import { useState } from "react";

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // Function to get user geolocation
  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className="container mx-auto flex justify-center flex-col items-center">
        <div className="text-center mt-5">
          <h1 className="font-semibold text-xl">
            Get the User's Current Location
          </h1>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={geoLocation}
          >
            Get Location
          </button>
        </div>
        <div className="mt-5">
          <h1 className="font-semibold text-xl">Latitude: {latitude}</h1>
          <h1 className="font-semibold text-xl">Longitude: {longitude}</h1>
        </div>

        {/* Google Maps */}
        {/* AIzaSyDgY1phfABljMlJNhMKpvTs3FPIBp1IFrQ */}
        <div className="mt-5">
          <iframe
            width="1200"
            height="600"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDgY1phfABljMlJNhMKpvTs3FPIBp1IFrQ
            &q=${latitude},${longitude}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default App;
