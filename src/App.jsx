import Header from "./components/Header";
import "@tailwindplus/elements";
import Categories from "./components/Categories";
import { categoriesArray } from "./utils/categoriesArray";

function App() {
  return (
    <>
      <Header />
      <Categories items={categoriesArray} />
    </>
  );
}

export default App;
