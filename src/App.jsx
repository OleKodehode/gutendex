import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "@tailwindplus/elements";

function App() {
  return (
    <>
      <Header />
      <h1 className="p-5 rounded-2xl bg-amber-300 text-zinc-900">
        Test to see if everything works
      </h1>
    </>
  );
}

export default App;
