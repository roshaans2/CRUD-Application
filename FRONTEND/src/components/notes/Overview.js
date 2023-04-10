import React from "react";
import { Link } from "react-router-dom";
const Overview = () => {
    return (
        <div>
            {/* Code block starts */}
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-white-300">
                <div>
                    <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">My Notes</h4>
                </div>
                <div className="mt-6 md:mt-0">
                    <Link to="/notes/add">
                        <button className="mr-3 bg-gray-200 dark:bg-white-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-white-300 text-white-700 dark:hover:bg-white-600 dark:text-white-600 px-5 py-2 text-sm">Add Note</button>
                    </Link>
                </div>
                
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Overview;
