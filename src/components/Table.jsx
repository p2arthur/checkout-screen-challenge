function Table({ config, sneakers }) {
  const renderedHeaders = config.map((column) => (
    <th className="text-center text-white border-b-2 border-sky-600 p-3">
      {column.label}
    </th>
  ));

  const renderedRows = sneakers.map((sneaker) => {
    const renderedCells = config.map((column) => (
      <td className="border-b-2 border-sky-700 text-white p-3 text-center">
        {column.render(sneaker)}
      </td>
    ));

    return <tr className="border-b-2 ">{renderedCells}</tr>;
  });

  return (
    <table className=" table-auto w-full rounded overflow-hidden ">
      <thead className="">{renderedHeaders}</thead>

      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
