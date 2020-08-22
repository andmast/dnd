import React, { useState } from "react";
import { MonsterDetails } from "./MonsterDetails";

export const MonsterCard = ({ name, url }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        monsterDetails
      </button>
      {showDetails && (
        <div>
          <MonsterDetails url={url} />
        </div>
      )}
    </div>
  );
};
