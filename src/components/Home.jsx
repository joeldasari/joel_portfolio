import image from "../assets/a2.png";
export const Home = () => {
  return (
    <div
      className="h-[90vh] bg-gray-100 flex flex-col justify-center"
      id="home"
    >
      <div className="flex max-sm:flex-col-reverse max-sm:w-full items-center gap-[100px] max-sm:gap-8 justify-center ">
        <div className="max-sm:p-4">
          <div className=" text-6xl max-sm:text-4xl font-bold space-y-2 pb-8 ">
            <p>Full-Stack MERN </p>
            <p>Developer 👋</p>
          </div>
          <div className="text-gray-600 text-lg pb-8">
            <p>Hi, I'm Joel D. A Passionate Full-Stack MERN Developer</p>
            <p>based in Guntur, AP. 📍</p>
          </div>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384155.png"
              alt="linkedin"
              className="h-6 cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/joel-d-244713285/")
              }
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
              alt="github"
              className="h-6 cursor-pointer"
              onClick={() => window.open("https://github.com/joeldasari")}
            />
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="photo"
            className=" border-2 border-black rounded-full h-[300px]"
          />
        </div>
      </div>
      <div className="text-xl max-sm:text-sm font-medium flex justify-center gap-10 items-center mt-[100px] max-sm:mt-8">
        <p>Tech Stack |</p>
        <img
          src="https://skillicons.dev/icons?i=html,css,sass,javascript,react,tailwindcss,nodejs,expressjs,mongodb,firebase"
          className="max-sm:h-5"
        />
      </div>
    </div>
  );
};
