function Table({ config, sneakers }) {
  const renderedHeaders = config.map((column) => (
    <th className="text-start text-white border-2 border-sky-600 p-3">
      {column.label}
    </th>
  ));

  const renderedRows = sneakers.map((sneaker) => {
    const renderedCells = config.map((column) => (
      <td className="border-2 border-sky-700 text-white p-3">
        {column.render(sneaker)}
      </td>
    ));

    return <tr className="border-2 ">{renderedCells}</tr>;
  });

  return (
    <table className="bg-sky-900 table-auto w-3/4 rounded overflow-hidden ">
      <thead className="bg-sky-600">{renderedHeaders}</thead>

      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
