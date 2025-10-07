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
          <dialog
            id="drawer"
            className="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
          >
            <el-dialog-backgrop className="absolute inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0 " />

            <div
              tabIndex="0"
              className="absolute inset-0 pl-10 focus:outline-none sm:pl-16"
            >
              <el-dialog-panel className="group/dialog-panel relative ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    command="close"
                    commandfor="drawer"
                    className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    <span></span>
                  </button>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </article>
    </nav>
  );
}
