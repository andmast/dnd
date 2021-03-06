import React, { useState } from "react";
import { MonsterDetails } from "./MonsterDetails";
import { Button } from "antd";

export const MonsterCard = ({ monster }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <p>{monster.name}</p>
      <Button type="primary" onClick={() => setShowDetails(!showDetails)}>
        Details
      </Button>
      {showDetails && (
        <div>
          <MonsterDetails monster={monster} />
        </div>
      )}
    </div>
  );
};
