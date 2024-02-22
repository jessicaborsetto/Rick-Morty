import PlaceGallery from '../components/PlaceGallery'
import Pages from '../atoms/Pages'
import LocSearch from '../components/LocSearch';
import { useEffect, useState } from "react"

function Locations (){
    let [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1)


  const url = 'https://rickandmortyapi.com/api/'

  const endpointLoc = 'location/'

  const apiUrlLoc = url + endpointLoc + `?page=${pageNumber}&name=${search}`


  const [places, setPlaces] = useState([])


useEffect(() => {
  try {
      const fetchData = async () => {
          let response = await fetch(apiUrlLoc)
          let data = await response.json()
          console.log(data)
          setPlaces(data.results)

      }
      fetchData()

  }
  catch (error) {
      console.error('error fetching data')
  }
}, [apiUrlLoc])

    return(
      <>
       <div>
  <LocSearch setPageNumber={setPageNumber} setSearch={setSearch} places={places}></LocSearch>
 </div>
      <div className='container mx-auto p-5'>
        
          <PlaceGallery places={places} ></PlaceGallery>
        </div>
        <div  className="container mx-auto py-10 flex justify-center gap-4">
              <Pages setPageNumber={setPageNumber}></Pages>
            </div>
      </>
    )
}

export default Locations