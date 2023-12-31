import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Searchbar = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchInput) {
            navigate("/search", { state: {searchInput} });
        }
    }

    const content = (
        <>
            <form className="mt-4 mx-32 rounded-lg outline ouline-2 outline-primary">   
                <label className="mb-2 text-sm font-medium text-gray sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value)} 
                        type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Search Mockups, Logos..." required />
                    <button onClick={handleSearch} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-accent dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </>
    )
    return content
}

export default Searchbar 
