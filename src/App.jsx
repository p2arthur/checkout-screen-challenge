import CartPage from "./pages/CartPage";
import ResumePage from "./pages/ResumePage";
import Router from "./components/Router";
import Link from "./components/Link";
function App() {
  return (
    <div>
      <Link to="/cart">cart</Link>
      <Link to="/resumepage">Resumepage</Link>
      <Router pathName="/resumepage">
        <ResumePage />
      </Router>
      <Router pathName="/cart">
        <CartPage />
      </Router>
    </div>
  );
}

export default App;
