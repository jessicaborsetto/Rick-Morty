import React, { useState } from "react";
import { Alert } from "@material-tailwind/react";

function Search({ setSearch, setPageNumber, characters }) {

    const [searchError, setSearchError] = useState(false);

    const handleSearch = (e) => {
        const inputValue = e.target.value;
        const matchingCharacters = characters.filter((character) =>
            character.name.includes(inputValue)
        );

        if (matchingCharacters.length > 0) {
            setSearchError(false);
            setPageNumber(1);
            setSearch(inputValue);
        } else {
            setSearchError(true);
        }
    };

    return (
        <>
            <form className="flex justify-center gap-4 mb-5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text" onChange={handleSearch} placeholder=" Search for Characters" />

            </form>
            <div className="flex justify-center">
                {searchError && 

                <Alert
                    icon={ <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>}
                    className=" flex  gap-4 p-3 mb-5 items-center rounded-none border-l-4 border-[#c92e2e] bg-[#c92e2e]/10 font-medium text-[#c92e2e]"
                >
                    Ops. No character found.
                </Alert>
                }

            </div>
        </>

    )
}

export default Search



