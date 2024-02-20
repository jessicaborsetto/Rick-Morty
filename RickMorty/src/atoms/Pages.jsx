import React from "react";
import { Button } from "@material-tailwind/react";

function Pages({ setPageNumber }) {

    const next = () => { setPageNumber((el) => el + 1) }
    const prev = () => { setPageNumber((el) => el - 1) }


    return (
        <>
            <Button onClick={prev} className="pageBtn rounded-full bg-zinc-600">

                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> */}


                Previous</Button>
            <Button onClick={next} className="pageBtn rounded-full bg-zinc-600">
                Next
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> */}


            </Button>
        </>
    );
}

export default Pages

