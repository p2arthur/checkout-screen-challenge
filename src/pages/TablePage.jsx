import Table from "../components/Table";

function TablePage() {
  const sneakers = [
    { name: "Dunk low", color: "bg-red-500", price: 890 },
    { name: "Jordan low", color: "bg-blue-500", price: 1150 },
    { name: "Jordan high", color: "bg-orange-500", price: 350 },
    { name: "Nike Air Max", color: "bg-slate-500", price: 400 },
  ];

  const config = [
    { label: "Model", render: (sneaker) => sneaker.name },
    {
      label: "Color",
      render: (sneaker) => (
        <div
          className={`${sneaker.color}  h-10 rounded shadow-lg transition-all p-2 m-1 hover:scale-110 hover:translate-y-2 hover:h-16 hover:shadow-lg hover:border-4 border-sky-500 `}
        ></div>
      ),
    },
    { label: "Price", render: (sneaker) => `$${sneaker.price}` },
    {
      label: "Image",
      render: (sneaker) => (
        <div className=" flex justify-center">
          <img
            className="h-20 w-20 transform hover:scale-150 hover:shadow-lg rounded-lg transition-all"
            src="https://dev-ace1-app-storage.s3.us-west-2.amazonaws.com/images/sneakers/DD1391%20102/original/png/mimified/1649762866747.png"
            alt=""
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-slate-900 h-screen p-10 rounded flex justify-center mt-10">
      <Table config={config} sneakers={sneakers} />
    </div>
  );
}

export default TablePage;
