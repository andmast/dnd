import React, { Fragment } from "react";
import { useFetch } from "../hooks/Fetching";

export const MonsterDetails = ({ url }) => {
  const { loading, response: details, error } = useFetch(url);
  if (loading) {
    return <div>Loading...</div>;
  }
  const stats = {
    strength: details.strength,
    dexterity: details.dexterity,
    constitution: details.constitution,
    intelligence: details.intelligence,
    wisdom: details.wisdom,
    charisma: details.charisma,
    armor_class: details.armor_class,
    hit_points: details.hit_points,
    speed: details.speed,
    challenge_rating: details.challenge_rating,
  };

  return (
    <div>
      <Actions index={details.index} actions={details.actions} />
      <Stats stats={stats} />
      {error}
    </div>
  );
};

const Actions = ({ actions, index }) => {
  return (
    <div>
      {actions.map((action) => (
        <h1 key={`${index}${action.name}`}>{action.name}</h1>
      ))}
    </div>
  );
};

const Stats = ({ stats, index }) => {
  return (
    <Fragment>
      <div>{stats.dexterity}</div>;
    </Fragment>
  );
};
