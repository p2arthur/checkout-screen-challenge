import { Fragment } from "react";
function Table({ config, data, keyFnHelper, className }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th
        key={column.label}
        className="text-center text-white border-b-2 border-sky-600 p-3"
      >
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column, index) => (
      <td
        key={index}
        className="border-b-2 border-sky-700/50 text-white p-3 text-center text-xl font-thin h-44"
      >
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr key={keyFnHelper(rowData)} className="border-b-2 hover:bg-sky-500/10">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className={`${className} table-auto w-full  `}>
      <thead className="">
        <tr>{renderedHeaders}</tr>
      </thead>

      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
