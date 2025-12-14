const Greet = () => {
  return (
    <div className="flex flex-col justify-center h-full px-20">
      

      {/* Headline */}
      <h1 className="text-white text-5xl font-semibold leading-tight">
        Master the <br />
        Markets.
      </h1>

      <h2 className="text-green-400 text-4xl font-semibold mt-4">
        Compete for Glory
      </h2>

      <p className="text-gray-400 mt-6 max-w-md">
        Trade smarter, grow faster 🚀
      </p>

      {/* Rocket */}
      <div className="mt-24">
        <div className="relative w-20 h-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full blur-sm" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-5xl">
            🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
