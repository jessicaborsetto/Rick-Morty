import { useEffect, useState } from "react"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
   
} from "@material-tailwind/react";

function PicGallery() {

    const [characters, setCharacters] = useState([])
    const url = 'https://rickandmortyapi.com/api/'
    const endpoint = 'character'
    const apiUrl = url + endpoint

    useEffect(() => {
        try {
            const fetchData = async () => {
                let response = await fetch(apiUrl)
                let data = await response.json()
                console.log(data)
                setCharacters(data.results)

            }
            fetchData()

        }
        catch (error) {
            console.error('error fetching data')
        }
    }, [])

    const allCharacters = characters.map((character, index) => (
        <Card key={index} className="w-full max-w-[40rem] h-[15rem] flex gap-3 m-5 bg-zinc-600 rounded-lg overflow-hidden">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={character.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="grid content-evenly">
          <Typography color="gray" className="uppercase text-xl font-bold">
            {character.name}
          </Typography>
        
          <Typography variant="h4" color="blue-gray">
            {character.status}
          </Typography>
        
          <p>
          {character.species} {character.type}
          </p>
         
         <h6>Last known location</h6>
          <p>

            {character.location.name}
          </p>
         
        </CardBody>
      </Card>
    ))


    return (
        <>

            {
                characters && (
                    <>
                        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{allCharacters}</div>
                    </>
                )
            }a
        </>
    )
}

export default PicGallery