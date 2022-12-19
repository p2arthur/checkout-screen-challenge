import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className="text-white border-b-2 border-sky-600">
          {column.label}^
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} />;
}
export default SortableTable;
