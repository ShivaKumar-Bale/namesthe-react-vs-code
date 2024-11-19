const Grocery = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Grocery Store!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Find fresh produce, pantry staples, and more.
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                Shop Now
            </button>
        </div>
    );
};

export default Grocery;
