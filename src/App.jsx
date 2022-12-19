import CartPage from "./pages/CartPage";
import ResumePage from "./pages/ResumePage";
import Router from "./components/Router";
import Link from "./components/Link";
import NavigationBar from "./components/NavigationBar";

import TablePage from "./pages/TablePage";
function App() {
  return (
    <div className="flex flex-col">
      <div>
        <NavigationBar />
      </div>
      <Router pathName="/resumepage">
        <ResumePage />
      </Router>
      <Router pathName="/cart">
        <CartPage />
      </Router>
      <Router pathName="/">
        <TablePage />
      </Router>
      <Router pathName="/table">
        <TablePage />
      </Router>
    </div>
  );
}

export default App;
