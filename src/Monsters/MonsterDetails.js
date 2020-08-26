import React, { Fragment } from "react";

export const MonsterDetails = ({ monster }) => {
  console.log(monster);
  const stats = {
    strength: monster.strength,
    dexterity: monster.dexterity,
    constitution: monster.constitution,
    intelligence: monster.intelligence,
    wisdom: monster.wisdom,
    charisma: monster.charisma,
    armor_class: monster.armor_class,
    hit_points: monster.hit_points,
    speed: monster.speed,
    challenge_rating: monster.challenge_rating,
    size: monster.size,
  };

  return (
    <div>
      <Actions index={monster.index} actions={monster.actions} />
      <Stats stats={stats} />
    </div>
  );
};

const Actions = ({ actions, index }) => {
  if (!actions) return null;
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
