import { Button } from "@material-tailwind/react";
import React from "react";

function Buttons() {
    return (
        < div className="container mx-auto flex justify-center gap-5 mb-5">

        <a href="/" className="pageBtn rounded-full bg-zinc-600"><Button>Characters</Button></a>

        <a href="locations" className="pageBtn rounded-full bg-zinc-600"><Button>Locations</Button></a>

        </div>
    )
}

export default Buttons