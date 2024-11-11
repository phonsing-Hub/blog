"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    feature: "Hardware Virtualization",
    vm: "Yes",
    docker: "No",
  },
  {
    key: "2",
    feature: "Guest Operating System",
    vm: "Yes",
    docker: "Shares Host OS",
  },
  {
    key: "3",
    feature: "Resource Overhead",
    vm: "High",
    docker: "Low",
  },
  {
    key: "4",
    feature: "Isolation",
    vm: "Strong",
    docker: "Moderate",
  },
  {
    key: "5",
    feature: "Portability",
    vm: "Moderate",
    docker: "High",
  },
  {
    key: "6",
    feature: "Boot Time",
    vm: "Slow",
    docker: "Fast",
  },
];

const columns = [
  {
    key: "feature",
    label: "Feature",
  },
  {
    key: "vm",
    label: "Virtual Machines (VMs)",
  },
  {
    key: "docker",
    label: "Docker Containers",
  },
];

export default function DifferencesTable() {
  return (
    <Table aria-label="Example table with dynamic content" isStriped>
      <TableHeader columns={columns} >
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} >
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
