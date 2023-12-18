import netflix from "../assets/netflix.png";
import moviesdb from "../assets/moviesdb.png";
import animevault from "../assets/animevault.png";
export const Projects = () => {
  return (
    <div
      className=" min-h-[90vh] h-full flex flex-col p-20 max-sm:p-10 gap-10 bg-gray-100"
      id="projects"
    >
      <div className="flex flex-col px-[220px] max-sm:px-2 gap-2">
        <p className="text-xl font-bold text-blue-500">PROJECTS</p>
        <p className="text-2xl font-bold">Explore my latest Projects on Web</p>
      </div>
      {/* anime */}
      <div className="flex max-sm:flex-col max-sm:items-center justify-center">
        <div className="h-[60vh] w-[60vw] max-sm:h-[75vh] max-sm:w-[90vw] flex max-sm:flex-col max-sm:items-center justify-between max-sm:justify-around px-4 max-sm:py-4 shadow-2xl rounded-lg bg-white">
          <div className="flex items-center">
            <img
              src={animevault}
              alt="animevault"
              className="h-[55vh] max-sm:mt-4 max-sm:h-[30vh] rounded-2xl shadow-lg cursor-pointer"
              onClick={() =>
                window.open("https://joeld-anime-vault.netlify.app")
              }
            />
          </div>
          <div className="flex flex-col items-center w-[300px] px-2 py-10 max-sm:py-4 gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg font-semibold">ANIME VAULT</span>
              <span className="text-xs font-semibold text-gray-500">
                (DECEMBER 2023)
              </span>
            </div>
            <div>
              <p className="text-gray-500 font-medium text-md">
                Anime Vault is an online website that fetches Anime (TV/ Movie)
                and displays to the user upto 1000 pages. The User can see more
                info about the anime like Characters and Similar Animes .
              </p>
            </div>
            <div className="p-4">
              <span className="shadow-lg px-4 py-2 font-semibold ">REACT</span>
              <span className="shadow-lg px-4 py-2 font-semibold ">
                Tailwind CSS
              </span>
            </div>
            <div className="p-4 flex gap-8">
              <div>
                <button
                  className="text-md mr-2 font-medium"
                  onClick={() =>
                    window.open("https://github.com/joeldasari/Anime-Vault")
                  }
                >
                  Code
                </button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
                  alt="github"
                  className="h-5 cursor-pointer inline"
                  onClick={() =>
                    window.open("https://github.com/joeldasari/Anime-Vault")
                  }
                />
              </div>
              <div>
                <button
                  className="text-md mr-2 font-medium"
                  onClick={() =>
                    window.open("https://joeld-anime-vault.netlify.app")
                  }
                >
                  Live Demo
                </button>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPLN84jdh3sUbYOxdzeZz_GjM2-IkbbIqOg&usqp=CAU"
                  alt="github"
                  className="h-4 cursor-pointer inline"
                  onClick={() =>
                    window.open("https://joeld-anime-vault.netlify.app")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* moviesdb  */}
      <div className="flex justify-center max-sm:flex-col max-sm:items-center">
        <div className="h-[60vh] w-[60vw] max-sm:h-[80vh] max-sm:w-[90vw] flex max-sm:flex-col-reverse max-sm:items-center max-sm:py-4 justify-between max-sm:justify-around px-4 shadow-2xl rounded-lg bg-white">
          <div className="flex flex-col items-center w-[300px] px-2 py-10 max-sm:py-4 gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg font-semibold">MOVIES DB</span>
              <span className="text-xs font-semibold text-gray-500">
                (DECEMBER 2023)
              </span>
            </div>
            <div>
              <p className="text-gray-500 font-medium text-md">
                Movies DB is an online website that fetches latest Movies and TV
                Shows data from the API and displays to the user. The User can
                see more Info about the Movie / TV Show.
              </p>
            </div>
            <div className="p-4">
              <span className="shadow-lg px-4 py-2 font-semibold ">REACT</span>
              <span className="shadow-lg px-4 py-2 font-semibold ">
                Tailwind CSS
              </span>
            </div>
            <div className="p-4 flex gap-8">
              <div>
                <button
                  className="text-md mr-2 font-medium"
                  onClick={() =>
                    window.open("https://github.com/joeldasari/moviesDB")
                  }
                >
                  Code
                </button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
                  alt="github"
                  className="h-5 cursor-pointer inline"
                  onClick={() =>
                    window.open("https://github.com/joeldasari/moviesDB")
                  }
                />
              </div>
              <div>
                <button
                  className="text-md mr-2 font-medium"
                  onClick={() =>
                    window.open("https://joeld-moviesDB.netlify.app")
                  }
                >
                  Live Demo
                </button>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPLN84jdh3sUbYOxdzeZz_GjM2-IkbbIqOg&usqp=CAU"
                  alt="github"
                  className="h-4 cursor-pointer inline"
                  onClick={() =>
                    window.open("https://joeld-moviesDB.netlify.app")
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={moviesdb}
              alt="netflix"
              className="h-[55vh] max-sm:mt-4 rounded-2xl shadow-lg cursor-pointer max-sm:h-[30vh]"
              onClick={() => window.open("https://joeld-moviesDB.netlify.app")}
            />
          </div>
        </div>
      </div>
      {/* netflix clone  */}
      <div className="flex justify-center max-sm:flex-col max-sm:items-center">
        <div className="h-[60vh] w-[60vw] max-sm:h-[80vh] max-sm:w-[90vw] flex max-sm:flex-col max-sm:items-center max-sm:py-4 justify-between max-sm:justify-around px-4 shadow-2xl rounded-lg bg-white">
          <div className="flex items-center">
            <img
              src={netflix}
              alt="netflix"
              className="h-[55vh] max-sm:mt-4 rounded-2xl shadow-lg cursor-pointer max-sm:h-[30vh]"
              onClick={() =>
                window.open("https://joeld-netflix-clone.netlify.app")
              }
            />
          </div>
          <div className="flex flex-col items-center w-[300px] px-2 py-10 gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg font-semibold">NETFLIX UI CLONE</span>
              <span className="text-xs font-semibold text-gray-500">
                (AUGUST 2023)
              </span>
            </div>
            <div className="text-gray-500 font-medium text-md space-y-2">
              <p>
                Netflix UI Clone is an online Website that contains all UI
                elements of the Official Netflix website.
              </p>
              <p>Note: Open it in unsafe mode.</p>
            </div>
            <div className="p-4">
              <span className="shadow-lg px-4 py-2 font-semibold ">HTML</span>
              <span className="shadow-lg px-4 py-2 font-semibold ">CSS</span>
            </div>
            <div className="p-4 flex gap-8">
              <div>
                <button
                  className="text-md mr-2 font-medium"
                  onClick={() =>
                    window.open("https://github.com/joeldasari/netflix")
                  }
                >
                  Code
                </button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
                  alt="github"
                  className="h-5 cursor-pointer inline"
                  onClick={() =>
                    window.open("https://github.com/joeldasari/netflix")
                  }
                />
              </div>
              <div>
                <button
                  className="text-md mr-2 font-medium"
                  onClick={() =>
                    window.open("https://joeld-netflix-clone.netlify.app")
                  }
                >
                  Live Demo
                </button>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPLN84jdh3sUbYOxdzeZz_GjM2-IkbbIqOg&usqp=CAU"
                  alt="github"
                  className="h-4 cursor-pointer inline"
                  onClick={() =>
                    window.open("https://joeld-netflix-clone.netlify.app")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
