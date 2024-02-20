import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function PicGallery({ characters }) {

  const allCharacters = characters.map((character, index) => (
    <Card key={index} className="w-full h-[18rem]  flex flex-row bg-zinc-800 rounded-lg overflow-hidden">

      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none relative"
      >

        <img
          src={character.image}
          alt="card-image"
          className="h-full w-full object-cover "
        />

      </CardHeader>

      <CardBody className="grid content-evenly text-white w-full p-3">
        <Typography className="uppercase text-2xl font-bold hover:text-rose-600">
          {character.name}

        </Typography>
        <hr />

        <Typography className="badge ">
          {character.status === 'Dead' && (
            <div className='bg-red-500 rounded-full'>{character.status}</div>
          )}
          {character.status === 'unknown' && (
            <div className='bg-blue-500 rounded-full'>{character.status}</div>
          )}
          {character.status === 'Alive' && (
            <div className='bg-green-500 rounded-full'>{character.status}</div>
          )}
        </Typography>

        {/* <Typography variant="h6">
        <span className={getStatusColorClass(character.status)}>{character.status}</span>
        </Typography> */}

        <p>Species: <b>{character.species} {character.type} </b></p>

        <p>Last known location: <b className="hover:text-rose-600">{character.location.name}</b> </p>
       
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