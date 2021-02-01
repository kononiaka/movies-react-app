import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ data, onSort, sortColumn, columns }) => {
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        sortColumn={sortColumn}
        columns={columns}
      ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
