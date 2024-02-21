import React from "react";
import { Button } from "@material-tailwind/react";

function Pages({ setPageNumber }) {

    const next = () => { setPageNumber((el) => el + 1) }
    const prev = () => { setPageNumber((el) => el - 1) }


    return (
        <>
            <Button onClick={prev} className="pageBtn rounded-full bg-zinc-600">Previous</Button>
            <Button onClick={next} className="pageBtn rounded-full bg-zinc-600">Next</Button>
        </>
    );
}

export default Pages
