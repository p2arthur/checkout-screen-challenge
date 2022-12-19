import Link from "./Link";

function NavigationBar() {
  const Links = [
    { label: "Cart", path: "/cart" },
    { label: "Table", path: "/" },
  ];

  const renderedLinks = Links.map((link) => (
    <Link
      key={link.path}
      className="font-thin text-xl hover:bg-sky-500/40 w-48 hover:shadow-lg hover:translate-y-1 transition-all flex items-center justify-center rounded-full"
      to={link.path}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="flex justify-around items-center text-white bg-slate-900 h-16 fixed w-full shadow-2xl border-b-4 border-b-sky-600">
      {renderedLinks}
    </div>
  );
}

export default NavigationBar;
