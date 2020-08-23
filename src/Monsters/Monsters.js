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
        const { index, name, url } = monster;
        return <MonsterCard key={index} name={name} url={url} />;
      })}
      {error}
    </div>
  );
};

export default Monsters;
