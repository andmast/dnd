import React from "react";
import { useFetch } from "../hooks/Fetching";
import { MonsterCard } from "./MonsterCard";
const Monsters = () => {
  const { loading, response: monsters, error } = useFetch("api/monsters");
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {monsters.results.map((monster) => {
        const { index, name, url } = monster;
        return <MonsterCard key={index} name={name} url={url} />;
      })}
      {error}
    </div>
  );
};

export default Monsters;
