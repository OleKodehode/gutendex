export default function Header() {
  return (
    <nav className="flex fixed top-0 left-0 w-full justify-between items-center h-20 px-5 bg-sky-600 gap-2 sm:gap-4 md:gap-8">
      <h1 className="text-xl sm:text-2xl text-nowrap">Book Finder</h1>
      <article
        id="search-bar"
        className="flex justify-between items-center bg-zinc-300 rounded-2xl px-2 sm:gap-2 md:gap-5 lg:gap-10 py-2.5 border-1 border-zinc-700 w-full"
      >
        <img src="/search.svg" alt="" className="hidden sm:block" />
        <input
          type="search"
          name=""
          id=""
          className="text-zinc-900 focus:outline-0 caret-indigo-700  w-full"
        />
      </article>
      <article className="ml-5">
        <button
          className="sm:hidden"
          data-command="show-modal"
          data-commandfor="drawer"
        >
          <img src="/menu.svg" alt="" className="size-8" />
        </button>
        <el-dialog>
          <dialog id="drawer"></dialog>
        </el-dialog>
      </article>
    </nav>
  );
}
