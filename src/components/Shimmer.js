const Shimmer = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {Array(8).fill("").map((_, index) => (
              <div key={index} className="bg-gray-300 h-40 rounded-lg animate-pulse"></div>
          ))}
      </div>
  );
};

export default Shimmer;
