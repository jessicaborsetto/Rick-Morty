import {
    Card,
    CardHeader,
    CardBody,
    Typography,
   
} from "@material-tailwind/react";

function PicGallery({characters}) {


 
 

   
    const allCharacters = characters.map((character, index) => (
        <Card key={index} className="w-full h-[18rem] gap-3 flex flex-row bg-zinc-800 rounded-lg overflow-hidden">
        
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
       
          
        
          <CardBody className="grid content-evenly text-white">
            <Typography className="uppercase text-2xl font-bold">
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
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">{allCharacters}</div>
                    </>
                )
            }
            
        </>
    )
}

export default PicGallery