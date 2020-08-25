import React from "react";
import { FetchDataWithDetails } from "../hooks/Fetching";
import { MonsterCard } from "./MonsterCard";
import { Loading } from "../shared/Loading";

const Monsters = () => {
  const { loading, response: monsters, error } = FetchDataWithDetails(
    "api/monsters"
  );
  if (loading) {
    return <Loading />;
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
