import Table from "./Table";
import { useState } from "react";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    const handleClick = (label) => {
      if (sortOrder === null) {
        setSortOrder("ascending");
        setSortBy(label);
      } else if (sortOrder === "ascending") {
        setSortOrder("descending");
        setSortBy(label);
      } else if (sortOrder === "descending") {
        setSortOrder(null);
        setSortBy(null);
      }
    };

    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.label)}
          className="text-white border-b-2 border-sky-600 cursor-pointer"
        >
          {column.label}^
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortOrder !== null && sortBy !== null) {
    const reverseOrder = sortOrder === "ascending" ? 1 : -1;
    const { sortValue } = config.find((column) => column.label === sortBy);

    console.log(sortValue);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      }
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
    });
  }

  return (
    <div className="w-full text-white">
      {sortBy} - {sortOrder}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}
export default SortableTable;
