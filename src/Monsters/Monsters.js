import React from "react";
import { FetchMonstersWithDetails } from "../hooks/Fetching";
import { MonsterCard } from "./MonsterCard";
const Monsters = () => {
  const { loading, response: monsters, error } = FetchMonstersWithDetails(
    "api/monsters"
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {monsters.map((monster) => {
        return <MonsterCard monster={monster} />;
      })}
      {error}
    </div>
  );
};

export default Monsters;
