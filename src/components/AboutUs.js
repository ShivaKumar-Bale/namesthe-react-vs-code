import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div className="max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                <p className="text-gray-700 text-lg mb-6 text-center">
                    This is the About Us page.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <UserClass />
                </div>
                {/* <UserClass login={"Shiva Kumar (class)"} location={"Hyderabad(class)"} /> */}
            </div>
        );
    }
}

export default About;
