import NavigationBar from "./components/NavigationBar";
import CartPage from "./pages/CartPage";
import ResumePage from "./pages/ResumePage";
import Router from "./components/Router";
import CounterPage from "./pages/CounterPage";
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
      <Router pathName="/table">
        <TablePage />
      </Router>
      <Router pathName="/counter">
        <CounterPage initialValue={5} />
      </Router>
    </div>
  );
}

export default App;
