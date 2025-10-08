import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "@tailwindplus/elements";
import Categories from "./components/Categories";
import { categoriesArray } from "./utils/categoriesArray";

function App() {
  return (
    <>
      <Header />
      <Categories items={categoriesArray} />
      <h1 className="p-5 rounded-2xl bg-amber-300 text-zinc-900 w-1/2">
        Test to see if everything works
      </h1>
    </>
  );
}

export default App;
