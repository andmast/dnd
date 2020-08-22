import React, { useEffect, useState } from "react";
import axios from "./axios";

const useFetchMonsters = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const FetchData = () => {
      axios
        .get(`/monsters`, {})
        .then((res) => {
          const data = res.data;
          console.log(data);
          setResponse(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    };
    FetchData();
  }, []);
  return { loading, response, error };
};

const Monsters = () => {
  const { loading, response: monsters, error } = useFetchMonsters();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {monsters.results.map((monster) => (
        <p>{monster.name}</p>
      ))}
    </div>
  );
};

export default Monsters;
