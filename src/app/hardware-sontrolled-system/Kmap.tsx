"use client";
import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { cn } from "@/lib/utils";

interface DataType {
  key: number;
  l1: number;
  l2: number;
  l3: number;
  l4: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "L CR",
    dataIndex: "key",
    className: "w-24",
  },
  {
    title: "00",
    dataIndex: "l1",
    render: (value) => (
      <div className={value === 0 ? "bg-green-600" : ""}>{value}</div>
    ),
  },
  {
    title: "01",
    dataIndex: "l2",
    render: (value) => (
      <div className={value === 0 ? "bg-green-600" : ""}>{value}</div>
    ),
  },
  {
    title: "11",
    dataIndex: "l3",
    render: (value) => (
      <div className={value === 0 ? "bg-green-600" : ""}>{value}</div>
    ),
  },
  {
    title: "10",
    dataIndex: "l4",
    render: (value) => (
      <div className={value === 0 ? "bg-green-600" : ""}>{value}</div>
    ),
  },
];

const Ml: DataType[] = [
  {
    key: 0,
    l1: 0,
    l2: 1,
    l3: 1,
    l4: 1,
  },
  {
    key: 1,
    l1: 0,
    l2: 1,
    l3: 1,
    l4: 1,
  },
];

const Mr: DataType[] = [
  {
    key: 0,
    l1: 1,
    l2: 0,
    l3: 1,
    l4: 1,
  },
  {
    key: 1,
    l1: 1,
    l2: 1,
    l3: 1,
    l4: 1,
  },
];

const ML: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={Ml}
    bordered
    pagination={false}
    title={() => "ML"}
  />
);

const MR: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={Mr}
    bordered
    pagination={false}
    title={() => "MR"}
  />
);

export { ML, MR };
