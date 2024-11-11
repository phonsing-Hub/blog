"use client";
import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: number;
  l: number;
  c: number;
  r: number;
  ml: number;
  mr: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "TL",
    dataIndex: "l",
  },
  {
    title: "TC",
    dataIndex: "c",
  },
  {
    title: "TR",
    dataIndex: "r",
  },
  {
    title: "ML",
    dataIndex: "ml",
    
  },
  {
    title: "MR",
    dataIndex: "mr",
  },
];

const data: DataType[] = [
  {
    key: 1,
    l: 0,
    c: 0,
    r: 0,
    ml: 0,
    mr: 1,
  },
  {
    key: 2,
    l: 0,
    c: 0,
    r: 1,
    ml: 1,
    mr: 0,
  },
  {
    key: 3,
    l: 0,
    c: 1,
    r: 0,
    ml: 1,
    mr: 1,
  },
  {
    key: 4,
    l: 0,
    c: 1,
    r: 1,
    ml: 1,
    mr: 1,
  },
  {
    key: 5,
    l: 1,
    c: 0,
    r: 0,
    ml: 0,
    mr: 1,
  },
  {
    key: 6,
    l: 1,
    c: 0,
    r: 1,
    ml: 1,
    mr: 1,
  },
  {
    key: 7,
    l: 1,
    c: 1,
    r: 0,
    ml: 1,
    mr: 1,
  },
  {
    key: 8,
    l: 1,
    c: 1,
    r: 1,
    ml: 1,
    mr: 1,
  },
];

const TruthTable: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={data}
    pagination={false}
    bordered
  />
);

export default TruthTable;
