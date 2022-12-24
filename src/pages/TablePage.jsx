//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
function TablePage() {
  const data = [
    { name: "Nike Air Max", color: "bg-slate-500", price: 400 },
    { name: "Jordan low", color: "bg-blue-500", price: 1150 },
    { name: "Dunk low", color: "bg-red-500", price: 890 },
    { name: "Jordan high", color: "bg-orange-500", price: 350 },
  ];

  const config = [
    {
      label: "Model",
      render: (sneaker) => sneaker.name,
      sortValue: (sneaker) => sneaker.name,
    },
    {
      label: "Color",
      render: (sneaker) => (
        <div
          className={`${sneaker.color}  h-10 rounded shadow-lg transition-all p-2 m-1 hover:scale-110 hover:translate-y-2 hover:h-16 hover:shadow-lg hover:border-4 border-sky-500 `}
        ></div>
      ),
    },
    {
      label: "Image",
      render: () => (
        <div className=" flex justify-center">
          <img
            className="h-20 w-20 transform hover:scale-150 hover:shadow-lg rounded-lg transition-all"
            src="https://dev-ace1-app-storage.s3.us-west-2.amazonaws.com/images/sneakers/DD1391%20102/original/png/mimified/1649762866747.png"
            alt=""
          />
        </div>
      ),
    },
    {
      label: "Price",
      render: (sneaker) => `$${sneaker.price}`,
      sortValue: (sneaker) => sneaker.price,
    },
  ];

  const keyFnHelper = (sneaker) => sneaker.name;

  return (
    <div className="bg-slate-900 flex justify-center mt-11 flex flex-col items-center">
      <div className="h-56 flex items-center bg-black w-full justify-center overflow-hidden bg-cover my-5">
        <img
          className="opacity-50 w-full "
          src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <h1 className=" absolute text-5xl text-white text-center tracking-wider">
          Select your <br /> product
        </h1>
      </div>
      <SortableTable keyFnHelper={keyFnHelper} config={config} data={data} />
    </div>
  );
}

export default TablePage;
