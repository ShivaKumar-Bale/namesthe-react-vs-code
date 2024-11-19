const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            <form>
            <input
               type="text"
                 placeholder="Name"
                className="p-4 m-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
              <input
                    type="text"
                    placeholder="Message"
                    className="p-4 m-4 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />

                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200" >Submit</button>
            </form>
        </div>
    );
};

export default Contact;
 