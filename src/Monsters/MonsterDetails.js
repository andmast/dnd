import React, { useState } from "react";
import { useFetch } from "../hooks/Fetching";

export const MonsterDetails = ({ url }) => {
  const { loading, response: details, error } = useFetch(url);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Actions index={details.index} actions={details.actions} />
      {JSON.stringify(details)}
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
