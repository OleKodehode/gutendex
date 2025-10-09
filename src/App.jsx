import Header from "./components/Header";
import "@tailwindplus/elements";
import Categories from "./components/Categories";
import { categoriesArray } from "./utils/categoriesArray";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Categories items={categoriesArray} />
      <Outlet />
    </>
  );
}

export default App;
