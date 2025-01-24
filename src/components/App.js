import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {dogImage && !loading && (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App