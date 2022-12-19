import Link from "./Link";

function NavigationBar() {
  const Links = [
    { label: "Cart", path: "/cart" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = Links.map((link) => (
    <Link className="font-thin text-xl" to={link.path}>
      {link.label}
    </Link>
  ));

  return (
    <div className="flex justify-around items-center text-white bg-slate-900 h-12 fixed w-full shadow-2xl border-b-4 border-b-sky-600">
      {renderedLinks}
    </div>
  );
}

export default NavigationBar;
