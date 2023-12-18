export const Contact = () => {
  return (
    <div
      className=" h-[40vh] flex flex-col justify-center px-[300px] max-sm:px-[10px] gap-10"
      id="contact"
    >
      <div className="space-y-4">
        <p className="text-lg font-bold text-blue-500">CONTACT</p>
        <p className="text-2xl font-bold">Feel free to contact me anytime.</p>
      </div>
      <div className="flex max-sm:flex-col gap-[100px] max-sm:gap-[30px]">
        <div className="flex gap-4 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/81/81251.png"
            alt="location"
            className="h-8"
          />
          <div>
            <p className="text-md font-bold">Location</p>
            <p className="text-gray-500">Guntur, AP</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
            alt="location"
            className="h-8"
          />
          <div>
            <p className="text-md font-bold">Mail</p>
            <p className="text-gray-500">joeldasari10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
