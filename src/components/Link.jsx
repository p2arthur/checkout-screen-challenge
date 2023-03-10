import UseNavigationContext from "../hooks/use-navigation-context";

function Link({ to, children, className }) {
  const { navigate } = UseNavigationContext();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      href={to}
    >
      {children}
    </a>
  );
}

export default Link;
