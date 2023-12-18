export const AboutMe = () => {
  return (
    <div
      className="h-[90vh] w-full flex max-sm:flex-col gap-10 justify-center items-center"
      id="about"
    >
      <div>
        <img
          src="https://i.pinimg.com/originals/02/83/be/0283beb3fc3eded016cceda7dc0201a2.jpg"
          alt="workspace"
          className="h-[300px] max-sm:h-[200px] rounded-2xl"
        />
      </div>
      <div className="w-[500px] max-sm:w-[400px] space-y-2 max-sm:p-4">
        <p className="text-lg font-bold text-blue-500">ABOUT ME</p>
        <p className="text-2xl max-sm:text-lg font-bold">
          A dedicated Full-stack MERN Developer
        </p>
        <p className="text-2xl font-bold max-sm:text-lg">
          {" "}
          based in Guntur, AP 📍
        </p>
        <p className="text-gray-500">
          As a Junior Full-stack Developer, I bring a robust skill set to the
          table, encompassing proficiency in HTML, CSS, SCSS, JavaScript, React,
          Tailwind, Node.js, Express, MongoDB, and Firebase. My expertise
          extends beyond the realm of front-end development, allowing me to
          seamlessly integrate and synchronize the entire web application stack.
          I specialize in crafting responsive designs and ensuring a smooth user
          experience by leveraging my comprehensive knowledge of both
          client-side and server-side technologies.
        </p>
      </div>
    </div>
  );
};
