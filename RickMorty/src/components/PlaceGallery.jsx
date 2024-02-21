import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  function PlaceGallery({ places }) {
  
    const allLocations = places.map((places, index) => (
      <Card key={index} className="w-full h-[18rem]  flex flex-row bg-zinc-800 rounded-lg overflow-hidden">
  
        
  
        <CardBody className="grid content-evenly text-white w-full p-3">
          <Typography className="uppercase text-2xl font-bold hover:text-rose-600">
            {places.name}
  
          </Typography>
          <hr />
  
          <p>Dimension: <b>{places.dimension}</b></p>
          <p>Type: <b>{places.type} </b></p>
  
          {/* <p>Last known location: <b className="hover:text-rose-600">{character.location.name}</b> </p> */}
         
        </CardBody>
  
  
      </Card>
    ))
  
  
    return (
      <>
  
        {
          places && (
            <>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{allLocations}</div>
            </>
          )
        }
  
      </>
    )
  }
  
  export default PlaceGallery