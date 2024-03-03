import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const result = await fetch("/api");
      const fetchResult = await result.json();
      console.log(fetchResult);
      setPlaces(fetchResult);
    }
    fetchPlaces();
  }, []);

  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header />
      <p className="bg-blue-800 text-xl px-5 py-3 text-white">
        Places will be displayed here..
      </p>
      <div className="grid grid-cols-3">
        {places.length === 0 ? (
          <div className="bg-white p-5 rounded">No Place Is Avalable</div>
        ) : (
          " "
        )}

        {places.map((item) => (
          <MainPage
            place={item.favorite_place}
            temple={item.favorite_temple}
            vacation={item.vacation_spot}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
