import React from "react";
import { Tag } from "antd";
import _ from "lodash";

const colors = {
  chaoticEvil: "#450003",
  neutralEvil: "#5C0002",
  lawfulEvil: "#94090D",
  chaoticGood: "#D40D12",
  chaoticNeutral: "#FF1D23",
  lawfulGood: "#16193B",
  neutralGood: "#16193B",
  lawfulNeutral: "#35478C",
  anyAlignment: "#4E7AC7",
  neutral: "#7FB2F0",
  unaligned: "#00261C",
  anyChaoticAlignment: "#044D29",
  neutralGood50OrNeutralEvil50: "#168039",
  anyNonGoodAlignment: "#45BF55",
  anyNonLawfulAlignment: "#96ED89",
  anyEvilAlignment: "#96ED89",
};

export const AlignmentTag = ({ value }) => {
  const alignmentColor = colors[_.camelCase(value)];

  return <Tag color={alignmentColor}>{value}</Tag>;
};
