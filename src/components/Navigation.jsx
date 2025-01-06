function Navigation({ handleNavigationClick }) {
  return (
    <nav className="my-8 ml-4 rounded-md bg-white/50 px-4 py-8">
      <ul className="space-y-4">
        <li>
          <button
            className="flex w-full gap-2 rounded-md bg-white px-4 py-1 transition-colors duration-200 hover:bg-black hover:text-white"
            onClick={() => handleNavigationClick("graphs")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-[#FEB46B]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12zm-2.293 6.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-2 -2z" />
            </svg>
            <span>Gráficos</span>
          </button>
        </li>
        <li>
          <button
            className="flex w-full gap-2 rounded-md bg-white px-4 py-1 transition-colors duration-200 hover:bg-black hover:text-white"
            onClick={() => handleNavigationClick("table")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-[#FEB46B]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a1 1 0 0 1 1 -1z" />
              <path d="M21 12v6a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1z" />
              <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h6z" />
              <path d="M9 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2a1 1 0 0 1 1 1z" />
            </svg>
            <span>Tabla</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
