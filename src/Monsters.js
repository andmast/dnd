import React from "react";
import { useFetchMonsters } from "./hooks/axiosFetching";
const Monsters = () => {
  const { loading, response: monsters, error } = useFetchMonsters();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {monsters.results.map((monster) => (
        <p key={monster.index}>{monster.name}</p>
      ))}
    </div>
  );
};

export default Monsters;
