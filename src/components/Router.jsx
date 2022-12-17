import UseNavigationContext from "../hooks/use-navigation-context";

function Router({ children, pathName }) {
  const { currentPath } = UseNavigationContext();

  if (pathName === currentPath) {
    return <div>{children}</div>;
  }

  return null;
}

export default Router;
