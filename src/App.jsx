import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "@tailwindplus/elements";
import Categories from "./components/Categories";
import { categoriesArray } from "./utils/categoriesArray";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Categories items={categoriesArray} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
