import React from "react";
import { useFetch } from "./hooks/Fetching";
const Monsters = () => {
  const { loading, response: monsters, error } = useFetch("/monsters");
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {monsters.results.map((monster) => (
        <p key={monster.index}>{monster.name}</p>
      ))}
      {error}
    </div>
  );
};

export default Monsters;
