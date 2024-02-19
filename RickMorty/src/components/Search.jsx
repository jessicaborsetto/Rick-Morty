import React from "react";
import { Button } from "@material-tailwind/react";

function Search({setSearch, setPageNumber}) {

    return (
        <form className="">
            <input placeholder="Search for Characters" type="text" onChange={e => {
                setPageNumber(1)
                setSearch(e.target.value)
            }}/>
            <Button onClick={e=>{e.preventDefault()}}>Button</Button>
        </form>
       
         

    )
}

export default Search



 