import React, { useState } from "react";
import { MonsterDetails } from "./MonsterDetails";
import { Button } from "antd";

export const MonsterCard = ({ name, url }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <p>{name}</p>
      <Button type="primary" onClick={() => setShowDetails(!showDetails)}>
        Details
      </Button>
      {showDetails && (
        <div>
          <MonsterDetails url={url} />
        </div>
      )}
    </div>
  );
};
