import React from "react";
import { FetchDataWithDetails } from "../hooks/Fetching";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type", // add subtype sub heading
    filters: [
      { text: "aberration", value: "aberration" },
      { text: "Beast", value: "beast" },
      { text: "Celestial", value: "celestial" },
      { text: "Construct", value: "construct" },
      { text: "Dragon", value: "dragon" },
      { text: "Elemental", value: "elemental" },
      { text: "Fey", value: "fey" },
      { text: "Fiend", value: "fiend" },
      { text: "Giant", value: "giant" },
      { text: "Humanoid", value: "humanoid" },
      { text: "Monstrosity", value: "monstrosity" },
      { text: "Ooze", value: "ooze" },
      { text: "Plant", value: "plant" },
    ],
    onFilter: (value, record) => {
      return record.type.includes(value);
    },
  },
  {
    title: "alignment",
    dataIndex: "alignment",
    key: "alignment",
    filters: [
      { text: "Chaotic Evil", value: "chaotic evil" },
      { text: "Lawful Good", value: "lawful good" },
      { text: "Chaotic Good", value: "chaotic good" },
      { text: "Lawful Evil", value: "lawful evil" },
      { text: "Neutral", value: "neutral" },
      { text: "Any Alignment", value: "any" },
      { text: "Unaligned", value: "unaligned" },
    ],
    onFilter: (value, record) => {
      return record.alignment.includes(value);
    },
  },
  {
    title: "hit_points",
    dataIndex: "hit_points",
    key: "hit_points",
    sorter: (a, b) => a.hit_points - b.hit_points,
  },
  {
    title: "armor_class",
    dataIndex: "armor_class",
    key: "armor_class",
    sorter: (a, b) => a.armor_class - b.armor_class,
  },
  {
    title: "challenge_rating",
    dataIndex: "challenge_rating",
    key: "challenge_rating",
    sorter: (a, b) => a.challenge_rating - b.challenge_rating,
  },
  {
    title: "constitution",
    dataIndex: "constitution",
    key: "constitution",
    sorter: (a, b) => a.constitution - b.constitution,
  },
  {
    title: "languages",
    dataIndex: "languages",
    key: "languages",
  },
];

const Monsters = () => {
  const { loading, response: monsters, error } = FetchDataWithDetails(
    "api/monsters"
  );

  return (
    <div>
      <Table
        loading={loading}
        dataSource={monsters}
        columns={columns}
        pagination={{ position: ["topRight", "none"] }}
      />
      {error}
    </div>
  );
};

export default Monsters;
