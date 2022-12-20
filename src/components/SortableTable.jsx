import Table from "./Table";
import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    const handleClick = (label) => {
      if (sortBy && sortBy !== label) {
        setSortOrder("ascending");
        setSortBy(label);
        return;
      }

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
          <div className="flex items-center text center justify-center">
            {getSortIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
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

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

const getSortIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortBy === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === "ascending") {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  }

  if (sortOrder === "descending") {
    return (
      <div>
        <GoChevronDown />
      </div>
    );
  }
};
export default SortableTable;
