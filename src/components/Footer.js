const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="max-w-4xl mx-auto text-center">
                <h4 className="text-lg font-semibold">Footer</h4>
                <p className="text-sm mt-2">© {new Date().getFullYear()} Food Villa. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#!" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#!" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                    <a href="#!" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
