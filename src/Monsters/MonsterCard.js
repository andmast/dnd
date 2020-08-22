import React, { useState } from "react";

export const MonsterCard = ({ name, url }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        monsterDetails
      </button>
      {showDetails && <div>monsterDetails, {url}</div>}
    </div>
  );
};
