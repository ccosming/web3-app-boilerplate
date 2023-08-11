import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const getApiData = async () => {
    const response = await fetch("http://localhost:20001/").then((response) =>
      response.json()
    );
    setMessage(response.message);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
