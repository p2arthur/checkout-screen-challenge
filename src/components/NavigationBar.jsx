import Link from "./Link";

function NavigationBar() {
  const Links = [
    { label: "Cart", path: "/cart" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = Links.map((link) => (
    <Link className="font-bold text-xl" to={link.path}>
      {link.label}
    </Link>
  ));

  return (
    <div className="flex justify-around text-white bg-red-400 h-100">
      {renderedLinks}
    </div>
  );
}

export default NavigationBar;
