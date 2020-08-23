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
        <div key={`${index}${action.name}`}>
          <p>{action.name}</p>
          <p>{action.desc}</p>
        </div>
      ))}
    </div>
  );
};

const Stats = ({ stats }) => {
  return (
    <Fragment>
      <div>
        {Object.keys(stats).map((key, index) => {
          return typeof stats[key] === "object" ? (
            <div key={`${key}${index}`}>
              <p>{key.toUpperCase()}</p>
              {Object.keys(stats[key]).map((innerKey, index) => {
                return (
                  <p key={`${innerKey}${index}`}>
                    {innerKey.toUpperCase()}:{stats[key][innerKey]}
                  </p>
                );
              })}
            </div>
          ) : (
            <p key={`${key}${index}`}>
              {key.toUpperCase()}:{stats[key]}
            </p>
          );
        })}
      </div>
    </Fragment>
  );
};
