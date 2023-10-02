"use client";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("/api/hello")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1>Next.js Frontend</h1>
        <p>test above</p>
        <button
          className="bg-yellow-500 px-3 py-2 rounded-full"
          onClick={fetchData}
          disabled={isLoading}>
          {isLoading ? "Loading..." : "Fetch Data"}
        </button>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Home;
