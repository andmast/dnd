import React from "react";
import { FetchDataWithDetails } from "../hooks/Fetching";
import { MonsterCard } from "./MonsterCard";
import { Loading } from "../shared/Loading";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type", // add subtype sub heading
  },
  {
    title: "alignment",
    dataIndex: "alignment",
    key: "alignment",
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
        scroll={{ y: 240 }}
      />
      {/* {monsters.map((monster) => {
        return <MonsterCard monster={monster} />;
      })} */}
      {/* {error} */}
    </div>
  );
};

export default Monsters;
